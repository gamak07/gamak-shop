import supabase, { supabaseUrl } from "./supabase";

export const signup = async ({ email, password, fullName, phone, address }) => {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
        phone,
        address
      },
    },
  });
  if (error) throw new Error(error.message);
  return data;
};

export const login = async ({ password, email }) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
};

export const googleLogin = async () => {
  let { user, session, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) throw new Error(error.message);
  return { user, session };
};

export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
};

export const logout = async () => {
  let { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
};

export const updateCurrentUser = async ({ password, fullName, address, phone, avatar }) => {
  let updateData = {};

  if (password) updateData.password = password;
  
  updateData.data = {}; // Initialize metadata object

  if (fullName) updateData.data.fullName = fullName;
  if (address) updateData.data.address = address;
  if (phone) updateData.data.phone = phone;

  // Update user details in one request
  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error("Error updating profile");

  // If no avatar, return updated user data
  if (!avatar) return data;

  // Upload avatar to Supabase Storage
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage.from("avatars").upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // Update user metadata with avatar URL
  const avatarUrl = `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`;
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: { ...updateData.data, avatar: avatarUrl }, // Merge existing metadata with avatar
  });

  if (error2) throw new Error(error2.message);

  return updatedUser;
};

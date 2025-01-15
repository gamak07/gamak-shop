import supabase from "./supabase";

export const signup = async ({ email, password, fullName }) => {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
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

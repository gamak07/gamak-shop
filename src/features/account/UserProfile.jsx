import { useUser } from "../authentication/useUser";

const UserProfile = () => {
  const {isPending, user} = useUser()

  const profileName = user?.user_metadata?.fullName
  const profileEmail = user?.user_metadata?.email
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
      <div className="flex items-center">
        <img
          src="/path/to/profile-pic.jpg"
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <p className="text-lg">{profileName}</p>
          <p className="text-sm text-gray-600">{profileEmail}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

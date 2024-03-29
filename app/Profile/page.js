'use client'
import { FaPowerOff } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
import Button from "@/components/Button";

const Profile = () => {
const { data: session, status } = useSession(); // Get session data and status
  const handleLogout = async () => {
    if (status === "authenticated") {
      await signOut();
      window.location.href = "/"; // Redirect to homepage after logout
    } else {
      console.warn("User is not authenticated");
    }
  };

  return (
    <>
      {session?.user?.name ? ( // Only display profile details if user is authenticated
        <div className="profile flex flex-col items-center space-y-2 md:flex-row md:space-x-4">
          <div className="text-gray-700 font-medium">{session.user.name}</div>
          <div  onClick={handleLogout} >
          <Button
            type="button"
            title="Sign Out"
            icon={<FaPowerOff />}
            variant="btn_dark_green"
      
          />
          </div>
        </div>
      ) : (
        <div>Loading profile...</div> // Placeholder while waiting for data
      )}
    </>
  );
};

export default Profile;

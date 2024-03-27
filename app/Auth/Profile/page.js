import { FaUser } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
import Button from "@/components/Button";
const Profile = () => {
  const session = useSession();

  return (
    <>
      <div>{session?.data?.user?.name}</div>
      <div onClick={() => signOut()}>
        <Button
          type="button"
          title="Sign Out"
          icon={<FaUser />}
          variant="btn_dark_green"
        />
      </div>
    </>
  );
};

export default Profile;

'use client'
import { FaPowerOff } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
import Button from "@/components/Button";
import Link from "next/link";
const Profile = () => {
  const session = useSession();

  return (
    <>
      <div>{session?.data?.user?.name}</div>
      <Link href='/'>
      <div onClick={() => signOut()}>
        <Button
          type="button"
          title="Sign Out"
          icon={<FaPowerOff />}
          variant="btn_dark_green"
        />
      </div>
      </Link>
    </>
  );
};

export default Profile;

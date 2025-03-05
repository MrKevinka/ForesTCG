import Link from "next/link";

export const TopBar = () => {
  return (
    <span className="w-screen">
      {
        <div className="m-4 flex justify-between">
          <Link href={"/"} className=" border border-black p-2 ">
            Home
          </Link>
        </div>
      }
    </span>
  );
};

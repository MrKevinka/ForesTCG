import Link from "next/link";
import { bottomLinksGuest } from "./botLinks";

export const BotBar = () => {
  return (
    <div className="mb-5 flex w-full justify-around">
      {bottomLinksGuest.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className=" border border-black p-2"
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

"use client";

import { format } from "date-fns";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import MenuItem from "../navbar/MenuItem";
import Button from "../Button";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  return (
    <div className="absolute bottom-0 w-full bg-neutral-100 px-2 py-4 text-neutral-600 text-center">
      <div className="flex md:hidden flex-row cursor-pointer items-center">
        <Button
          onClick={() => router.push("/")}
          label=""
          icon={IoMdHome}
          outline
          none
        />
        <Button
          onClick={() => router.push("/favorites")}
          label=""
          icon={AiFillHeart}
          outline
          none
        />
        <Button
          onClick={loginModal.onOpen}
          icon={FaUser}
          label=""
          outline
          none
        />
      </div>
      <div className="hidden md:flex">
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="text-medium text-neutral-600">
            &copy; {format(new Date(), "yyyy")} EcoRenter, Inc.
          </div>
          <ul className="flex flex-row flex-wrap cursor-pointer">
            <MenuItem
              className="text-small text-neutral-500 hover:text-neutral-800 "
              label="About"
              onClick={() => router.push("/about")}
            />
            <MenuItem
              className="text-small text-neutral-500 hover:text-neutral-800 "
              label="Contact"
              onClick={() => router.push("/contact")}
            />
            <MenuItem
              className="text-small text-neutral-500 hover:text-neutral-800 "
              label="Terms"
              onClick={() => router.push("/terms")}
            />
            <MenuItem
              className="text-small text-neutral-500 hover:text-neutral-800 "
              label="Privacy"
              onClick={() => router.push("/privacy")}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

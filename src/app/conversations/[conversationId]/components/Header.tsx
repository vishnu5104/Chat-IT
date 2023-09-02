"use client";

import { useMemo, useState } from "react";
import { HiChevronLeft } from "react-icons/hi";


import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import Link from "next/link";

import Avatar from "../../../components/Avatar";



interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const otherUser = useOtherUser(conversation);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

  }, [conversation.isGroup, conversation.users.length]);

  return (
    <>
      <div
        className="
        bg-white 
        w-full 
        flex 
        border-b-[1px] 
        sm:px-4 
        py-3 
        px-4 
        lg:px-6 
        justify-between 
        items-center 
        shadow-sm
        dark:bg-dusk
        dark:border-lightgray
      "
      >
        <div className="flex gap-3 items-center">
          <Link
            href="/conversations"
            className="
            lg:hidden 
            block 
            text-sky-500 
            hover:text-sky-600 
            transition 
            cursor-pointer
          "
          >
            <HiChevronLeft size={32} />
          </Link>
          {conversation.isGroup ? (
          <div></div>
          ) : (
            <Avatar user={otherUser} />
          )}

          <div className="flex flex-col dark:text-gray-200">
            <div>{conversation.name || otherUser.name}</div>
            <div className="text-sm font-light text-neutral-500 dark:text-gray-400">
              {statusText}
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Header;

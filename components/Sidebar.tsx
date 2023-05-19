"use client"

import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { collection, query, orderBy, } from "firebase/firestore";
import { db } from "@/firebase";
import Newchat from "./Newchat";
import ChatRow from "./ChatRow";

const Sidebar = () => {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session && query(collection(db, "users", session?.user?.email!, "chats"), orderBy("createdAt", "asc"))
  );


  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <Newchat />

          {chats?.docs.map(chat => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {session &&
        <div className="block md:flex items-center justify-around  md:space-x-6">
          <div className="block md:flex items-center space-x-2">
            <img src={session.user?.image!} alt="user image" className="h-12 w-12 rounded-full" />
            <p className="text-white/80">{session.user?.name!}</p>
          </div>

          <ArrowLeftOnRectangleIcon onClick={() => signOut()} className="mt-4 md:mt-0 h-8 w-8 cursor-pointer text-gray-400 hover:opacity-50 " />

        </div>
      }


    </div>
  )
}

export default Sidebar

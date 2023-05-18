"use client"

import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import React, { FormEvent, useState } from 'react'
import { useSession } from 'next-auth/react'
import { serverTimestamp, addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase'
import { toast } from "react-hot-toast"
type Props = {
    chatId: string
}
const ChatInput = ({ chatId }: Props) => {
    const [prompt, setPrompt] = useState("");
    const session = useSession();

    // useSWR to get model
    const model = "text-davinci-003";

    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!prompt) return;

        const input = prompt.trim();
        setPrompt("");

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.data?.user?.email!,
                name: session?.data?.user?.name!,
                avatar: session?.data?.user?.image! || `https://ui-avatars.com/api/?name=${session?.data?.user?.name}`,
            }
        }

        await addDoc(collection(db, "users", session?.data?.user?.email!, "chats", chatId, "messages"), message)

        //Toast notification of Loading!
        const notification = toast.loading("ChatGPT is processing...");


        await fetch("/api/askQuestion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: input, chatId, model, session
            })
        }).then(() => {
            //Toast notification of success
            toast.success("ChatGPT has responsded", {
                id: notification,
            })
        })
    }

    return (
        <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm ">
            <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
                <input type="text"
                    placeholder="Type your message here.."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
                    disabled={!session}
                />
                <button className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed" type="submit" disabled={!prompt || !session}>
                    <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
                </button>
            </form>

            <div>
                {/*Model Selection*/}
            </div>
        </div>
    )
}

export default ChatInput
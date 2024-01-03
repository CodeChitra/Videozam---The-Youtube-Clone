import { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { generateRandomName, generateRandomText } from "../helper/helper";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { addChat } from "../store/feature/chat/chatSlice";
import { v4 as uuidV4 } from "uuid";
const Chat = ({ author, text }: { author: string; text: string }) => {
  return (
    <div className="flex items-center gap-3 py-2 px-3">
      <CgProfile size={20} />
      <div className="flex gap-2 items-center">
        <p className="font-bold">{author}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const LiveChat = () => {
  const dispatch = useAppDispatch();
  const chats = useAppSelector((store) => store.chat);
  useEffect(() => {
    //API Polling
    const timer = setInterval(() => {
      console.log("API Polling");
      const author = generateRandomName();
      const text = generateRandomText(25);
      dispatch(addChat({ author, text }));
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="border-2 border-gray-800 h-[85%] w-[30%] rounded-lg overflow-x-hidden overflow-y-scroll bg-slate-100 dark:bg-black flex flex-col-reverse">
      {chats.map((chat) => (
        <Chat key={uuidV4()} {...chat} />
      ))}
    </div>
  );
};

export default LiveChat;

import axios from "axios";
import { Input } from "../input/Input";
import { Fragment, useState } from "react";

export const Chatscreen = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);

  async function generateReply(userQuery) {
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: `Suppose you are best friend and reply according to it ${userQuery}`,
                },
              ],
            },
          ],
        }
      );
      const aiMessage = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "Busy! message you later";

      // Append both user and AI messages to the state
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: userQuery, AI: aiMessage },
      ]);
    } catch (error) {
      console.error("Error generating reply:", error);
    }
  }

  return (
    <>
      <div className="w-full h-[calc(100%-3rem)]">
        {/* screen */}
        <div className="w-full h-[calc(100%-4rem)] overflow-y-auto no-scrollbar flex flex-col gap-4 md:px-16 py-4 ">
          {messages.map((message, index) => (
          <Fragment key={index}>
        
              <p className="text-violet-200 self-end max-w-[70%] text-end bg-violet-400/50 rounded-lg mt-2 w-fit p-3 px-6"> {message.user}</p>

              <p className="text-violet-200 max-w-[70%] text-start bg-violet-400/25 rounded-lg mt-2 w-fit p-3 px-6"> {message.AI}</p>
          </Fragment>
            
          ))}
        </div>
        <Input
          query={query} 
          setQuery={setQuery}
          generateReply={generateReply}
          setMessages={setMessages}
        />
      </div>
    </>
  );
};

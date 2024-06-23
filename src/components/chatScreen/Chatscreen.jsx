import axios from "axios";
import { Input } from "../input/Input";
import { useState } from "react";

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
                  text: `Suppose you are my girl friend and reply according to it ${userQuery}`,
                },
              ],
            },
          ],
        }
      );
      const aiMessage = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI";

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
        <div className="w-full h-[calc(100%-4rem)] overflow-y-auto">
          {messages.map((message, index) => (
            <div className="text-white px-16 mt-4" key={index}>
              <p className="text-violet-200">DEEPAK : {message.user}</p>
              <p>GIRLFRIEND : {message.AI}</p>
            </div>
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

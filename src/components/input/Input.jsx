import { Send } from "lucide-react";

export const Input = ({ query, setQuery, generateReply, setMessages }) => {
  const inputHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const clickHandler = () => {
    // Call generateReply and setMessages for user message
    generateReply(query);
    setQuery("")
  
  };

  return (
    <>
      <div className="h-[4rem] w-full border-t-[0.5px] border-gray-700 flex items-center md:px-16 px-4 ">
        <div className="w-full flex items-center gap-2 bg-white/25 rounded-md pe-2 ">
          <input
            className="h-9 rounded-md w-full outline-none bg-transparent text-white px-2"
            value={query}
            type="text"
            placeholder="Enter Message"
            onChange={inputHandler}
          />
          <Send onClick={clickHandler} color="#d4d4d4" />
        </div>
      </div>
    </>
  );
};

import {EllipsisVertical } from 'lucide-react'

export const Navbar = () => {
  return (
    <>
      <div className="h-[3rem] w-full bg-violet-500 flex justify-between items-center px-2 md:px-16">
        <h1 className="text-[#1a1b1c] font-semibold sm:text-xl text-xs">BOT FRIEND</h1>
        <div> <EllipsisVertical  /> </div>
      </div>
    </>
  );
};

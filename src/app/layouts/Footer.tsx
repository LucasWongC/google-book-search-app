import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pb-4 pt-8 md:pt-12 bg-red-200 dark:bg-neutral-950/20">
      <div className="flex justify-evenly text-left gap-4 flex-wrap">
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="text-red-400">WHO WE SERVE</div>
          <div>Search</div>
          <div>Reading List</div>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="text-red-400">ABOUT US</div>
          <div>Team</div>
          <div>Blogs</div>
          <div>Careers</div>
        </div>
        <div className="flex items-center flex-col gap-2 w-full max-w-[400px] p-2">
          <input
            className="w-full py-2.5 pl-4 pr-10 rounded-md bg-red-200 dark:bg-neutral-950/50 border-2 border-neutral-950/10 outline-none placeholder:text-neutral-600/70 dark:placeholder:text-neutral-800 focus:border-red-400/80 m-color-transition"
            placeholder="Email"
          />
          <textarea
            rows={4}
            className="w-full py-2.5 pl-4 pr-10 rounded-md bg-red-200 dark:bg-neutral-950/50 border-2 border-neutral-950/10 outline-none placeholder:text-neutral-600/70 dark:placeholder:text-neutral-800 focus:border-red-400/80 m-color-transition"
            placeholder="Message Here"
          />
          <button className="w-full outline-none bg-red-300 p-2.5 rounded-md dark:bg-neutral-950">
            Send
          </button>
        </div>
      </div>

      <div className="text-center mt-4">Created with ❤️ by Lucas Wong</div>
    </footer>
  );
};

export default Footer;

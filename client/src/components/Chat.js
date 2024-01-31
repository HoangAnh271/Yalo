import React, { useEffect } from "react";
import BlockDate from "./BlockDate";
import ChatInputV1 from "./ChatInputV1";
import ChatInputV2 from "./ChatInputV2";

const Chat = (props) => {
  useEffect(() => {
    let element = document.getElementsByClassName("chat-scrollbar-view")[0];
    element.addEventListener("scroll", () => {
      let scrollbar = document.getElementsByClassName("chat-scrollbar")[0];
      scrollbar.style.height = `${
        (element.clientHeight * (element.clientHeight - 20)) /
        element.scrollHeight
      }px`;
      scrollbar.style.transform = `translateY(${
        (element.scrollTop * element.clientHeight) / element.scrollHeight
      }px)`;
      let scrollbarContainer = document.getElementsByClassName(
        "chat-scrollbar-container"
      )[0];
      scrollbarContainer.classList.replace("opacity-0", "opacity-[1]");
    });
    element.addEventListener("scrollend", () => {
      let scrollBar = document.getElementsByClassName(
        "chat-scrollbar-container"
      )[0];
      scrollBar.classList.replace("opacity-[1]", "opacity-0");
    });
  }, []);
  return (
    <div className="chat-container flex flex-col w-full bg-white-100 h-screen">
      <header className="px-4 h-[68px] flex w-full items-center">
        <div className=" flex w-full ">
          <img
            className="h-12 w-12 rounded-full border-[1px] border-white"
            src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/hinh-anh-avatar-luffy-mac-do-kimono.jpg"
          />
          <div className=" w-full ml-3 mr-4">
            <div className=" w-full flex h-7">
              <div className="w-fit truncate text-[#081c36] text-[1.125rem] font-medium">
                User Name
              </div>
            </div>
            <div className=" w-full flex h-5">
              <div className="h-5 w-5">
                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <rect fill="none" height="256" width="256" />
                  <path
                    d="M194.4,196.4,240,128,194.4,59.6a7.9,7.9,0,0,0-6.7-3.6H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.7A7.9,7.9,0,0,0,194.4,196.4Z"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className=" h-8 w-8 mr-1 flex items-center justify-center rounded-md hover:bg-[#e2e4e6]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="8"
                r="4"
                fill="none"
                fillOpacity="0.25"
                stroke="#222222"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path
                d="M15.7956 20.4471C15.4537 19.1713 14.7004 18.0439 13.6526 17.2399C12.6047 16.4358 11.3208 16 10 16C8.6792 16 7.3953 16.4358 6.34743 17.2399C5.29957 18.0439 4.5463 19.1713 4.20445 20.4471"
                stroke="#222222"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path
                d="M19 10L19 16"
                stroke="#222222"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path
                d="M22 13L16 13"
                stroke="#222222"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className=" h-8 w-8 mr-1 flex items-center justify-center rounded-md hover:bg-[#e2e4e6]">
            <img
              className="h-5 w-5   "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
            ></img>
          </div>
          <div className=" h-8 w-8 flex items-center justify-center rounded-md hover:bg-[#e2e4e6]">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios/50/video-call.png"
              alt="video-call"
            />
          </div>
        </div>
      </header>
      <div className="chat-view flex flex-col border-t border-[#d6dbe1] h-[calc(100%_-_68px)] w-full">
        <div className="overflow-hidden h-full flex w-full relative">
          <div className="chat-scrollbar-view overflow-scroll no-scrollbar bg-[#e1e4ea] h-full w-full mr-[-7px] mb-[-7px]">
            <div className="block-chat flex flex-col min-h-full h-full w-full">
              <BlockDate />
              <BlockDate />
              <BlockDate />
              <BlockDate />
              <BlockDate />
              <BlockDate />
              <BlockDate />
              <BlockDate />
              <BlockDate />
              <BlockDate />
              <BlockDate />
              <BlockDate />
              <BlockDate />
              <BlockDate />
            </div>
          </div>
          <div className="chat-scrollbar-container w-2 opacity-0 absolute right-[2px] top-[2px] bottom-[2px] transition-opacity duration-200 ease-[ease] delay-0 hover:opacity-[1]">
            <div className="chat-scrollbar w-2 rounded-[3px] bg-[#b1b5b9] opacity-[0.5] mx-[2px] relative right-[3px]"></div>
          </div>
        </div>
        <ChatInputV1 />
        <ChatInputV2 />
      </div>
    </div>
  );
};

export default Chat;

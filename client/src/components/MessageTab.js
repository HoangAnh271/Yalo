import React, { useEffect } from "react";
import Conversation from "./Conversation";
import ConversationV2 from "./ConversationV2";

const MessageTab = (props) => {
  useEffect(() => {
    let element = document.getElementsByClassName("cvr-scrollbar-view")[0];
    element.addEventListener("scroll", () => {
      let scrollbar = document.getElementsByClassName("cvr-scrollbar")[0];
      scrollbar.style.height = `${
        (element.clientHeight * (element.clientHeight - 20)) /
        element.scrollHeight
      }px`;
      scrollbar.style.transform = `translateY(${
        (element.scrollTop * element.clientHeight) / element.scrollHeight
      }px)`;
      let scrollbarContainer = document.getElementsByClassName(
        "cvr-scrollbar-container"
      )[0];
      scrollbarContainer.classList.replace("opacity-0", "opacity-[1]");
    });
    element.addEventListener("scrollend", () => {
      let scrollBar = document.getElementsByClassName(
        "cvr-scrollbar-container"
      )[0];
      scrollBar.classList.replace("opacity-[1]", "opacity-0");
    });
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("keydown", (event) => {
      const placeholder = document.getElementById("search-plhd");
      if (event.key.length > 1) {
        if (searchInput.value.length <= 1) {
          placeholder.style.visibility = "visible";
        }
      } else {
        placeholder.style.visibility = "hidden";
      }
    });
  }, []);
  return (
    <div className="bg-white-100 flex h-screen w-[353px] border-r border-[#d6dbe1]">
      <div className="flex flex-col">
        <div className="flex h-16 w-[22rem] gap-2 px-[1rem]">
          <div className="flex flex-col justify-center ">
            <img
              className="absolute top-4 mx-3 my-2 h-4 w-4 "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
            ></img>
            <span
              id="search-plhd"
              className="absolute left-[120px] text-[#7589a3]"
            >
              Search
            </span>
            <input
              id="search-input"
              className="h-8 w-60 rounded-md bg-[#eaedf0] px-10 outline-none focus:border focus:border-[#0068ff]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <button className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-[#eaedf0]">
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
            </button>
          </div>
          <div className="flex flex-col justify-center">
            <button className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-[#eaedf0]">
              <svg
                width="32"
                height="33"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="8"
                  r="2.5"
                  stroke="#222222"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.7679 6.5C13.9657 6.15743 14.2607 5.88121 14.6154 5.70625C14.9702 5.5313 15.3689 5.46548 15.7611 5.51711C16.1532 5.56874 16.5213 5.73551 16.8187 5.99632C17.1161 6.25713 17.3295 6.60028 17.4319 6.98236C17.5342 7.36445 17.521 7.76831 17.3939 8.14288C17.2667 8.51745 17.0313 8.8459 16.7175 9.08671C16.4037 9.32751 16.0255 9.46985 15.6308 9.49572C15.2361 9.52159 14.8426 9.42983 14.5 9.23205"
                  stroke="#222222"
                />
                <path
                  d="M10.2321 6.5C10.0343 6.15743 9.73935 5.88121 9.38458 5.70625C9.02981 5.5313 8.63113 5.46548 8.23895 5.51711C7.84677 5.56874 7.47871 5.73551 7.18131 5.99632C6.88391 6.25713 6.67053 6.60028 6.56815 6.98236C6.46577 7.36445 6.47899 7.76831 6.60614 8.14288C6.73329 8.51745 6.96866 8.8459 7.28248 9.08671C7.5963 9.32751 7.97448 9.46985 8.36919 9.49572C8.76391 9.52159 9.15743 9.42983 9.5 9.23205"
                  stroke="#222222"
                />
                <path
                  d="M12 12.5C16.0802 12.5 17.1335 15.8022 17.4054 17.507C17.4924 18.0524 17.0523 18.5 16.5 18.5H7.5C6.94771 18.5 6.50763 18.0524 6.59461 17.507C6.86649 15.8022 7.91976 12.5 12 12.5Z"
                  stroke="#222222"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.2965 15.4162L18.8115 15.5377L19.2965 15.4162ZM13.0871 12.5859L12.7179 12.2488L12.0974 12.9283L13.0051 13.0791L13.0871 12.5859ZM17.1813 16.5L16.701 16.639L16.8055 17H17.1813V16.5ZM15.5 12C16.5277 12 17.2495 12.5027 17.7783 13.2069C18.3177 13.9253 18.6344 14.8306 18.8115 15.5377L19.7816 15.2948C19.5904 14.5315 19.2329 13.4787 18.578 12.6065C17.9126 11.7203 16.9202 11 15.5 11V12ZM13.4563 12.923C13.9567 12.375 14.6107 12 15.5 12V11C14.2828 11 13.3736 11.5306 12.7179 12.2488L13.4563 12.923ZM13.0051 13.0791C15.3056 13.4614 16.2789 15.1801 16.701 16.639L17.6616 16.361C17.1905 14.7326 16.019 12.5663 13.1691 12.0927L13.0051 13.0791ZM18.395 16H17.1813V17H18.395V16ZM18.8115 15.5377C18.8653 15.7526 18.7075 16 18.395 16V17C19.2657 17 20.0152 16.2277 19.7816 15.2948L18.8115 15.5377Z"
                  fill="#222222"
                />
                <path
                  d="M10.9129 12.5859L10.9949 13.0791L11.9026 12.9283L11.2821 12.2488L10.9129 12.5859ZM4.70343 15.4162L5.18845 15.5377L4.70343 15.4162ZM6.81868 16.5V17H7.19453L7.29898 16.639L6.81868 16.5ZM8.49999 12C9.38931 12 10.0433 12.375 10.5436 12.923L11.2821 12.2488C10.6264 11.5306 9.71723 11 8.49999 11V12ZM5.18845 15.5377C5.36554 14.8306 5.68228 13.9253 6.22167 13.2069C6.75048 12.5027 7.47226 12 8.49999 12V11C7.0798 11 6.08743 11.7203 5.42199 12.6065C4.76713 13.4787 4.40955 14.5315 4.21841 15.2948L5.18845 15.5377ZM5.60498 16C5.29247 16 5.13465 15.7526 5.18845 15.5377L4.21841 15.2948C3.98477 16.2277 4.73424 17 5.60498 17V16ZM6.81868 16H5.60498V17H6.81868V16ZM7.29898 16.639C7.72104 15.1801 8.69435 13.4614 10.9949 13.0791L10.8309 12.0927C7.98101 12.5663 6.8095 14.7326 6.33838 16.361L7.29898 16.639Z"
                  fill="#222222"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col h-[calc(100%_-_64px)]">
          <div className="relative flex h-8 w-[22rem] items-center border-b border-[#d6dbe1] px-[16px]">
            <div className="selected tab-item flex cursor-pointer flex-col justify-center text-[14px] font-semibold text-[#7589a3]">
              <div>All</div>
            </div>
            <div className="tab-item ml-[12px] flex cursor-pointer flex-col justify-center text-[14px] font-semibold text-[#7589a3]">
              <div>Unread</div>
            </div>
            <div className="flex-1"></div>
            <div className="fo flex cursor-pointer flex-col justify-center p-1 text-[14px] hover:rounded-lg hover:bg-[#eaedf0]">
              <div>Groups</div>
            </div>
            <div className="h-6 w-6 hover:rounded-full hover:bg-[#eaedf0]">
              <button className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="1"
                    stroke="#33363F"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="6"
                    cy="12"
                    r="1"
                    stroke="#33363F"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="18"
                    cy="12"
                    r="1"
                    stroke="#33363F"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="tab-indicator absolute bottom-0 h-[2px] w-[20px] bg-[#0068ff]"></div>
          </div>
          <div className="overflow-hidden h-full flex relative">
            <div className="cvr-scrollbar-view overflow-y-scroll no-scrollbar h-full">
              <div className="">
                <ConversationV2 />
                <ConversationV2 />

                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
              </div>
            </div>
            <div className="cvr-scrollbar-container w-2 opacity-0 absolute right-[2px] top-[2px] bottom-[2px] transition-opacity duration-200 ease-[ease] delay-0 hover:opacity-[1]">
              <div className="cvr-scrollbar w-2 rounded-[3px] bg-[#b1b5b9] opacity-[0.5] mx-[2px] relative right-[3px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageTab;

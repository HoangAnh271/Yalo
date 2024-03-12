import React from "react";

const ChatInputV2 = (props) => {
  return (
    <div className="h-14 flex border-t border-[#d6dbe1] focus-within:border-[#0068ff]">
      <input
        className="w-full px-[18px] pt-3 pb-4 outline-0"
        placeholder="Nhập @, tin nhắn tới User"
      ></input>
      <div className="w-[188px] flex items-center">
        <div className="w-10 h-10 flex justify-center items-center mr-2 ml-3 rounded hover:bg-[#e2e4e6]">
          <button className="w-6 h-6 ">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#000000"
                  strokeWidth="1.2"
                ></circle>
                <path
                  d="M8.9126 15.9336C10.1709 16.249 11.5985 16.2492 13.0351 15.8642C14.4717 15.4793 15.7079 14.7653 16.64 13.863"
                  stroke="#000000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                ></path>
                <ellipse
                  cx="14.5094"
                  cy="9.77405"
                  rx="1"
                  ry="1.5"
                  transform="rotate(-15 14.5094 9.77405)"
                  fill="#000000"
                ></ellipse>
                <ellipse
                  cx="8.71402"
                  cy="11.3278"
                  rx="1"
                  ry="1.5"
                  transform="rotate(-15 8.71402 11.3278)"
                  fill="#000000"
                ></ellipse>
                <path
                  d="M13 16.0004L13.478 16.9742C13.8393 17.7104 14.7249 18.0198 15.4661 17.6689C16.2223 17.311 16.5394 16.4035 16.1708 15.6524L15.7115 14.7168"
                  stroke="#000000"
                  strokeWidth="1.2"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        <div className="w-10 h-10 flex justify-center items-center mr-2 rounded hover:bg-[#e2e4e6]">
          <button className="w-6 h-6 ">
            <svg
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="#000000"
                  strokeWidth="1.2"
                ></circle>
                <path
                  d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C14.2516 22 16.3295 21.2558 18.001 20"
                  stroke="#000000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M16 8V12C16 13 16.6 15 19 15C21.4 15 22 13 22 12"
                  stroke="#000000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        <div className="w-10 h-10 flex justify-center items-center mr-2 rounded hover:bg-[#e2e4e6]">
          <button className="w-6 h-6">
            <svg
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"
                  stroke="#000000"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInputV2;

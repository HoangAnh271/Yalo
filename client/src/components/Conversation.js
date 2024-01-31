import React from "react";

const Conversation = (props) => {
  return (
    <div className="contact-grid h-18 flex w-[22rem] px-[1rem] hover:bg-[#f3f5f6]">
      <div className="contact-item1  flex h-[74px] w-[60px] flex-wrap items-center">
        <img
          className="h-12 w-12 rounded-full border-[1px] border-white"
          src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/hinh-anh-avatar-luffy-mac-do-kimono.jpg"
        />
      </div>
      <div className=" contact-item2 h-6 w-[219px] self-end">User Name</div>
      <div className=" contact-item3 h-6 self-end">time</div>
      <div className=" contact-item4 collapse flex h-6 w-6 items-center justify-center self-end rounded-md">
        <svg
          width="16"
          height="16"
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
      </div>
      <div className=" contact-item5  h-[36px] w-[252px]">messeage</div>
    </div>
  );
};

export default Conversation;

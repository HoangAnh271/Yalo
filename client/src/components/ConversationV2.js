import React from "react";

const ConversationV2 = (props) => {
  return (
    <div className="contact-grid h-18 flex w-[22rem] px-[1rem] hover:bg-[#f3f5f6]">
      <div className="contact-item1  flex h-[74px] w-[60px] flex-wrap ">
        <div className="flex h-[26px] w-[26px] self-end">
          <img
            className="rounded-full border-[1px] border-white"
            src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/hinh-anh-avatar-luffy-mac-do-kimono.jpg"
          />
        </div>
        <div className=" flex h-[26px] w-[26px] self-end">
          <img
            className="rounded-full border-[1px] border-white"
            src="https://i.pinimg.com/1200x/c2/52/56/c252568cba621a16810b3fe897453f84.jpg"
          />
        </div>
        <div className="flex h-[26px] w-[26px] ">
          <img
            className="rounded-full  border-[1px] border-white"
            src="https://i.pinimg.com/736x/82/01/ff/8201ffe22ddc4bd7a32e234678d46f2f.jpg"
          />
        </div>
        <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full border-[1px] border-white bg-[#e6e8ea] text-[12px] font-semibold text-[#7589a3]">
          99+
        </div>
      </div>
      <div className=" contact-item2 fitcon h-6 w-[219px] self-end ">
        User Name
      </div>
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

export default ConversationV2;

import React from "react";

const BlockDate = (props) => {
  return (
    <div className="block-date mt-[10px]">
      <div className="date-item w-fit  mx-auto mb-[10px] ">
        <div className="px-[10px] pt-[2px] pb-[3px] w-[116px] bg-[rgba(0,0,0,0.2)] text-[13px] rounded-[10px] font-normal text-white text-center">
          <div>T6 12/01/2024</div>
        </div>
      </div>
      <div className="chat-item mx-4 mb-[7px] flex">
        <img
          className="h-[40px] w-[40px] rounded-full border-[1px] border-white"
          src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/hinh-anh-avatar-luffy-mac-do-kimono.jpg"
        />
        <div className="chat-content ml-[10px]  max-w-[calc(100% - 160px)] min-w-[230px] w-full">
          <div className="chat-message flex w-full">
            <div className="bg-white shadow-[0_1px_2px_rgba(0,0,0,0.2)] mb-1 p-3 rounded-lg">
              <div className="text-[15px]">Hello</div>
              <div className="text-[12px] mt-[10px] text-[#476285]">13:55</div>
              <div className="reaction"></div>
            </div>
            <div className="action-holder min-w-[116px] ml-[10px]"></div>
          </div>
          <div className="chat-message flex w-full">
            <div className="bg-white shadow-[0_1px_2px_rgba(0,0,0,0.2)] mb-1 p-3 rounded-lg">
              <div className="text-[15px]">I see your goals</div>
              <div className="text-[12px] mt-[10px] text-[#476285]">13:55</div>
              <div className="reaction"></div>
            </div>
            <div className="action-holder min-w-[116px] ml-[10px]"></div>
          </div>
          <div className="reaction-space h-[14px]"></div>
        </div>
      </div>
      <div className="chat-item mx-4 mb-[7px] flex flex-row-reverse ">
        <div className="chat-content ml-[10px]  max-w-[calc(100% - 116px)] min-w-[230px] w-full">
          <div className="chat-message flex w-full justify-end">
            <div className="action-holder min-w-[116px] mr-[10px]"></div>
            <div className="bg-white shadow-[0_1px_2px_rgba(0,0,0,0.2)] mb-1 p-3 rounded-lg">
              <div className="text-[15px]">Thank you</div>
              <div className="text-[12px] mt-[10px] text-[#476285]">13:55</div>
              <div className="reaction"></div>
            </div>
          </div>
          <div className="chat-message flex w-full justify-end">
            <div className="action-holder min-w-[116px] mr-[10px]"></div>
            <div className="bg-white shadow-[0_1px_2px_rgba(0,0,0,0.2)] mb-1 p-3 rounded-lg">
              <div className="text-[15px]">Im enjoy it a lot</div>
              <div className="text-[12px] mt-[10px] text-[#476285]">13:55</div>
              <div className="reaction"></div>
            </div>
          </div>
          <div className="reaction-space h-[14px]"></div>
        </div>
      </div>
    </div>
  );
};

export default BlockDate;

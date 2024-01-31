import React, { useEffect } from "react";
const ProfileModal = (props) => {
  return (
    <div
      id="profile-modal"
      className="absolute shadow-[0_0_10px_0_rgba(0,0,0,0.2)] border border-solid border-[#d6dbe1] p-2 rounded-lg bg-white z-20 min-w-[280px] h-[175px] left-2 top-[108px] ml-14 mt-[-76px] collapse"
    >
      <div className=" min-w-[inherit] w-[inherit]">
        <div className="">
          <div className="px-2 block">
            <span className="mb-2 truncate block font-medium text-[1.125rem] break-words cursor-default">
              Nguyễn Hoàng Anh
            </span>
          </div>
          <div className="h-[1px] bg-[#d6dbe1] m-1"></div>
          <div className="h-9 px-3 flex items-center mx-[-8px] text-[.875rem] cursor-pointer hover:bg-[#f3f5f6]">
            <div>Hồ sơ của bạn</div>
          </div>
          <div className="h-9 px-3 flex items-center mx-[-8px] text-[.875rem] cursor-pointer hover:bg-[#f3f5f6]">
            <div>Cài đặt</div>
          </div>
          <div className="h-[1px] bg-[#d6dbe1] m-1"></div>
          <div className="h-9 px-3 flex items-center mx-[-8px] text-[.875rem] cursor-pointer hover:bg-[#f3f5f6]">
            <div>Đăng xuất</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

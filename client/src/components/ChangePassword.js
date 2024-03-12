import React from "react";

const ChangePassword = (props) => {
  return (
    <div className="w-[400px] h-fit animated fadeIn body-container max-w-[400px] bg-white mx-auto rounded-sm shadow-[0_8px_24px_rgba(21,48,142,0.14)]">
      <div className="content">
        <form className="px-[45px] py-[30px]">
          <div className="animated fadeIn relative">
            <div className="box-au p-[15px] mb-[30px] bg-[#e1eff9] rounded-[3px]">
              <p className="text-center text-[12px]">
                Gửi tin nhắn để nhận mã xác thực
              </p>
              <p className="text-center">
                <span className="number-phone text-[#0189e7] text-[24px] font-bold">
                  (+84) 0327113225
                </span>
              </p>
              <div className="line-form custom_code_input_container mx-[15px] mt-[18px] mb-[12px] py-[5px] rounded-[3px] border-b border-[#0190f3] shadow-[0_4px_8px_rgba(21,48,142,0.08)] bg-white">
                <input
                  tabindex="1"
                  autocomplete="off"
                  type="number"
                  placeholder="Nhập mã kích hoạt"
                  className="px-[10px] py-[6px] text-center text-[1.125em] w-full outline-none tracking-[6px] placeholder:tracking-normal placeholder:text-base"
                />
              </div>
              <p className="textAlign-center text-[#666] text-center text-[12px]">
                <div className="alert-info text-[#31708f] bg-[#d9edf7] rounded-[10px]">
                  Soạn tin nhắn với cú pháp "YALOPC" gửi đến 6020 (1000đ/tin) để
                  nhận mã xác thực (Chỉ áp dụng cho mạng Viettel, Mobifone,
                  Vinaphone, Vietnamobile, Gmobile)
                </div>
              </p>
            </div>
            <div className="line-form pl-[32px] py-[5px] mb-[28px] relative after:h-[1px] after:bg-[#ecedf0] after:w-full after:absolute after:bottom-0 after:left-0 before:h-[1px] before:bg-[#ecedf0] before:w-full before:absolute before:bottom-0 before:left-0">
              <div className="icon h-4 w-4 absolute top-[10px] left-[5px]">
                <svg
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#555"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="invisible_box" data-name="invisible box">
                        <rect width="48" height="48" fill="none"></rect>
                      </g>
                      <g id="Layer_7" data-name="Layer 7">
                        <path d="M39,18H35V13A11,11,0,0,0,24,2H22A11,11,0,0,0,11,13v5H7a2,2,0,0,0-2,2V44a2,2,0,0,0,2,2H39a2,2,0,0,0,2-2V20A2,2,0,0,0,39,18ZM15,13a7,7,0,0,1,7-7h2a7,7,0,0,1,7,7v5H15ZM14,35a3,3,0,1,1,3-3A2.9,2.9,0,0,1,14,35Zm9,0a3,3,0,1,1,3-3A2.9,2.9,0,0,1,23,35Zm9,0a3,3,0,1,1,3-3A2.9,2.9,0,0,1,32,35Z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <input
                type="password"
                className="outline-0 py-[5px] w-full color-[#333] leading-none text-[0.875rem]"
                placeholder="Vui lòng nhập mật khẩu"
              ></input>
            </div>
            <div className="line-form pl-[32px] py-[5px] mb-[28px] relative after:h-[1px] after:bg-[#ecedf0] after:w-full after:absolute after:bottom-0 after:left-0 before:h-[1px] before:bg-[#ecedf0] before:w-full before:absolute before:bottom-0 before:left-0">
              <div className="icon h-4 w-4 absolute top-[10px] left-[5px]">
                <svg
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="invisible_box" data-name="invisible box">
                        <rect width="48" height="48" fill="none"></rect>
                      </g>
                      <g id="Layer_7" data-name="Layer 7">
                        <g>
                          <path d="M39,18H35V13A11,11,0,0,0,24,2H22A11,11,0,0,0,11,13v5H7a2,2,0,0,0-2,2V44a2,2,0,0,0,2,2H39a2,2,0,0,0,2-2V20A2,2,0,0,0,39,18ZM15,13a7,7,0,0,1,7-7h2a7,7,0,0,1,7,7v5H15ZM37,42H9V22H37Z"></path>
                          <circle cx="15" cy="32" r="3"></circle>
                          <circle cx="23" cy="32" r="3"></circle>
                          <circle cx="31" cy="32" r="3"></circle>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <input
                type="password"
                className="outline-0 py-[5px] w-full color-[#333] leading-none text-[0.875rem]"
                placeholder="Nhập lại mật khẩu"
              ></input>
            </div>

            <div className="2-button text-center">
              <div className="button-has-more mt-3">
                <button
                  tabindex="3"
                  class="h-[44px] px-[20px] text-[0.875rem] leading-[44px] min-w-[210px] text-center bg-[#0190f3] text-[#fff]  rounded-md hover:bg-[#0184e0] mb-3"
                >
                  Xác nhận
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;

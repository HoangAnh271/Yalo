import React from "react";

const ForgotPasswordForm = (props) => {
  const handleBackClick = () => {
    props.setShowForm("login");
  };
  const handleContinueClick = () => {
    props.setShowForm("changepassword");
  };
  return (
    <div className="w-[400px] h-fit animated fadeIn body-container max-w-[400px] bg-white mx-auto rounded-sm shadow-[0_8px_24px_rgba(21,48,142,0.14)]">
      <div className="content">
        <div className="px-[45px] py-[30px]">
          <div className="animated fadeIn relative">
            <div className="py-[15px]"></div>
            <p className="mb-[10px] text-center">Nhập số điện thoại của bạn</p>
            <div className="py-[10px]"></div>
            <div className="line-form pl-[100px] py-[5px] mb-[18px] relative after:h-[1px] after:bg-[#ecedf0] after:w-full after:absolute after:bottom-0 after:left-0 before:h-[1px] before:bg-[#ecedf0] before:w-full before:absolute before:bottom-0 before:left-0">
              <div className="icon h-5 w-5 absolute top-[10px] left-[2px]">
                <svg
                  fill="#555"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 547.597 547.597"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <g>
                        <path d="M409.997,0H137.599c-13.971,0-25.264,11.312-25.264,25.264v497.059c0,13.961,11.303,25.273,25.264,25.273h272.397 c13.952,0,25.265-11.312,25.265-25.273V25.264C435.27,11.303,423.949,0,409.997,0z M245.885,29.816h55.807 c2.917,0,5.269,2.353,5.269,5.269s-2.352,5.269-5.269,5.269h-55.807c-2.897,0-5.269-2.353-5.269-5.269 S242.988,29.816,245.885,29.816z M307.497,502.653H240.09c-5.527,0-10.012-4.476-10.012-10.003 c0-5.526,4.485-10.002,10.012-10.002h67.406c5.526,0,9.992,4.476,9.992,10.002C317.489,498.178,313.033,502.653,307.497,502.653z M403.685,443.69H143.911V85.642h259.774V443.69z"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="absolute top-[4px] left-[22px] w-[60px] text-right text-[87.5%]">
                <span className="relative inline-block w-[70px] p-[5px_5px_4px] pr-[25px] before:absolute before:top-[12px] before:right-[5px] before:content-[''] before:border-l-[5px] before:w-0 before:h-0 before:border-l-[transparent] before:border-solid before:border-r-[5px] before:border-r-[transparent] before:border-t-[5px] before:border-t-[#888] hover:bg-[#f8f8f8] hover:cursor-pointer">
                  +84
                </span>
              </div>
              <input
                type="tel"
                className="outline-0 py-[5px] w-full color-[#333] leading-none text-[0.875rem]"
                placeholder="Số điện thoại"
              ></input>
            </div>
            <div className="2-button text-center">
              <div className="button-has-more mt-3">
                <button
                  tabindex="3"
                  class="h-[44px] px-[20px] text-[0.875rem] leading-[44px] min-w-[200px] text-center w-full bg-[#0190f3] text-[#fff]  rounded-md hover:bg-[#0184e0] mb-3"
                  onClick={handleContinueClick}
                >
                  Tiếp tục
                </button>
                <div className="flex">
                  <button
                    href=""
                    className="text-[0.813em] text-[#333] hover:text-[#0190f3] hover:underline"
                    onClick={handleBackClick}
                  >
                    Quay lại
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;

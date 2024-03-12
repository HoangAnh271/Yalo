import React from "react";
import PropTypes from "prop-types";

const LoginForm = (props) => {
  const handleSignupClick = () => {
    props.setShowForm("signup");
  };
  const handleForgotPasswordClick = () => {
    props.setShowForm("forgotPassword");
  };
  return (
    <div className="w-[400px] h-[312px] animated fadeIn body-container max-w-[400px] bg-white mx-auto rounded-sm shadow-[0_8px_24px_rgba(21,48,142,0.14)]">
      <div className="content">
        <form className="px-[45px] py-[30px]">
          <div className="animated fadeIn relative">
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
                placeholder="Mật khẩu"
              ></input>
            </div>

            <div className="2-button text-center">
              <button
                tabindex="3"
                class="h-[44px] px-[20px] text-[0.875rem] leading-[44px] min-w-[200px] text-center w-full bg-[#0190f3] text-[#fff]  rounded-md hover:bg-[#0184e0]"
              >
                Đăng nhập với mật khẩu
              </button>
              <div className="button-has-more mt-3">
                <button
                  className="w-full h-[44px] mb-3 px-5 text-[#0190f3] bg-white rounded-md shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] text-[0.875rem] hover:shadow-[inset_0_0_0_1px_#0184e0]"
                  onClick={handleSignupClick}
                >
                  Đăng ký bằng số điện thoại
                </button>
                <div className="flex justify-center">
                  <button
                    href=""
                    className="text-[0.813em] text-[#333] hover:text-[#0190f3] hover:underline"
                    onClick={handleForgotPasswordClick}
                  >
                    Quên mật khẩu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

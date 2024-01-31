import React, { Component } from "react";

const Login = (props) => {
  return (
    <div className="">
      <div className=" z-[1] relative w-full">
        <div className="login-layout mx-auto pt-[70px] px-5 max-w-[600px]">
          <div className="header">
            <h1>
              <img
                className="h-[41px] w-[114px] mx-auto mb-[18px]"
                src={window.location.origin + "/yalo-logo.png"}
              />
            </h1>
            <h2 className="text-[#333] mb-[18px] text-[1.15em] text-center">
              Đăng nhập tài khoản Yalo
              <br />
              để kết nối với ứng dụng Yalo Web
            </h2>
          </div>
          <div className="body mb-[50px] min-w-[320px]">
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
                        <button className="w-full h-[44px] mb-3 px-5 text-[#0190f3] bg-white rounded-md shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] text-[0.875rem] hover:shadow-[inset_0_0_0_1px_#0184e0]">
                          Đăng ký bằng số điện thoại
                        </button>
                        <div className="flex justify-center">
                          <a
                            href=""
                            className="text-[0.813em] text-[#333] hover:text-[#0190f3] hover:underline"
                          >
                            Quên mật khẩu
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="footer py-[30px]">
            <p className="mb-6 text-center text-[0.75em]">
              <a className="mr-[5px] pr-[5px] text-[#0190f3] font-bold hover:underline">
                Tiếng việt
              </a>
              <a className="mr-[5px] pr-[5px] text-[#0190f3] hover:underline">
                Tiếng việt
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden bg-[#e0e0e0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 810"
          preserveAspectRatio="xMinYMin slice"
          className="w-full h-full"
        >
          <path
            fill="#aad6ff"
            d="M592.66 0c-15 64.092-30.7 125.285-46.598 183.777C634.056 325.56 748.348 550.932 819.642 809.5h419.672C1184.518 593.727 1083.124 290.064 902.637 0H592.66z"
          ></path>
          <path
            fill="#e8f3ff"
            d="M545.962 183.777c-53.796 196.576-111.592 361.156-163.49 490.74 11.7 44.494 22.8 89.49 33.1 134.883h404.07c-71.294-258.468-185.586-483.84-273.68-625.623z"
          ></path>
          <path
            fill="#cee7ff"
            d="M153.89 0c74.094 180.678 161.088 417.448 228.483 674.517C449.67 506.337 527.063 279.465 592.56 0H153.89z"
          ></path>
          <path
            fill="#e8f3ff"
            d="M153.89 0H0v809.5h415.57C345.477 500.938 240.884 211.874 153.89 0z"
          ></path>
          <path
            fill="#e8f3ff"
            d="M1144.22 501.538c52.596-134.583 101.492-290.964 134.09-463.343 1.2-6.1 2.3-12.298 3.4-18.497 0-.2.1-.4.1-.6 1.1-6.3 2.3-12.7 3.4-19.098H902.536c105.293 169.28 183.688 343.158 241.684 501.638v-.1z"
          ></path>
          <path
            fill="#eef4f8"
            d="M1285.31 0c-2.2 12.798-4.5 25.597-6.9 38.195C1321.507 86.39 1379.603 158.98 1440 257.168V0h-154.69z"
          ></path>
          <path
            fill="#e8f3ff"
            d="M1278.31,38.196C1245.81,209.874 1197.22,365.556 1144.82,499.838L1144.82,503.638C1185.82,615.924 1216.41,720.211 1239.11,809.6L1439.7,810L1439.7,256.768C1379.4,158.78 1321.41,86.288 1278.31,38.195L1278.31,38.196z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Login;

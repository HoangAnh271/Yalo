import { useEffect } from "react";

function SideNav() {
  useEffect(() => {
    const linkItems = document.querySelectorAll(".link-item");
    linkItems.forEach((linkItem, index) => {
      linkItem.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        linkItem.classList.add("active");
      });
    });
  }, []);
  const handleImageMouseDown = () => {
    const element = document.getElementById("profile-modal");
    if (element) {
      element.classList.remove("visible");
      element.classList.add("collapse");
    }
  };
  const handleImageMouseUp = () => {
    const element = document.getElementById("profile-modal");
    if (element) {
      element.classList.remove("collapse");
      element.classList.add("visible");
      const avatar = document.getElementById("avatar");
      avatar.focus();
    }
  };

  const handleImageOnBlur = () => {
    const element = document.getElementById("profile-modal");
    if (element) {
      element.classList.remove("visible");
      element.classList.add("collapse");
    }
  };
  return (
    <>
      <div className="flex h-screen w-16 flex-col items-center bg-[#0091ff]">
        <div className="flex w-16 flex-col items-center">
          <div className="mt-8 pb-4 cursor-pointer">
            <img
              id="avatar"
              tabIndex={100}
              className="h-12 w-12 rounded-full border-2 border-solid border-white"
              src="https://dvdn247.net/wp-content/uploads/2020/07/avatar-mac-dinh-1.png"
              onMouseDown={handleImageMouseDown}
              onMouseUp={handleImageMouseUp}
              onBlur={handleImageOnBlur}
            />
          </div>
          <div className="flex w-16 flex-col justify-start text-center">
            {/* <Link href="/chat"> */}
            <div className="link-item active flex h-16 w-16 flex-col justify-center hover:bg-[rgba(0,0,0,0.1)] hover:text-white">
              <div className="self-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3259 5.77772C20 6.78661 20 8.19108 20 11C20 13.8089 20 15.2134 19.3259 16.2223C19.034 16.659 18.659 17.034 18.2223 17.3259C17.3409 17.9148 16.1577 17.9892 14 17.9986V18L12.8944 20.2111C12.5259 20.9482 11.4741 20.9482 11.1056 20.2111L10 18V17.9986C7.8423 17.9892 6.65907 17.9148 5.77772 17.3259C5.34096 17.034 4.96596 16.659 4.67412 16.2223C4 15.2134 4 13.8089 4 11C4 8.19108 4 6.78661 4.67412 5.77772C4.96596 5.34096 5.34096 4.96596 5.77772 4.67412C6.78661 4 8.19108 4 11 4H13C15.8089 4 17.2134 4 18.2223 4.67412C18.659 4.96596 19.034 5.34096 19.3259 5.77772Z"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9L15 9"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 13H12"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            {/* </Link> */}
            {/* <Link href="/phonebook"> */}
            <div className="link-item flex h-16 w-16 flex-col justify-center hover:bg-[rgba(0,0,0,0.1)] hover:text-white">
              <div className="self-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7071 13.7071L20.3552 16.3552C20.7113 16.7113 20.7113 17.2887 20.3552 17.6448C18.43 19.57 15.3821 19.7866 13.204 18.153L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L5.84701 10.796C4.21341 8.61788 4.43001 5.56999 6.35523 3.64477C6.71133 3.28867 7.28867 3.28867 7.64477 3.64477L10.2929 6.29289C10.6834 6.68342 10.6834 7.31658 10.2929 7.70711L9.27175 8.72825C9.10946 8.89054 9.06923 9.13846 9.17187 9.34373C10.3585 11.7171 12.2829 13.6415 14.6563 14.8281C14.8615 14.9308 15.1095 14.8905 15.2717 14.7283L16.2929 13.7071C16.6834 13.3166 17.3166 13.3166 17.7071 13.7071Z"
                    stroke="#ffffff"
                  />
                </svg>
              </div>
            </div>
            {/* </Link> */}
            {/* <Link href="/todo"> */}
            <div className="link-item flex h-16 w-16 flex-col justify-center hover:bg-[rgba(0,0,0,0.1)] hover:text-white">
              <div className="self-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="9" stroke="#ffffff" />
                  <path d="M8 12L11 15L16 9" stroke="#ffffff" />
                </svg>
              </div>
            </div>
            {/* </Link> */}
          </div>
        </div>
        <div className="flex h-screen w-16 flex-col justify-end text-center">
          <div className="flex h-16 w-16 flex-col justify-center hover:bg-[rgba(0,0,0,0.1)] hover:text-white">
            <div className="self-center">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12.5H6V13.5H12V12.5ZM18 12.5H12V13.5H18V12.5ZM20.5 10C20.5 11.3807 19.3807 12.5 18 12.5V13.5C19.933 13.5 21.5 11.933 21.5 10H20.5ZM18 7.5C19.3807 7.5 20.5 8.61929 20.5 10H21.5C21.5 8.067 19.933 6.5 18 6.5V7.5ZM17.0201 5.75007C16.1607 3.83526 14.2368 2.5 12 2.5V3.5C13.8287 3.5 15.4038 4.59089 16.1078 6.15954L17.0201 5.75007ZM12 2.5C9.76317 2.5 7.83928 3.83526 6.97989 5.75007L7.89222 6.15954C8.59624 4.59089 10.1713 3.5 12 3.5V2.5ZM6 6.5C4.067 6.5 2.5 8.067 2.5 10H3.5C3.5 8.61929 4.61929 7.5 6 7.5V6.5ZM2.5 10C2.5 11.933 4.067 13.5 6 13.5V12.5C4.61929 12.5 3.5 11.3807 3.5 10H2.5ZM6.97989 5.75007C6.77146 6.21449 6.38469 6.5 6 6.5V7.5C6.89538 7.5 7.57652 6.86297 7.89222 6.15954L6.97989 5.75007ZM18 6.5C17.6153 6.5 17.2285 6.21449 17.0201 5.75007L16.1078 6.15954C16.4235 6.86297 17.1046 7.5 18 7.5V6.5Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
          </div>
          <div className="link-item flex h-16 w-16 flex-col justify-center gap-8 hover:bg-[rgba(0,0,0,0.1)] hover:text-white">
            <div className="self-center">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 7.5V15.5C4.5 17.3856 4.5 18.3284 5.08579 18.9142C5.67157 19.5 6.61438 19.5 8.5 19.5H15.5C17.3856 19.5 18.3284 19.5 18.9142 18.9142C19.5 18.3284 19.5 17.3856 19.5 15.5V7.5M4.5 7.5H19.5M4.5 7.5H2.92857C2.76151 7.5 2.67798 7.5 2.61699 7.46168C2.58519 7.4417 2.5583 7.41481 2.53832 7.38301C2.5 7.32202 2.5 7.23849 2.5 7.07143V7.07143C2.5 6.06905 2.5 5.56786 2.72991 5.20195C2.8498 5.01115 3.01115 4.8498 3.20195 4.72991C3.56786 4.5 4.06905 4.5 5.07143 4.5H18.9286C19.931 4.5 20.4321 4.5 20.798 4.72991C20.9889 4.8498 21.1502 5.01115 21.2701 5.20195C21.5 5.56786 21.5 6.06905 21.5 7.07143V7.07143C21.5 7.23849 21.5 7.32202 21.4617 7.38301C21.4417 7.41481 21.4148 7.4417 21.383 7.46168C21.322 7.5 21.2385 7.5 21.0714 7.5H19.5"
                  stroke="#ffffff"
                />
                <path
                  d="M9.5 14.5H14.5"
                  stroke="#ffffff"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="link-item flex h-16 w-16 flex-col justify-center hover:bg-[rgba(0,0,0,0.1)] hover:text-white">
            <div className="self-center">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.08168 13.9445C2.55298 12.9941 2.28862 12.5188 2.28862 12C2.28862 11.4812 2.55298 11.0059 3.08169 10.0555L4.43094 7.63L5.85685 5.24876C6.4156 4.31567 6.69498 3.84912 7.14431 3.5897C7.59364 3.33028 8.13737 3.3216 9.22483 3.30426L12 3.26L14.7752 3.30426C15.8626 3.3216 16.4064 3.33028 16.8557 3.5897C17.305 3.84912 17.5844 4.31567 18.1431 5.24876L19.5691 7.63L20.9183 10.0555C21.447 11.0059 21.7114 11.4812 21.7114 12C21.7114 12.5188 21.447 12.9941 20.9183 13.9445L19.5691 16.37L18.1431 18.7512C17.5844 19.6843 17.305 20.1509 16.8557 20.4103C16.4064 20.6697 15.8626 20.6784 14.7752 20.6957L12 20.74L9.22483 20.6957C8.13737 20.6784 7.59364 20.6697 7.14431 20.4103C6.69498 20.1509 6.4156 19.6843 5.85685 18.7512L4.43094 16.37L3.08168 13.9445Z"
                  stroke="#ffffff"
                />
                <circle cx="12" cy="12" r="3" stroke="#ffffff" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNav;

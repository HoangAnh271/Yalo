import React from "react";

const ChatInputV1 = (props) => {
  return (
    <div className="h-12 border-t border-[#d6dbe1] pl-2 flex items-center">
      {/* 1 */}
      <div className="w-10 h-10 mr-2 flex justify-center rounded hover:bg-[#e2e4e6]">
        <button className="">
          <img
            className="w-6"
            src="https://static-00.iconduck.com/assets.00/sticker-icon-512x512-rzveai8i.png"
          />
        </button>
      </div>
      {/* 2 */}
      <div className="w-10 h-10 mr-2 flex justify-center rounded hover:bg-[#e2e4e6]">
        <button className="">
          <img
            className="w-6"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+UlEQVR4nM3XS6hNURzH8c9BHgOlmEhJEkpcSak74RidxCkkSkoZMRJlKCWFSwaUAbcUJjJUul3PolylDNwUJaQkUQYe16OjVf9T+x72PQ/dffxq136s/r/vWv+1/nst/hMtxxkMYHCcr4Hw6qmbr8V33EIfjo7z1RdeIygngIc414VRP48hQVLtAkA1vNVQ6QJAJbxzAcqRr92YXDTAdvzCTbzHtaIBHuB43PdEmwVFAtyLtZrUG23mFQlQxQ88wWdcbDP4YlzA9E4B6kN/AJtQ0rqS6dOI2/8vAJ0ogV7BK2zET2wpEmA/vmJlPJ+IVTS7CIDe+KfsyrybgsfxAyp1ArAQBzGxiXnq4ducnC/FN+xpF2AWnsf3Y2OYT8Ld6Om0nDb7IjVLWgWYivsYxo6oittygp/CR8wfA3JCVNVHmbKeC1DCpRjSufHuEL5gRUPgrQG3TnPNwQccbgZwJMxWNUBdxctITdIifAq4VrU5gFfnAeyMtZvW8N8KTErJDcyI+8EWJmijLuNF1IdaFqC+NUsTZqwSm3r9JkZjpvaV4F/jWRZgb0yksy0E2IB3mWLTicqRilodIG2NrseSKkonswDDMTRFatQkXF+w+R8AlW4CjHR7Wz4Uh4Si1V8/mJSD5HaBR7M74bmmTrMMpws8nCav5Nl9/QYJNdsyherALwAAAABJRU5ErkJggg=="
          />
        </button>
      </div>
      {/* 3 */}
      <div className="w-10 h-10 mr-2 flex justify-center rounded hover:bg-[#e2e4e6]">
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 100 100"
            id="attachment"
          >
            <g>
              <path d="M18.8 85.1c-7.8-7.8-7.8-20.5 0-28.3L63.1 13c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8L38.6 76.7c-3.1 3.1-8.2 3.1-11.3 0-3.1-3.1-3.1-8.2 0-11.3l22.3-21.8c.8-.8 2.1-.8 2.8 0 .8.8.8 2.1 0 2.8L30.2 68.2c-1.5 1.5-1.5 4.1 0 5.6 1.6 1.6 4.1 1.6 5.7 0L80.2 30c3.9-3.9 3.9-10.2 0-14.1-3.9-3.9-10.2-3.9-14.1 0L21.7 59.7c-6.2 6.2-6.2 16.4 0 22.6 6.3 6.2 16.4 6.2 22.6 0l38.3-37.8c.8-.8 2.1-.8 2.8 0 .8.8.8 2.1 0 2.8L47.1 85.2c-7.8 7.7-20.4 7.8-28.3-.1z"></path>
            </g>
            <g>
              <path
                fill="#00F"
                d="M664-510v1684h-1784V-510H664m8-8h-1800v1700H672V-518z"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      {/* 4 */}
      <div className="w-10 h-10 mr-2 flex justify-center rounded hover:bg-[#e2e4e6]">
        <button className="w-7">
          <img src={window.location.origin + "/id-card.png"} />
        </button>
      </div>
      {/* 5 */}
      <div className="w-10 h-10 mr-2 flex justify-center rounded hover:bg-[#e2e4e6]">
        <button className="w-6">
          <svg
            fill="#000000"
            viewBox="0 0 36 36"
            version="1.1"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>Tạo nhắc hẹn</title>
              <path
                d="M11.42,3.43a5.77,5.77,0,0,0-7.64.41,5.72,5.72,0,0,0-.38,7.64A16.08,16.08,0,0,1,11.42,3.43Z"
                class="clr-i-outline--badged clr-i-outline-path-1--badged"
              ></path>
              <path
                d="M18.86,9.5a.9.9,0,0,0-1.8,0v9L24.12,22a.9.9,0,1,0,.79-1.62l-6.06-3Z"
                class="clr-i-outline--badged clr-i-outline-path-2--badged"
              ></path>
              <path
                d="M28,27.78a13.89,13.89,0,0,0,3.21-14.39,7,7,0,0,1-2.11.05A12,12,0,1,1,22.56,6.9,7.54,7.54,0,0,1,22.5,6a7.52,7.52,0,0,1,.11-1.21A14,14,0,0,0,8.11,27.88L5.56,30.43A1,1,0,1,0,7,31.84l2.66-2.66a13.9,13.9,0,0,0,16.88-.08l2.74,2.74a1,1,0,0,0,1.41-1.41Z"
                class="clr-i-outline--badged clr-i-outline-path-3--badged"
              ></path>
              <circle
                cx="30"
                cy="6"
                r="5"
                class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"
              ></circle>
              <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect>
            </g>
          </svg>
        </button>
      </div>
      {/* 6 */}
      <div className="w-10 h-10 mr-2 flex justify-center rounded hover:bg-[#e2e4e6]">
        <button className="w-6">
          <svg
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 5.25C4 3.45508 5.45507 2 7.25 2H20.75C22.5449 2 24 3.45507 24 5.25V17.3787C23.8796 17.4592 23.7653 17.5527 23.659 17.659L22.5 18.818V5.25C22.5 4.2835 21.7165 3.5 20.75 3.5H7.25C6.2835 3.5 5.5 4.2835 5.5 5.25V22.7497C5.5 23.7162 6.2835 24.4997 7.25 24.4997H15.3177L16.8177 25.9997H7.25C5.45507 25.9997 4 24.5446 4 22.7497V5.25Z"
                fill="#212121"
              ></path>
              <path
                d="M10.5 8.75C10.5 9.44036 9.94036 10 9.25 10C8.55964 10 8 9.44036 8 8.75C8 8.05964 8.55964 7.5 9.25 7.5C9.94036 7.5 10.5 8.05964 10.5 8.75Z"
                fill="#212121"
              ></path>
              <path
                d="M9.25 15.2498C9.94036 15.2498 10.5 14.6902 10.5 13.9998C10.5 13.3095 9.94036 12.7498 9.25 12.7498C8.55964 12.7498 8 13.3095 8 13.9998C8 14.6902 8.55964 15.2498 9.25 15.2498Z"
                fill="#212121"
              ></path>
              <path
                d="M9.25 20.5C9.94036 20.5 10.5 19.9404 10.5 19.25C10.5 18.5596 9.94036 18 9.25 18C8.55964 18 8 18.5596 8 19.25C8 19.9404 8.55964 20.5 9.25 20.5Z"
                fill="#212121"
              ></path>
              <path
                d="M12.75 8C12.3358 8 12 8.33579 12 8.75C12 9.16421 12.3358 9.5 12.75 9.5H19.25C19.6642 9.5 20 9.16421 20 8.75C20 8.33579 19.6642 8 19.25 8H12.75Z"
                fill="#212121"
              ></path>
              <path
                d="M12 13.9998C12 13.5856 12.3358 13.2498 12.75 13.2498H19.25C19.6642 13.2498 20 13.5856 20 13.9998C20 14.414 19.6642 14.7498 19.25 14.7498H12.75C12.3358 14.7498 12 14.414 12 13.9998Z"
                fill="#212121"
              ></path>
              <path
                d="M12.75 18.5C12.3358 18.5 12 18.8358 12 19.25C12 19.6642 12.3358 20 12.75 20H19.25C19.6642 20 20 19.6642 20 19.25C20 18.8358 19.6642 18.5 19.25 18.5H12.75Z"
                fill="#212121"
              ></path>
              <path
                d="M25.7803 19.7803L19.7803 25.7803C19.6397 25.921 19.4489 26 19.25 26C19.0511 26 18.8603 25.921 18.7197 25.7803L15.7216 22.7823C15.4287 22.4894 15.4287 22.0145 15.7216 21.7216C16.0145 21.4287 16.4894 21.4287 16.7823 21.7216L19.25 24.1893L24.7197 18.7197C25.0126 18.4268 25.4874 18.4268 25.7803 18.7197C26.0732 19.0126 26.0732 19.4874 25.7803 19.7803Z"
                fill="#212121"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      {/* 7 */}
      <div className="w-10 h-10 mr-2 flex justify-center rounded hover:bg-[#e2e4e6]">
        <button className="">
          <svg
            width="24"
            height="24"
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
        </button>
      </div>
    </div>
  );
};

export default ChatInputV1;

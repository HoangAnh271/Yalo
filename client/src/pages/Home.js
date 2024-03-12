import React, { useEffect } from "react";
import Chat from "../components/Chat";
import ProfileModal from "../components/ProfileModal";
import SidebarNav from "../components/SidebarNav";

const Home = (props) => {
  useEffect(() => {
    const contactGrids = document.querySelectorAll(".contact-grid");
    contactGrids.forEach((contactGrid, index) => {
      contactGrid.addEventListener("click", () => {
        const contactSelected = document.querySelector(".contact-selected");
        if (contactSelected) {
          contactSelected.classList.remove("contact-selected");
          for (
            let i = 0;
            i < contactGrid.children[3].children[0].childNodes.length;
            i++
          ) {
            contactSelected.children[3].children[0].childNodes[i].setAttribute(
              "stroke",
              "#33363F"
            );
          }
        }
        contactGrid.classList.add("contact-selected");
        for (
          let i = 0;
          i < contactGrid.children[3].children[0].childNodes.length;
          i++
        ) {
          contactGrid.children[3].children[0].childNodes[i].setAttribute(
            "stroke",
            "#0068ff"
          );
        }
      });
      contactGrid.addEventListener("mouseover", () => {
        contactGrid.children[2].style.visibility = "collapse";
        contactGrid.children[3].style.visibility = "visible";
        if (contactGrid.classList.contains("contact-selected")) {
          contactGrid.children[3].classList.remove("hover:bg-[#7589a3]/30");
          contactGrid.children[3].classList.add("hover:bg-[#0068ff]/20");
        } else {
          contactGrid.children[3].classList.remove("hover:bg-[#0068ff]/20");
          contactGrid.children[3].classList.add("hover:bg-[#7589a3]/30");
        }
      });
      contactGrid.addEventListener("mouseout", () => {
        contactGrid.children[2].style.visibility = "visible";
        contactGrid.children[3].style.visibility = "collapse";
      });
    });

    const tabItems = document.querySelectorAll(".tab-item");
    const tabIndicator = document.querySelector(".tab-indicator");
    tabItems.forEach((tabItem, index) => {
      tabItem.addEventListener("click", () => {
        document.querySelector(".selected").classList.remove("selected");
        tabItem.classList.add("selected");
        tabIndicator.style.left = tabItem.offsetLeft + "px";
        tabIndicator.style.width = tabItem.offsetWidth + "px";
      });
    });
  }, []);
  return (
    <div>
      <div className="flex h-screen">
        <SidebarNav/>
        <Chat />
      </div>
      <ProfileModal />
    </div>
  );
};

export default Home;

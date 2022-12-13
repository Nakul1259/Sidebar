import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import logo from "./logo.svg";
import { links, social } from "./data";
import { useGlobalContext } from "./context";

function Sidebar({showSidebar}) {
    const {isSidebarOpen, closeSidebar} = useGlobalContext();   
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} alt="" />
        <button onClick={closeSidebar} className="times">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((item) => {
          const { id, url, text, icon } = item;
          return (
            <li key={id}>
                {icon}
              <a href={url}>
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="social-link">
        {social.map((item) => {
            const {id, url, icon} = item
            return(
                <li key={id}>
                    <a href={url}>
                    {icon}

                    </a>
                </li>
            )
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;


  /* <li>
<FaHome />
  <a href="#">Home</a>
</li>
<li>
<FaHome />
  <a href="#">Team</a>
</li>
<li>
<FaHome />
  <a href="#">Projects</a>
</li>
<li>
<FaHome />
  <a href="#">Calender</a>
</li> */


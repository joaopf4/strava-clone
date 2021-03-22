import React from "react";
import { NavContainer } from "./styled";

function Nav() {
  return (
    <NavContainer>
      <span>Feed</span>
      <ul>
        <li><a href="#">Following</a></li>
        <li><a href="#">You</a></li>
        <li><a href="#">Clubs</a></li>
      </ul>
    </NavContainer>
  );
}

export default Nav;

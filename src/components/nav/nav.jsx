import React from "react";
import { NavContainer } from "./styled";

function Nav() {
  return (
    <NavContainer>
      <span>Feed</span>
      <ul>
        <li><a href="#feed">Following</a></li>
        <li><a href="#feed">You</a></li>
        <li><a href="#feed">Clubs</a></li>
      </ul>
    </NavContainer>
  );
}

export default Nav;

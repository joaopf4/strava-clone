import React from "react";
import { NavContainer } from "./styled";

function Nav() {
  return (
    <NavContainer>
      <span>Feed</span>
      <ul>
        <li>Following</li>
        <li>You</li>
        <li>Clubs</li>
      </ul>
    </NavContainer>
  );
}

export default Nav;

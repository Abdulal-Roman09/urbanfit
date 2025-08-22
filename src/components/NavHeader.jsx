"use client";

import { SessionProvider } from "next-auth/react";
import Navber from "./Navber";

const NavHeader = () => {
  return (
    <SessionProvider>
      <Navber />
    </SessionProvider>
  );
};

export default NavHeader;

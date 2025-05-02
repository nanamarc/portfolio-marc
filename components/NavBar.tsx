import React from "react";
import ClientNavBar from "./ClientNavBar";
import { ThemeToggle } from "./theme/ThemeToggle";

async function NavBar() {

  return (
    <ClientNavBar
    
      themeToggle={<ThemeToggle />}
    />
  );
}

export default NavBar;
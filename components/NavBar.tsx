import React from "react";
import { getTranslations } from "next-intl/server";
import ClientNavBar from "./ClientNavBar";
import { ThemeToggle } from "./theme/ThemeToggle";

async function NavBar() {
  const t = await getTranslations();

  return (
    <ClientNavBar
      translations={{
        home: t('nav.home'),
        about: t('nav.about'),
        projects: t('nav.projects'),
        contact: t('nav.contact')
      }}
      themeToggle={<ThemeToggle />}
    />
  );
}

export default NavBar;
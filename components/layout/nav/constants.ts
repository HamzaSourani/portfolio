export const getNavLink = (lng: string) => [
  {
    label: "layout.nav.home",
    href: `/${lng}`,
    isDisplayOnSmallScreen: true,
  },
  {
    label: "layout.nav.projects",
    href: `/${lng}/projects`,
    isDisplayOnSmallScreen: false,
  },
  {
    label: "layout.nav.aboutMe",
    href: `/${lng}/aboutMe`,
    isDisplayOnSmallScreen: true,
  },
  {
    label: "layout.nav.contactMe",
    href: `/${lng}/contactMe`,
    isDisplayOnSmallScreen: true,
  },
];

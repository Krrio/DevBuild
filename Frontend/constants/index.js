export const HeroImages = [
  {
    id: 'hero-1',
    imgUrl: '/images/trustpilot.png',
  },
  {
    id: 'hero-2',
    imgUrl: '/images/logo-navbar.png',
  },
  {
    id: 'hero-3',
    imgUrl: '/images/logo-sidebar.png',
  },
];

export const NavLinks = [
  { id: 1, label: "Home", link: "/", imgUrl: '/icons/home.svg' },
  { id: 2, label: "About", link: "/about", imgUrl: '/icons/search.svg' },
  { id: 3, label: "Sell", link: "/sell", imgUrl: '/icons/add.svg',  },
  { id: 4, label: "Profile", link: "/profile", imgUrl: '/icons/user.svg',  },
]

export const HeroSectionImages = [
  {
    id: 'hero-1',
    imgUrl: '/images/hero-img.png',  
  },
];

export const textVariant = (delay) => ({
  hidden: {
    y: 20,  
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

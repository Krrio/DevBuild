import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef, useState } from "react";
import { HeroImages, NavLinks } from "@/constants";
import { ArrowRight } from "lucide-react"; // Import arrow icon from lucide-react

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const logoImage = HeroImages.find(hero => hero.id === 'hero-2').imgUrl;

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
}

export function StickyHeader() {
  const scrollY = useScrollY();
  const stickyNavRef = useRef(null);
  const { theme } = useTheme();
  const [active, setActive] = useState(false);

  const navLinks = useMemo(() => NavLinks, []);

  return (
    <header
      ref={stickyNavRef}
      className={`sticky top-0 z-50 px-10 py-7 xl:px-0 transition-all duration-300`}
    >
      <nav className="relative mx-auto flex items-center justify-between max-w-2xl">
        <motion.img
          className="h-20 w-20 object-contain"
          src={logoImage}
          alt="logo"
          animate={{
            y: scrollY >= 120 ? -50 : 0,
            opacity: scrollY >= 120 ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        />

        <ul className="sticky left-4 right-4 top-4 z-[60] hidden items-center justify-center gap-x-5 md:flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{
              boxShadow:
                scrollY >= 120
                  ? theme === "dark"
                    ? "0 0 0 1px rgba(255,255,255,.08), 0 1px 2px -1px rgba(255,255,255,.08), 0 2px 4px rgba(255,255,255,.04)"
                    : "0 0 0 1px rgba(17,24,28,.08), 0 1px 2px -1px rgba(17,24,28,.08), 0 2px 4px rgba(17,24,28,.04)"
                  : "none",
            }}
            transition={{
              ease: "linear",
              duration: 0.05,
              delay: 0.05,
            }}
            className="flex h-12 w-auto items-center justify-center overflow-hidden rounded-full px-6 py-2.5 transition-all bg-background md:p-1.5 md:py-2"
          >
            <nav className="relative h-full items-center justify-between gap-x-3.5 md:flex">
              <ul className="flex h-full flex-col justify-center gap-6 md:flex-row md:justify-start md:gap-0 lg:gap-1">
                {navLinks.map((navLink) => (
                  <li
                    key={navLink.id}
                    className="flex items-center justify-center px-[0.75rem] py-[0.375rem]"
                  >
                    <a href={navLink.link}>{navLink.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: scrollY >= 120 ? "auto" : 0,
              }}
              transition={{
                ease: "linear",
                duration: 0.25,
                delay: 0.05,
              }}
              className="!hidden overflow-hidden rounded-full md:!block"
            >
              <AnimatePresence>
                {scrollY >= 120 && (
                  <motion.ul
                    initial={{ x: "125%" }}
                    animate={{ x: "0" }}
                    exit={{
                      x: "125%",
                      transition: { ease: "linear", duration: 1 },
                    }}
                    transition={{ ease: "linear", duration: 0.3 }}
                    className="shrink-0 whitespace-nowrap"
                  >
                    <li>
                      <a
                        href="#"
                        className="bg-[#10B981] relative inline-flex w-fit items-center justify-center gap-x-1.5 overflow-hidden rounded-full bg-primary px-3 py-1.5 text-primary-foreground outline-none "
                      >
                        Add
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </ul>

        <motion.div
          className="z-[999] hidden items-center gap-x-5 md:flex"
          animate={{
            y: scrollY >= 120 ? -50 : 0,
            opacity: scrollY >= 120 ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        >
          <button className="bg-[#10B981] relative inline-flex w-fit items-center justify-center gap-x-1.5 overflow-hidden rounded-full bg-primary px-3 py-1.5 text-primary-foreground outline-none ">
            Login
          </button>
        </motion.div>

        {/* Sheet with hamburger menu */}
        <Sheet>
          <SheetTrigger asChild>
            <motion.button
              onClick={() => setActive((prev) => !prev)}
              animate={active ? "open" : "close"}
              className="relative flex h-8 w-8 items-center justify-center rounded-md md:hidden"
            >
              <motion.span
                style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
                className="absolute h-0.5 w-5 bg-black dark:bg-white"
                variants={{
                  open: {
                    rotate: ["0deg", "0deg", "45deg"],
                    top: ["35%", "50%", "50%"],
                  },
                  close: {
                    rotate: ["45deg", "0deg", "0deg"],
                    top: ["50%", "50%", "35%"],
                  },
                }}
                transition={{ duration: 0.3 }}
              ></motion.span>
              <motion.span
                style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
                className="absolute h-0.5 w-5 bg-black dark:bg-white"
                variants={{
                  open: {
                    opacity: 0,
                  },
                  close: {
                    opacity: 1,
                  },
                }}
              ></motion.span>
              <motion.span
                style={{ left: "50%", bottom: "30%", x: "-50%", y: "-50%" }}
                className="absolute h-0.5 w-5 bg-black dark:bg-white"
                variants={{
                  open: {
                    rotate: ["0deg", "0deg", "-45deg"],
                    top: ["65%", "50%", "50%"],
                  },
                  close: {
                    rotate: ["-45deg", "0deg", "0deg"],
                    top: ["50%", "50%", "65%"],
                  },
                }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.button>
          </SheetTrigger>

          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navigate through the sections.
              </SheetDescription>
            </SheetHeader>
            <ul className="flex flex-col gap-y-4 mt-6"> {/* Added margin-top */}
              <AnimatePresence>
                {navLinks.map((navLink, index) => (
                  <motion.li
                    key={navLink.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1, // Delay between items
                    }}
                    className="flex items-center text-lg text-primary group"
                  >
                    <a href={navLink.link} className="flex items-center">
                      {navLink.label}
                      <motion.span
                        className="ml-2"
                        whileHover={{ x: 5 }} // Move arrow to the right on hover
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ArrowRight className="h-4 w-4 text-primary group-hover:text-primary-dark" />
                      </motion.span>
                    </a>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, stagger, useAnimate, AnimatePresence } from "framer-motion";
import "@/app/globals.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
// Custom click away hook
const useClickAway = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, callback]);
};

interface LinksComponentProps {
  selected: string;
  onSectionClick?: (section: string) => void;
  onClose: () => void;
}

const LinksComponent = ({ selected, onSectionClick, onClose }: LinksComponentProps) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (scope.current) {
      animate(
        "a",
        {
          x: [20, 0],
          opacity: [0, 1],
        },
        {
          duration: 0.3,
          delay: stagger(0.08),
          ease: "easeOut",
        }
      );
    }
  }, [animate, scope]);

  const handleLinkClick = (section: string, e: React.MouseEvent) => {
    e.preventDefault();
    onSectionClick?.(section);
    onClose();
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      className="fixed right-2 sm:right-4 top-[64px] sm:top-[74px] lg:top-[84px] w-[70%] sm:w-[60%] min-w-[160px] max-w-[220px] flex flex-col containerNav z-[100] shadow-xl"
      ref={scope}
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {["Home", "About", "Projects", "Skills", "Contact"].map((section, index) => (
        <motion.a
          key={section}
          href={`#${section}`}
          onClick={(e) => handleLinkClick(section, e)}
          className={`text-sm font-medium w-full text-center p-3 transition-all duration-200 hover:bg-[#112240] hover:text-[var(--text-special)] flex items-center justify-center gap-2 ${
            selected === section ? "text-[var(--text-special)] bg-[#112240]" : ""
          }`}
          whileHover={{
            x: 5,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 },
          }}
        >
          <span className={`text-xs font-mono ${
            selected === section ? "text-[var(--text-special)]" : "text-[var(--text-color--op)]"
          }`}>
            0{index}.
          </span>
          <span>{section}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};

interface LinksComponenTProps {
  sectionSelected: string;
  onSectionClick?: (section: string) => void;
}

const LinksComponenT = ({ sectionSelected, onSectionClick }: LinksComponenTProps) => {
  const [navLinks, setNavLinks] = useState(false);
  const [switchNavLinks, setSwitchNavLinks] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [scope, animate] = useAnimate();
  const router = useRouter();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setIsClient(true);
    // Set initial responsive state
    const isMobile = window.innerWidth < 1024;
    setSwitchNavLinks(isMobile);
  }, []);

  // Close mobile menu when clicking outside
  useClickAway(mobileMenuRef, () => {
    if (navLinks) {
      setNavLinks(false);
    }
  });

  // Handle responsive design
  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      const isMobile = window.innerWidth < 1024;
      setSwitchNavLinks(isMobile);
      
      // Close mobile menu when switching to desktop
      if (!isMobile && navLinks) {
        setNavLinks(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navLinks, isClient]);

  // Animate desktop navigation links
  useEffect(() => {
    if (!switchNavLinks && scope.current) {
      const timer = setTimeout(() => {
        animate(
          scope.current.children,
          {
            y: [-15, 0],
            opacity: [0, 1],
          },
          {
            duration: 0.6,
            delay: stagger(0.1),
            ease: "easeOut",
          }
        );
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [scope, animate, switchNavLinks]);

  const handleSectionClick = (section: string, e: React.MouseEvent) => {
    e.preventDefault();
    onSectionClick?.(section);
  };

  const handleLogoClick = () => {
    onSectionClick?.("Home");
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setNavLinks(false);
  };

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && navLinks) {
        setNavLinks(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [navLinks]);

  // Navbar animation variants
  const navbarVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav
      className={`z-[1000] font-extrabold fixed inset-x-0 top-0 w-full h-[60px] sm:h-[70px] lg:h-[80px] navBarContainer 
      backdrop-blur-xl backdrop-filter bg-[var(--bg-nav)] transition-all duration-300 shadow-lg`}
      variants={navbarVariants}
      initial="visible"
      animate="visible"
    >
      <div className="mx-auto max-w-7xl w-full h-full px-3 sm:px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo with animation */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Image
            priority
            className={`cursor-pointer transition-all duration-300 ${
              !switchNavLinks ? "w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] lg:w-[64px] lg:h-[64px]" : "w-[40px] h-[40px] sm:w-[48px] sm:h-[48px]"
            }`}
            src="./ES.svg"
            alt="logo"
            width={!switchNavLinks ? 64 : 48}
            height={!switchNavLinks ? 64 : 48}
            onClick={handleLogoClick}
          />
        </motion.div>

        {/* Desktop Navigation */}
        {isClient && !switchNavLinks ? (
          <motion.div 
            className="flex items-center gap-4 lg:gap-6 xl:gap-8" 
            ref={scope}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {["Home", "About", "Projects", "Skills", "Contact"].map((section, index) => (
              <motion.a
                key={section}
                href={`#${section}`}
                onClick={(e) => handleSectionClick(section, e)}
                className={`text-xs sm:text-sm font-medium relative transition-all duration-300 flex items-center gap-1.5 lg:gap-2 group ${
                  sectionSelected === section ? "text-[var(--text-special)]" : "text-[var(--text-color)] hover:text-[var(--text-special)]"
                }`}
                whileHover={{
                  y: -2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 },
                }}
              >
                <span className={`text-[10px] sm:text-xs font-mono transition-all duration-300 ${
                  sectionSelected === section ? "text-[var(--text-special)]" : "text-[var(--text-color--op)] group-hover:text-[var(--text-special)]"
                }`}>
                  0{index}.
                </span>
                <span className="font-medium">{section}</span>
                {/* Active indicator */}
                {sectionSelected === section && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--text-special)]"
                    layoutId="activeSection"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </motion.a>
            ))}
          </motion.div>
        ) : isClient ? (
          /* Mobile Menu Button and Dropdown */
          <div ref={mobileMenuRef} className="relative flex items-center">
            <motion.button
              onClick={() => setNavLinks(!navLinks)}
              className="p-2 sm:p-2.5 hover:bg-[#112240] rounded-lg transition-colors duration-200 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle navigation menu"
              aria-expanded={navLinks}
            >
              <motion.div
                animate={{ rotate: navLinks ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
              >
                {navLinks ? (
                  <FaTimes className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--text-special)]" />
                ) : (
                  <FaBars className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--text-color)]" />
                )}
              </motion.div>
            </motion.button>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence mode="wait">
              {navLinks && (
                <LinksComponent
                  selected={sectionSelected}
                  onSectionClick={onSectionClick}
                  onClose={closeMobileMenu}
                />
              )}
            </AnimatePresence>
          </div>
        ) : (
          /* Loading placeholder */
          <div className="w-10 h-10" />
        )}
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {navLinks && switchNavLinks && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[99]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default LinksComponenT;
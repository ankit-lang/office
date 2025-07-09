"use client";
import {
      Navbar,
      NavBody,
      NavItems,
      MobileNav,
      NavbarLogo,
      NavbarButton,
      MobileNavHeader,
      MobileNavToggle,
      MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { useState } from "react";

export function NavbarDemo() {
      const navItems = [
            {
                  name: "Home",
                  link: "/",
            },
            {
                  name: "About Us",
                  link: "/about",
            },
            {
                  name: "Pricing ",
                  link: "#contact",
            },
            {
                  name: "Services",
                  link: "#contact",
            },
            {
                  name: "Blog",
                  link: "#contact",
            },

      ];

      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

      return (
            <div className="fixed z-[100] w-full">
                  <Navbar className=" !top-2 mt-2  " >
                        {/* Desktop Navigation */}
                        <NavBody className="!shadow-lg !bg-yellow-50" >
                              <NavbarLogo />
                              {/* Updated NavItems rendering for client-side navigation */}
                              <div className="flex gap-4">
                                    {navItems.map((item, idx) => (
                                          <Link key={`desktop-link-${idx}`} href={item.link} passHref legacyBehavior>
                                                <a className="relative text-neutral-600 dark:text-neutral-300">
                                                      {item.name}
                                                </a>
                                          </Link>
                                    ))}
                              </div>
                              <div className="flex items-center gap-4">
                                    <NavbarButton variant="secondary">Carrer</NavbarButton>
                                    <NavbarButton variant="primary">Contact</NavbarButton>
                              </div>
                        </NavBody>

                        {/* Mobile Navigation */}
                        <MobileNav>
                              <MobileNavHeader>
                                    <NavbarLogo />
                                    <MobileNavToggle
                                          isOpen={isMobileMenuOpen}
                                          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    />
                              </MobileNavHeader>

                              <MobileNavMenu
                                    isOpen={isMobileMenuOpen}
                                    onClose={() => setIsMobileMenuOpen(false)}
                              >
                                    {navItems.map((item, idx) => (
                                          <Link
                                                key={`mobile-link-${idx}`}
                                                href={item.link}
                                                passHref
                                                legacyBehavior
                                          >
                                                <a
                                                      onClick={() => setIsMobileMenuOpen(false)}
                                                      className="relative text-neutral-600 dark:text-neutral-300"
                                                >
                                                      <span className="block">{item.name}</span>
                                                </a>
                                          </Link>
                                    ))}
                                    <div className="flex w-full flex-col gap-4">
                                          <NavbarButton
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                variant="primary"
                                                className="w-full"
                                          >
                                                Login
                                          </NavbarButton>
                                          <NavbarButton
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                variant="primary"
                                                className="w-full"
                                          >
                                                Book a call
                                          </NavbarButton>
                                    </div>
                              </MobileNavMenu>
                        </MobileNav>
                  </Navbar>
                  <DummyContent />

                  {/* Navbar */}
            </div>
      );
}

const DummyContent = () => {
      return (
            <>
            </>
      );
};

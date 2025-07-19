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
                  link: "/pricing",
            },
            {
                  name: "Services",
                  link: "/services",
            },
            {
                  name: "Blog",
                  link: "/blog",
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
                                          <Link
                                                key={`desktop-link-${idx}`}
                                                href={item.link}
                                                className="relative text-neutral-600 dark:text-neutral-300 cursor-pointer"
                                                // passHref is not needed for Next.js 13+ and can cause issues if used with <Link> directly
                                          >
                                                {item.name}
                                          </Link>
                                    ))}
                              </div>
                              <div className="flex items-center gap-4">
                                    <Link  href="/career" className="cursor-pointer">
                                          <NavbarButton variant="secondary">Career</NavbarButton>
                                    </Link>
                                    <Link  href="/contact" className="cursor-pointer">
                                          <NavbarButton variant="primary">Contact</NavbarButton>
                                    </Link>
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
                                                className="relative text-neutral-600 dark:text-neutral-300 cursor-pointer"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                // passHref is not needed here either
                                          >
                                                <span className="block">{item.name}</span>
                                          </Link>
                                    ))}
                                    <div className="flex w-full flex-col gap-4">
                                          <Link href="/career" className="cursor-pointer">
                                                <NavbarButton
                                                      onClick={() => setIsMobileMenuOpen(false)}
                                                      variant="primary"
                                                      className="w-full"
                                                >
                                                      career
                                                </NavbarButton>
                                          </Link>
                                          <Link href="/contact" className="cursor-pointer">
                                                <NavbarButton
                                                      onClick={() => setIsMobileMenuOpen(false)}
                                                      variant="primary"
                                                      className="w-full"
                                                >
                                                      contact us
                                                </NavbarButton>
                                          </Link>
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

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
import { usePathname } from "next/navigation";
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

      const pathname = usePathname();
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

      return (
            <div className="fixed top-0 left-0 right-0 z-[100]">
                  <Navbar className="!top-0 mt-0" >
                        {/* Desktop Navigation */}
                        <NavBody className="!shadow-lg !bg-yellow-50" >
                              <NavbarLogo />
                              {/* Updated NavItems rendering for client-side navigation */}
                              <div className="flex gap-6">
                                    {navItems.map((item, idx) => {
                                          const isActive = pathname === item.link;
                                          return (
                                                <Link
                                                      key={`desktop-link-${idx}`}
                                                      href={item.link}
                                                      className={`relative inline-block border-b-2 border-transparent px-1 text-sm font-semibold transition duration-200 ease-out ${
                                                            isActive
                                                                  ? "border-amber-500 text-black dark:text-white"
                                                                  : "text-neutral-600 dark:text-neutral-300 hover:scale-105 hover:border-amber-500 hover:text-black dark:hover:text-white"
                                                      }`}
                                                      // passHref is not needed for Next.js 13+ and can cause issues if used with <Link> directly
                                                >
                                                      {item.name}
                                                </Link>
                                          );
                                    })}
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
                                    {navItems.map((item, idx) => {
                                          const isActive = pathname === item.link;
                                          return (
                                                <Link
                                                      key={`mobile-link-${idx}`}
                                                      href={item.link}
                                                      className={`relative inline-block border-b-2 border-transparent px-1 py-1 text-base font-semibold transition duration-200 ease-out ${
                                                            isActive
                                                                  ? "border-amber-500 text-black dark:text-white"
                                                                  : "text-neutral-600 dark:text-neutral-300 hover:scale-105 hover:border-amber-500 hover:text-black dark:hover:text-white"
                                                      }`}
                                                      onClick={() => setIsMobileMenuOpen(false)}
                                                      // passHref is not needed here either
                                                >
                                                      <span className="block">{item.name}</span>
                                                </Link>
                                          );
                                    })}
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

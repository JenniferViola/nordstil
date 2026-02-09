import Logo from "@/components/ui/brand/Logo";
import { Divider } from "@/components/ui/Divider";
import { Link } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import {
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialFacebook,
  SlSocialYoutube,
} from "react-icons/sl";

export default function Footer() {
  const footerSections = [
    {
      title: "Shop",
      links: [
        { label: "New Arrivals", href: "/new" },
        { label: "Outerwear", href: "/search?query=outerwear" },
        { label: "Tops", href: "/search?query=tops" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Home", href: "/" },
        { label: "Magazine", href: "/magazine" },
        { label: "All Products", href: "/search" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "My Account", href: "/account" },
        { label: "Help Center", href: "/help" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-primary-750 py-10 text-[0.75rem]">
      <div
        className="max-w-[120rem] mx-auto px-6 md:px-8 xxl:px-0 flex flex-col
          gap-8 relative"
      >
        <div
          id="footer-top"
          className="flex flex-col gap-4 md:grid md:grid-cols-2
            md:justify-between"
        >
          <div className="flex gap-4 justify-between flex-col">
            <div
              id="logo"
              className="flex flex-col gap-2 md:col-span-1 lg:col-span-2"
            >
              <Logo
                variant="light"
                className="text-[1.5rem] md:text-[1.4rem]"
              />
              <p className="text-secondary-200/70">Scandinavian simplicity.</p>
            </div>
          </div>
          {/* Navigation Section */}
          <div
            className="flex flex-col justify-between gap-4 md:flex-row
              md:justify-end"
          >
            <div
              id="nav-group"
              className="md:flex md:justify-between md:w-[50rem] md:gap-8"
            >
              {footerSections.map((section) => (
                <div key={section.title} className="flex flex-col">
                  {/* Mobile - Accordion */}
                  <div className="md:hidden">
                    <Accordion type="single" collapsible>
                      <AccordionItem
                        value={section.title}
                        className="border-secondary-200/20"
                      >
                        <AccordionTrigger
                          className="text-secondary-300 uppercase
                            tracking-widest text-xs py-3"
                        >
                          {section.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-3 pb-2">
                            {section.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  to={link.href}
                                  className="text-secondary-200/70
                                    hover:text-secondary-100 transition-colors"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Desktop - Nav */}
                  <div id="desktop-nav-item" className="hidden md:block">
                    <h4
                      className="text-secondary-100 font-medium mb-2 text-xs
                        tracking-widest uppercase"
                    >
                      {section.title}
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            to={link.href}
                            className="text-secondary-200/70
                              hover:text-secondary-100 transition-colors
                              duration-200"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="socials"
          className="flex gap-3 items-center text-secondary-200"
        >
          <SlSocialInstagram
            className="hover:text-secondary-100 cursor-pointer
              transition-colors"
            size={20}
          />

          <SlSocialTwitter
            className="hover:text-secondary-100 cursor-pointer
              transition-colors"
            size={20}
          />

          <SlSocialFacebook
            className="hover:text-secondary-100 cursor-pointer
              transition-colors"
            size={20}
          />
          <SlSocialYoutube
            className="hover:text-secondary-100 cursor-pointer
              transition-colors"
            size={20}
          />
        </div>
        <Divider variant="light" className="opacity-30" />

        <div
          id="bottom"
          className="grid grid-cols-1 md:grid-cols-3 items-center gap-4
            text-[0.7rem] text-secondary-200/40"
        >
          <div id="image-credits" className="text-center md:text-left">
            <p>
              Images sourced from{" "}
              <Link
                to="https://unsplash.com"
                className="underline decoration-dotted hover:text-secondary-100"
              >
                Unsplash
              </Link>
              .
            </p>
          </div>

          <div id="copyright-info" className="text-center">
            <p>&copy; 2026 Nordstil. All rights reserved.</p>
          </div>

          <div
            id="privacy-policy"
            className="hidden md:block text-center md:text-right"
          >
            <p>Privacy Policy, Terms</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

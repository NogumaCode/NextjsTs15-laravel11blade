import { PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    { href: "https://facebook.com/", iconClass: "icon-facebook" },
    { href: "https://linkedin.com/", iconClass: "icon-in" },
    { href: "https://twitter.com/", iconClass: "icon-twitter" },
    { href: "https://youtube.com/", iconClass: "icon-youtube" },
  ];

  const footerNavItems = [
    {
      heading: "Quick Links",
      links: [
        { label: "About Us", href: "/" },
        { label: "Services", href: "/" },
        { label: "Case Studies", href: "/" },
        { label: "Contact", href: "/" },
      ],
    },
    {
      heading: "Pages",
      links: [
        { label: "About Us", href: "/" },
        { label: "Services", href: "/" },
        { label: "Case Studies", href: "/" },
        { label: "Contact", href: "/" },
      ],
    },
    {
      heading: "Blog",
      links: [
        { label: "All Blog", href: "/" },
        { label: "Services", href: "/" },
        { label: "Case Studies", href: "/" },
        { label: "Contact", href: "/" },
      ],
    },
  ];

  return (
    <div className="footer-block bg-[#0f1e33] pt-[60px]">
      <div className="container">
        <div className="flex max-lg:flex-col max-lg:items-start gap-y-10 pb-10">
          {/* Company Info */}
          <div className="lg:w-1/4">
            <div className="footer-company-infor flex flex-col justify-between gap-5">
              <Image
                width={4000}
                height={4000}
                className="footer-logo w-[145px]"
                src="/images/LogoWhite.png"
                alt="img"
              />
              <div className="text caption1 text-white">
                The jobs report soundly beat expectations, with job gains broadly spread across the economy and about
                60% higher.
              </div>
              <div className="list-social flex items-center gap-2">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    className="item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center"
                    href={link.href}
                    target="_blank"
                  >
                    <i className={`${link.iconClass} text-sm`}></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:w-1/2">
            <div className="footer-navigate flex items-center justify-center gap-20">
              {footerNavItems.map((navItem, index) => (
                <div className="footer-nav-item" key={index}>
                  <div className="item-heading text-button-sm text-white">{navItem.heading}</div>
                  <ul className="list-nav mt-1 text-white">
                    {navItem.links.map((link, linkIndex) => (
                      <li className="mt-3" key={linkIndex}>
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/4">
            <div className="company-contact">
              <div className="heading text-button-sm text-white">NewsLetter</div>
              <div className="mt-3 flex items-start">
                <div className="text">
                  <div className="cpation2 text-surface text-white">Need Help? 24/7</div>
                  <div className="fw-700 text-white mt-1">566-888-18181</div>
                </div>
              </div>
              <div className="locate mt-3 flex items-center">
                <div className="caption1 text-surface text-white">187 2th st, Easy Chicago. USA</div>
              </div>
              <form className="send-block mt-5 flex items-center h-[45px] rounded-lg overflow-hidden">
                <input
                  className="caption1 text-secondary h-full w-full pr-4 pl-3"
                  type="text"
                  placeholder="Your Email Address"
                />
                <button className="flex items-center justify-center w-[45px] h-[45px] bg-blue-800 flex-shrink-0">
                  <PaperPlaneTilt className="text-white" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-line"></div>
        <div className="footer-bottom flex items-center justify-between pt-3 pb-3">
          <div className="left-block flex items-center">
            <div className="copy-right text-surface caption1 text-white">
              @2024 EasyTech. All Rights Reserved
            </div>
          </div>
          <div className="nav-link flex items-center gap-3 text-white">
            <a href="#" className="text-surface caption1 hover-underline">
              Terms of Services
            </a>
            <span className="text-surface caption1"> | </span>
            <a href="#" className="text-surface caption1 hover-underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

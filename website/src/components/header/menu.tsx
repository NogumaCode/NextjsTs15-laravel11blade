"use client";

import { List } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Menu = () => {
  const pathname = usePathname();
  const [fixedHeader, setFixedHeader] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  // メニュー項目を定義
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Services", path: "/service" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Blog", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    if (openMenuMobile) {
      document.body.style.overflow = "hidden"; // スクロール無効化
    } else {
      document.body.style.overflow = ""; // スクロール有効化
    }

    return () => {
      document.body.style.overflow = ""; // クリーンアップ
    };
  }, [openMenuMobile]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setOpenMenuMobile(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={`header-menu bg-white ${fixedHeader ? "fixed" : ""} `}>
        <div className="container flex items-center justify-between h-20">
          <Link className="menu-left-block" href="/">
            <Image
              src={"/images/Logo.png"}
              width={2000}
              height={1000}
              alt="logo"
              priority={true}
              className="w-[149px] max-sm:w-[132px]"
            />
          </Link>
          <div className="menu-center-block h-full">
            <ul className="menu-nav flex items-center xl:gap-2 h-full">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item h-full flex items-center justify-center ${
                    pathname === item.path ? "active" : ""
                  }`}
                >
                  <Link
                    className="nav-link text-title flex items-center gap-1"
                    href={item.path}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="menu-right-block flex items-center">
            <div className="icon-call">
              <i className="icon-phone-call text-4xl"></i>
            </div>
            <div className="text ml-3">
              {/* <div className="text caption1"> Free Consulatancy</div> */}
              <div className="number text-button"> +123 456 789</div>
            </div>
            <div
              className="menu-humburger hidden pointer"
              onClick={() => setOpenMenuMobile(!openMenuMobile)}
            >
              <List className="text-2xl" weight="bold" />
            </div>
          </div>
        </div>
        <div id="menu-mobile-block" className={` ${openMenuMobile && "open"} `}>
          <div className="menu-mobile-main">
            <div className="container">
              <ul className="menu-nav-mobile h-full pt-1 pb-1">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer"
                  >
                    <Link
                      className="nav-link-mobile flex items-center justify-between"
                      href={item.path}
                    >
                      <span className="body2 font-bold">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

import { Envelope, MapPin } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const TopNav = () => {
  const navList = [
    {
      label: "facebook",
      path: "https://facebook.com/",
      icon: "icon-facebook",
      icon_size: "text-sm",
    },
    {
      label: "linkendin",
      path: "https://linkendin.com/",
      icon: "icon-in",
      icon_size: "text-xs",
    },
    {
      label: "facebook",
      path: "https://twitter.com/",
      icon: "icon-twitter",
      icon_size: "text-xs",
    },
    {
      label: "facebook",
      path: "https://Instagram.com/",
      icon: "icon-insta",
      icon_size: "text-xs",
    },
    {
      label: "facebook",
      path: "https://youtube.com/",
      icon: "icon-youtube",
      icon_size: "text-xs",
    },
  ];
  return (
    <div className="bg-slate-600">
      <div className="container flex items-center justify-between h-[44px]">
        <div className="left-block flex items-center">
          <div className="location flex items-center max-lg:hidden">
            <MapPin className="text-white text-xl" />
            <span className="ml-2 caption1 text-white">
              160 Boradway 12th floor, New York
            </span>
          </div>

          <div className="mail lg:ml-7 flex items-center">
            <Envelope className="text-white text-xl" />
            <span className="ml-2 caption1 text-white">
              support@easylearningbd.com
            </span>
          </div>
        </div>
        <div className="right-block flex items-center gap-5">
          <div className="line h-6 w-px bg-grey max-sm:hidden"></div>
          <div className="list-social flex items-center gap-2.5 max-sm:hidden">
            {navList.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                target="_blank"
                className="item rounded-full w-8 h-8 border-grey border-2 flex items-center justify-center"
              >
                <i
                  className={`${item.icon} ${item.icon_size} flex justify-center items-center ml-[0.1rem]`}
                ></i>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;

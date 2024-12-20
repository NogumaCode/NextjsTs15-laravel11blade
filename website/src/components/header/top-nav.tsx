"use client";

import { Envelope, MapPin } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import useFetchSiteSettings from "@/hooks/useFetchSiteSettings";
import Loader from "@/components/loader";

const TopNav = () => {
  const { siteSettings, loading, error } = useFetchSiteSettings();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[44px]">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  if (!siteSettings) {
    return <div className="text-center">No site settings available.</div>;
  }

  return (
    <div className="bg-slate-600">
      <div className="container flex items-center justify-between h-[44px]">
        {/* 左側のブロック */}
        <div className="left-block flex items-center">
          {siteSettings.address && (
            <div className="location flex items-center max-lg:hidden">
              <MapPin className="text-white text-xl" />
              <span className="ml-2 caption1 text-white">
                {siteSettings.address}
              </span>
            </div>
          )}
          {siteSettings.email && (
            <div className="mail lg:ml-7 flex items-center">
              <Envelope className="text-white text-xl" />
              <span className="ml-2 caption1 text-white">
                {siteSettings.email}
              </span>
            </div>
          )}
        </div>

        {/* 右側のブロック */}
        <div className="right-block flex items-center gap-5">
          <div className="line h-6 w-px bg-grey max-sm:hidden"></div>
          <div className="list-social flex items-center gap-2.5 max-sm:hidden">
            {siteSettings.facebook && (
              <Link
                className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
                href={siteSettings.facebook}
                target="_blank"
              >
                <i className="icon-facebook text-sm"></i>
              </Link>
            )}
            <Link
              className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
              href="https://linkedin.com/"
              target="_blank"
            >
              <i className="icon-in text-[10px]"></i>
            </Link>
            <Link
              className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
              href="https://twitter.com/"
              target="_blank"
            >
              <i className="icon-twitter text-[10px]"></i>
            </Link>
            <Link
              className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
              href="https://instagram.com/"
              target="_blank"
            >
              <i className="icon-insta text-[10px]"></i>
            </Link>
            {siteSettings.youtube && (
              <Link
                className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
                href={siteSettings.youtube}
                target="_blank"
              >
                <i className="icon-youtube text-[10px]"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;

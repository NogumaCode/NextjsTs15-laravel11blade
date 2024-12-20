"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";

import Loader from "@/components/loader";
import useFetchFooterData from "@/hooks/useFetchFooterData";

const Footer = () => {
  const { footerData, loading, error } = useFetchFooterData();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[150px]">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  if (!footerData) {
    return <div className="text-center">No footer data available.</div>;
  }

  return (
    <div className="footer-block bg-[#0f1e33] pt-[60px]">
      <div className="container">
        {/* 上部のセクション */}
        <div className="flex max-lg:flex-col max-lg:items-start gap-y-10 pb-10">
          {/* 左カラム */}
          <div className="lg:w-1/4">
            <div className="footer-company-infor flex flex-col gap-5">
              <Image
                width={4000}
                height={4000}
                className="footer-logo w-[145px]"
                src="/images/LogoWhite.png"
                alt="Footer Logo"
              />
              <div className="text caption1 text-white">
                {footerData.footer_message}
              </div>
              <div className="list-social flex items-center gap-2">
                {footerData.facebook && (
                  <Link
                    className="item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center"
                    href={footerData.facebook}
                    target="_blank"
                  >
                    <i className="icon-facebook text-sm"></i>
                  </Link>
                )}
                <Link
                  className="item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center"
                  href="https://linkedin.com/"
                  target="_blank"
                >
                  <i className="icon-in text-xs"></i>
                </Link>
                <Link
                  className="item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center"
                  href="https://twitter.com/"
                  target="_blank"
                >
                  <i className="icon-twitter text-xs"></i>
                </Link>
                {footerData.youtube && (
                  <Link
                    className="item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center"
                    href={footerData.youtube}
                    target="_blank"
                  >
                    <i className="icon-youtube text-xs"></i>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* 中央カラム */}
          <div className="lg:w-1/2">
            <div className="footer-navigate flex items-center justify-center gap-20">
              {["Quick Links", "Pages", "Blog"].map((section, idx) => (
                <div key={idx} className="footer-nav-item">
                  <div className="item-heading text-button-sm text-white">
                    {section}
                  </div>
                  <ul className="list-nav mt-1 text-white">
                    {["About Us", "Services", "Case Studies", "Contact"].map(
                      (link, index) => (
                        <li key={index} className="mt-3">
                          <Link
                            className="caption1 has-line-before line-white text-surface hover-underline"
                            href="/"
                          >
                            {link}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 右カラム */}
          <div className="lg:w-1/4">
            <div className="company-contact">
              <div className="heading text-button-sm text-white">NewsLetter</div>
              <div className="mt-3 flex items-start">
                <div className="text">
                  <div className="caption2 text-surface text-white">
                    Need Help? 24/7
                  </div>
                  <div className="fw-700 text-white mt-1">
                    {footerData.phone}
                  </div>
                </div>
              </div>
              <div className="locate mt-3 flex items-center">
                <div className="caption1 text-surface text-white">
                  {footerData.address}
                </div>
              </div>
              <form className="send-block mt-5 flex items-center h-[45px] rounded-lg overflow-hidden">
                <input
                  className="caption1 text-secondary h-full w-full pr-4 pl-3"
                  type="text"
                  placeholder="Your Email Address"
                />
                <button className="flex items-center justify-center w-[45px] h-[45px] bg-blue-800 flex-shrink-0">
                  <Icon.PaperPlaneTilt className="text-white" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 下部のセクション */}
        <div className="border-line"></div>
        <div className="footer-bottom flex items-center justify-between pt-3 pb-3">
          <div className="left-block flex items-center">
            <div className="copy-right text-surface caption1 text-white">
              @2024 EasyTech. All Rights Reserved
            </div>
          </div>
          <div className="nav-link flex items-center gap-3 text-white">
            <Link className="text-surface caption1 hover-underline" href="#">
              Terms of Services
            </Link>
            <span className="text-surface caption1">|</span>
            <Link className="text-surface caption1 hover-underline" href="#">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

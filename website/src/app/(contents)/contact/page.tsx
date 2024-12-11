import Breadcrumb from "@/components/breadcrumb";
import { Clock, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const ContactPage = () => {
  const socialLinks = [
    { href: "https://facebook.com/", icon: "icon-facebook" },
    { href: "https://linkedin.com/", icon: "icon-in" },
    { href: "https://twitter.com/", icon: "icon-twitter" },
    { href: "https://youtube.com/", icon: "icon-youtube" },
  ];

  const moreInfo = [
    {
      icon: <Clock weight="bold" className="text-blue text-2xl" />,
      text: "8AM - 6PM",
    },
    {
      icon: <Phone weight="bold" className="text-blue text-2xl" />,
      text: "454-454-545",
    },
    {
      icon: <EnvelopeSimple weight="bold" className="text-blue text-2xl" />,
      text: "support@easylearningbd.com",
    },
    {
      icon: <MapPin weight="bold" className="text-blue text-2xl" />,
      text: "57 R, india, usa",
    },
  ];

  return (
    <>
      <main className="content">
        <Breadcrumb
          link="Contact Us"
          img="/images/header.webp"
          title="Contact Us"
          desc="Get In touch with us"
        />

        <div className="form-contact lg:py-[100px] sm:py-16 py-10">
          <div className="container flex items-center justify-center">
            <div className="xm:w-5/6 w-full flex max-lg:flex-col xl:items-center gap-y-8">
              <div className="w-full xl:w-2/5">
                <div className="infor bg-blue-500 rounded-xl p-10">
                  <div className="heading5 text-white">Get in Touch</div>
                  <div className="body3 text-white mt-2">
                    We will get back to you soon..
                  </div>

                  {/* Social Links */}
                  <div className="list-social flex flex-wrap items-center gap-3 md:mt-10 mt-6">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        className="item rounded-full w-12 h-12 flex items-center justify-center bg-slate-200"
                        href={link.href}
                        target="_blank"
                      >
                        <i className={`${link.icon} text-black`}></i>
                      </a>
                    ))}
                  </div>

                  {/* More Information */}
                  <div className="list-more-infor md:mt-10 mt-6">
                    {moreInfo.map((info, index) => (
                      <div className="item flex items-center gap-3 mt-5" key={index}>
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="line-y"></div>
                        <div className="text-button normal-case text-white">
                          {info.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full xl:w-3/5 xl:pl-20">
                <form className="form-block flex flex-col justify-between gap-5">
                  <div className="heading">
                    <div className="heading5">Request a message</div>
                    <div className="body3 text-secondary mt-2">
                      We will get back to you within 24 hours
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="w-full">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="w-full bg-slate-100 text-secondary caption1 px-4 py-3 rounded-lg"
                      />
                    </div>

                    <div className="w-full">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="w-full bg-slate-100 text-secondary caption1 px-4 py-3 rounded-lg"
                      />
                    </div>

                    <div className="col-span-2">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full bg-slate-100 text-secondary caption1 px-4 py-3 rounded-lg"
                      />
                    </div>

                    <div className="col-span-2 w-full">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        placeholder="Your Message"
                        className="w-full bg-slate-100 text-secondary caption1 px-4 py-3 rounded-lg"
                      ></textarea>
                    </div>

                    <div className="button-block">
                      <button className="button-main hover:border-blue-800 bg-blue-500 text-white text-button rounded-full">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;

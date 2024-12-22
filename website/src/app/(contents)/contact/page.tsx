"use client";

import Breadcrumb from "@/components/breadcrumb";
import { Clock, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import useContactForm from "@/hooks/useContactForm";
import { ContactFormType } from "@/types/content";

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

  const [formData, setFormData] = useState<ContactFormType>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const { isSubmitting, successMessage, errorMessage, submitForm } = useContactForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitForm(formData);
    if (successMessage) {
      setFormData({ name: "", subject: "", email: "", message: "" });
    }
  };

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
                  <div className="list-more-infor md:mt-10 mt-6">
                    {moreInfo.map((info, index) => (
                      <div className="item flex items-center gap-3 mt-5" key={index}>
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="line-y"></div>
                        <div className="text-button normal-case text-white">{info.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-3/5 xl:pl-20">
                <form
                  onSubmit={handleSubmit}
                  className="form-block flex flex-col justify-between gap-5"
                >
                  <div className="heading">
                    <div className="heading5">Request a message</div>
                    <div className="body3 text-secondary mt-2">
                      We will get back to you within 24 hours
                    </div>
                  </div>
                  {successMessage && <p className="text-green-800">{successMessage}</p>}
                  {errorMessage && <p className="text-red-800">{errorMessage}</p>}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full bg-slate-100 text-secondary caption1 px-4 py-3 rounded-lg"
                    />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full bg-slate-100 text-secondary caption1 px-4 py-3 rounded-lg"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full bg-slate-100 text-secondary caption1 px-4 py-3 rounded-lg col-span-2"
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="w-full bg-slate-100 text-secondary caption1 px-4 py-3 rounded-lg col-span-2"
                      rows={4}
                    ></textarea>
                    <button
                      type="submit"
                      className="button-main hover:border-blue-800 bg-blue-500 text-white text-button rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
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

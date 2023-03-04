import React from "react";
import BrandLogo from "../../assets/Logo.png";
import {
  // FaPhoneSquareAlt,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="lg:text-left bg-[#ffffff1a] text-white">
      <div className="px-5 lg:px-14 py-10 text-center md:text-left">
        <div className=" flex flex-col lg:grid lg:grid-cols-4 justify-between gap-10">
          <div className="flex justify-start flex-col">
            <div className="flex items-center">
              <a href="">
                <img src={BrandLogo} alt="Brand Logo" srcset="" />
              </a>
            </div>

            <div className="social-links lg:hidden my-6">
              <ul className="connect flex text-3xl justify-start items-center gap-4">
                <li>
                  <a
                    href=" https://www.instagram.com"
                    title="Linkedin icon link"
                    alt="linkedin icon"
                    className="text-white instagram"
                  >
                    <FaInstagram className="p-1 rounded-full text-[24px]" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    title="Twitter link Icon"
                    alt="twitter icon"
                    className="text-white"
                  >
                    <FaTwitter className="p-1 rounded-full text-[24px] bg-[#55ace3]" />
                  </a>
                </li>
                <li>
                  <a
                    href="#whatsapp"
                    title="Whatsapp link icon"
                    alt="Whatsapp icon"
                    className="text-white "
                  >
                    {/* <FaPhoneSquareAlt /> */}
                    <FaWhatsapp className="p-1 rounded-full text-[24px] bg-[#48c95f]" />
                  </a>
                </li>
              </ul>
            </div>

            <p className="text-start mt-3">
              Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, Nigeria
            </p>

            <p className="my-3 lg:hidden text-start">
              <a
                href="mailto:hernalytics@gmail.com"
                className="text-neutral-600 dark:text-neutral-200"
              >
                hernalytics@gmail.com
              </a>
            </p>
            <p className="mb-3 lg:hidden text-start">
              <a
                href="tel:+234 801 234 5678"
                className="text-neutral-600 dark:text-neutral-200"
              >
                +234 801 234 5678
              </a>
            </p>
            <p className="mt-3 text-start">© 2022 Hernalytics</p>
          </div>

          <div className="flex lg:hidden text-start">
            <div className="">
              <h6 className="mb-6 fler font-semibold justify-start">About</h6>
              <p className="mb-6">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Our Story
                </a>
              </p>
              <p className="mb-6">
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  About Hermalytics
                </a>
              </p>
              <p>
                <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                  Videos
                </a>
              </p>
            </div>
            <div className=" ml-14">
              <h6 className="mb-6 flex font-semibold uppercasstart">Support</h6>
              <p className="mb-6">
                <a
                  href="#faq"
                  className="text-neutral-600 dark:text-neutral-200"
                >
                  FAQs
                </a>
              </p>
              <p className="mb-6">
                <a
                  href="#privacy-policy"
                  className="text-neutral-600 dark:text-neutral-200"
                >
                  Privacy Policy
                </a>
              </p>
              <p className="mb-6">
                <a
                  href="#privacy-policy"
                  className="text-neutral-600 dark:text-neutral-200"
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </div>

          <div className="base text-start text-sm lg:hidden font-medium">
              <p className="mb-3">
                <a
                  href="#privacy-policy"
                  className="text-neutral-600 dark:text-neutral-200"
                >
                  Privacy Policy
                </a>
              </p>
              <p className="mb-6">
                <a
                  href="#privacy-policy"
                  className="text-neutral-600 dark:text-neutral-200"
                >
                  Terms of Service
                </a>
              </p>
            </div>

          <div className="hidden lg:flex flex-col">
            <h6 className="mb-6 flex justify-center font-semibold uppercase md:justify-start">
              About
            </h6>
            <p className="mb-6">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Our Story
              </a>
            </p>
            <p className="mb-6">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Blog
              </a>
            </p>
            <p className="mb-6">
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                About Hermalytics
              </a>
            </p>
            <p>
              <a href="#!" className="text-neutral-600 dark:text-neutral-200">
                Videos
              </a>
            </p>
          </div>

          <div className="hidden lg:flex flex-col">
            <h6 className="mb-6 flex justify-center font-semibold uppercase md:justify-start">
              Support
            </h6>
            <p className="mb-6">
              <a href="#faq" className="text-neutral-600 dark:text-neutral-200">
                FAQs
              </a>
            </p>
            <p className="mb-6">
              <a
                href="#privacy-policy"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Privacy Policy
              </a>
            </p>
            <p className="mb-6">
              <a
                href="#privacy-policy"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Terms of Service
              </a>
            </p>
          </div>

          <div className="hidden lg:flex flex-col">
            <h6 className="mb-6 flex justify-center font-semibold uppercase md:justify-start">
              Let's chat
            </h6>
            <p className="mb-6">
              <a
                href="mailto:hernalytics@gmail.com"
                className="text-neutral-600 dark:text-neutral-200"
              >
                hernalytics@gmail.com
              </a>
            </p>
            <p className="mb-6">
              <a
                href="tel:+234 801 234 5678"
                className="text-neutral-600 dark:text-neutral-200"
              >
                +234 801 234 5678
              </a>
            </p>
            <div className="social-links mb-6 hidden lg:flex">
              <ul className="connect flex text-3xl justify-start items-center gap-4">
                <li>
                  <a
                    href=" https://www.instagram.com"
                    title="Linkedin icon link"
                    alt="linkedin icon"
                    className="text-white instagram"
                  >
                    <FaInstagram className="p-1 rounded-full text-[24px]" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    title="Twitter link Icon"
                    alt="twitter icon"
                    className="text-white"
                  >
                    <FaTwitter className="p-1 rounded-full text-[24px] bg-[#55ace3]" />
                  </a>
                </li>
                <li>
                  <a
                    href="#whatsapp"
                    title="Whatsapp link icon"
                    alt="Whatsapp icon"
                    className="text-white "
                  >
                    {/* <FaPhoneSquareAlt /> */}
                    <FaWhatsapp className="p-1 rounded-full text-[24px] bg-[#48c95f]" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

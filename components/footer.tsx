"use client";

import { useTranslations,useLocale } from "next-intl";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdWifiCalling3 } from "react-icons/md";
import { motion } from "framer-motion";
import logo from "../public/images/logo.png";
import logo1 from "../public/images/logo1.svg";
import Image from "next/image";
import { MdAttachEmail } from "react-icons/md";
import {
  Link, 
} from "@heroui/react";
import { FaFacebook } from "react-icons/fa";


const FooterVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.5, when: "beforeChildren" } },
};

const ChlidrenLink1Variants = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

const ChlidrenLink2Variants = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

const ChlidrenLoacationVariants = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

export const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();


  return (
<div className="border-b border-neutral-900 bg-[#2a2a2a] dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 text-gray-800 p-6 mt-8">
  <div className="container mx-auto px-4 sm:px-10 text-white">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left px-4 border-neutral-900 pb-4">
      
      {/* العمود الأول */}
      <div className="box">
        {locale === "en" ? (
          <Image className="w-[200px] mx-auto md:mx-0 " src={logo1} alt="Logo" />
        ) : (
          <Image className="w-[200px] mx-auto md:mx-0 " src={logo} alt="Logo" />
        )}
        <motion.p
          initial={{ opacity: 0, x: locale === "en" ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className={`text-gray-300 mt-5 text-[20px] sm:text-center  ${locale === "en" ? "md:text-left" : "md:text-right"}`}
        >
          {t("companyDescription")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: locale === "en" ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className={`text-gray-300 sm:text-center  ${locale === "en" ? "md:text-left" : "md:text-right"} text-xl my-8`}
        >
          {t("contactPrompt")}
        </motion.p>
        <motion.ul className="flex justify-center md:justify-start items-center space-x-3 mt-3">
          <motion.li>
            <Link
              href="https://x.com/MASDARBM"
              target="_blank"
              className="ml-3 bg-gray-700 text-gray-400 flex justify-center items-center w-12 h-12 text-2xl transition duration-500 hover:bg-black rounded-md"
            >
              <FaSquareXTwitter />
            </Link>
          </motion.li>
          <motion.li>
            <Link
              href="https://www.linkedin.com/company/masdar%D9%85%D8%B5%D8%AF%D8%B1"
              target="_blank"
              className="bg-gray-700 text-gray-400 flex justify-center items-center w-12 h-12 text-2xl transition duration-500 hover:bg-blue-600 rounded-md"
            >
              <FaLinkedin />
            </Link>
          </motion.li>
          <motion.li>
            <Link
              href="https://www.facebook.com/Masdar.Group.sa/"
              target="_blank"
              className="bg-gray-700 text-gray-400 flex justify-center items-center w-12 h-12 text-2xl transition duration-500 hover:bg-blue-600 rounded-md"
            >
              <FaFacebook />
            </Link>
          </motion.li>
          <motion.li>
            <Link
              href="https://www.instagram.com/masdar.saudi/"
              target="_blank"
              className="bg-gray-700 text-gray-400 flex justify-center items-center w-12 h-12 text-2xl transition duration-500 hover:bg-red-600 rounded-md"
            >
              <FaInstagram />
            </Link>
          </motion.li>
        </motion.ul>
      </div>

      {/* العمود الثاني (روابط سريعة) */}

      <div className="box flex flex-col justify-center">
      <p className={`text-white ${locale === "en" ? "text-left" : "text-right"} text-xl mb-8`}>
      {t("quickLinks")}
        </p>
        <motion.ul
          variants={FooterVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-2 h-full w-fit "
        >
          <motion.li variants={ChlidrenLink1Variants} className="border-b border-neutral-900 pb-2">
            <Link
              href="mailto:info@mbm.com.sa"
              className="text-gray-300 hover:text-gray-400 hover:translate-x-3 transition duration-300 flex items-center"
            >
              <MdOutlineKeyboardDoubleArrowRight className="text-[#ef3735] dark:text-blue-500 text-[20px]" /> {t("companyEmail")}
            </Link>
          </motion.li>
          <motion.li variants={ChlidrenLink2Variants} className="border-b border-neutral-900 pb-2">
            <Link
              href="https://masdar.co/ar/our-team/"
              className="text-gray-300 hover:text-gray-400 hover:translate-x-3 transition duration-300 flex items-center"
            >
              <MdOutlineKeyboardDoubleArrowRight className="text-[#ef3735] dark:text-blue-500 text-[20px]" /> <span>{t("boardMembers")}</span>
            </Link>
          </motion.li>
          <motion.li variants={ChlidrenLink1Variants} className="border-b border-neutral-900 pb-2">
            <Link
              href="https://masdar.co/ar/certificates/"
              className="text-gray-300 hover:text-gray-400 hover:translate-x-3 transition duration-300 flex items-center"
            >
              <MdOutlineKeyboardDoubleArrowRight className="text-[#ef3735] dark:text-blue-500 text-[20px]" /> <span>{t("certifications")}</span>
            </Link>
          </motion.li>
          <motion.li variants={ChlidrenLink2Variants} className="border-b border-neutral-900 pb-2">
            <Link
              href="https://masdar.co/ar/contact/#locations"
              className="text-gray-300 hover:text-gray-400 hover:translate-x-3 transition duration-300 flex items-center"
            >
              <MdOutlineKeyboardDoubleArrowRight className="text-[#ef3735] dark:text-blue-500 text-[20px]" /> <span>{t("branchLocations")}</span>
            </Link>
          </motion.li>
          <motion.li variants={ChlidrenLink2Variants} className="border-b border-neutral-900 pb-2">
            <Link
              href="https://masdar.co/ar/our-partners/"
              className="text-gray-300 hover:text-gray-400 hover:translate-x-3 transition duration-300 flex items-center"
            >
              <MdOutlineKeyboardDoubleArrowRight className="text-[#ef3735] dark:text-blue-500 text-[20px]" /> <span>{t("ourPartners")}</span>
            </Link>
          </motion.li>
          <motion.li variants={ChlidrenLink1Variants} className="border-b border-neutral-900 pb-2">
            <Link
              href="https://masdar.co/ar/contact/"
              className="text-gray-300 hover:text-gray-400 hover:translate-x-3 transition duration-300 flex items-center"
            >
              <MdOutlineKeyboardDoubleArrowRight className="text-[#ef3735] dark:text-blue-500 text-[20px]" /> <span>{t("contactUsLink")}</span>
            </Link>
          </motion.li>
        </motion.ul>
      </div>

      {/* العمود الثالث (روابط ذات صلة) */}
      <div className="box flex flex-col justify-center">
        <p className={`text-white ${locale === "en" ? "text-left" : "text-right"} text-xl mb-8`}>
          {t("relatedLinks")}
        </p>
        <motion.ul
          variants={FooterVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-2 h-full w-fit"
        >
          <motion.li variants={ChlidrenLink1Variants} className="border-b border-neutral-900 pb-2">
            <Link
              href="https://masdar.co/ar/about/"
              className="text-gray-300 hover:text-gray-400 hover:translate-x-3 transition duration-300 flex items-center"
            >
              <MdOutlineKeyboardDoubleArrowRight className="text-[#ef3735] dark:text-blue-500 text-[20px]" /> <span>{t("aboutMasdar")}</span>
            </Link>
          </motion.li>
          <motion.li variants={ChlidrenLink2Variants} className="border-b border-neutral-900 pb-2">
            <Link
              href="https://masdar.co/ar/about/#vision-mission"
              className="text-gray-300 hover:text-gray-400 hover:translate-x-3 transition duration-300 flex items-center"
            >
              <MdOutlineKeyboardDoubleArrowRight className="text-[#ef3735] dark:text-blue-500  text-[20px]" /> <span>{t("visionMission")}</span>
            </Link>
          </motion.li>
          <motion.li variants={ChlidrenLink1Variants} className="border-b border-neutral-900 pb-2">
            <Link
              href="https://masdar.co/ar/about/#history"
              className="text-gray-300 hover:text-gray-400 hover:translate-x-3 transition duration-300 flex items-center"
            >
              <MdOutlineKeyboardDoubleArrowRight className="text-[#ef3735] dark:text-blue-500 text-[20px]" /> <span>{t("ourHistory")}</span>
            </Link>
          </motion.li>
          <motion.li variants={ChlidrenLink2Variants} className="border-b border-neutral-900 pb-2">
            <Link
              href="https://masdar.co/ar/our-services/"
              className="text-gray-300 hover:text-gray-400 hover:translate-x-3 transition duration-300 flex items-center"
            >
              <MdOutlineKeyboardDoubleArrowRight className="text-[#ef3735] dark:text-blue-500 text-[20px]" /> <span>{t("ourServices")}</span>
            </Link>
          </motion.li>
          <motion.li variants={ChlidrenLink1Variants} className="border-b border-neutral-900 pb-2">
            <Link
              href="https://masdar.co/ar/products/"
              className="text-gray-300 hover:text-gray-400 hover:translate-x-3 transition duration-300 flex items-center"
            >
              <MdOutlineKeyboardDoubleArrowRight className="text-[#ef3735] dark:text-blue-500 text-[20px]" /> <span>{t("products")}</span>
            </Link>
          </motion.li>
        </motion.ul>
      </div>

      {/* العمود الرابع (اتصل بنا) */}
      <motion.div
        className="box flex-col justify-center"
        variants={FooterVariants}
        initial="hidden"
        whileInView="visible"
      >
        <p className={`text-white ${locale === "en" ? "text-left" : "text-right"} text-xl mb-8`}>
          {t("contactUsTitle")}
        </p>
        <div className="w-fit flex flex-col space-y-8 ">
          <motion.div variants={ChlidrenLoacationVariants} className="flex items-center lg:justify-start text-gray-400">
            <MdAttachEmail className="text-[30px] text-[#ef3735] dark:text-blue-500 ml-1" />
            <Link href="mailto:info@mbm.com.sa" className="text-gray-300 ml-2">
              info@mbm.com.sa
            </Link>
          </motion.div>

          <motion.div variants={ChlidrenLoacationVariants} className="flex items-center lg:justify-start text-gray-400">
            <MdWifiCalling3 className="text-[30px] text-[#ef3735] dark:text-blue-500" />
            <Link href="tel:+9668001240272" className="text-gray-300 ml-2">
              <span>8001240272</span>
            </Link>
          </motion.div>

          <motion.div variants={ChlidrenLoacationVariants} className="flex items-center lg:justify-start text-gray-400">
            <div className="ml-2 flex">
              <IoLocationSharp className="text-[30px] text-[#ef3735] dark:text-blue-500" />
              <Link className="text-gray-300 flex flex-col " href="https://www.google.com/maps/place/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9+%D9%85%D8%B5%D8%AF%D8%B1%E2%80%AD/@24.8445186,46.7570114,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2efeae1c979a9b:0x5d51839bbc60bf7!8m2!3d24.8445186!4d46.7570114!16s%2Fg%2F11g8cyrx_4?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D">
                <span className="text-start">{t("headOfficeAddress1")}</span>
                <span className="text-start">{t("headOfficeAddress2")}</span> 
                <span className="text-start">{t("headOfficeAddress3")}</span>
                <span className="text-start">{t("headOfficeAddress4")}</span> 
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</div>

  );
};

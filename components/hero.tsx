"use client";
import Lottie from "lottie-react";
import logo1 from "../public/images/logo1.png";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";

export function Hero() {
  const locale = useLocale();
  const t = useTranslations("Hero");
  const { theme } = useTheme();

  const grandVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.5, when: "beforeChildren" } },
  };

  const Child1aAnd2dVariants = {
    hidden: { opacity: 0, x: locale === "en" ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const Child3Variants = {
    hidden: { opacity: 0, x: locale === "en" ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, staggerChildren: 0.03 },
    },
  };

  return (
    <section className=" border-b border-gray-600 dark:border-b dark:border-gray-600 ">
      <div className="container mx-auto px-6 mb-[50px]">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div
            variants={grandVariants}
            initial="hidden"
            whileInView="visible"
            className="lg:w-1/2 text-center lg:text-start"
          >
            <motion.h1
              variants={Child1aAnd2dVariants}
              className="text-3xl lg:text-4xl font-bold leading-snug text-gray-800 dark:text-white"
            >
              {t("title")}
            </motion.h1>

          </motion.div>

          <div className="lg:w-1/2">
            <Image
              src={logo1}
              alt="Selected Image"
              width={300}
              height={300}
              className="w-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

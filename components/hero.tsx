"use client";
import Lottie from "lottie-react";
import eidBlue from "../public/lottie/AnimationBlue.json";
import eidRed from "../public/lottie/AnimationRed.json";
import eid1Blue from "../public/lottie/Animation1Blue.json";
import eid1Red from "../public/lottie/Animation1Red.json";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

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
    visible: { opacity: 1, x: 0, transition: { duration: 1, staggerChildren: 0.03 } },
  };

  const NestedFrom3renVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section className=" border-b border-gray-600 dark:border-b dark:border-gray-600 
     mt-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* المحتوى النصي */}
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

            <motion.p
              variants={Child3Variants}
              className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
            >
              {t("description1")}{" "}
              <span className="font-semibold text-[#ef3735] dark:text-blue-400">
                {t("companyName")}
              </span>{" "}
              {t("description2")}
            </motion.p>

            <ul className="mt-6 space-y-3 text-lg text-gray-700 dark:text-gray-300">
              <motion.li variants={Child3Variants}>
                🎨 <span className="font-semibold">{t("feature1")}</span>
              </motion.li>
              <motion.li variants={Child3Variants}>
                📩 <span className="font-semibold">{t("feature2")}</span>
              </motion.li>
            </ul>

            <motion.h3
              variants={Child3Variants}
              className="mt-8 text-xl font-semibold text-[#ef3735] dark:text-blue-400"
            >
              {t("whyChooseUs")}
            </motion.h3>
            <motion.p
              variants={Child3Variants}
              className="mt-4 space-y-2 text-gray-700 dark:text-gray-300"
            >
              {t("details")
                .split("")
                .map((letter, index) => (
                  <motion.span key={index} variants={NestedFrom3renVariants}>
                    {letter}
                  </motion.span>
                ))}
            </motion.p>
          </motion.div>

          {/* الصورة */}
          <div className="lg:w-1/2">
            {locale === "en" ? (
              theme === "dark" ? <Lottie animationData={eid1Blue} className="w-full mx-auto" /> : <Lottie animationData={eid1Red} className="w-full mx-auto" />
            ) : (
              theme === "dark" ? <Lottie animationData={eidBlue} className="w-full mx-auto" /> : <Lottie animationData={eidRed} className="w-full mx-auto" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

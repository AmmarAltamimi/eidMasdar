"use client"
import Lottie from "lottie-react";
import mailAnimation from '../public/lottie/mail.json'
import { motion } from "framer-motion"
import { IoMdMail } from "react-icons/io";
import { useRef, useEffect } from 'react';
import { useForm } from '@formspree/react';
import { useTranslations } from 'next-intl';
import {
    Input,Button
} from "@heroui/react";
import { useTheme } from "next-themes";

const MailIcon = (props:any) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
      >
        <path
          d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
          fill="currentColor"
        />
      </svg>
    );
};

export const Contact = () => {
  const modal = useRef();
  const [state, handleSubmit] = useForm("xjkbgkyr");
  const t = useTranslations('Contact');
  const { theme } = useTheme(); 

  // useEffect(() => {
  //   if (state?.succeeded) {
  //     toast.success(t('successMessage'));
  //   }
  // }, [state, t]);

  return (
    <div id="content" className="   mt-8">
      <div className="container mx-auto px-10  pt-10 text-white">
        <div className="main-heading text-center mb-8">
          <motion.h2 initial={{ opacity: 0, y: -70 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl flex justify-center text-[#50545d]  lg:gap-x-2">
            <IoMdMail />
            <span>{t('newsletterTitle')}</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }} className="mt-4 text-[#50545d]  text-2xl">
            {t('newsletterSubtitle')}
          </motion.p>
        </div>
        
        <div className="content flex flex-col md:flex-row gap-8 items-center">
          <form className="w-full lg:w-1/2 relative" onSubmit={handleSubmit}>
            <Input
              labelPlacement="outside"
              placeholder={t('emailPlaceholder')}
              startContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
              type="email"
            />
            <Button  color={theme === "dark" ? "primary" : "danger"} type="submit" value="Send Message" className="mt-3">
              {state.submitting ? (
                <div className="flex items-center justify-center gap-1">
                  <span className="loading loading-spinner loading-md"></span> {t('subscribing')}
                </div>
              ) : t('subscribeNow')}
            </Button>
          </form>
          <div className="info w-full lg:w-1/2 flex justify-center items-center">
            <Lottie className="w-[400px]" animationData={mailAnimation} />
          </div>
        </div>
      </div>
    </div>
  );
};
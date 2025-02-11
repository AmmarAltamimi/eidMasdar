// Navbar.tsx
"use client";
import { useState, useTransition } from "react";
import logo from "../public/images/logo.png";
import logo1 from "../public/images/logo1.svg";
import { useLocale, useTranslations } from "next-intl";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
} from "@heroui/react";
import { ThemeSwitch } from "@/components/theme-switch";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const NavbarUi = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("NavbarUi");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();

  const changeLang = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    startTransition(() => {
      router.replace(`/${newLocale}`);
    });
  };

  const navItemClass =
    "w-fit p-3 rounded-sm transition duration-400 cursor-pointer overflow-hidden relative " +
    "hover:bg-white/20 " +
    "before:content-[''] before:absolute before:w-full before:h-[4px] before:top-0 before:-left-[100%] " +
    "before:bg-white dark:before:bg-white before:transition-all before:duration-500 hover:before:left-0";

  return (
    <Navbar
      className="bg-gradient-to-r from-[#ef3735] to-[#ef3735] dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 p-2"
      isBordered
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white "
        />
        <NavbarBrand>
          <Link href="https://masdar.co/ar/" target="_blank">
            {locale === "en" ? (
              <Image className="w-[200px]" src={logo1} alt="Logo" />
            ) : (
              <Image className="w-[200px]" src={logo} alt="Logo" />
            )}
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className={navItemClass}>
          <Link className="text-white" href="https://masdar.co/ar/" target="_blank">
            {t("home")}
          </Link>
        </NavbarItem>
        <NavbarItem className={navItemClass}>
          <Link className="text-white" href="https://masdar.co/ar/about/" target="_blank">
            {t("about")}
          </Link>
        </NavbarItem>
        <NavbarItem className={navItemClass}>
          <Link className="text-white" href="https://masdar.co/ar/our-services/" target="_blank">
            {t("services")}
          </Link>
        </NavbarItem>
        <NavbarItem className={navItemClass}>
          <Link className="text-white" href="https://www.masdaronline.com/en" target="_blank">
            {t("store")}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <button
            onClick={changeLang}
            disabled={isPending}
            className="text-white"
          >
            {locale === "en" ? "العربية" : "English"}
          </button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-[#050c1563] dark:bg-[#ef383580] mt-3 ">
        <NavbarItem className={navItemClass}>
          <Link className="text-[#1b1b27] dark:text-white " href="https://masdar.co/ar/" target="_blank">
            {t("home")}
          </Link>
        </NavbarItem>
        <NavbarItem className={navItemClass}>
          <Link className="text-[#1b1b27] dark:text-white" href="https://masdar.co/ar/about/" target="_blank">
            {t("about")}
          </Link>
        </NavbarItem>
        <NavbarItem className={navItemClass}>
          <Link className="text-[#1b1b27] dark:text-white" href="https://masdar.co/ar/our-services/" target="_blank">
            {t("services")}
          </Link>
        </NavbarItem>
        <NavbarItem className={navItemClass}>
          <Link className="text-[#1b1b27] dark:text-white" href="https://www.masdaronline.com/en" target="_blank">
            {t("store")}
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};

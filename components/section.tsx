// Section.tsx
"use client";
import eid1 from "../public/images/eid1.png";
import eid2 from "../public/images/eid2.png";
import eid3 from "../public/images/eid3.png";
import eid4 from "../public/images/eid4.png";
import eid5 from "../public/images/eid5.png";
import eid6 from "../public/images/eid6.png";
import eid7 from "../public/images/eid7.png";
import eid8 from "../public/images/eid8.png";
import eid9 from "../public/images/eid9.png";
import eid10 from "../public/images/eid10.png";
import eid11 from "../public/images/eid11.png";
import eid12 from "../public/images/eid12.png";
import eid13 from "../public/images/eid13.png";
import eid14 from "../public/images/eid14.png";
import eid15 from "../public/images/eid15.png";
import eid16 from "../public/images/eid16.png";
import eid17 from "../public/images/eid17.png";
import eid18 from "../public/images/eid18.png";
import eid19 from "../public/images/eid19.png";
import eid20 from "../public/images/eid20.png";
import eid21 from "../public/images/eid21.png";
import eid22 from "../public/images/eid22.png";
import { StaticImageData } from "next/image";




import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import Image from "next/image";
import { FaRegUser, FaDownload } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { CiCreditCard1 } from "react-icons/ci";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
export function Section() {
  const t = useTranslations("section");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [downloadCount, setDownloadCount] = useState<number>();
  const router = useRouter();
  const { theme } = useTheme(); 

  useEffect(() => {
    const fetchDownloadCount = async () => {
      try {
        const response = await fetch("/api/downloads");
        const data = await response.json();
        setDownloadCount(data.downloads);
      } catch (error) {
        console.error("حدث خطأ أثناء جلب عدد التنزيلات", error);
      }
    };
    fetchDownloadCount();
  }, []);

  const images: StaticImageData[] = [
    eid1, eid2, eid3, eid4, eid5, eid6,
    eid7, eid8, eid9, eid10, eid11, eid12,
    eid13, eid14, eid15, eid16, eid17, eid18,
    eid19, eid20, eid21, eid22,
  ];
  

  const handleImageSelect = (index: number) => {
    setSelectedImage(index);
  };

  const openModel = () => {
    if (selectedImage === null) {
      toast.error(t("error_select_card"));
      return;
    }
    if (!name) {
      toast.error(t("error_enter_name"));
      return;
    }
    onOpen();
  };

  const handleDownload = async () => {
    if (selectedImage === null) {
      toast.error(t("error_select_card"));
      return;
    }
    if (!name) {
      toast.error(t("error_enter_name"));
      return;
    }
    const canvas = document.createElement("canvas");
    const img = new window.Image();
    img.src = images[selectedImage].src;
    img.onload = async () => {
      const context = canvas.getContext("2d");
      if (!context) return;
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);
      context.font = "bold 40px Arial";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText(name, canvas.width / 2, canvas.height - 160);
      const link = document.createElement("a");
      link.download = "eid-mubarak.png";
      link.href = canvas.toDataURL();
      link.click();
      toast.success(t("success_download"));
      await fetch("/api/downloads", { method: "POST" });
      setDownloadCount((prev) => (prev ? prev + 1 : 1));
      router.refresh();
    };
  };

  return (
    <div className="text-center border-b border-gray-600  dark:border-b dark:border-gray-600 mt-8 space-y-8 p-4">
      <div>
        <div className="w-[100px] h-[100px] text-3xl flex justify-center items-center rounded-full text-white bg-[#ef3735] dark:bg-blue-600 mx-auto">
          1
        </div>
        <motion.p
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl text-center mt-8 mb-8"
        >
          {t("step1")}
        </motion.p>
        <div className="grid grid-cols-4 gap-4 mb-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              onClick={() => handleImageSelect(index)}
              className={`relative cursor-pointer border-4 rounded-lg overflow-hidden ${
                selectedImage === index ? "border-[#ef3735] dark:border-blue-400" : "border-transparent"
              }`}
            >
              <Image src={src} alt={`Image ${index + 1}`} width={300} height={300} className="object-cover w-full" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="w-[100px] h-[100px] text-3xl flex justify-center items-center rounded-full text-white bg-[#ef3735] dark:bg-blue-600 mx-auto">
          2
        </div>
        <motion.p
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl text-center mt-8 mb-8"
        >
          {t("step2")}
        </motion.p>
        <Input
          labelPlacement="outside"
          name="username"
          size="lg"
          className="w-fit mx-auto text-gray-900"
          onChange={(e) => setName(e.target.value)}
          placeholder={t("enter_name")}
          startContent={<FaRegUser className="text-2xl text-gray-900 dark:text-white pointer-events-none flex-shrink-0" />}
          type="text"
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: -70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl mx-auto text-center mt-8 mb-8"
      >
        {t("step3")}
      </motion.p>
      <div className="flex justify-center gap-16 items-center mb-16">
        <Button
          color={theme === "dark" ? "primary" : "danger"}
          variant="ghost"
          onPress={openModel}
          endContent={<BiSolidShow className="text-[20px]" />}
        >
          {t("view_image")}
        </Button>
        <Button
          color={theme === "dark" ? "primary" : "danger"}
          variant="ghost"
          onPress={handleDownload}
          endContent={<FaDownload />}
        >
          {t("download_image")}
        </Button>
      </div>
      <div className="flex items-center justify-center gap-2 mb-13">
        <CiCreditCard1 size={24} />
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="text-[20px]"
        >
          {t("card")} {downloadCount}
        </motion.p>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{t("modal_title")}</ModalHeader>
              <ModalBody>
                {selectedImage !== null && (
                  <div className="relative">
                    <Image
                      src={images[selectedImage]}
                      alt="Selected Image"
                      width={300}
                      height={300}
                      className="w-full"
                    />
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 translate-y-[105%] text-white font-bold text-2xl"
                      style={{
                        bottom: "160px",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      {name}
                    </div>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {t("close")}
                </Button>
                <Button
                   color="danger"
                  onPress={onClose}
                  onClick={handleDownload}
                  endContent={<FaDownload />}
                >
                  {t("download_image")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

// Section.tsx
"use client";
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
  Spinner
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
import card from "../public/images/card.jpeg";

export function Section() {
  const t = useTranslations("section");
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




  const openModel = () => {
    if (!name) {
      toast.error(t("error_enter_name"));
      return;
    }
    onOpen();
  };

  const handleDownload = async () => {
    if (!name) {
      toast.error(t("error_enter_name"));
      return;
    }
    const canvas = document.createElement("canvas");
    const img = new window.Image();
    img.src = card.src;
    img.onload = async () => {
      const context = canvas.getContext("2d");
      if (!context) return;
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);
      context.font = "bold 65px Arial";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText(name, canvas.width / 2, canvas.height - 250);
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
    <div className="text-center  mt-4 space-y-8 p-[20px] ">

      <div >

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
          color="primary"
          variant="ghost"
          onPress={openModel}
          endContent={<BiSolidShow className="text-[20px]" />}
        >
          {t("view_image")}
        </Button>
        <Button
          color="primary"
          variant="ghost"
          onPress={handleDownload}
          endContent={<FaDownload />}
        >
          {t("download_image")}
        </Button>
      </div>
      <div className="flex items-center justify-center gap-2 ">
        <CiCreditCard1 size={24} />
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="text-[20px]"
        >
           {t("card")} 
          {downloadCount === undefined ? (
            <Spinner size="sm" />
          ) : (
            downloadCount
          )}
        </motion.p>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{t("modal_title")}</ModalHeader>
              <ModalBody >
                  <div className="relative ">
                    <div className="">
                    <Image
                      src={card}
                      alt="Selected Image"
                      width={300}
                      height={300}
                      className="w-full "
                    />
                    </div>
   
                    <div
                      className=" absolute left-1/2 transform -translate-x-[50%] bottom-[15%]  text-white  text-[15px]"
               
                    >
                      {name}
                    </div>
                  </div>
              
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {t("close")}
                </Button>
                <Button
                   color="primary"
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

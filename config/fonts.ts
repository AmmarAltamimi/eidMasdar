// config/fonts.ts
import { Alexandria, Poppins } from "next/font/google";

export const fontArabic = Alexandria({
  subsets: ["arabic"],
  weight: "400", // يمكنك تحديد وزن آخر أو مصفوفة أوزان مثل ["400", "700"] إذا رغبت
  variable: "--font-arabic",
});

export const fontEnglish = Poppins({
  subsets: ["latin"],
  weight: "400", // تأكد من تحديد وزن مدعوم (الأوزان المتاحة: 100,200,...,900)
  variable: "--font-english",
});

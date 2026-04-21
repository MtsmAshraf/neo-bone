import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neo Bone | Advanced Oral & Maxillofacial Implant Solutions",
  description:
    "Neo Bone specializes in patient-specific subperiosteal implants, zygomatic implant guides, surgical guides, bone fixation accessories, and hybrid prostheses. Graftless, digital, and precision-engineered solutions for complex maxillofacial cases.",
  keywords: [
    // English
    "subperiosteal implant",
    "mandibular subperiosteal implant",
    "maxillary subperiosteal implant",
    "zygomatic implant guide",
    "quad zygoma guide",
    "surgical guide",
    "bone harvesting guide",
    "hybrid prosthesis",
    "bone fixation screw",
    "graftless implant",
    "patient-specific implant",
    "PSI implant",
    "oral implant",
    "maxillofacial implant",
    "dental implant solutions",
    "CBCT implant planning",
    "digital surgical guide",
    "bone fixation accessories",
    "full arch rehabilitation",
    "edentulous implant solution",
    "atrophic jaw implant",
    "Neo Bone",
    // Arabic
    "زرعة تحت السمحاق",
    "زرعة الفك السفلي",
    "زرعة الفك العلوي",
    "دليل زرعة الوجني",
    "دليل جراحي",
    "زرعات الأسنان",
    "حلول زرعات الفك",
    "زرعة مخصصة للمريض",
    "تأهيل القوس الكامل",
    "زرعة بدون ترقيع عظمي",
    "أدوات تثبيت العظام",
    "طب الفم والفكين",
    "زرعات متقدمة",
    "نيو بون",
  ],

  // Open Graph — controls the preview card on Facebook, WhatsApp, LinkedIn, Telegram, etc.
  openGraph: {
    title: "Neo Bone | Advanced Oral & Maxillofacial Implant Solutions",
    description:
      "Patient-specific subperiosteal implants, zygomatic guides, surgical guides, and bone fixation solutions engineered for precision and reliability.",
    url: "https://www.neo-bone.com", 
    siteName: "Neo Bone",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://neo-bone.com/assets/logo.png", 
        width: 1200,
        height: 630,
        alt: "Neo Bone — Advanced Oral & Maxillofacial Implant Solutions",
      },
    ],
  },

  // Twitter Card — also used by WhatsApp as a fallback in some clients
  twitter: {
    card: "summary_large_image",
    title: "Neo Bone | Advanced Oral & Maxillofacial Implant Solutions",
    description:
      "Patient-specific subperiosteal implants, zygomatic guides, surgical guides, and bone fixation solutions engineered for precision and reliability.",
    images: ["https://neo-bone.com/assets/logo.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

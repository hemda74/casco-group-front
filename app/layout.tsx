import { Cairo } from "next/font/google";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "./globals.css";
import LocalizationBtn from "@/components/LocalizationBtn";

const font = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "Store - The place for all your purchases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        <LocalizationBtn />
        {children}
        <Footer />
      </body>
    </html>
  );
}

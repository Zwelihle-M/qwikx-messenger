import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ToasterContext from "./context/ToasterContext";
import AuthContext from "./context/AuthContext";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppin",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Qwikx Messenger",
  description: "Qwikx Messenger",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppin`}>
        <AuthContext>
        <ToasterContext />
        {children}
        </AuthContext>
       
      </body>
    </html>
  );
}

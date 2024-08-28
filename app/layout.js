import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auto Email Form - n8n with Airtable",
  description: "Sent Welcome Email to New Leads",
  author: "Yonathan Evan Christy",
  email: "yonathanevan@gmail.com"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

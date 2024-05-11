import { PT_Serif } from "next/font/google";
import "./globals.css";

const pt_serif = PT_Serif({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata = {
  title: "Osterio Mario",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={pt_serif.className}>{children}</body>
    </html>
  );
}

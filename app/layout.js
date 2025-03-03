
// import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fonts.css"
import "./globals.css";
import Header from "@/comopnents/main-page/Header";
import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AGO",
  description: "Follow the steps to start journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}

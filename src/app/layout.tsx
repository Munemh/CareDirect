import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import ClientProvider from "./components/Provider/ClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Secure Consultancy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      <body className={`${inter.className} body-wrapper`}>
        <ClientProvider  >
          {children}
        </ClientProvider>

      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "TwitterSphere",
  description: "A lightweight Twitter variant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="top-right"
          toastOptions={{ style: { background: "#1DA1F2", color: "white" } }}
        />
        {children}
      </body>
    </html>
  );
}

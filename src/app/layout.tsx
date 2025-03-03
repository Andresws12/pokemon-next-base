import type { Metadata } from "next";
import "@/assets/styles/main.scss";

export const metadata: Metadata = {
  title: "Pokemon App",
  description: "Pokemon App dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="light">{children}</body>
    </html>
  );
}

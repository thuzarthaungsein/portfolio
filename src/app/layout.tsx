import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thuzar - Full-stack Developer",
  description: "React.js | PHP | Laravel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="px-4 sm:px-8 lg:px-16">{children}</main>
          <div className="text-center text-muted-foreground text-sm py-5 border-t dark:border-t-gray-800 mx-4 md:max-w-7xl md:mx-auto">
            <span className="dark:text-gray-700 text-gray-400">
              @2024 Thuzar
            </span>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

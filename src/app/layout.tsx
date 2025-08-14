import type { Metadata } from "next";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

import "./globals.css";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const metadata: Metadata = {
  title: "Smart Crop Suggestion System",
  description: "AI-powered crop recommendations for Nigerian farmers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="border-b bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-4 px-8 gap-4">
            <h1 className="text-2xl font-extrabold text-primary tracking-tight">
              SmartCrop
            </h1>
            <NavigationMenu>
              <NavigationMenuList className="flex gap-2 sm:gap-6">
                <NavigationMenuItem>
                  <Link
                    href="/"
                    className="px-3 py-2 rounded-md text-primary font-semibold hover:bg-primary/10 transition-colors"
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="#about"
                    className="px-3 py-2 rounded-md hover:bg-primary/10 transition-colors"
                  >
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="#predict"
                    className="px-3 py-2 rounded-md hover:bg-primary/10 transition-colors"
                  >
                    Predict
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="#contact"
                    className="px-3 py-2 rounded-md hover:bg-primary/10 transition-colors"
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>
        <main className="container mx-auto py-8 px-8">{children}</main>
      </body>
    </html>
  );
}

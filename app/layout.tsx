import "./globals.css";
import type { Metadata } from "next";
import { Questrial } from "next/font/google";

const questrial = Questrial({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
    title: "Exśmple",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${questrial.className} bg-stone-950 text-stone-50`}
            >
                {children}
            </body>
        </html>
    );
}

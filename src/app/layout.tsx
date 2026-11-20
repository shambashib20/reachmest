import type { Metadata } from "next"
import { manrope, dmSans } from "@/lib/fonts"
import "./globals.css"
import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"

export const metadata: Metadata = {
  title: "REACHMEST Technologies",
  description: "Results-driven digital marketing agency",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={`${manrope.variable} ${dmSans.variable} h-full antialiased`}
    >

      <body suppressHydrationWarning className="min-h-full flex flex-col"> <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
} 
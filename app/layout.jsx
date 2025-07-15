import "./globals.css"

export const metadata = {
  title: "RawMart - B2B Raw Materials Trading Platform",
  description: "Professional B2B platform for raw materials trading between suppliers and buyers",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}

import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Adamanth — Portfolio',
  description: 'Ideas into Code, Code into Impact'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-900 text-gray-100 antialiased">
        <Navbar />
        <main className="min-h-screen max-w-5xl mx-auto px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

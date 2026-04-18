import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './globals.css'
import { UserProvider } from '../context/usercontext'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <UserProvider>
          <Navbar />
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  )
}
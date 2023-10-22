import '@/styles/globals.css'
import { NextUIProvider} from "@nextui-org/react";
import AppNavbar from '@/components/Navbar'
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  return( 
  <> 
  <NextUIProvider>
    <AppNavbar/>
    <Component {...pageProps} />
    <Footer/>
    </NextUIProvider>
  </>
  )
}

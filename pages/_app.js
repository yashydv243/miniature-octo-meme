import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import Head from 'next/dist/shared/lib/head';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="shortcut icon" href="/hostinger.webp" type="image/x-icon" />
    </Head>
    <Navbar />
    <NextNProgress height={3} color="#fff" />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp

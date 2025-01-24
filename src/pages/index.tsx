import Head from "next/head";
import Rest from "@/components/Rest";
import Products from "@/components/Products";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>BEAUTY SHOP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" defer></script>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header/>
          <div>
            <Carousel/>
            <Products/>
            <Rest/>
            <Footer/>
          </div>
      </div>
    </>
  );
}

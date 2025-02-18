import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default function App({ Component, pageProps }: AppProps) {
  return  (
    // <Layout>
      <>
          <Header/>
          <Component {...pageProps} /> 
          <Footer/>
      </>
    // </Layout>
  );
}

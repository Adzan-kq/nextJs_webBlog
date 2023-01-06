import '../styles/globals.css'
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import Navbar from './bahan/Navbar.jsx'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  // return (
  //   <>
  //     <Navbar/>
  //     <Component {...pageProps} />
  //   </>
  // );
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.55,
        }}
        variants={{
          initialState: 
          {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
        className="base-page-size"
      >
        <Navbar/>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

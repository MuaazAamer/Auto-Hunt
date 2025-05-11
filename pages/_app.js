// import Layout from "@/components/layout/layout";
// import { GlobalContext, GlobalProvider } from "@/globalData/globalCarData";
// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <GlobalProvider><Layout><Component {...pageProps} /></Layout></GlobalProvider>;
// }


import "@/styles/globals.css";
import { SessionProvider } from 'next-auth/react';
import { GlobalContext, GlobalProvider } from "@/globalData/globalCarData";
import Layout from '../components/layout/layout';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <GlobalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </GlobalProvider>
    </SessionProvider>
   
  );
}
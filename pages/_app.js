import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react";

function App({ 
  Component, 
  pageProps: { session, ...pageProps } 
}) {
  return (

    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>

     <Component {...pageProps} />
    </SessionProvider>
  )
    
}

export default App
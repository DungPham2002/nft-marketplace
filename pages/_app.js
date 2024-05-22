import { NFTMarketplaceProvider } from "@/Context/NFTMarketplaceContext";
import {Footer, NavBar } from "@/components/componentsindex";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <NFTMarketplaceProvider>
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>        
      </NFTMarketplaceProvider>
    </div>

  )
}

export default App;
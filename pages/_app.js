import {Footer, NavBar } from "@/components/componentsindex";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </div>

  )
}

export default App;
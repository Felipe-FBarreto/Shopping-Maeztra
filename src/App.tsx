import { HeaderDesktop, HeaderMobile } from "./components/Header/header";
import useIsMobile from "./hooks/device";
import Modal from "./components/Modal/modal";
import Home from "./pages/Home";
import Footer from "./components/Footer/footer";

function App() {
  const isMobile = useIsMobile();

  return (
    <>
      <Modal />
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
      <Home />
      <Footer />
    </>
  );
}

export default App;

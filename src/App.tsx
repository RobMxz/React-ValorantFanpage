import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Divider } from "@chakra-ui/react";
import Agents from "./components/Agents";
function App() {
  return (
    <>
      <Header />
      <Agents />
      <Divider borderColor="green.300" size="full" variant="dashed" />
      <Footer />
    </>
  );
}

export default App;

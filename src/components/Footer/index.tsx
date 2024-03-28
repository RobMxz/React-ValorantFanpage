import { Center } from "@chakra-ui/react";
import { FooterList } from "./FooterList/FooterList.tsx";
import { FooterParagraph } from "./FooterParagraph/FooterParagraph.tsx";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer" style={{ padding: "0 24rem" }}>
        <Center>
          <FooterList />
        </Center>
        <Center>
          <FooterParagraph />
        </Center>
      </div>
    </footer>
  );
};
export default Footer;

import "./styles.css";
import CompoundList from "../CompoundList/index.tsx";
import { Center } from "@chakra-ui/react";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="trapecio-principal">
          <Center>
            <CompoundList>
              <CompoundList.Item>
                <a href="/Skins">Skins</a>
              </CompoundList.Item>
              <CompoundList.Item>
                <a href="/Buddies">Buddies</a>
              </CompoundList.Item>
              <div className="trapecio">
                <a href="/">
                  <CompoundList.Item
                    className="item-three"
                    style={{ color: "black" }}
                  >
                    Home
                  </CompoundList.Item>
                </a>
              </div>
              <CompoundList.Item>
                <a href="/Agents">Agents</a>
              </CompoundList.Item>
              <CompoundList.Item>
                <a href="/Cards">Cards</a>
              </CompoundList.Item>
            </CompoundList>
          </Center>
        </div>
      </header>
    </>
  );
};
export default Header;

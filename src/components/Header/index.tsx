import "./styles.css";
import CompoundList from "../CompoundList/index.tsx";
import { Center } from "@chakra-ui/react";
const Header = () => {
  return (
    <>
      <header className="header" style={{ padding: "0 24rem" }}>
        <div className="trapecio-principal">
          <Center>
            <CompoundList>
              <CompoundList.Item>
                <a>Skins</a>
              </CompoundList.Item>
              <CompoundList.Item>
                <a>Buddies</a>
              </CompoundList.Item>
              <div className="trapecio">
                <CompoundList.Item
                  className="item-three"
                  style={{ color: "black" }}
                >
                  <a>Home</a>
                </CompoundList.Item>
              </div>
              <CompoundList.Item>
                <a>Agents</a>
              </CompoundList.Item>
              <CompoundList.Item>
                <a>Cards</a>
              </CompoundList.Item>
            </CompoundList>
          </Center>
        </div>
      </header>
    </>
  );
};
export default Header;

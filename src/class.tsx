import "./App.css";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
  useLoaderData,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Center, Divider } from "@chakra-ui/react";
import Agents from "./components/Agents";
import Ability from "./components/Ability";
import Skins from "./components/Skins";
import useSkinsStore from "./store/skinsData";
import React from "react";
import SkinDetail from "./components/SkinDetail";
import ValoCard from "./components/ValoCard";
import Buddies from "./components/Buddies";
import Home from "./components/Home";
import useAgentsStore from "./store/agentsData";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true },
      {
        path: "Agents",
        element: <Agents />,
      },
      {
        path: "Agent/:agentName",
        element: <AgentPage />,
        async loader({ params }) {
          let name = params.agentName;

          return name;
        },
      },
      {
        path: "Skins",
        element: <Skins />,
      },
      {
        path: "Skins/:skinName",
        element: <SkinPage />,
        async loader({ params }) {
          let name = params.skinName;

          return name;
        },
      },
      {
        path: "Cards",
        element: <ValoCard />,
      },
      {
        path: "Buddies",
        element: <Buddies />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
function Root() {
  const { pathname } = useLocation();
  return (
    <>
      <div style={{}}>
        <Header />
        {pathname === "/" && <Home />}
        <Outlet />
        <Divider borderColor="green.300" size="full" variant="dashed" />
        <Footer />
      </div>
    </>
  );
}
function AgentPage() {
  const { agents } = useAgentsStore();
  const name = useLoaderData() as string;
  return (
    <>
      {agents &&
        agents.map((agent) => (
          <>
            {name === agent.displayName.match(/[a-zA-Z]+/g)?.join("") && (
              <Center>
                <div>
                  <Ability agent={agent} />
                </div>
              </Center>
            )}
          </>
        ))}
    </>
  );
}

function SkinPage() {
  const { skins } = useSkinsStore();
  let name = useLoaderData() as string;
  name = name.replace(/-/g, " ");
  return (
    <>
      {skins &&
        skins.map((skin) => (
          <React.Fragment key={skin.uuid}>
            <SkinDetail skin={skin} name={name} />
          </React.Fragment>
        ))}
    </>
  );
}

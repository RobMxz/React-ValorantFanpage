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
import { Divider } from "@chakra-ui/react";
import Agents from "./components/Agents";
import Ability from "./components/Ability";
import Skins from "./components/Skins";
import useSkinsStore from "./store/skinsData";
import React, { useEffect } from "react";
import SkinDetail from "./components/SkinDetail";
import ValoCard from "./components/ValoCard";
import Buddies from "./components/Buddies";
import Home from "./components/Home";
import useAgentsStore from "./store/agentsData";
import Error from "./components/Error";
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
        path: "Agents/:agentName",
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
  const { agents, fetchAgents } = useAgentsStore();
  useEffect(() => {
    fetchAgents();
  }, []);
  let name = useLoaderData() as string;
  name = name.replace(/-/g, "/");
  const foundAgent = agents.find(
    (agent) => agent.displayName.toLowerCase() === name.toLowerCase()
  );
  return (
    <>
      {foundAgent ? (
        <React.Fragment key={foundAgent.uuid}>
          <Ability agent={foundAgent} />
        </React.Fragment>
      ) : (
        <Error message="Ups este agente no existe :P" />
      )}
    </>
  );
}

function SkinPage() {
  const { skins, fetchSkins } = useSkinsStore();
  useEffect(() => {
    fetchSkins();
  }, []);
  let name = useLoaderData() as string;
  name = name.replace(/-/g, " ");
  const foundSkin = skins.find(
    (skin) => skin.displayName.toLowerCase() === name.toLowerCase()
  );
  return (
    <>
      {foundSkin ? (
        <React.Fragment key={foundSkin.uuid}>
          <SkinDetail skin={foundSkin} name={name} />
        </React.Fragment>
      ) : (
        <Error message="Ups esta búsqueda no es válida :)" />
      )}
    </>
  );
}

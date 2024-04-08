import "./App.css";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
  useLoaderData,
} from "react-router-dom";
import axios from "axios";
import { Agent } from "./hooks/useValorantData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Center, Divider } from "@chakra-ui/react";
import Agents from "./components/Agents";
import useValorantData from "./hooks/useValorantData";
import Ability from "./components/Ability";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    async loader() {
      const response = await axios
        .get(
          "https://valorant-api.com/v1/agents?language=es-MX&isPlayableCharacter=true"
        )
        .then((response) => {
          return response.data.data as Agent[];
        });
      return response;
    },
    children: [
      { index: true, element: <div>Hi</div> },
      {
        path: "Agent/:agentName",
        element: <AgentPage />,
        async loader({ params }) {
          let name = params.agentName;

          return name;
        },
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
      <Header />
      {pathname === "/" && <Agents />}
      <Outlet />
      <Divider borderColor="green.300" size="full" variant="dashed" />
      <Footer />
    </>
  );
}
function AgentPage() {
  const { agents } = useValorantData();
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

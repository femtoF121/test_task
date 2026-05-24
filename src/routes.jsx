import {
  DollarOutlined,
  FormOutlined,
  HomeOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import Chart from "./pages/Chart.jsx";
import Coins from "./pages/Coins.jsx";
import CoinsPaginated from "./pages/CoinsPaginated.jsx";
import Home from "./pages/Home.jsx";
import Wizard from "./pages/Wizard.jsx";

export const routes = [
  { path: "/", label: "Home", icon: <HomeOutlined />, element: <Home /> },
  {
    path: "/coins",
    label: "Coins",
    icon: <DollarOutlined />,
    element: <Coins />,
  },
  {
    path: "/coins-paged",
    label: "Coins paginated",
    icon: <DollarOutlined />,
    element: <CoinsPaginated />,
  },
  {
    path: "/chart",
    label: "Chart",
    icon: <LineChartOutlined />,
    element: <Chart />,
  },
  {
    path: "/wizard",
    label: "Wizard",
    icon: <FormOutlined />,
    element: <Wizard />,
  },
];

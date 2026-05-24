import { Typography } from "antd";
import CoinsTable from "../components/CoinsTable";
import { useCoins } from "../hooks/useCoins";

const { Title } = Typography;

function Coins() {
  const { data, isLoading } = useCoins();

  return (
    <>
      <Title level={2}>Coins table</Title>
      <CoinsTable data={data} loading={isLoading} />
    </>
  );
}

export default Coins;

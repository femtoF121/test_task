import { ReloadOutlined } from "@ant-design/icons";
import { Button, Flex, Segmented, Space, Typography } from "antd";
import { useState } from "react";
import Chart from "../components/Chart";
import { useCoinChart } from "../hooks/useCoinChart";

const { Title } = Typography;

const segmentOptions = [
  { label: "Bitcoin", value: "bitcoin" },
  { label: "Ethereum", value: "ethereum" },
  { label: "Dogecoin", value: "dogecoin" },
];

function ChartPage() {
  const [coinId, setCoinId] = useState(segmentOptions[0].value);
  const [isManualRefresh, setIsManualRefresh] = useState(false);

  const { data, isLoading, refetch } = useCoinChart(coinId);

  const handleManualRefresh = async () => {
    setIsManualRefresh(true);
    await refetch();
    setIsManualRefresh(false);
  };

  const showLoader = isLoading || isManualRefresh;

  return (
    <Space vertical style={{ width: "100%" }}>
      <Flex align="center" justify="space-between">
        <Title level={2} style={{ margin: 0 }}>
          Chart
        </Title>
        <Button
          type="primary"
          icon={<ReloadOutlined />}
          onClick={handleManualRefresh}
          loading={isManualRefresh}
        >
          Refresh
        </Button>
      </Flex>
      <Segmented options={segmentOptions} value={coinId} onChange={setCoinId} />
      <Chart data={data || []} loading={showLoader} />
    </Space>
  );
}

export default ChartPage;

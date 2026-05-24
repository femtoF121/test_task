import { ReloadOutlined } from "@ant-design/icons";
import { Button, Flex, Segmented, Space, Typography } from "antd";
import { useState } from "react";
import CoinChart from "../components/CoinChart";
import { COINS_SEGMENT_OPTIONS } from "../constants/options";
import { useCoinChart } from "../hooks/useCoinChart";

const { Title } = Typography;

function ChartPage() {
  const [coinId, setCoinId] = useState(COINS_SEGMENT_OPTIONS[0].value);
  const [isManualRefresh, setIsManualRefresh] = useState(false);

  const { data, isLoading, refetch, isError } = useCoinChart(coinId);

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
      <Segmented
        options={COINS_SEGMENT_OPTIONS}
        value={coinId}
        onChange={setCoinId}
      />
      {isError ? (
        <div style={{ color: "red" }}>Error loading {coinId} chart</div>
      ) : (
        <CoinChart data={data || []} loading={showLoader} />
      )}
    </Space>
  );
}

export default ChartPage;

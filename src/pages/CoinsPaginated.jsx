import { Typography } from "antd";
import { useMemo, useState } from "react";
import CoinsTable from "../components/CoinsTable";
import { MAX_PAGE, PAGE_SIZE } from "../constants/pagination";
import { useCoins } from "../hooks/useCoins";

const { Title } = Typography;

function CoinsPaginated() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, isError } = useCoins(page, PAGE_SIZE);

  const paginationConfig = useMemo(
    () => ({
      pageSize: PAGE_SIZE,
      current: page,
      total: MAX_PAGE * PAGE_SIZE,
      onChange: setPage,
      showSizeChanger: false,
    }),
    [page, setPage],
  );

  return (
    <>
      <Title level={2}>Coins paginated table</Title>
      {isError ? (
        <div style={{ color: "red" }}>Error loading coins</div>
      ) : (
        <CoinsTable
          data={data}
          loading={isLoading || isFetching}
          pagination={paginationConfig}
        />
      )}
    </>
  );
}

export default CoinsPaginated;

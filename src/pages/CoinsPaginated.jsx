import { Typography } from "antd";
import { useMemo, useState } from "react";
import CoinsTable from "../components/CoinsTable";
import { useCoins } from "../hooks/useCoins";

const { Title } = Typography;

const PageSize = 20;
const MaxPage = 20;

function CoinsPaginated() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching } = useCoins(page, PageSize);

  const paginationConfig = useMemo(
    () => ({
      pageSize: PageSize,
      current: page,
      total: MaxPage * PageSize,
      onChange: setPage,
      showSizeChanger: false,
    }),
    [page, setPage],
  );

  return (
    <>
      <Title level={2}>Coins paginated table</Title>
      <CoinsTable
        data={data}
        loading={isLoading || isFetching}
        pagination={paginationConfig}
      />
    </>
  );
}

export default CoinsPaginated;

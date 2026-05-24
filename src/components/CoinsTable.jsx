import { Space, Table, Typography } from "antd";
import {
  formatCompactNumber,
  formatPercent,
  formatPrice,
} from "../utils/formatters";

const renderNameCell = (_, record) => (
  <Space style={{ display: "flex" }}>
    <img
      src={record.image}
      alt={record.name}
      style={{ maxWidth: 24, display: "block" }}
    />
    <Typography.Text strong>{record.name}</Typography.Text>
    <Typography.Text
      type="secondary"
      style={{ textTransform: "uppercase", whiteSpace: "nowrap" }}
    >
      {record.symbol}
    </Typography.Text>
  </Space>
);

const sorterNumberBy = (dataIndex) => (a, b) => a[dataIndex] - b[dataIndex];

const columns = [
  {
    title: "#",
    width: 40,
    dataIndex: "market_cap_rank",
    sorter: sorterNumberBy("market_cap_rank"),
  },
  {
    title: "Name",
    dataIndex: "name",
    render: renderNameCell,
  },
  {
    title: "Price",
    width: 120,
    dataIndex: "current_price",
    sorter: sorterNumberBy("current_price"),
    render: (value) => formatPrice(value),
  },
  {
    title: "24h %",
    width: 120,
    dataIndex: "price_change_percentage_24h",
    sorter: sorterNumberBy("price_change_percentage_24h"),
    render: (value) => (
      <Typography.Text style={{ color: value > 0 ? "#52c41a" : "#f5222d" }}>
        {formatPercent(value)}
      </Typography.Text>
    ),
  },
  {
    title: "Market Cap",
    width: 120,
    dataIndex: "market_cap",
    sorter: sorterNumberBy("market_cap"),
    render: (value) => formatCompactNumber(value),
  },
  {
    title: "Volume (24h)",
    width: 120,
    dataIndex: "total_volume",
    sorter: sorterNumberBy("total_volume"),
    render: (value) => formatCompactNumber(value),
  },
];

function CoinsTable({ data, loading, pagination }) {
  return (
    <Table
      dataSource={data}
      loading={loading}
      columns={columns}
      rowKey="id"
      pagination={pagination ?? false}
      sticky
      scroll={{ x: 800 }}
    />
  );
}

export default CoinsTable;

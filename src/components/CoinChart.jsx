import { Spin } from "antd";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatPrice } from "../utils/formatters";

function Chart({ data, loading }) {
  return (
    <Spin spinning={loading} description="Refreshing chart...">
      <ResponsiveContainer width="100%" height="450">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" opacity={0.5} />
          <XAxis dataKey="date" minTickGap={40} tick={{ fontSize: 12 }} />
          <YAxis
            domain={["auto", "auto"]}
            tickFormatter={(val) => formatPrice(val)}
            tick={{ fontSize: 12 }}
          />
          <Tooltip formatter={(value) => [formatPrice(value), "Price"]} />
          <Line
            type="monotone"
            dataKey="price"
            stroke="blue"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Spin>
  );
}

export default Chart;

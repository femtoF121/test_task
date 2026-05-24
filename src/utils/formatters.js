export const formatPrice = (value) => {
  if (value === null || value === undefined) return "-";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  }).format(value);
};

export const formatPercent = (value) => {
  if (value === null || value === undefined) return "0.00%";
  return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;
};

export const formatCompactNumber = (value) => {
  if (value === null || value === undefined) return "-";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);
};

export const formatDate = (timestamp) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(timestamp));

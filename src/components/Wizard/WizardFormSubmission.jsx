import { Button, Descriptions, Space } from "antd";
import { useMemo } from "react";

function WizardFormSubmission({ data, onStartOver }) {
  const items = useMemo(
    () =>
      Object.entries(data).map(([key, value]) => ({
        key,
        label: key.charAt(0).toUpperCase() + key.slice(1),
        children: value,
      })),
    [data],
  );

  return (
    <Space vertical size="large">
      <Descriptions title="Submitted Data" bordered column={1} items={items} />
      <Button type="primary" onClick={onStartOver}>
        Start Over
      </Button>
    </Space>
  );
}

export default WizardFormSubmission;

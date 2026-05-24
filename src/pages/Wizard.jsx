import { Form, Typography } from "antd";
import { useState } from "react";
import WizardForm from "../components/Wizard/WizardForm";
import WizardFormSubmission from "../components/Wizard/WizardFormSubmission";

const { Title } = Typography;

function Wizard() {
  const [form] = Form.useForm();
  const [sentData, setSentData] = useState(null);

  const onFinish = (values) => {
    setSentData(values);
  };

  const onStartOver = () => {
    form.resetFields();
    setSentData(null);
  };

  return (
    <>
      <Title level={2} style={{ marginBottom: 32 }}>
        Wizard
      </Title>
      {sentData ? (
        <WizardFormSubmission data={sentData} onStartOver={onStartOver} />
      ) : (
        <WizardForm form={form} onFinish={onFinish} />
      )}
    </>
  );
}

export default Wizard;

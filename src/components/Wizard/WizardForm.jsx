import { Button, Flex, Form, Input, InputNumber, Select } from "antd";

const countryOptions = [
  { value: "ukraine", label: "Ukraine" },
  { value: "poland", label: "Poland" },
  { value: "germany", label: "Germany" },
  { value: "uk", label: "United Kingdom" },
  { value: "usa", label: "USA" },
];

const rules = {
  name: [
    { required: true, message: "Field can not be empty" },
    { min: 2, message: "Name must be at least 2 characters" },
  ],
  email: [
    { required: true, message: "Field can not be empty" },
    { type: "email", message: "Please enter a valid email" },
  ],
  country: [{ required: true, message: "Field can not be empty" }],
  age: [
    { required: true, message: "Field can not be empty" },
    {
      type: "number",
      min: 18,
      max: 100,
      message: "Age must be between 18 and 100",
    },
  ],
};

function WizardForm({ form, onFinish }) {
  return (
    <Form
      form={form}
      onFinish={onFinish}
      style={{ maxWidth: 450 }}
      layout="vertical"
    >
      <Form.Item name="name" label="Name" rules={rules.name}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={rules.email}>
        <Input />
      </Form.Item>
      <Form.Item name="country" label="Country" rules={rules.country}>
        <Select options={countryOptions} />
      </Form.Item>
      <Flex justify="space-between" align="end">
        <Form.Item name="age" label="Age" rules={rules.age}>
          <InputNumber />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Send
            </Button>
          )}
        </Form.Item>
      </Flex>
    </Form>
  );
}

export default WizardForm;

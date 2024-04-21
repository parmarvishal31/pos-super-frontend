import { Button, Divider, Form, Input, Space, Tabs, message } from "antd";
import { InfoCircleOutlined, LinkOutlined } from "@ant-design/icons";
import { GrCurrency } from "react-icons/gr";
function AddShop() {
  const onFinish = () => {
    message.success("Add");
  };
  return (
    <Form onFinish={onFinish} layout="vertical">
      <header className="flex justify-end">
        <Space>
          <Button htmlType="submit" type="primary">
            ADD
          </Button>
          <Button type="default">CANCLE</Button>
        </Space>
      </header>
      <main>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane
            tab={
              <>
                <span>
                  <InfoCircleOutlined /> Basic
                </span>
              </>
            }
            className="mt-4"
            key={1}
          >
            <div className="flex flex-col gap-2">
              <Space className="flex gap-8">
                <Form.Item name="name" label="Name">
                  <Input placeholder="Enter shop name" className="h-7 w-72" />
                </Form.Item>
                <Form.Item name="email" label="Email">
                  <Input placeholder="Enter shop email" className="h-7 w-72" />
                </Form.Item>
              </Space>
              <Space className="flex gap-8">
                <Form.Item name="password" label="Password">
                  <Input
                    placeholder="Enter shop password"
                    className="h-7 w-72"
                  />
                </Form.Item>
                <Form.Item name="cpassword" label="Confirm password">
                  <Input
                    placeholder="Enter confirm password"
                    className="h-7 w-72"
                  />
                </Form.Item>
              </Space>
              <Form.Item name="phone" label="Phone number">
                <Input
                  placeholder="Enter confirm password"
                  className="h-7 w-72"
                />
              </Form.Item>
              <Divider />
              <h1>Status</h1>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <>
                <span>
                  <LinkOutlined /> Address
                </span>
              </>
            }
            key={2}
            className="mt-4"
          >
            Address
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <>
                <span className="flex justify-center items-center gap-1">
                  <GrCurrency /> <span>Plan</span>
                </span>
              </>
            }
            key={3}
            className="mt-4"
          >
            Plan
          </Tabs.TabPane>
        </Tabs>
      </main>
    </Form>
  );
}

export default AddShop;

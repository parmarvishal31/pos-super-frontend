import { Divider, Space, Switch, Table, Tag } from "antd";
import Search from "antd/es/transfer/search";
import { EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
function AllShop() {
  const columns = [
    { key: "1", title: "ID", dataIndex: "uuid" },
    { key: "2", title: "NAME", dataIndex: "name" },
    { key: "3", title: "EMAIL", dataIndex: "email" },
    {
      key: "4",
      title: "STATUS",
      dataIndex: "isActive",
      render: (status) => {
        return (
          <>
            <Tag color={status ? "Green" : "Red"}>
              {status ? "Active" : "Deactive"}
            </Tag>
          </>
        );
      },
    },
    {
      key: "5",
      title: "ACTION",
      render: (record) => {
        return (
          <>
            <Link to={`/detail-shop/${record.uuid}`}>
              <div className="cursor-pointer">
                <EditOutlined />
              </div>
            </Link>
          </>
        );
      },
    },
  ];

  const data = [
    { uuid: 1, name: "test", email: "test@gmail.com", isActive: true },
    { uuid: 2, name: "test", email: "test@gmail.com", isActive: true },
    { uuid: 3, name: "test", email: "test@gmail.com", isActive: false },
    { uuid: 4, name: "test", email: "test@gmail.com", isActive: true },
    { uuid: 5, name: "test", email: "test@gmail.com", isActive: false },
    { uuid: 6, name: "test", email: "test@gmail.com", isActive: true },
  ];

  return (
    <>
      <header className="bg-slate-50 shadow-sm border-2 rounded-md p-5">
        <Space className="flex justify-between">
          <Search
            onChange={(e) => console.log(e.target.value)}
            placeholder="search shop"
          />
          <div>
            Is Active : <Switch onChange={(e) => console.log(e)} />
          </div>
        </Space>
      </header>
      <Divider />
      <Table
        columns={columns}
        loading={false}
        pagination={{
          pageSize: 5,
          total: 10,
          onChange: (page) => {
            console.log(page);
          },
        }}
        dataSource={data}
      />
    </>
  );
}

export default AllShop;

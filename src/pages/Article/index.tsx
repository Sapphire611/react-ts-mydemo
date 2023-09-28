import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Tag, Space, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import locale from 'antd/es/date-picker/locale/zh_CN';
import './index.scss';
import { useEffect } from 'react';
const { Option } = Select;
const { RangePicker } = DatePicker;

const Article: React.FC = () => {
  const columns = [
    {
      title: '照片名称',
      dataIndex: 'name',
      width: 220,
    },
    {
      title: '链接',
      dataIndex: 'fileUrl',
      render: (fileUrl: string) => <Tag color="green">{fileUrl}</Tag>,
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
    },
    {
      title: '更新时间',
      dataIndex: 'createdAt',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (data: string) => <Tag color="green">{data ? '是' : '否'}</Tag>,
    },
    {
      title: '备注',
      dataIndex: 'description',
      // render: (_data: string) => <Tag color="green">{_data}</Tag>,
    },
    {
      title: '操作',
      render: (data: any) => {
        return (
          <Space size="middle">
            <Button type="primary" shape="circle" icon={<EditOutlined />} />
            <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} />
          </Space>
        );
      },
    },
  ];

  useEffect(() => {
    // fetchData()
  });

  const data = {
    page: 1,
    size: 100,
    docs: [
      {
        _id: '651520ffee1ea4d0792e13fb',
        name: 'test2',
        description: 'nothing~',
        fileUrl: 'testName1.jpg',
        isPublished: false,
        createdAt: '2023-09-28T06:45:19.756Z',
        updatedAt: '2023-09-28T06:45:19.756Z',
      },
      {
        _id: '651520a192752fad8645d6ba',
        name: 'test1',
        description: 'nothing~',
        fileUrl: 'testName1.jpg',
        isPublished: false,
        createdAt: '2023-09-28T06:43:45.147Z',
        updatedAt: '2023-09-28T06:43:45.147Z',
      },
    ],
  };

  return (
    <div className="article">
      <Card
        style={{ width: '170vh' }}
        title={
          <Breadcrumb
            separator="/"
            items={[
              {
                title: '首页',
              },
              {
                title: '内容管理',
              },
            ]}
          />
        }>
        <Form initialValues={{ status: -1 }}>
          <Form.Item label="状态" name="status">
            <Radio.Group>
              <Radio value={-1}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={1}>待审核</Radio>
              <Radio value={2}>审核通过</Radio>
              <Radio value={3}>审核失败</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="频道" name="channel_id">
            <Select placeholder="请选择文章频道" style={{ width: 150 }}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Form.Item>

          <Form.Item label="日期" name="date">
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 80 }}>
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <div />
      <Card title={`根据筛选条件共查询到 count 条结果：`} style={{ width: '170vh' }}>
        <Table rowKey="_id" columns={columns} dataSource={data.docs} />
      </Card>
    </div>
  );
};

export default Article;

import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Tag, Space, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import locale from 'antd/es/date-picker/locale/zh_CN';
import './index.scss';
import { useEffect, useState } from 'react';
import request from '@/utils/request';
const { Option } = Select;
const { RangePicker } = DatePicker;

const Photo: React.FC = () => {
  const columns = [
    {
      title: '封面',
      dataIndex: 'fileUrl',
      width: 120,
      render: (cover: string) => {
        return <img src={cover ?? null} width={80} height={60} alt="" />;
      },
    },
    {
      title: '照片名称',
      dataIndex: 'name',
      width: 220,
    },
    {
      title: '备注',
      dataIndex: 'description',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (data: string) => <Tag color={data ? 'green' : 'red'}>{data ? '是' : '否'}</Tag>,
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

  const [categories, setCategories] = useState([]);
  // 获取照片类别列表
  useEffect(() => {
    async function fetchCategories() {
      const res = await request.post('/photos/category');
      setCategories(res.data);
    }
    fetchCategories();
  }, []);

  const [data, setData] = useState({
    list: [],
    count: 0,
  });

  // 参数管理
  const [params, setParams] = useState({
    page: 1,
    size: 10,
    sort: '-createdAt',
    pagination: true,
  });

  // 发送接口请求
  useEffect(() => {
    async function fetchPhotoList() {
      const res = await request.get('/photos', { params });
      const { docs, total } = res.data;
      setData({
        list: docs,
        count: total,
      });
    }
    fetchPhotoList();
  }, [params]);

  return (
    <div className="photo">
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
            <Select placeholder="请选择照片分类" style={{ width: 150 }}>
              {/* <Option value="pet">宠物</Option>
              <Option value="learning">学习</Option>
              <Option value="programming">编程</Option>
              <Option value="scenery">风景</Option> */}
              {categories.map(item => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
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
      <Card title={`根据筛选条件共查询到  ${data.count} 条结果：`} style={{ width: '170vh' }}>
        <Table rowKey="_id" columns={columns} dataSource={data.list} />
      </Card>
    </div>
  );
};

export default Photo;

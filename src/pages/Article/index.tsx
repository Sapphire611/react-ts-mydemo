import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import './index.scss';
const { Option } = Select;
const { RangePicker } = DatePicker;

const Article: React.FC = () => {
  return (
    <div className="article">
      <Card
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
    </div>
  );
};

export default Article;

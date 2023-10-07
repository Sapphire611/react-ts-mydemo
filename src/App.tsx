// 导入路由
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 导入页面组件
import Layout from './pages/Layout';
import Login from './pages/Login';

// 先导入 antd 样式文件
// https://github.com/ant-design/ant-design/issues/33327
// import "antd/dist/antd.min.css";
// 再导入全局样式文件，防止样式覆盖！
import { AuthRoute } from './components/AuthRoute';
import './index.css';
import Photo from './pages/Photo';
import Home from './pages/Home';
import Publish from './pages/Publish';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 需要鉴权的路由 */}
          <Route
            path="/*"
            element={
              <AuthRoute>
                <Layout />
              </AuthRoute>
            }>
            {/* 二级路由默认页面 */}
            <Route index element={<Home />} />
            <Route path="article" element={<Photo />} />
            <Route path="publish" element={<Publish />} />
          </Route>
          {/* 不需要鉴权的路由 */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

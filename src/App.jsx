import { Suspense, lazy } from "react";
import { ConfigProvider, Spin } from "antd";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "antd/dist/reset.css";
import './App.css'
dayjs.locale("zh-cn");

const BasicLayout = lazy(() => import("./layout"));

function App() {

  return (
    <>
     <ConfigProvider
      locale={zhCN}
      // theme={{
      //   token: {
      //     colorPrimary: primaryColor,
      //   },
      // }}
    >
      <Suspense fallback={<Spin size="large" className="globa_spin" />}>
        <BasicLayout />
      </Suspense>
    </ConfigProvider>
    </>
  )
}

export default App

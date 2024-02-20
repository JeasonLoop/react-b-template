import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './config/router.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 所有数据路由对象都将传递给该组件，以渲染应用程序并启用其他数据 API。 */}
    <RouterProvider router={router}>
      <App />
    </RouterProvider >
  </React.StrictMode>,
)

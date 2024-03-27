import { Avatar, Popover } from 'antd'
import { useNavigate } from 'react-router-dom'
import { UserOutlined,LoginOutlined,ToolOutlined } from '@ant-design/icons'
import styles from './components.module.css'
import { message } from 'antd'


function RightContent() {
  const loginStorage = localStorage.getItem('loginStorage')
  const userNamae = `用户${loginStorage.slice(0, 6)}`
  const navigate = useNavigate()

  const handleExit = () => {
    localStorage.setItem('loginStorage','')
    navigate('/login')
    message.success('退出成功')
  }


  const popContent = () => {
    return (
      <div className={styles.content_container}>
        <div className={styles.option_item} onClick={() => navigate('/setting')}>
          <ToolOutlined />
          <div className={styles.option_txt}>设置</div>
        </div>
        <div className={styles.option_item} onClick={() => handleExit()}>
          <LoginOutlined />
          <div className={styles.option_txt}>退出登录</div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.user_info}>
      <div className={styles.avatar}>
        <Avatar size={30} icon={<UserOutlined />} />
      </div>
      <Popover title='登录选项' content={() => popContent()}>
        <div className={styles.username}>
          {userNamae}
        </div>
      </Popover>
    </div>
  )
}

export default RightContent

import { useState } from 'react'
import styles from './components.module.css'
import { useNavigate } from 'react-router-dom'
import { Input, Button, Form,message } from 'antd'
import {valiUserArr,generateRandomString} from './constData'
import dragon from '../../assets/dragon.png'

const FormItem = Form.Item
const { Password } = Input

function Login() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleAccountChange = (e) => {
    const inputValue = e?.target?.value
    setAccount(inputValue)
  }
  const handlePasswordChange = (e) => {
    const inputValue = e?.target?.value
    setPassword(inputValue)
  }

  const handleLogin = () => {
    if(!account || (account && !password)){
      message.error('请输入正确的账号密码')
      return
    }
    const accountArr = valiUserArr.map((info) => info.account)
    if(!accountArr.includes(account)){
      message.error('请输入正确的账号')
    } else if(valiUserArr.find((info) => info.password === password)){
      message.success('登陆成功')
      localStorage.setItem('loginStorage',generateRandomString() + new Date())
      navigate('/home')
    }
  }

  const renderLoginForm = () => {
    return (
      <div className={styles.login_form}>
        {/* 可自行替换 */}
        <div className={styles.logo_container} >
           <img src={dragon} alt="" className={styles.zoomInRight} />
        </div>
        <FormItem label='账号'>
          <Input value={account} onChange={handleAccountChange} style={{ width: 200 }} />
        </FormItem>
        <FormItem label='密码'>
          <Password value={password} onChange={handlePasswordChange} style={{ width: 200 }} />
        </FormItem>
        <Button onClick={() => handleLogin()}>登录</Button>
      </div>
    )
  }
  return (
    <div className={styles.login_container}>
      {renderLoginForm()}
    </div>
  )
}

export default Login

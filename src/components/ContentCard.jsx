/* eslint-disable react/prop-types */
import { Card } from 'antd'

// 内容卡片
function ContentCard(props) {
  const {
    cardStyle,
    children,
  } = props

  const defaultCardStyle = {
    width:'100%',
  }

  return (
    <Card style={{...defaultCardStyle,...cardStyle}}>
      {children}
    </Card>
  )
}

export default ContentCard

import ContentCard from "../../components/ContentCard"
import styles from './index.module.css'

function Index() {
  const cardStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <ContentCard cardStyle={cardStyle}>
      <div className={`${styles.home_title} ${styles.typing}`}>
          xxxx管理平台
      </div>
    </ContentCard> 
  )
}

export default Index

import RightContent from './RightContent'
import styles from './components.module.css'

function Header() {
  return (
    <div className={styles.page_header}>
      <div className={styles.page_title}>模板标题</div>
      <RightContent />
    </div>
  )
}

export default Header

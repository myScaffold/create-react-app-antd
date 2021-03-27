import { Layout, Menu } from 'antd'
import { useLocation, Link } from 'react-router-dom'
import layoutConfig from '../constant'
import styles from './index.module.scss'
import routeList from '@/routerConfig'
const { Sider } = Layout

function CusSider() {
  const location = useLocation()
  const renderMenuList = (list = []) => {
    return list.reduce((arr, item) => {
      arr.push(
        <Menu.Item key={item.path}>
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>,
      )
      return arr
    }, [])
  }
  return (
    <Sider width={layoutConfig.SIDER_WIDTH} className={styles.sider}>
      <div className={styles.title}>智慧电商</div>
      <Menu
        mode="inline"
        className={styles.menu}
        defaultSelectedKeys={location.pathname}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {renderMenuList(routeList)}
      </Menu>
    </Sider>
  )
}

export default CusSider

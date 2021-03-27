import { Layout } from 'antd'
import { Route } from 'react-router-dom'
import routeList from '@/routerConfig'
const { Content } = Layout

function CusContent() {
  const renderRouteItem = (item) => {
    return <Route key={item.path} path={item.path} component={item.component} />
  }
  const renderRouterList = (list) => {
    return list.reduce((arr, item) => {
      arr.push(renderRouteItem(item))
      return arr
    }, [])
  }
  return (
    <Layout>
      <Content
        style={{
          background: '#fff',
          padding: 20,
          margin: 0,
          minHeight: 280,
        }}
      >
        {renderRouterList(routeList)}
      </Content>
    </Layout>
  )
}
export default CusContent

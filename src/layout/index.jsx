import { Layout } from 'antd'
import CusHeader from './CusHeader'
import CusSider from './CusSider'
import CusContent from './CusContent'
import './index.less'

function LayoutIndex() {
  return (
    <Layout style={{ height: '100%' }}>
      <CusHeader></CusHeader>
      <Layout>
        <CusSider />
        <CusContent />
      </Layout>
    </Layout>
  )
}
export default LayoutIndex

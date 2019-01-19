import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
// import { Spring } from 'react-spring'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <h2>GATSBY-WORDPRESS</h2>
      <h2>ท่านสามารถรับชมได้ที่ปุ่ม 'Blog' ด้านบนเลยครัช</h2>
      <p>ข้อมูลจาก Blog นี้ทำการดึงมาจาก Wordpress โดยใช้ plugin ของ Gatsby ดึงโดยใช้ graphQL</p>
      <p>Site นี้ยังไม่ใช่ headless cms โดยสมบูรณ์เท่าไร แต่ก็จะลองดัดแปลงดูไปเรื่อยๆ</p>
    </div>
  </Layout>
)

export default IndexPage

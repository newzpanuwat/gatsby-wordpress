import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
// import Image from '../components/image'
// import ServiceWorker from '../utils/my-service-worker'
// import { Spring } from 'react-spring'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <p
        style={{
          fontSize: `30px`,
        }}
      >
        GATSBY-WORDPRESS
      </p>
      <p>
        ข้อมูลจาก Blog นี้ทำการดึงมาจาก Wordpress โดยใช้ plugin ของ Gatsby
        ดึงโดยใช้ graphQL
      </p>
      <p>
        Site นี้ยังไม่ใช่ headless cms โดยสมบูรณ์เท่าไร
        แต่ก็จะลองดัดแปลงดูไปเรื่อยๆ
      </p>
      <p style={{ fontSize: `30px` }}>What we learn?</p>
      <ul>
        <li>Query Data with graphQL</li>
        <li>
          Progressive Web Application(Mobile -> share-> Add to Homescreen)
        </li>
        <li>
          Offline Mode(While no internet connection you can play this app)
        </li>
        <li>Single Page Application</li>
      </ul>
      <p style={{ fontSize: `30px` }}>Other</p>
      <p>
        Further reading..
        <a href="https://www.gatsbyjs.org/">&nbsp;Gatsby js.org</a>
      </p>
    </div>
  </Layout>
)

export default IndexPage

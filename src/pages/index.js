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
      <p>
        ข้อมูลจาก Blog นี้ทำการดึงมาจาก Wordpress โดยใช้ plugin ของ Gatsby
        ดึงโดยใช้ graphQL
      </p>
      <p>
        Site นี้ยังไม่ใช่ headless cms โดยสมบูรณ์เท่าไร
        แต่ก็จะลองดัดแปลงดูไปเรื่อยๆ
      </p>
      <p>
        <h2>What we learn?</h2>
      </p>
      <ul>
        <li>Query Data with graphQL</li>
        <li>Progressive Web Application(Mobile -> share-> Add to Homescreen)</li>
        <li>Offline Mode(While no internet connection you can play this app)</li>
        <li>Single Page Application</li>
      </ul>
      <p>
        <h2>Other</h2>
      </p>
      <p>
        Further reading..
        <a href="https://www.gatsbyjs.org/">&nbsp;Gatsby js.org</a>
      </p>
    </div>
  </Layout>
)

export default IndexPage

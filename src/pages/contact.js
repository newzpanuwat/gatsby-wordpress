import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
    <Layout>
        <SEO title="Contact" />
        <p style={{ fontSize: `30px` }}>Contact Me</p>
        <p>Website: newhales.cc</p>
        <p>Email: new_sbh@me.com</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default SecondPage
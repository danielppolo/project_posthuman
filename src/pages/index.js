import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import LayoutCenter from 'components/layouts/center'
import Image from 'components/image'
import SEO from 'components/seo'
import Typed from 'common/typed'
import Blob from 'components/home/blob-interactive'
import VariableFont from 'common/variable-font'

const IndexPage = () => (
  <LayoutCenter>
    <Helmet>
      <meta name="google-site-verification" content="O0rQBVnqenIxCk71C3iZm9myqpdj8KtWtZOGLvAL6gU" />
    </Helmet>
    <SEO title="Home" />
    <Typed>
      <p>Daniel lives in 2077,</p>
      <p>is a compulsive gadget buyer and</p>
      <p>follows 17 IG accounts of baby bunnies.</p>
      <p>From a very early stage of his life he developed an OCD for design.</p>
      <p>He graduated from architecture but he spends the day coding for just another startup.</p>
      <p>Daniel drinks espresso and types with Futura.</p>
    </Typed>
  </LayoutCenter>
)

export default IndexPage

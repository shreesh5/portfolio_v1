import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import "../components/layout.css"
import Landing from '../components/landing'
import MenuAppBar from '../components/header'

const IndexPage = () => (
  <>
    <MenuAppBar />
    <SEO title="Home" />
    <Landing />
  </>
)

export default IndexPage

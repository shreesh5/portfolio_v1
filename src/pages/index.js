import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import "../components/layout.css"
import MenuAppBar from '../components/header'
import Landing from '../components/landing'
import About from '../components/about'
import Footer from '../components/footer'

const IndexPage = () => (
  <>
    <MenuAppBar />
    <SEO title="Home" />
    <Landing />
    <About />
    <Footer />
  </>
)

export default IndexPage

import React from "react"

import SEO from "../components/seo"
import "../components/layout.css"
import MenuAppBar from '../components/header'
import Landing from '../components/landing'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'

const IndexPage = () => (
  <>
    <MenuAppBar />
    <SEO title="Home" />
    <Landing />
    <About />
    <Contact />
    <Footer />
  </>
)

export default IndexPage

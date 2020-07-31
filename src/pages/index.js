import React from "react"

import SEO from "../components/seo"
import "../components/layout.css"
import MenuAppBar from '../components/header'
import Landing from '../components/landing'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'

const IndexPage = () => (
  <>
    <MenuAppBar />
    <SEO title="Home" />
    <Landing />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </>
)

export default IndexPage

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // const scrollRef = useRef(null)
  // const [bg, setBg] = useState("")
  const handleScroll = () => {
    // const scroll = window.scrollY
    // const scrollRefr = scrollRef.current.scrollY
  }

  const [scrolling, setScrolling] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset // or use document.documentElement.scrollTop;
      if (currentPosition > scrollTop) {
        // downscroll code
        setScrolling(true)
      } else {
        // upscroll code
        setScrolling(false)
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition)
    }
    window.addEventListener("scroll", onScroll)
    return window.addEventListener("scroll", onScroll)
  }, [scrollTop])
  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        bg={scrollTop > 0 ? "bg-white" : ""}
      />
      <div className="main-page layout-flex" onScroll={handleScroll}>
        <main>{children}</main>
      </div>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

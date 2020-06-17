import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useRef } from "react"
import "../Styles/header.scss"
import Sidebar from "./Sidebar"
import { ScrollTo } from "react-scroll-to"

// const Sidebar = ()=> {

//   <div className="sidebar">

//     Content Here

//   </div>
// }
const Header = ({ siteTitle, bg }) => {
  // const [state, setState] = useState("")
  const [toggle, setToggle] = useState(false)

  const toggleDrawer = event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    // setState({ ...state, [anchor]: open })
    setToggle(!toggle)
  }
  const scrollRef = useRef(null)

  const handleScroll = () => {
    const scroll = window.scrollY
    const scrollRefr = scrollRef.current.scrollY
    console.log(scroll, scrollRef)
  }

  return (
    <>
      <header className={bg} ref={scrollRef} onScroll={handleScroll}>
        <nav>
          <div className="left-nav">
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: `black`,
                  textDecoration: `none`,
                  fontSize: "32px",
                  textTransform: "lowercase",
                  marginLeft: "14px",
                  display: "flex",
                }}
              >
                {siteTitle}{" "}
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "pink",
                  }}
                ></div>
              </Link>
            </h1>
          </div>

          <div className="right-nav">
            <ul>
              <li>
                <ScrollTo>
                  {({ scroll }) => (
                    <a onClick={() => scroll({ x: 20, y: 10 })}>Home</a>
                  )}
                </ScrollTo>
              </li>
              <li>
                <ScrollTo>
                  {({ scroll }) => (
                    <a onClick={() => scroll({ x: 20, y: 600 })}>Works</a>
                  )}
                </ScrollTo>
              </li>
              <li>
                <ScrollTo>
                  {({ scroll }) => (
                    <a onClick={() => scroll({ x: 20, y: 1600 })}>Articles</a>
                  )}
                </ScrollTo>
              </li>
              <li>
                <ScrollTo>
                  {({ scroll }) => (
                    <a onClick={() => scroll({ x: 20, y: 2400 })}>About</a>
                  )}
                </ScrollTo>
              </li>
            </ul>
          </div>
          <div className="right-nav-2">
            <div
              id="nav-icon3"
              className={toggle ? "open" : ""}
              onClick={toggleDrawer}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>

      <Sidebar open={toggle} toggleDrawer={toggleDrawer} />
    </>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

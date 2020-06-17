import React from "react"
import "../Styles/footer.scss"
import { ScrollTo } from "react-scroll-to"

export default function footer() {
  const date = new Date()
  return (
    <div className="footer-page">
      <footer className="footer-distributed">
        <div className="footer-right">
          <a target="_blank" href="https://medium.com/@shonubij">
            <i className="fab fa-medium"></i>
          </a>
          <a target="_blank" href="https://twitter.com/Oladunjoye_">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/shonubi-joye-2b5a51131"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a target="_blank" href="https://github.com/Oladunjoye">
            <i className="fab fa-github"></i>
          </a>
          {/* <span> +234 815 961 4339 </span> <span> shonubij@gmail.com</span> */}
        </div>

        <div className="footer-left">
          <p className="footer-links">
            {/* <a className="link-1" href="#">
              Home
            </a> */}
            <ScrollTo>
              {({ scroll }) => (
                <a className="link-1" onClick={() => scroll({ x: 20, y: 10 })}>
                  Home
                </a>
              )}
            </ScrollTo>

            {/* <a href="#">Works</a> */}
            <ScrollTo>
              {({ scroll }) => (
                <a onClick={() => scroll({ x: 20, y: 600 })}>Works</a>
              )}
            </ScrollTo>

            {/* <a href="#">Article</a> */}
            <ScrollTo>
              {({ scroll }) => (
                <a onClick={() => scroll({ x: 20, y: 1600 })}>Articles</a>
              )}
            </ScrollTo>

            {/* <a href="#">About</a> */}
            <ScrollTo>
              {({ scroll }) => (
                <a onClick={() => scroll({ x: 20, y: 2400 })}>About</a>
              )}
            </ScrollTo>
          </p>
          <p className="email" style={{ margin: "7px 0" }}>
            <span>
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href="mailto:shonubij@gmail.com"
              >
                {" "}
                shonubij@gmail.com
              </a>
            </span>
          </p>
          <p>Shonubi Joye &copy; {date.getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}

import React from "react"
import "../Styles/social.scss"

export default function social() {
  return (
    <div className="center">
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/shonubi-joye-2b5a51131"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/@shonubij"
          >
            <i className="fab fa-medium-m"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/Oladunjoye_"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Oladunjoye"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>

        <div className="text">Connect</div>
      </ul>
    </div>
  )
}

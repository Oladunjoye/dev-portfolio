import React, { useRef } from "react"
// import { Link } from "gatsby"
import { navigate } from "@reach/router"

export default function Card({ work }) {
  const linkTag = useRef(null)
  const divTag = useRef(null)

  const handleClick = e => {
    if (e.target !== linkTag.current) {
      e.preventDefault()
      navigate(`/work/${work.to}`)
    }
    // console.log()
    // console.log(divTag.current.contains(linkTag.current))
    // () => navigate("/work/xypo")
  }

  return (
    <div
      ref={divTag}
      onClick={handleClick}
      onKeyDown={handleClick}
      title={"Click here to read more"}
      role="presentation"
    >
      {" "}
      <div className="card">
        <div className="image">
          <img
            className={`img ${
              ["PPCT", "Xypo", "Visitor Management"].includes(work.name) &&
              "custom"
            }`}
            src={work.image}
            alt="company logo"
          />
        </div>
        <div className="text">
          <p className="main">{work.name}</p>
          <a title="Click here to view project" ref={linkTag} href={work.url}>
            {work.urlName}
          </a>
        </div>
      </div>
    </div>
  )
}

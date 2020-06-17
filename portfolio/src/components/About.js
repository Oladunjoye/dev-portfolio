import React from "react"
import "../Styles/about.scss"
import Social from "./social"

const Pill = ({ skill }) => {
  return <div className="panel pill">{skill}</div>
}

export default function About() {
  const frontend = [
    "html5",
    "css3",
    "sass",
    "react",
    "redux",
    "redux-saga",
    "typescript",
    "vue",
    "material-ui",
  ]
  const backend = ["node", "express", "mongodb", "posgresql", "AWS", "graphql"]
  const others = ["git", "jest", "AWS", "figma", "CI/CD", "Netlify"]
  return (
    <section className="about-page">
      <h2>About Me </h2>
      <div className="panel">
        <div className="about-wrapper">
          <p className="section-title">Meet me</p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>

          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <p>
            You've gotten all the way down here, probably checked out a few of
            my projects and maybe even played with the animations so I think its
            only fair that you at least know me beyond my technical expertise.
            While it is true that I've worked with several technologies
            including React, Node, Express, Jest, mongoDB, Redis, Typescript,
            Git,Redux , Figma , Heroku and many more, I truly believe my
            greatest assest is my mind.
          </p>
          <p>
            Asides coding, I really enjoy following the latest stories in the
            Marvel Universe. Sometimes, its hard to decide who i prefer between
            Thanos and Thor. I should also mention that Naruto is my all-time
            favorite anime and ive learnt so much about life from it
          </p>

          <p>
            There are times that everything seems so uptight and in period like
            this I thoroughly enjoy{" "}
          </p>
        </div>

        <>
          <p className="section-title">Technologies</p>
          <div className="technologies">
            <p className="title">frontend</p>
            <div className="flex">
              {frontend.map((skill, i) => (
                <Pill key={i} skill={skill} />
              ))}
            </div>

            <p className="title">backend</p>

            <div className="flex">
              {backend.map((skill, i) => (
                <Pill key={i} skill={skill} />
              ))}
            </div>

            <p className="title">others</p>

            <div className="flex">
              {others.map((skill, i) => (
                <Pill key={i} skill={skill} />
              ))}
            </div>
          </div>
        </>
        <Social />
      </div>
    </section>
  )
}

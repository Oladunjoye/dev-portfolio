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


// I’m a Software Engineer at Omnibiz Africa, a Software as a Service firm, where I build solutions that help Enterprises automate, and monitor their client and staff activities. Prior to that, I’ve worked with Upperlink Limited, a fintech company that provides financial services by leveraging the power of technology. I’ve also taken up several freelance roles and projects in the past.

// I’m passionate about creating solutions that impact the society and I try to reflect this in my work and in my choice of places to work. Over the past 4 years, I’ve helped build services that have been used by small and medium enterprises to scale up their businesses, reach a wide audience and generate more income. I’ve also worked on products used by large enterprises such as banks and global chain stores amongst others to automate their activities and increase their output and productivity.

// I’ve worked with a lot of technologies and learnt so much in the past years but I believe the greatest tool in my arsenal is my mind. As James Allen rightly said “Mind is the master power that moulds and makes, and man is mind, and evermore he takes the tool of thought, and, shaping what he wills, brings forth a thousand joys, a thousand ills. He thinks in secret, and it comes to pass. Environment is but his looking-glass.”

// Asides coding, I really enjoy watching widlife documentaries and following the latest stories in the Marvel Universe. Sometimes, its hard to decide who I prefer between Thanos and Thor. I should also mention that Naruto is my all-time favorite anime and I've learnt so much about life from it.
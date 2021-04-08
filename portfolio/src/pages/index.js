import React from "react"
import Typist from "react-typist"
import "../Styles/work.scss"
import "../Styles/hero.scss"
import "../Styles/articles.scss"
import Fade from "react-reveal/Fade"
// import Zoom from "react-reveal/Zoom"

import Card from "../components/Card"
import Article from "../components/Article"
// import Social from "../components/Social"
import About from "../components/About"

import Layout from "../components/layout"

export default function index() {
  const works = [
    {
      name: "Kashbase",
      to: "kashbase",

      image:
        "https://res.cloudinary.com/kashbase/image/upload/v1572431021/Web%20Assets/kb-logo_qydzke.png",
      url: "http://mma.kashbase.com/",
      urlName: "mma.kashbase.com",
    },
    {
      name: "Omnibiz",
      to: "omnibiz",

      image:
        "https://res.cloudinary.com/dqpgooozn/image/upload/v1591797417/omnilogo_blue_ez9rtl.png",
      url: "https://pro.omnibiz.com/#/",
      urlName: "pro.omnibiz.com",
    },
    {
      name: "Xypo",
      to: "xypo",

      image:
        "https://res.cloudinary.com/dqpgooozn/image/upload/v1591797150/logo_qabppl.png",
      url: "https://xypo.xyz/",
      urlName: "xypo.xyz",
    },
    {
      name: "Remote Africa",
      to: "remote-africa",

      image:
        "https://res.cloudinary.com/dqpgooozn/image/upload/v1591798278/nodejs-601628d09d_vzkjks.png",
      url: "#",
      urlName: "Coming soon",
    },

    {
      name: "PPCT",
      to: "ppct",

      image:
        "https://res.cloudinary.com/dqpgooozn/image/upload/c_crop/v1591798422/logo_ppct_2_bfgpok.png",
      url: "https://propertycloudtech.xyz/login",
      urlName: "propertycloudtech.xyz",
    },

    {
      name: "Visitor Management",
      to: "visitor",
      image:
        "https://res.cloudinary.com/dqpgooozn/image/upload/v1591817402/rsz_reception-linear-icon-modern-outline-reception-logo-concept-reception-linear-icon-modern-outline-reception-logo-concept-133521317_1_nxbsbg.jpg",
      url: "http://reception.omnibiz.com/",
      urlName: "reception.omnibiz.com",
    },
  ]

  return (
    <>
      <Layout>
        {/* <Fade bottom distance="30%"> */}
          <section className="hero-page">
            <div className="left">
              <div className="greet">
                <Typist
                  avgTypingDelay={200}
                  delay={300}
                  cursor={{ hideWhenDone: true }}
                >
                  <span> Hola </span>
                  <Typist.Backspace count={8} delay={500} />
                  <span style={{ color: "black" }}> Ekaabo </span>
                  <Typist.Backspace count={8} delay={1000} />
                  <span style={{ color: "black" }}> Bonjour </span>

                  <Typist.Backspace count={8} delay={1600} />
                  <span style={{ color: "black" }}> Hi, </span>
                </Typist>
              </div>
              <p className="name"> I'm Joye Shonubi</p>
              <p className="position">
                {" "}
                I'm a Full Stack Software Engineer with expertise in Javascript
              </p>

              <div className="icons-wrapper">
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
                      href="https://github.com/Oladunjoye"
                    >
                      <i className="fab fa-github"></i>
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
                      href="https://medium.com/@shonubij"
                    >
                      <i className="fab fa-medium"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <p className="remark">
                <i className="far fa-eye"></i>
                <span>I've been expecting you</span>
              </p>
            </div>

            <div className="right">
              <div className="image"></div>
            </div>
          </section>
        {/* </Fade> */}
        <section className="work-page">
          <Fade bottom>
            <div className="section-details">
              <h2 className="title"> Work</h2>
              <p className="info">
                Selected projects I've worked on in the past
              </p>
            </div>
            <div className="container">
              {works.map((work, i) => {
                return <Card key={i} work={work} />
              })}
            </div>
          </Fade>
        </section>

        <Fade bottom>
          <Article />
        </Fade>

        <Fade bottom fraction={0.2}>
          <About />
        </Fade>
      </Layout>
    </>
  )
}

// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//   </Layout>
// )

// export default IndexPage

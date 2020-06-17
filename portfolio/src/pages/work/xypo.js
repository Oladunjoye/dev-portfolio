import React from "react"
import ImageGallery from "react-image-gallery"
import "../../Styles/item-page.scss"
import Layout from "../../components/layout"

const images = [
  {
    original:
      "https://res.cloudinary.com/dqpgooozn/image/upload/v1592314879/xypo-img-1_xn6n8q.png",
  },
  {
    original:
      "https://res.cloudinary.com/dqpgooozn/image/upload/v1592314876/xypo-img-2_sq28ox.png",
  },
  {
    original:
      "https://res.cloudinary.com/dqpgooozn/image/upload/v1592314859/xypo-img-3_szmcuz.png",
  },
  {
    original:
      "https://res.cloudinary.com/dqpgooozn/image/upload/v1592314870/xypo-img-4_n1dxbj.png",
  },
  {
    original:
      "https://res.cloudinary.com/dqpgooozn/image/upload/v1592314875/xypo-img-5_ohiytu.png",
  },
]

export default function xypo() {
  return (
    <Layout>
      <div className="item-page">
        <p className=" page-title">Xypo</p>
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
        />

        <div className="content">
          <p className="paragraph">
            Xypo is a static landing page theme for a learning institution built
            purely with Gatsby JS
          </p>

          <p className="paragraph">
            Gatbsy was chosen as the base framework beacause it is a free and
            open source framework based on React that helps developers build
            blazing fast websites and apps . It also offers out of the box
            bunding with webapck, progressive web enhancement, Search Engine
            Optimization (SEO) and internet scalability.
          </p>

          <p className="paragraph">
            The theme consists of 5 core sections; Hero Section, About Us,
            Courses, Offer and a Sign Up form which make up the major sections
            of a lot of learning platforms. It is also designed to fully
            responsive, extensible, customizable.
          </p>

          <p className="paragraph">
            Ultimately, it was a pleasant experience which i learnt greatly from
            and i delighted to be making impact in my immediate society
          </p>
        </div>
      </div>
    </Layout>
  )
}

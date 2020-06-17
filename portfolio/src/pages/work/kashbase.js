import React from "react"
import ImageGallery from "react-image-gallery"
import "../../Styles/item-page.scss"
import Layout from "../../components/layout"

const images = [
  {
    original:
      "https://res.cloudinary.com/dqpgooozn/image/upload/v1592315025/kash-img-1_cfq9zt.png",
  },
  {
    original:
      "https://res.cloudinary.com/dqpgooozn/image/upload/v1592315026/kash-img-2_qbna90.png",
  },
  {
    original:
      "https://res.cloudinary.com/dqpgooozn/image/upload/v1592315020/kash-img-6_o0hzbk.png",
  },
  {
    original:
      "https://res.cloudinary.com/dqpgooozn/image/upload/v1592315007/kash-img-7_sipltm.png",
  },
  {
    original:
      "https://res.cloudinary.com/dqpgooozn/image/upload/v1592315007/kash-img-8_wvxhqw.png",
  },
  {
    original:
      "https://res.cloudinary.com/dqpgooozn/image/upload/v1592315020/kash-img-9_tkmebh.png",
  },
]

export default function kashbase() {
  return (
    <Layout>
      <div className="item-page">
        <p className=" page-title">Kashbase</p>
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
        />

        <div className="content">
          <p className="paragraph">
            Kashbase is a fintech solution which makes it easy for people to
            save, invest and all at the same time.The goal of kashbase is to
            build digital financial products to provide inclusion in the digital
            financial services for Africans.
          </p>

          <p className="paragraph">
            The company already had a functioning customer application but was
            in dire need of a solution for agents and super agents who are the
            drivers of the business to use. This platform was to enable these
            agents to be able to manage the activities relating to their
            registered clients whilst providing the same financial priviledges
            core customers enjoyed.
          </p>

          <p className="paragraph">
            The system required a flawless authentication process which allowed
            users to submit relevant details including financial documents in a
            secure manner. An effective authorization check also had to be put
            in place to control access to various features of the service
            depending on the user’s role. Users also had to be able to carry out
            necessary financial transactions seamlessly via the platform which
            include funding self and third-party wallets, requesting loans via
            accredited financial institutions and managing various financial
            assets from one platform. All this had to be achieved while ensuring
            that user experience was top-notch in order to create a truly
            enjoyable fintech service.
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

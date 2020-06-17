import React from "react"

const Card = ({ info }) => {
  return (
    <div className="panel article-card">
      <p className="title">{info.title}</p>
      <p className="date">{info.date}</p>
      <p className="info">{info.info}</p>
      <div className="read-btn" role="button">
        <a href={info.link} target="_blank">
          Read Article
        </a>
      </div>
    </div>
  )
}

const content = [
  {
    title: "Generator Functions made easy",
    date: "June 10 2019",
    link:
      "https://blog.usejournal.com/generator-functions-made-easy-485d76dd5212",
    info:
      " It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point of  using Lorem Ipsum is that it has a more-or-less normal distribution of  letters, as opposed to using 'Content here, content here', making it   look like readable English.",
  },

  {
    title: "Solving Javascript 2D Array ",
    date: "June 17 2020",
    link: "#",

    info:
      " It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point of  using Lorem Ipsum is that it has a more-or-less normal distribution of  letters, as opposed to using 'Content here, content here', making it   look like readable English.",
  },

  {
    title: "Smooth Scrolling: 2 Simple Methods ",
    date: "August 15 2019",
    link:
      "https://oladunjoye.hashnode.dev/smooth-scrolling-2-simple-methods-cjzcn1rp800050ts1ly1oe5el",
    info:
      "More often than not, when I'm working on a project, it involves a framework or library and these tools come with a lot of inbuilt or easily attachable support. However, recently, I was working on a vanilla js project which was heavy on its own and I was trying to implement a smooth scroll feature ...",

    infos:
      " It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point of  using Lorem Ipsum is that it has a more-or-less normal distribution of  letters, as opposed to using 'Content here, content here', making it   look like readable English.",
  },
]
export default function Articles() {
  return (
    <section className="articles-page">
      <h2>Articles</h2>
      <p className="description">Here's a few of my technical articles</p>
      <div className="card-container">
        {content.map((single, i) => {
          return <Card key={i} info={single} />
        })}
      </div>
    </section>
  )
}

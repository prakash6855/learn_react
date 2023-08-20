import React, { Component } from "react";

export class NewsItem extends Component {
  articles = [
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Wired",
      title:
        "A Letter Prompted Talk of AI Doomsday. Many Who Signed Weren't Actually AI Doomers",
      description:
        "In March a viral letter called for a pause on AI development, warning that algorithms could outsmart humanity—but many experts who signed on did not believe the technology poses an existential risk.",
      url: "https://www.wired.com/story/letter-prompted-talk-of-ai-doomsday-many-who-signed-werent-actually-doomers/",
      urlToImage:
        "https://media.wired.com/photos/64dd7458984161b7583de55c/191:100/w_1280,c_limit/Pause-AI-Signatories-Weren't-Actually-AI-Doomsdayers-Business-1437113509.jpg",
      publishedAt: "2023-08-17T16:00:00Z",
      content:
        "This March, nearly 35,000 AI researchers, technologists, entrepreneurs, and concerned citizens signed an open letter from the nonprofit Future of Life Institute that called for a pause on AI developm… [+2818 chars]",
    },
    {
      source: {
        id: "recode",
        name: "Recode",
      },
      author: "Peter Kafka",
      title: "Black Mirror creator Charlie Brooker on AI, tech, and creativity",
      description:
        "An interview with Black Mirror creator Charlie Brooker about his relationship with Silicon Valley, consumer technology, and his fears about AI-written television.",
      url: "https://www.vox.com/technology/2023/8/4/23819299/black-mirror-charlie-brooker-interview-ai-peter-kafka-media-column",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/wxfR8oXT4g1BFUqLfjUERqQRoWw=/165x0:3819x1913/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24828765/Black_Mirror_n_S6_E1_00_34_36_03_copy.png",
      publishedAt: "2023-08-04T11:30:00Z",
      content:
        "Its tough to remember, but in 2011, lots of us felt pretty good about our Silicon Valley overlords. The iPhone was going fully mainstream, Facebook felt like a fun place to share ideas, and Twitter w… [+15553 chars]",
    },
    {
      source: {
        id: "newsweek",
        name: "Newsweek",
      },
      author: "Mark Davis",
      title: "Newsweek",
      description:
        "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
      url: "https://www.newsweek.com/",
      urlToImage:
        "https://d.newsweek.com/en/full/2202468/special-presidential-envoy-climate-john-kerry.jpg",
      publishedAt: "2023-03-01T12:07:28.8517009Z",
      content: null,
    },
  ];
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imageUrl
                ? "https://images.hindustantimes.com/img/2022/01/04/1600x900/a503d8ee-6d93-11ec-b429-9577baa306e1_1641324303724_1641329268330.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more here
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

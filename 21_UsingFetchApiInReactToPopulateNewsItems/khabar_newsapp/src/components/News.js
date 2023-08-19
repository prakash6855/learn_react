import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    constructor() {
      super();
      this.state = {
        articles: [],
        loading: false
      }
    }

 

  async componentDidMount(){
    let url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=cfe8b7b00a8f4c84a15c8d08484bbd05"
    let data = await fetch(url);
    let parsedData = await data.json() 
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }

  render() {
    console.log("render");
    return (
      <div className="container my-5">
        <h2>Khabar Patrika - Top headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            console.log(element);
            return (
              <div className="col-md-4" key ={element.url}>
                <NewsItem
                  title={element.title ? element.title:""}
                  description={element.description ? element.description:""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div> 
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;

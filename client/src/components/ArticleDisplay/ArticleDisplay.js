import React, { Component } from 'react';
import { Panel, PanelHeader, PanelBody } from "../Panel";
import {List, ListItem} from "../List"
import {Button, ViewButton} from "../Button"
import API from "../../utils/API"

//Article Display component to render the search results

class ArticleDisplay extends Component {

//function to save the article to db once the user clicks save for an article
handleSave = (id) =>{
    API.saveArticle(this.props.articles[id])
    .then( res => this.props.removeArticle(id))
   .catch(err => console.log(err))
}


render(){  
    return(
    <Panel>
        <PanelHeader>
            Search Results
        </PanelHeader> 
        <PanelBody>
        {/*If there are saved articles in the db then loop through the items and display item in a list else display a message*/}                        
        {this.props.articles.length ? (
              <List>
                {this.props.articles.map((article, index) => (
                  <ListItem key={index}>
                      <h3>
                        <span>{article.title} </span>
                        <span>
                            <a href={article.link} target="_blank">
                              <ViewButton BtnClass="btn-info">View Article</ViewButton>
                            </a>
                            <Button id={index} saveArticle={(id) => this.handleSave(id)} BtnClass="btn-success">Save</Button>                            
                        </span>
                      </h3>
                      <p>
                          {article.excerpt}
                      </p>  
                      <p>
                          Published on: {article.date}
                      </p>  
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}            
        </PanelBody>
    </Panel>
    )
  }
}

export default ArticleDisplay;
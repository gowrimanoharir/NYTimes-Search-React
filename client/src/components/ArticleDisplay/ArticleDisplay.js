import React, { Component } from 'react';
import { Panel, PanelHeader, PanelBody } from "../Panel";
import {List, ListItem} from "../List"
import {Button, ViewButton} from "../Button"
import API from "../../utils/API"


class ArticleDisplay extends Component {

handleSave = (id) =>{
    API.saveArticle(this.props.articles[id])
   .catch(err => console.log(err))
}

render(){  
    console.log(this.props)
    return(
    <Panel>
        <PanelHeader>
            Search Results
        </PanelHeader> 
        <PanelBody>
        {this.props.articles.length ? (
              <List>
                {this.props.articles.map((article, index) => (
                  <ListItem key={index}>
                      <h3>
                        <span>{article.title} </span>
                        <span>
                            <a href={article.link} target="_blank">
                              <ViewButton BtnClass="btn-danger">View Article</ViewButton>
                            </a>
                            <Button id={index} saveArticle={(id) => this.handleSave(id)} BtnClass="btn-primary">Save</Button>                            
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
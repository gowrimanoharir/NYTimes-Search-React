import React, { Component } from 'react';
import { Panel, PanelHeader, PanelBody } from "../../components/Panel";
import {List, ListItem} from "../../components/List"
import {Button, ViewButton} from "../../components/Button"
import API from "../../utils/API"


class Saved extends Component {

state = {
    savedArticles: []
}

handleDelete = (id) =>{
    API.deleteArticle(id)
    .then(res => this.savedArticleDisplay())
   .catch(err => console.log(err))
}

componentWillMount = () =>{
    this.savedArticleDisplay()
}

savedArticleDisplay = () => {
    API.getSavedArticles()
    .then(res => {
        this.setState({savedArticles: res.data})
    })
   .catch(err => console.log(err))
}

render(){  
    return(
    <Panel>
        <PanelHeader>
            Saved Articles
        </PanelHeader> 
        <PanelBody>
        {this.state.savedArticles.length ? (
              <List>
                {this.state.savedArticles.map((article, index) => (
                  <ListItem key={article._id}>
                      <h3>
                        <span>{article.title} </span>
                        <span>
                            <a href={article.link} target="_blank">
                              <ViewButton BtnClass="btn-danger">View Article</ViewButton>
                            </a>                            
                            <Button id={article._id} deleteArticle={(id) => this.handleDelete(id)} BtnClass="btn-primary">Delete</Button>                            
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

export default Saved;
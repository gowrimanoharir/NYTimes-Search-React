import React, { Component } from 'react';
import { Panel, PanelHeader, PanelBody } from "../../components/Panel";
import {List, ListItem} from "../../components/List"
import {Button, ViewButton} from "../../components/Button"
import API from "../../utils/API"

//Saved Page component to display the form for search function 

class Saved extends Component {

//initialize state to have empty array save the data from database api
state = {
    savedArticles: []
}

//function to delete the article from db once the user clicks delete in saved page
handleDelete = (id) =>{
    API.deleteArticle(id)
    .then(res => this.savedArticleDisplay())
   .catch(err => console.log(err))
}

//lifecycle function to invoke the display of saved articles on component load
componentWillMount = () =>{
    this.savedArticleDisplay()
}

//function to get all the saved articles from db and set state with results
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
        {/*If there are articles in the api results then loop through the items and display item in a list else display a message*/}            
        {this.state.savedArticles.length ? (
              <List>
                {this.state.savedArticles.map((article, index) => (
                  <ListItem key={article._id}>
                      <h3>
                        <span>{article.title} </span>
                        <span>
                            <a href={article.link} target="_blank">
                              <ViewButton BtnClass="btn-info">View Article</ViewButton>
                            </a>                            
                            <Button id={article._id} deleteArticle={(id) => this.handleDelete(id)} BtnClass="btn-danger">Delete</Button>                            
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
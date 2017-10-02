import React from "react"
import { Panel, PanelHeader, PanelBody } from "../Panel";
import {List, ListItem} from "../List"
import {Button} from "../Button"

export const ArticleDisplay = props => {

    console.log(props)
    return(
    <Panel>
        <PanelHeader>
            Search Results
        </PanelHeader> 
        <PanelBody>
        {props.articles ? (
              <List>
                {props.articles.map((article, index) => (
                  <ListItem key={index}>
                      <strong>
                        {article.title} 
                      </strong>
                      <p>
                          {article.excerpt}
                      </p>  
                    <Button>Save</Button>
                    <Button>View Article</Button>
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

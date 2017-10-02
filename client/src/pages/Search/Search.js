import React, { Component } from 'react';
import API from "../../utils/API"
import { Input, FormWrapper } from "../../components/Form";
import { Button } from "../../components/Button";
import { ArticleDisplay } from "../../components/ArticleDisplay";

class Search extends Component {
  state = {
    articles: [],
    searchTerm: "",
    startYear: "",
    endYear: ""
  }

  handleInputChange = event => {
    const {id, value} = event.target;
    this.setState({
      [id]: value.trim()
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    if(this.state.searchTerm && this.state.startYear && this.state.endYear){
      let query = `${this.state.searchTerm}&begin_date=${this.state.startYear}0101&end_date=${this.state.endYear}1231`
      let newArticles = API.getArticles(query)
      this.setState({ articles: newArticles, searchTerm: "", startYear: "", endYear: "" })
      console.log(this.state.articles)
      
    }
  }

  render() {
    return (
          <div>
            <FormWrapper>
                <h4>
                  Search Term
                </h4>
                <Input 
                  type="text"
                  value={this.state.searchTerm}
                  onChange={this.handleInputChange}
                  id="searchTerm"
                  placeholder="Enter your search term (required)"/>  
                <h4>
                  Start Year
                </h4>
                <Input 
                  type="number"
                  value={this.state.startYear}
                  onChange={this.handleInputChange}
                  id="startYear"
                  placeholder="Enter start year (required)"/>  
                <h4>
                  End Year
                </h4>
                <Input 
                  type="number"
                  value={this.state.endYear}
                  onChange={this.handleInputChange}
                  id="endYear"
                  placeholder="Enter end year (required)"/>  
                <Button
                  disabled={!(this.state.searchTerm && this.state.startYear && this.state.endYear)}
                  onClick={this.handleFormSubmit}
                >
                    Search
                </Button>    

                <Button
                  disabled={!(this.state.searchTerm && this.state.startYear && this.state.endYear)}
                  onClick={this.handleFormSubmit}
                >
                    Clear
                </Button>                            

            </FormWrapper>
            <ArticleDisplay articles={this.state.articles}/>
           </div> 
    );
  }
}

export default Search;

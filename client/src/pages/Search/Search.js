import React, { Component } from 'react';
import API from "../../utils/API"
import { Input, FormWrapper, FormBtn } from "../../components/Form";
import ArticleDisplay from "../../components/ArticleDisplay";

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
      [id]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    if(this.state.searchTerm && this.state.startYear && this.state.endYear){
      let searchterm = this.state.searchTerm.trim()
      let query = `${searchterm}&begin_date=${this.state.startYear}0101&end_date=${this.state.endYear}1231`
      API.getArticles(query)
      .then((response) => {
          let results = response.data.response.docs;
          let newArticles = results.map((item, i) => (
              {
                  title: item.headline.main,
                  excerpt: item.snippet,
                  link: item.web_url,
                  date: item.pub_date
              }
          ))
          this.setState({ articles: newArticles, searchTerm: "", startYear: "", endYear: "" })
      })         
    }
  }

  handleClear = () => {
    this.setState({ articles: [], searchTerm: "", startYear: "", endYear: "" })
  }

  render() {
    const arrArticles = this.state.articles
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
                <FormBtn
                  disabled={!(this.state.searchTerm && this.state.startYear && this.state.endYear)}
                  onClick={this.handleFormSubmit}
                >
                    Search
                </FormBtn>    

                <FormBtn
                  onClick={this.handleClear}
                >
                    Clear
                </FormBtn>                            

            </FormWrapper>
            <ArticleDisplay articles={arrArticles}/>
           </div> 
    );
  }
}

export default Search;

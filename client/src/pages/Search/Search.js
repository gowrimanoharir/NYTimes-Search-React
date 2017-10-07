import React, { Component } from 'react';
import API from "../../utils/API"
import { Input, FormWrapper, FormBtn } from "../../components/Form";
import ArticleDisplay from "../../components/ArticleDisplay";

//Search Page component to display the form for search function and results 

class Search extends Component {

  //define state to save the result data from NYT api and search input values
  state = {
    articles: [],
    searchTerm: "",
    startYear: "",
    endYear: ""
  }

  //function to track changes to the input fields of Search form
  handleInputChange = event => {
    const {id, value} = event.target;
    this.setState({
      [id]: value
    })
  }

  //function to call the NYT API on submit of search criteria and update the the state with result data
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

  //function to clear the input fields & search results on click on clear
  handleClear = () => {
    this.setState({ articles: [], searchTerm: "", startYear: "", endYear: "" })
  }

  //function to remove the article row item from display once the user clicks save in search page
  handleRemoveArticle = (id) => {
    let newList = this.state.articles
    this.setState({articles: newList.filter((_, i) => i!==id)})
  }

  render() {
    const arrArticles = this.state.articles
    return (
          <div>

            {/*Search form module to render a form calling individual components and also has the function to handle input changes*/}
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

                {/*Search button render and calls submit function to call NYT API on click*/}  
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

            {/*Send the articles data to Article Display component to render the results list, 
            also pass removearticle function as props so it can be invoked from that module when as article is saved*/}
            <ArticleDisplay articles={arrArticles} removeArticle={(id) => this.handleRemoveArticle(id)}/>
           </div> 
    );
  }
}

export default Search;

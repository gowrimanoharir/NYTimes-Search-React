import axios from "axios"

const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

//Define functions with calls to required api routes to be used in the components as needed

export default {
    //API call to the NYT to get the articles based on searcg term
    getArticles: (query) => {
        let queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q="+query;
        return(axios.get(queryURLBase))
    },

    //API call to the server to get all the saved articles
    getSavedArticles: () => {
        return axios.get("/api/articles")
    },

    //API call to the server to save the selected article
    saveArticle: (articleData) => {
        return axios.post("/api/articles", articleData)
    },

    //API call to the server to delete the selected article    
    deleteArticle: (id) => {
        return axios.delete("/api/articles/"+id)
    }
}
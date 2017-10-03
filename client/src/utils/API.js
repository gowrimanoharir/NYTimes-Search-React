import axios from "axios"

const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
    getArticles: (query) => {
        let queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q="+query;
        return(axios.get(queryURLBase))
    },
    getSavedArticles: () => {
        return axios.get("/api/articles")
    },
    saveArticle: (articleData) => {
        return axios.post("/api/articles", articleData)
    },
    deleteArticle: (id) => {
        return axios.delete("/api/articles/"+id)
    }
}
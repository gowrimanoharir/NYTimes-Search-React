import axios from "axios"

export default {
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
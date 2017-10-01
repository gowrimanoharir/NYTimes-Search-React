import axios from "axios"

const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
    getArticles: () => {
        console.log("in search")
        let articles = [];
        let queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=trump&begin_date=20170101&end_date=20170901";
        axios.get(queryURLBase)
            .then((response) => {
                let results = response.data.response.docs;
                console.log(results.length)
                articles = results.map((item, i) => (
                    {
                        title: item.headline.main,
                        excerpt: item.snippet,
                        link: item.web_url,
                        date: item.pub_date
                    }
                ))
                console.log(articles)
                return articles
            })
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
fetch("http://localhost:3000/articles")
  .then(response => response.json())
  .then(articles => showArticle(articles))

function showArticle(articles) {
  const newsFeed = document.getElementById("news-feed")

  articles.forEach(article => {
    const newArticle = document.createElement("article")
    newsFeed.append(newArticle)

    const title = document.createElement("h2")
    title.innerText = article.title
    newArticle.append(title)
  })
}

fetch("https://nonviral-times-backend.herokuapp.com/articles")
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

    const byLine = document.createElement("address")
    byLine.innerHTML = `By: ${article.author}, <a href='${article.source_url}'target="_blank">${article.source}</a>`
    newArticle.append(byLine)

    const imageLink = document.createElement("a")
    imageLink.href = article.source_url
    imageLink.target = "_blank"
    newArticle.append(imageLink)

    const image = document.createElement("img")
    image.src = article.url_image
    imageLink.append(image)

    const description = document.createElement("p")
    description.innerText = article.description
    newArticle.append(description)
  })
}

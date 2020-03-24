fetch('http://localhost:3000/articles')
    .then(response => response.json())
    .then(console.log)
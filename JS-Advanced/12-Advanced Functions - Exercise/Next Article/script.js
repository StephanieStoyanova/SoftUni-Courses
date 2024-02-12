function getArticleGenerator(articles) {
    let articlesContent = Array.from(articles);
    const contentRef = document.getElementById("content");

    return () => {
        if (!articlesContent.length) {
            return;
        }

        let currentArticle = articlesContent.shift();
        let newArticle = document.createElement("article");
        newArticle.textContent = currentArticle;
        contentRef.appendChild(newArticle);
    }
}

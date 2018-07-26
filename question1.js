// Show the page after 2 seconds
const page = document.querySelector("body");
page.style.display = "none";

const showPage = () => {
  page.style.display = "";
}

setTimeout(showPage, 2000);

// Add an additional article to the 4 that are in place currently
const articles = document.querySelector(".row");
articles.insertAdjacentHTML("beforeend",
  `<article class="col-md-4">
    <img src="https://hokcx-54c2.kxcdn.com/assets/recruitment/img/ultimatespidermanmarkbagley-56e20cd25f9b5854a9f8a199.jpg" />
    <div class="col-md-12 banner">
      <h3>Additional Article</h3>
      <p>This is another Spiderman article!</p>
    </div>
   </article>`);

// After that article is added, move it to the 2nd within the list
const newArticle = articles.lastChild;
const hulk = articles.firstElementChild;
hulk.insertAdjacentElement('afterend', newArticle);

// Make all the less important articles equal in width.
const minorArticles = document.querySelectorAll("article");
// articles with class diffrent from col-md-4
// minorArticles[2] has class col-md-5
minorArticles[2].classList.remove("col-md-5")
minorArticles[2].classList.add("col-md-4")
// minorArticles[3] has class col-md-3
minorArticles[3].classList.remove("col-md-3")
minorArticles[3].classList.add("col-md-4")

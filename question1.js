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

// When the button in the "Most Important Story" is added, change the copy to "This copy has been amended"
// this is what happens in the js script:
// var selector = document.getElementById('banner');
// setTimeout(function() {
//     selector.insertAdjacentHTML('beforeend', '<span class="button">This is a button</span>');
// },5000);
const banner = document.getElementById("banner")
const copy = banner.querySelector("p")
const changeCopy = () => {
  copy.innerHTML = "This copy has been amended";
};
setTimeout(changeCopy, 5000);

// When the button in the "Most Important Story" section is clicked
// present the "Most Important Story" in a styled overlay, re clicking this will close the overlay.
const masthead = document.querySelector(".masthead")
const insertOverlay = () => {
  masthead.insertAdjacentHTML('beforeend', `<div id="overlay">
              <div class="col-md-6 col-md-offset-3 overlay-style">
                <img class="overlay-image" src="https://hokcx-54c2.kxcdn.com/assets/recruitment/img/IMG_0198.jpg" />
                <h2>Most Important Story</h2>
                <p>This article has the most visual weight</p>
              </div></div>`);
};
setTimeout(insertOverlay, 0);


const getButton = () => {
    button = document.querySelector(".button");
    button.addEventListener("click", (event) => {
      // console.log("test");
      const overlay = document.getElementById("overlay");
      // console.log(overlay);
      overlay.style.display = "block";
    });
    overlay.addEventListener("click", (event) => {
      overlay.style.display = "none";
    });
  };

setTimeout(getButton, 5500);

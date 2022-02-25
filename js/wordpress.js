const endPoint = "https://wordpress.danielfraisland.dk/wp-json/wp/v2/posts/?categories=2&per_page=3"

fetch( endPoint ).then(
    response => {
      return response.json(); // get JSON data
    }).then(data => {

        for (let i = 0; i < data.length; i++) {

          //Posts
          viewCvPosts.innerHTML += `<article>
            <h3 class="cvtitle">            
                ${data[i].title.rendered}
            </h3>
            <div class="post-content">
              ${data[i].content.rendered}
            <div>
            </article>`
        }
})

const projectpostsurl = "https://wordpress.danielfraisland.dk/wp-json/wp/v2/posts?_embed&categories=3";
//
fetch(projectpostsurl)
  .then(function (response) {
    return response.json();
  })
  .then(function (projectposts) {
    appendProjectPosts(projectposts);
  });

// Append Projects Posts to the DOM
function appendProjectPosts(projectposts) {
  let htmlTemplate = "";
  for (let post of projectposts) {
    htmlTemplate += /*html*/`
      <div class="project">
      <img src="${getFeaturedImageUrl(post)}" class="projectimage">
        <h3>${post.title.rendered}</h3>
        <div>
        <p>${post.content.rendered}</p>
        <a href="${post.x_metadata.Website}"><img src="images/icons/website.png" alt="View the Website" class="icon"></a>
        <a href="${post.x_metadata.Github}"><img src="images/icons/github.png" alt="View Code on Github" class="icon"></a>
        <button onclick="${post.x_metadata.wordpresssite}">Mere info</button>
        </div>
      </div>
    `;
  }
  document.querySelector('#viewProjects').innerHTML = htmlTemplate;
}
console.log(projectpostsurl);

const olderprojectsposturl = "https://wordpress.danielfraisland.dk/wp-json/wp/v2/posts?_embed&categories=6"
fetch(olderprojectsposturl)
  .then(function (response) {
    return response.json();
  })
  .then(function (olderprojectposts) {
    console.log(olderprojectposts);
    appendOlderProjectPosts(olderprojectposts);
  });
  function appendOlderProjectPosts(projectposts) {
    let htmlTemplate = "";
    for (let post of projectposts) {
      console.log(post);
      htmlTemplate += /*html*/`
        <div class="project">
        <img src="${getFeaturedImageUrl(post)}" class="projectimage">
          <h3>${post.title.rendered}</h3>
          <div>
          <p>${post.content.rendered}</p>
          <a href="${post.x_metadata.Website}"><img src="images/icons/website.png" alt="View the Website" class="icon"></a>
          </div>
        </div>
      `;
    }
    document.querySelector('#viewOlderProjects').innerHTML = htmlTemplate;
  }

// Get the featured image url
function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}
//https://wordpress.danielfraisland.dk/wp-json/wp/v2/posts?_embed&categories=3


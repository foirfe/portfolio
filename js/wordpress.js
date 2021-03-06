//Wordpress Rest API
const projectpostsurl = "https://wordpress.danielfraisland.dk/wp-json/wp/v2/posts?_embed&categories=3";

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
      <a href="${post.x_metadata.Website}"><img src="${getFeaturedImageUrl(post)}" class="projectimage"></a>
      <div class="projectcontent">
      <h3>${post.title.rendered}</h3>
        <p>${post.content.rendered}</p>
        <div class="extrainfo">
        <a href="${post.x_metadata.Website}"><img src="images/icons/website.png" alt="View the Website" class="icon"></a>
        <a href="${post.x_metadata.Github}"><img src="images/icons/github.png" alt="View Code on Github" class="icon"></a>
        <button onclick="${post.x_metadata.wordpresssite}">Mere info</button>
      </div>
        </div>
      </div>
    `;
  }
  document.querySelector('#viewProjects').innerHTML = htmlTemplate;
}
console.log(projectpostsurl);
//Wordpress Rest API for Older Projects
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
       <a href="${post.x_metadata.Website}"> <img src="${getFeaturedImageUrl(post)}" class="projectimage"></a>
        <div class="projectcontent">
        <h3>${post.title.rendered}</h3>
          
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


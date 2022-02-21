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
console.log(endPoint);



const secondendPoint = "https://wordpress.danielfraisland.dk/wp-json/wp/v2/posts?_embed&categories=3"

fetch( secondendPoint ).then(
    response => {
      return response.json(); // get JSON data
    }).then(data => {

        for (let i = 0; i < data.length; i++) {

          //Posts
          viewProjects.innerHTML += `<article>
            <h3 class="cvtitle">            
                ${data[i].title.rendered}
            </h3>
            <div class="post-content">
              ${data[i].content.rendered}
            <div>
            </article>`
        }
})
console.log(secondendPoint);
//https://wordpress.danielfraisland.dk/wp-json/wp/v2/posts?_embed&categories=3
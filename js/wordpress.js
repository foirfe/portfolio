const endPoint = "https://danielfraisland.dk/wp-json/wp/v2/posts/?categories=9&per_page=3"

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
            <div id="post-content">
              ${data[i].content.rendered}
            <div>
            </article>`
        }
})
console.log(endPoint);
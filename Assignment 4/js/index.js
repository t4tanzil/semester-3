const input = document.getElementById("movieUrl");
const movie = document.getElementById("movie");
const series = document.getElementById("series");
const Watch = document.getElementById("Watch");
const inputs=document.querySelector(".inputs")
let movieselected = true;

function watchmovie() {
    const rawUrl = input.value.trim(); // Get value when the button is clicked
    console.log(rawUrl);

    const movieId = extractMovieId(rawUrl);
    if (movieId) {
        const finalUrl = `https://vidsrc.icu/embed/movie/${movieId}`;
        window.open(finalUrl, '_blank'); // Open the URL in a new tab
    }
};
function watchseries() {
    const rawUrl = input.value.trim(); // Get value when the button is clicked
    console.log(rawUrl);
    var season = document.getElementById("season").value.trim();
    var episode = document.getElementById("episode").value.trim();
    const movieId = extractMovieId(rawUrl);
    if (movieId) {
        const finalUrl = `https://vidsrc.icu/embed/tv/${movieId}/${season}/${episode}`;
        window.open(finalUrl, '_blank'); // Open the URL in a new tab
    }
};


Watch.addEventListener("click",sentToVdo);
function sentToVdo(){
    if(movieselected){
        watchmovie() 
    }
    else{
        watchseries()
    }
    const existingSeason = document.getElementById("season");
    const existingEpisode = document.getElementById("episode");
    movieselected = false;
    if (existingSeason) {
        existingSeason.remove();
    }
    if (existingEpisode) {
        existingEpisode.remove();
    }
}




movie.addEventListener("click",movieinput);
function movieinput(){
    movieselected = true;
    console.log("1");
    const existingSeason = document.getElementById("season");
    const existingEpisode = document.getElementById("episode");

    if (existingSeason) {
        existingSeason.remove();
    }
    if (existingEpisode) {
        existingEpisode.remove();
    }
    
}

series.addEventListener("click",seriesinputs);
function seriesinputs() {
    console.log("2");
    // Check if the inputs already exist before creating them
    const existingSeason = document.getElementById("season");
    const existingEpisode = document.getElementById("episode");
    movieselected = false;
    if (existingSeason) {
        existingSeason.remove();
    }
    if (existingEpisode) {
        existingEpisode.remove();
    }


        var season = document.createElement("input");
        season.type = "number";
        season.id = "season";
        season.value = 1;
        season.placeholder = "Season";

        var episode = document.createElement("input");
        episode.type = "number";
        episode.id = "episode";
        episode.value = 1;
        episode.placeholder = "Episode";

        
        inputs.appendChild(season);
        inputs.appendChild(episode);
    
}

function extractMovieId(url) {
    const imdbMatch = url.match(/tt\d+/);
    const tmdbMatch = url.match(/\/(\d+)$/);

    if (imdbMatch) {
        return imdbMatch[0];  // IMDb ID
    } else if (tmdbMatch) {
        return tmdbMatch[1];  // TMDb ID
    } else {
        const existingimportedNotice1 = document.getElementById("importedNotice1");
                
        if (existingimportedNotice1) {
            existingimportedNotice1.remove();
        }
         var importedNotice1 = document.createElement("p");
         importedNotice1.id = "importedNotice1";
         importedNotice1.textContent = "Invalid Link , Input/Select The Correct Link."
         inputs.appendChild(importedNotice1);
        return null;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (event) {
        let target = event.target;
        
        // Ensure the clicked element is an anchor tag inside the search results
        while (target && target.tagName !== "A") {
            target = target.parentElement;
        }

        if (target && target.href) {
            event.preventDefault();
            navigator.clipboard.writeText(target.href).then(() => {
                //console.log("Copied to clipboard:", target.href);
                input.value = extractMovieId(target.href);

                 // Trigger the close button click to close the search results
                 const closeBtn = document.querySelector('.gsc-results-close-btn');
                 if (closeBtn) {
                     closeBtn.click(); // Simulate a click on the close button
                 }
                 const existingimportedNotice = document.getElementById("importedNotice");
                
                if (existingimportedNotice) {
                    existingimportedNotice.remove();
                }
                 var importedNotice = document.createElement("p");
                 importedNotice.id = "importedNotice";
                 importedNotice.textContent = "ID Import successful"
                 inputs.appendChild(importedNotice);
       
            }).catch(err => {
                console.error("Failed to copy:", err);
            });
        }
    });
});

$( "#movies" ).on( "click", function( event ) {
    React.render(
        <MovieList url='data/movies.json.data'/>,
        document.getElementById('content')
    )
})

$( "#music" ).on( "click", function( event ) {
    React.render(
        <MusicList url='data/music.json.data'/>,
        document.getElementById('content')
    )
})

unirest.get("https://byroredux-metacritic.p.mashape.com/album-list/new-releases/date")
.header("X-Mashape-Key", "O2nZPA6e8Hmsh3RkfRfRUdfAxyv0p10Ad25jsnCBE8lxPqvdeb")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
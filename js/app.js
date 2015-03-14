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

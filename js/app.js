$( "#movies" ).on( "click", function( event ) {
    React.render(
        <MovieList url='https://byroredux-metacritic.p.mashape.com/movie-list/coming-soon'/>,
        document.getElementById('content')
    )
})

$( "#music" ).on( "click", function( event ) {
    React.render(
        <MusicList url='https://byroredux-metacritic.p.mashape.com/album-list/new-releases/date'/>,
        document.getElementById('content')
    )
})

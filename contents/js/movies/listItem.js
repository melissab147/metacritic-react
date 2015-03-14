var MovieListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.movie)
        this.props.onListItemClicked(this.props.movie.name)
    },

    render: function() {

        var movie = this.props.movie

        return ( 
            <div className="movie row" >
                <div className="movieName six columns" onClick={this.handleClick}>
                    <b> {movie.name} </b>
                </div>
                <div className="movieRlsDate six columns">
                    {movie.rlsdate}   
                </div>
            </div>
        )
  }
})
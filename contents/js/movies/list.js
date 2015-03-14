var MovieList = React.createClass({displayName: 'MovieList',

    getInitialState: function() {
        return {data: []};
    },
  
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({
                    data: data
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(name){
        var movie = _.find(this.state.data, {name: name})
        this.refs.movieView.setState({movie:movie})
    },

    render: function() {

        var self = this

        var movies = this.state.data.map(function (movie) {
        
          return (    
            <MovieListItem movie={movie} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="moviePage">
                <div className="movieList six columns">
                    <h4> New & Upcoming Movies </h4> {movies}
                </div>
                <div className="movieView six columns">
                    <MovieView ref="movieView"/>
                </div>
            </div>
        )
    }
})

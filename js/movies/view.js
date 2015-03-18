var MovieView = React.createClass({

    getInitialState: function() {
        return {movie: null}
    },

    render: function() {
        
        if (this.state.movie){

            return ( 
                <div className="movieView" >
                    <h2 className="movieName">
                        {this.state.movie.name}
                    </h2>
                    <img src={this.state.movie.thumbnail}></img> <br/> 
                    {this.state.movie.summary} <a href={this.state.movie.url}>continue</a> <br/>
                    <b>Release date:</b> {this.state.movie.rlsdate} <br/> 
                    <b>Rating:</b> {this.state.movie.rating} <br/> 
                    <b>Cast:</b> {this.state.movie.cast} <br/> 
                    <b>Score:</b> {this.state.movie.score} <br/> 
                    <b>Link:</b> <a href={this.state.movie.url}>{this.state.movie.url}</a> <br/> 

                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})
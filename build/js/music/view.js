var MusicView = React.createClass({

    getInitialState: function() {
        return {album: null}
    },

    render: function() {
        
        if (this.state.album){

            return ( 
                <div className="musicView" >
                    <h2 className="musicName">
                        {this.state.album.name}
                    </h2>
                    <h3 className="musicAuthor">
                        {this.state.album.author}
                    </h3>
                    <img src={this.state.album.thumbnail} width="60"></img> <br/> 
                    {this.state.album.summary} <br/>
                    <b>Released on:</b> {this.state.album.rlsdate} <br/> 
                    <b>Genre:</b> {this.state.album.genre} <br/> 
                    <b>Score:</b> {this.state.album.score} <br/> 
                    <b>Link:</b> <a href={this.state.album.url}>{this.state.album.url}</a> <br/> 

                </div>
            )

        }else{

            return (
                <h2>Click an item to see details</h2>
            )
        }
  }
})
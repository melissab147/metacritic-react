var MusicListItem = React.createClass({

    handleClick: function(event) {
        console.log('an item is clicked', this.props.album)
        this.props.onListItemClicked(this.props.album.name)
    },

    render: function() {

        var album = this.props.album

        return ( 
            <div className="album row" >
                <div className="albumName six columns" onClick={this.handleClick}>
                    <b> {album.name} </b>
                </div>
                <div className="albumRlsDate six columns">
                    {album.rlsdate}   
                </div>
            </div>
        )
  }
})
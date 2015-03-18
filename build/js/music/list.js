var MusicList = React.createClass({displayName: 'MusicList',

    getInitialState: function() {
        return {data: []};
    },
  
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            headers: {
                "X-Mashape-Key": "1t37z6ZtlvmshEIKo41r9f2yjIh1p14TpsnjsnnL0F5emFdSPa",
                "Accept": "application/json"
            },
            success: function(data) {
                this.setState({
                    data: data.results
                });
                // console.log(data, data.restatus, data.headers, data.body)            
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(name){
        var album = _.find(this.state.data, {name: name})
        this.refs.musicView.setState({album:album})
    },

    render: function() {

        var self = this

        var music = this.state.data.map(function (album) {
        
          return (    
            <MusicListItem album={album} onListItemClicked={self.handleListItemClicked}/>
            )
        })        

        return (
            <div className="musicPage">
                <div className="musicList six columns">
                    <h4> Upcoming Albums </h4> {music}
                </div>
                <div className="musicView six columns">
                    <MusicView ref="musicView"/>
                </div>
            </div>
        )
    }
})

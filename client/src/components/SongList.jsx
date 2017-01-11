var React = require('react');
var Song = require('./Song.jsx');
var SongList = React.createClass({
// ---------------------------------------------------------
  getInitialState: function() {
    return({selectedIndex: undefined});
  },
  
// ---------------------------------------------------------
  render:function (){
    var songs = this.props.songs.map(function(song,index){
      return(<Song 
                key={index}
                title={song['title'].label}
             >
            </Song>);
    });
      // Displaying the contents of the Array 
      return ( <div className='song-list'> {songs} </div> )
  }
});

module.exports = SongList;
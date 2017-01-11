var React = require('react');
var Song = React.createClass({

render: function(){
    return(
      <div className='song'>
        <a className='song-name'> {this.props.name} </a>
        <p>{this.props.children}</p>
      </div>
    )
  }

});

module.exports = Song;
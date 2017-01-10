var React = require('react');

var Top20Container = React.createClass({

  getInitialState: function() {
    console.log("Top20Container - getInitialState");
    return { songs:[]};
  },

  componentDidMount: function() {
    console.log("Top20Container - componentDidMount");
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      this.setState({songs: data});
    }.bind(this);
    request.send();
  },

  render: function() {
    return(
      <h2>Top 20</h2>
    );
  }

  });

module.exports = Top20Container;
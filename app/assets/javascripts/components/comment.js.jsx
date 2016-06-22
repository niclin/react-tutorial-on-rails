var Comment = React.createClass({
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },

  render: function () {
    return (
      <div className="comment panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            {this.props.author} 說了:
          </h3>
        </div>
        <div className="panel-body">
          {this.props.text}
        </div>
      </div>
    )
  }
});


var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">聊聊吧</div>
        <div className="panel-body">
          <form className="commentForm " onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="control-label" forName="authorInput">暱稱</label>
              <input type="text" id="authorInput" className="form-control" placeholder="Your name" ref="author" value={this.state.author} onChange={this.handleAuthorChange}/>
            </div>
            <div className="form-group">
              <label className="control-label" forName="commentInput">留言</label>
              <textarea className="form-control" id="commentInput" rows="3" placeholder="Say something..." ref="text" value={this.state.text} onChange={this.handleTextChange}/>
            </div>
            <input type="submit" className="btn btn-primary" value="Post" />
          </form>
        </div>
      </div>
    );
  }
});

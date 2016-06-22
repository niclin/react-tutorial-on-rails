var CommentBox = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.presenter);
  },

  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ comments: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  handleCommentSubmit: function ( formData, action ) {
    $.ajax({
      data: { comment: formData},
      url: action,
      type: "POST",
      dataType: "json",
      success: function ( data ) {
        this.setState({ comments: data });
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, 2000);
  },

  render: function () {
    return (
      <div className="comment-box">
        <img src={ this.props.imgSrc } alt={ this.props.imgAlt } />
        <CommentList comments={ this.state.comments } />
        <hr />
        <h2>新增留言</h2>
        <CommentForm form={ this.state.form } onCommentSubmit={ this.handleCommentSubmit } />
      </div>
    );
  }
});



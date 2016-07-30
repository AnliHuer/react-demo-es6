class UserGist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      lastGistUrl: ''
    }
  };

  componentWillMount(){
    this._mounted = false;
  }
  
  componentDidMount() {
    this._mounted = true;
    $.get(this.props.source, function (result) {
      var lastGist = result[0];
      if (this._mounted) {
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        });
      }
    }.bind(this));
  }
  
  render() {
    return (
      <div>
        {this.state.username} is last gist is
        <a href={this.state.lastGistUrl}>here</a>
      </div>
    )
  }
}


ReactDOM.render(
  <UserGist source="https://api.github.com/users/octocat/gists"/>,
  document.getElementById('example')
);
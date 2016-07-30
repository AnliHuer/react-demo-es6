class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    }
  }

  handleClick(event) {
    this.setState({liked: !this.state.liked});
  }

  render() {
    let text = this.state.liked ? 'like' : 'have\`t liked';
    return (
      <p onClick={event => this.handleClick(event)}>
        You {text} this. Click to toggle.
      </p>
    )
  }
}

ReactDOM.render(
  <LikeButton />,
  document.getElementById('example')
);
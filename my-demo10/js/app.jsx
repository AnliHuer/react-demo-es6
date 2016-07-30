class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1
    }
  }

  componentDidMount() {
    this.timer = setInterval(function () {
      let opacity = this.state.opacity;
      opacity -= 0.5;
      opacity = opacity < 0.1 ? 1.0 : opacity;
      this.setState({opacity: opacity});
    }.bind(this), 100);
  }

  render() {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    )
  }
}

ReactDOM.render(
  <Hello name="Alice"/>,
  document.getElementById('example')
);
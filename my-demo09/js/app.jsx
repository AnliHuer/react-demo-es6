class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Hello'
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render() {
    let value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={event => {this.handleChange(event)}}/>
        <p>{value}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Input />,
  document.getElementById('example')
);

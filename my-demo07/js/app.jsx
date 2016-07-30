class MyComponent extends React.Component {
  handleClick() {
    this.refs.myTextInput.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref="myTextInput"/>
        <input type="button" value="Focus the text input" onClick={this.handleClick}/>
      </div>
    );
  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('example')
);
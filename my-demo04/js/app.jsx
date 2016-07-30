class HelloMessage extends React.Component{
  render(){
    return <h1>{this.props.name}</h1>;
  }
}

ReactDOM.render(
  <HelloMessage name="John"/>,
  document.getElementById('example')
);
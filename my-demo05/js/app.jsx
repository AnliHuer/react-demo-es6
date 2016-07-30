class NoteList extends React.Component {
  render() {
    return (
      <ol>
        {
          this.props.children.map((child) => {
            return <li>{child}</li>
          })
        }
      </ol>
    )
  }
}

ReactDOM.render(
  <NoteList>
    <span>Hello</span>
    <span>World</span>
  </NoteList>,
  document.getElementById('example')
);


let items = ['Arim', 'Cenfy', 'Heedy'];

ReactDOM.render(
  <div>
    {
      items.map(item => {
        return <li>{item}</li>;
      })
    }
  </div>,
  document.getElementById('example')
);
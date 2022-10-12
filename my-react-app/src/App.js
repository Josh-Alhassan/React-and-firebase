import './App.css';

function App() {
  const title = 'Learning React is freaking Awesome';
  const subtitle = 'This is a website for learning react.js';

  const handleClick = (e) => {
    console.log('You clicked me')
    console.log('The site description is ', title)
    console.log(e)
  }
  return (
    <div className="App">
      <h1>Build web apps with React</h1>
      <button onClick={handleClick}>Click Me</button>
      {/* inline event handler */}
      <button onClick={(e) => {
        console.log('Inline Event Handler');
        console.log(e)
      }} >Another BTN</button>
    </div>
  );
}

export default App;

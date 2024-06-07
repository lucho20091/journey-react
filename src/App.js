import './App.css';
import Arr from './data'
import Navbar from './components/Navbar'
import Main from './components/Main'


function App() {
  const newElem = Arr.map(item =>{
    return (
      <Main key={item.id} {...item}/>
    )
  })
  return (
    <div className="App">
      <Navbar />
      {newElem}
    </div>
  );
}

export default App;

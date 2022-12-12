import logo from './logo.svg';
import './App.css';

const singers = [
  { name: 'Asif', song: 'O Priyya' },
  { name: 'Bacchu', song: 'Rupali Guiter' },
  { name: 'James', song: 'Amar Sonar Bangla' },
]
function App() {
  const nayoks = ['sabbir', 'rabbi', 'durjoy', 'alin', 'likhon'];
  return (
    <div className="App">

      {/* //from arry of object

      {
        singers.map(singer => <li>{singer.name},{singer.song}</li>)
      }
      {
        singers.map(singer => <Person name={singer.name} song={singer.song} ></Person>)
      } */}




      {/* from array
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }

      {
        nayoks.map(nayok => <Person name={nayok} ></Person>)
      } */}

      {/* <Person name="Yeel" rule='Technology'></Person>
      <Person name="Niloy" rule='CEO'></Person>
      <Person name="Abdullah" rule='CEO'></Person> */}


    </div>
  );
}

function Person(props) {
  console.log(props)
  return (
    <div className='person'>
      <h1>{props.name} <br />
        {props.song}</h1>
      <p></p>
    </div>
  )
}
export default App;

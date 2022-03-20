import logo from './logo.svg';
import './App.css';
const number = 555;
const singers = [
  { name: 'Dr. Mahfuz', job: 'Singer' },
  { name: 'Eva Rahman', job: 'Singer2' },
  { name: 'Agun', job: 'Shopno' },
  { name: 'Shyvro Deb', job: 'Pathor' }
];


// const singerStyle = {
//   color: 'purple',
//   backgroundColor: 'white'
// };

function App() {
  const nayoks = ['Hero Alam', 'Nirob', 'Joshim', 'Anwar Hossen', 'Dipjol'];
  return (
    <div className="App">
      {/* <Person name="BappaRaz" Nayika="Eka"></Person>
      <Person name="Hero Alam" Nayika="Moushumi"></Person>
      <Person Nayika="kopila"></Person> */}
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name} job={singer.job}></Person>)
      }
      <h2>New Component</h2>
      <Friends></Friends>
      <Friends></Friends>
      <Friends></Friends>

    </div>
  );
}
function Person(props) {
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Profession: {props.job}</p>
    </div>
  )
  // indentation thik korar jonno () deya hoi
}
function Friends() {
  return (
    <div className="container">
      <h2>Name : Ajai Devgan</h2>
      <p>Bollywood Hero</p>

    </div>
  )
}

export default App;

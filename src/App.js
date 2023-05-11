import { collection, addDoc, getDocs } from "firebase/firestore"; 

import Home from './components/Home';

import './App.css';

async function addData( db ) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function seeData( db ) {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().first}`);
  });
}

function App(props) {

  const db = props.db

  return (
    <div className="App">
      <Home />
      <button onClick={() => addData(db)}>Click Here To Add Data</button>
      <button onClick={() => seeData(db)}>Click Here To See Data</button>
    </div>
  );
}

export default App;

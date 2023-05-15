import { collection, addDoc, getDocs } from "firebase/firestore"; 

import Home from './components/Home';
import EventCards from "./components/EventCards";

import './App.css';
import React, { useState, useEffect } from "react";

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
    console.log(doc.data());
  });
}

function App(props) {

  // Events in the firebase store
  const [events, setEvents] = useState([])

  const [loading, setLoading] = useState(true)

  // Firestore database thing
  const db = props.db

  useEffect(() => {
    async function handler() {
      const querySnapshot = await getDocs(collection(db, "users"));
      const allEventsArray = querySnapshot.docs.map(doc => doc.data())
      setEvents(allEventsArray)
    }
    handler()
  }, [db])

  useEffect(() => {
    if (events !== []) {
      setLoading(false)
    }
  }, [events])

  return (
    <div className="App container">
      <Home />
      <button onClick={() => addData(db)}>Click Here To Add Data</button>
      <button onClick={() => seeData(db)}>Click Here To See Data</button>
      {loading ? <p>Hello we're loading</p> : <EventCards events={events} loading={loading} />}
    </div>
  );
}

export default App;

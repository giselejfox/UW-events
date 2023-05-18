import { collection, addDoc, getDocs } from "firebase/firestore"; 

import Home from './components/Home';
import EventCards from "./components/EventCards";

import './App.css';
import './styles.css'
import React, { useState, useEffect } from "react";

async function addData( db ) {
  let current_time = new Date()
  let formattedTime = current_time.toISOString()
  try {
    const docRef = await addDoc(collection(db, "events"), {
      clubID: "Test Club",
      clubName: "Lovelace Lala",
      // dateTime: "1995-02-05T00:00",
      dateTime: formattedTime,
      eventName: "Test Event Name",
      description: "Lil Description",
      // img: "https://www.rd.com/wp-content/uploads/2019/11/cat-10-e1573844975155-scaled.jpg",
      img: "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/346073206_1002104857447946_1257233742448710045_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=xWWInif9q_IAX-oAYOt&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzEwMTM4NjQxNTQ2MDU3ODY1Nw%3D%3D.2-ccb7-5&oh=00_AfA8j0ywOzmPpTbPTB2KpB6jt_vROodx9qfDKfU1HYPofg&oe=646B7BDD&_nc_sid=640168",
      tags: ["One Tag", "Two Tag"]
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
      const querySnapshot = await getDocs(collection(db, "events"));
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

import { collection, addDoc, getDocs } from "firebase/firestore"; 
import React, { useState, useEffect } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Button } from "react-bootstrap";

import './App.css';
import './styles.css'

import Home from './components/Home';
import EventCards from "./components/EventCards";
import AddEventModal from "./components/AddEventModal";

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
      img: "https://www.rd.com/wp-content/uploads/2019/11/cat-10-e1573844975155-scaled.jpg",
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

  const handleAddData = (newEvent) => {
    addData(db, newEvent)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App container">
        <Home />
        <div className="d-flex flex-row justify-content-center mb-4">
          <Button variant="primary" className="me-2" onClick={() => addData(db)}>Add Dummy Data</Button>
          <AddEventModal addData={handleAddData} />
        </div>
        {loading ? <p>Hello we're loading</p> : <EventCards events={events} loading={loading} />}
      </div>
    </LocalizationProvider>
  );
}

export default App;

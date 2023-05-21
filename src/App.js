import { collection, addDoc, getDocs } from "firebase/firestore"; 
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import './App.css';
import './styles.css'

import Home from './components/Home';
import NavBar from "./components/NavBar";

async function addData( db, newEvent ) {
  try {
    const docRef = await addDoc(collection(db, "events"), newEvent);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
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
    <Router>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <NavBar />
        <Routes>
            <Route path="/home" element={<Home addData={handleAddData} events={events} loading={loading} />} />
            <Route path='/*' element={<Navigate to={'/home'} />} />
        </Routes>
      </LocalizationProvider>
    </Router>

  );
}

export default App;

// <Button variant="primary" className="me-2" onClick={() => handleAddDummyData()}>Add Dummy Data</Button>

// async function seeData( db ) {
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data().first}`);
//     console.log(doc.data());
//   });
// }

// const handleAddDummyData = () => {
//   let current_time = new Date()
//   let formattedTime = current_time.toISOString()
//   let dummyData = {
//     clubID: "Test Club",
//     clubName: "Lovelace Lala",
//     // dateTime: "1995-02-05T00:00",
//     dateTime: formattedTime,
//     eventName: "Test Event Name",
//     description: "Lil Description",
//     img: "https://png.pngtree.com/png-clipart/20230130/ourmid/pngtree-watercolor-pink-blob-png-image_6567193.png",
//     tags: ["One Tag", "Two Tag"]
//   }
//   addData(db, dummyData)
// }
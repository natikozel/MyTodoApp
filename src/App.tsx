import React from 'react';
import Footer from "./components/Footer";
import ToDoList from "./components/ToDoList";
import {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';
import './App.css';

const App = () => {

    const [darkMode, setDarkMode] = useState(false);

    // const addNote = (text: any) => {
    //     const date = new Date();
    //     const newNote = {
    //         id: nanoid(),
    //         text: text,
    //         date: date.toLocaleDateString(),
    //     };
    //     const newNotes = [...notes, newNote];
    //     setNotes(newNotes);
    // };
    //
    // const deleteNote = (id: any) => {
    //     const newNotes = notes.filter((note) => note.id !== id);
    //     setNotes(newNotes);
    // };

    return (
        <div className={`${darkMode && 'dark-mode'} App`}>
            <div className="container">
                <Header setMode={setDarkMode}/>
                <ToDoList/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
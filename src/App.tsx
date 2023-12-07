import React from 'react';
import Footer from "./components/Footer";
import ToDoList from "./components/ToDoList";
import {useState} from 'react';
import Header from './components/Header';
import './App.css';

const App = () => {

    const [darkMode, setDarkMode] = useState(false);

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
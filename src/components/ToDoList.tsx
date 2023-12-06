import React, {useEffect, useState} from "react";
import ToDo from "./ToDo";
import {Button} from "reactstrap";
import '../App.css';
import {CreateTaskModal} from "./CreateTaskModal";
import {nanoid} from "nanoid";

export interface TaskProps {
    id: string,
    text: string,
    date: Date | String,
}

export interface InputState {
    // validateName: boolean;
    validateDescription: boolean;
}

const ToDoList = () => {

    const [modal, setModal] = React.useState<boolean>(false);
    const [tasks, setTasks] = useState<Array<TaskProps>>([]);

    useEffect(() => {
        const savedNotes = JSON.parse(
            localStorage.getItem('react-notes-app-data')!
        );
        if (savedNotes && savedNotes.length) {
            setTasks(savedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            'react-notes-app-data',
            JSON.stringify(tasks)
        );
    }, [tasks]);


    const toggle = () => setModal(!modal);
    const deleteFromList = (id: string) => setTasks(tasks.filter(task => task.id !== id));


    return (
        <div>
            <div className="todo-wrapper">
                <Button className="btn" onClick={toggle} size="lg" color="primary">Add Task</Button>
                <CreateTaskModal
                    modal={modal}
                    toggleModal={toggle}
                    setList={setTasks}
                />
            </div>
            <div className="notes-list">
                {tasks.map((item: TaskProps) => (
                    <div key={item.id}>
                        <ToDo
                            id={item.id}
                            text={item.text}
                            date={item.date}
                            handleDeleteTask={deleteFromList}
                            // handleDeleteNote={handleDeleteNote}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToDoList;
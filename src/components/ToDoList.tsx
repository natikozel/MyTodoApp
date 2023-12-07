import React, {useEffect, useState} from "react";
import ToDo from "./ToDo";
import {Button} from "reactstrap";
import '../App.css';
import {TaskModal} from "./TaskModal";


export interface TaskProps {
    id: string,
    text: string,
    date: Date | String,
}

export interface InputState {
    // validateName: boolean;
    validateDescription: boolean;
}

export const contextId = React.createContext("");

const ToDoList = () => {

    const [modal, setModal] = React.useState<boolean>(false);
    const [tasks, setTasks] = useState<Array<TaskProps>>([]);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editId, setEditId] = useState<string>("");

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


    const handleEdit = (id: string) => {
        setEditId(id);
        triggerEdit();
    };

    const triggerEdit = () => {
        setEditMode(!editMode);
        toggle();
    };

    const toggle = () => {
        setModal(!modal);
        if (modal)
            setEditMode(false);
    };
    const deleteFromList = (id: string) => setTasks(tasks.filter(task => task.id !== id));


    return (
        <div>
            <div className="todo-wrapper">
                <Button className="btn" onClick={toggle} size="lg" color="primary">Add Task</Button>
                {editMode ?
                    <contextId.Provider value={editId}>
                        <TaskModal
                            title={"Edit Task"}
                            submit={"Edit"}
                            modal={modal}
                            toggleModal={toggle}
                            setList={setTasks}
                            triggerEdit={triggerEdit}
                        />
                    </contextId.Provider>
                    :
                    <TaskModal
                        title={"Create a new Task"}
                        submit={"Submit"}
                        modal={modal}
                        toggleModal={toggle}
                        setList={setTasks}
                    />
                }
            </div>
            <div className="notes-list">
                {tasks.map((item: TaskProps) => (
                    <div key={item.id}>
                        <ToDo
                            id={item.id}
                            text={item.text}
                            date={item.date}
                            modal={modal}
                            toggleModal={toggle}
                            handleDeleteTask={deleteFromList}
                            handleEdit={handleEdit}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToDoList;
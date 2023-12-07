import {MdDelete, MdPushPin} from "react-icons/md";
import {CiEdit} from "react-icons/ci";
import {useState} from "react";

const ToDo = ({handleEdit, modal, toggleModal, id, text, date, handleDeleteTask}: any) => {

    // const colors: any = {
    //     '1': "#f9b234",
    //     '2': "#3ecd5e",
    //     '3': "#e44002",
    //     '4': "#952aff",
    //     '5': "#cd3e94",
    // };
    const [pin, setPin] = useState<boolean>(false);
    const changeBorder = () => {
        setPin(!pin);
    };

    return (
        <div className={`post-it ${pin ? "pinned" : ""}`}>
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <div>
                    <MdPushPin
                        onClick={() => changeBorder()}
                        className="pin-icon"
                        size="1.3em"
                    />
                    <CiEdit
                        onClick={() => handleEdit(id)}
                        className="edit-icon"
                        size="1.3em"
                    />
                    <MdDelete
                        onClick={() => handleDeleteTask(id)}
                        className="delete-icon"
                        size="1.3em"
                    />
                </div>
            </div>
        </div>
    );
};

export default ToDo;
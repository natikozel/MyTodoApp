import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const ToDo = ({id, text, date, handleDeleteTask}: any) => {

    const colors: any = {
        '1': "#f9b234",
        '2': "#3ecd5e",
        '3': "#e44002",
        '4': "#952aff",
        '5': "#cd3e94",
    };

        return (
            <div className="note">
                <span>{text}</span>
                <div className="note-footer">
                    <small>{date}</small>
                    <CiEdit
                        // onClick={() => handleEditTask(id)}
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
        );
    };

export default ToDo;
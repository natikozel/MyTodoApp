import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalProps
} from "reactstrap";
import React, {useContext} from "react";
import {TaskProps, InputState} from "./ToDoList";
import {nanoid} from "nanoid";
import {contextId} from "./ToDoList";

export const TaskModal = ({triggerEdit, submit, title, modal, toggleModal, setList}: ModalProps) => {

    const customId = useContext(contextId);
    const [input, setInput] = React.useState<TaskProps>({
        id: "",
        text: "",
        date: undefined as unknown as Date,
    });

    const [state, setState] = React.useState<InputState>({
        // validateName: true,
        validateDescription: true,
    });


    function formDataHandler(e: any) {
        e.preventDefault();
        setInput((prevInput: TaskProps) => {
            return {
                ...prevInput,
                [e.target.name]: e.target.value
            };
        });
    }

    function submitHandler() {
        if (input.text.length < 1) {
            setState({
                // validateName: !(input.name.length < 1),
                validateDescription: !(input.text.length < 1),
            });
            return;
        }

        setList((prevList: Array<TaskProps>) => {
            return [
                ...prevList,
                {id: nanoid(), text: input.text, date: new Date().toLocaleDateString()}
            ];
        });
        toggleModal();
        cleanInput();
        clearState();
    }


    const cleanInput = () => setInput({
        id: "",
        text: "",
        date: undefined as unknown as Date,
    });

    const editTask = () => {
        setList((prevList: Array<TaskProps>) => {
            const newList = [...prevList]
            const task = newList.find(task => task.id === customId)!;
            task.text = input.text;
            return [
                ...newList
            ];
        });
        triggerEdit();
    };

    const clearState = () => setState({validateDescription: true});


    return (
        <Modal backdrop="static" isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>{title}</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup floating>
                        <Input required
                               value={input.text}
                               onChange={formDataHandler}
                               autoComplete="true"
                               placeholder="description"
                               name="text"
                               id="text"
                               type="textarea"
                               invalid={!state.validateDescription}>
                        </Input>
                        <Label for="text">Description</Label>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => customId ? editTask() : submitHandler()}>
                    {submit}
                </Button>{' '}
                <Button color="secondary" onClick={toggleModal}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};
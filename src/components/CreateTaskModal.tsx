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
import React from "react";
import {TaskProps, InputState} from "./ToDoList";
import {nanoid} from "nanoid";


export const CreateTaskModal = ({modal, toggleModal, setList}: ModalProps) => {

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

    const clearState = () => setState({validateDescription: true});


    return (
        <Modal backdrop="static" isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Create a new Task</ModalHeader>
            <ModalBody>
                <Form>
                    {/*<FormGroup floating>*/}
                        {/*<Input value={input.name}*/}
                        {/*       onChange={formDataHandler}*/}
                        {/*       autoComplete="true"*/}
                        {/*       placeholder="name"*/}
                        {/*       id="name"*/}
                        {/*       name="name"*/}
                        {/*       type="text"*/}
                        {/*       invalid={!state.validateName}*/}
                        {/*>*/}
                        {/*</Input>*/}
                        {/*<Label for="name">Task Name</Label>*/}
                    {/*</FormGroup>*/}
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
                <Button color="primary" onClick={() => submitHandler()}>
                    Submit
                </Button>{' '}
                <Button color="secondary" onClick={toggleModal}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};
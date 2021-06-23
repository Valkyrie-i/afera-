import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createAchieves} from "../../http/achievesAPI";

const CreateAchieves = observer(({show,onHide}) => {

    const {achieves} = useContext(Context)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)

    const addAchieves =()=>{
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('img', file)
        createAchieves(formData).then(data => onHide())
    }

    const selectFile = e =>{
        setFile(e.target.files[0])
    }

    return (
        <Modal
            show ={show}
            onHide ={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить достижение
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder={"Введите заголов достижения"}
                    />
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder={"Введите описание достижения"}
                    />

                    <Form.Control
                        type="file"
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addAchieves}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateAchieves;
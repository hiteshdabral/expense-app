import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import { setEditId } from "../actions/categories-action";
import { CategoryForm } from "./CategoryForm";
export const CategoryEdit = ({ id }) => {
  const [modal, setModal] = useState(true);
  const dispatch = useDispatch();
  const toggle = () => {
    setModal(!modal);
    dispatch(setEditId(null));
  };
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Id-{id}</ModalHeader>
        <ModalBody><CategoryForm id={id} toggle={toggle}/></ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

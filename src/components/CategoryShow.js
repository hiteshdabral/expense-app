import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { setShowCategory } from '../actions/categories-action';
export const CategoryShow = ({id}) => {
    const [modal, setModal] = useState(true);
    const category=useSelector((state)=>{
        return state.categories.data.find(ele=>ele._id==id)
    })
    console.log(category)
  const dispatch = useDispatch();
  const toggle = () => {
    setModal(!modal);
    dispatch(setShowCategory(null));
  };
  return (
    <>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Show Id-{id}</ModalHeader>
        <ModalBody>{category.name}</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

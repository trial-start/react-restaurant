// import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "../cabins/CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsopenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsopenModal(!isOpenModal)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsopenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsopenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;

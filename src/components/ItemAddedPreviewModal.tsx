import { Modal } from "flowbite-react";
import { useState } from "react";
import { Button } from "./boilerplate/Button";
import PreviewItemAdded from "./PreviewItemAdded";

export const ItemAddedPreviewModal = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button text='Adauga' onClick={() => setOpenModal(true)}>
        <svg className="w-5 h-5 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
        </svg>
      </Button> 
      <Modal dismissible size={'5xl'} show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Produsul a fost adaugat in cos</Modal.Header>
        <Modal.Body>
            <PreviewItemAdded/>
        </Modal.Body>
      </Modal>
    </>
  );
}


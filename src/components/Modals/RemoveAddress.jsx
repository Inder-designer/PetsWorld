import { Button, Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeAddress } from "../../actions/addressAction";

const RemoveAddress = ({openModal, setOpenModal, id}) => {
  // const [openModal, setOpenModal] = useState(false);
    const dispatch = useDispatch()

    const handleRemoveAddress = () => {
        dispatch(removeAddress(id))
        setOpenModal(false)
    }

  return (
    <div>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header className="py-5 px-4 modalHeader">
          <h5 className="uppercase text-sm font-bold text-gray-600">
            Remove Address
          </h5>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <p className="text-sm px-4 text-gray-600 font-semibold">
            Are you sure you want to remove this address?
          </p>
          <div className="flex gap-5 px-4 pt-7 pb-6">
            <button
            onClick={() => handleRemoveAddress()}
              className="w-full inline-block bg-red-600 text-white px-4 py-3  border border-red-600 uppercase font-semibold text-xs rounded"
            >
              Remove
            </button>
            <button
                onClick={() => setOpenModal(false)}
              className="w-full inline-block px-4 py-3 text-[#282c3f] border border-[#282c3f] uppercase font-semibold text-xs rounded"
            >
              Cancel
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RemoveAddress;

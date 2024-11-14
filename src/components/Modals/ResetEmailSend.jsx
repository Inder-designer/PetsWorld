import { Modal } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ResetEmailSend = ({ openModal, setOpenModal, email }) => {
  function maskEmail(email) {
    const [localPart, domain] = email?.split("@");
    if (localPart.length <= 2) {
      // If the local part is too short to mask, return it as is
      return email;
    }
    const firstChar = localPart[0];
    const lastChar = localPart[localPart.length - 1];
    const maskedChars = "*".repeat(localPart.length - 2);
    return `${firstChar}${maskedChars}${lastChar}@${domain}`;
  }
  return (
    <div>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Body className="modalBody overflow-visible">
          <div className="p-5 pb-0x text-center">
            <h6 className="text-2xl">Email Sent</h6>
            <p className="text-sm mt-2">
              We sent an email to {maskEmail(email)} with a link to get back
              into your account.
            </p>
          </div>
          <div
            className="text-center cursor-pointer text-blue-600 border-t text-base font-bold uppercase px-5 py-2.5"
            onClick={() => setOpenModal(false)}
          >
            Ok
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ResetEmailSend;

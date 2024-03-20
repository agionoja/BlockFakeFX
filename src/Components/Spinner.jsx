import Modal from "./Modal.jsx";

import { ClipLoader } from "react-spinners";

export default function Spinner() {
  return (
    <Modal>
      <ClipLoader />
    </Modal>
  );
}

import Modal from "./Modal.jsx";

import { ClipLoader } from "react-spinners";

export default function Spinner() {
  return (
    <Modal>
      <ClipLoader className={"fixed left-0 right-0 top-44 mx-auto"} />
    </Modal>
  );
}

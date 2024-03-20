import Modal from "./Modal";
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <Modal>
      <ClipLoader
        className={"fixed left-0 right-0 top-44 mx-auto"}
        color="#36d7b7"
      />
    </Modal>
  );
};

export default Spinner;

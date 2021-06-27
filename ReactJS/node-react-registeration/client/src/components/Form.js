import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../actions";
const Form = () => {
  const { modal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(hideModal());
  };
  return (
      <ReactModal
        isOpen={modal}
        style={{
          content: {
            width: "50%",
            top: "25%",
            left: "25%",
            right: "auto",
            bottom: "auto",
          },
        }}
      >
        <form>
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label for="age" className="form-label">
              Age
            </label>
            <input type="text" className="form-control" id="email" />
          </div>
          <button
            className="btn btn-success"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </ReactModal>
  );
};
export default Form;

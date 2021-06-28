import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { updateUser } from "../actions";
import { useState } from "react";
const Form = ({ info }) => {
  const _id = info._id;
  const dispatch = useDispatch();
  const [modal, setModal] = useState({ isOpen: false });
  const [user, setUser] = useState({ name: info.name, email: info.email });

  const handleChange = (e) => {
    const key = e.currentTarget.name;
    let state = { ...user };
    state[key] = e.target.value;
    setUser(state);
  };
  const handleSubmit = () => {
    setModal({ isOpen: false });
    dispatch(updateUser(_id, user));
  };
  return (
    <>
      <input
        className="btn btn-primary me-1"
        type="button"
        value="Edit"
        onClick={() => {
          setModal({ isOpen: true });
        }}
      />
      <ReactModal
        isOpen={modal.isOpen}
        style={{
          content: {
            width: "50%",
            top: "25%",
            left: "25%",
            right: "auto",
            bottom: "auto",
          },
        }}
        ariaHideApp={false}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>
      </ReactModal>
    </>
  );
};
export default Form;

import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { updateUser } from "../actions";
import { useState } from "react";
const Form = ({ info }) => {
  const _id = info._id;
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const [user, setUser] = useState({
    name: info.name,
    email: info.email,
    avatar: info.avatar,
  });

  const handleChange = (e) => {
    const key = e.currentTarget.name;
    let state = { ...user };
    if (key !== "avatar") state[key] = e.target.value;
    else state[key] = e.target.files[0];
    setUser(state);
  };
  const handleSubmit = () => {
    setOpen(false);
    const formData = new FormData();
    formData.append("avatar", user.avatar);
    formData.append("name", user.name);
    formData.append("email", user.email);
    dispatch(updateUser(_id, formData));
  };
  return (
    <>
      <input
        className="btn btn-primary me-1"
        type="button"
        value="Edit"
        onClick={() => {
          setOpen(true)
        }}
      />
      <ReactModal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={() => {
          setOpen(false);
        }}
      className="modalStyle col-11 col-md-6"
      >
              <button
        className="x-btn btn btn-outline-danger"
        onClick={() => setOpen(false)}
      >
        <i class="bi bi-x-lg"></i>
      </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
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
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Choose an avatar
            </label>
            <input
              className="form-control"
              name="avatar"
              type="file"
              id="formFile"
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

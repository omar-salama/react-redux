import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { updateUser } from "../actions";
import { ChangeEvent, useState } from "react";
import { IUser } from "../types";

const Form = ({ info }: { info: IUser }) => {
  const { _id, name, email, avatar } = info;
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);

  type UserState = Omit<IUser, "_id">; 

  const [user, setUser] = useState<UserState>({
    name,
    email,
    avatar,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name;
    let state = { ...user };
    if (key !== "avatar") state[key as keyof UserState] = e.target.value;
    else if (e.target.files) state[key as keyof UserState] = e.target.files[0] as string & File;
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
        <i className="bi bi-x-lg"></i>
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

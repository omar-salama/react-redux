import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteUserMutation, useGetUserByIdQuery } from './usersApi';

import Spinner from '../../components/Spinner';
import EditForm from './EditForm';
import { useEffect } from 'react';

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: user, isLoading } = useGetUserByIdQuery(id || '');

  const [deleteUser, { isLoading: isDeleting, isSuccess: isDeleted }] =
    useDeleteUserMutation();

  const onDelete = async () => {
    const ans = window.confirm('Are you sure?');
    if (ans && id) {
      deleteUser(id);
    }
  };

  useEffect(() => {
    isDeleted && navigate('/', { replace: true });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleted]);

  if (isLoading) return <Spinner />;

  if (!user)
    return <div className="d-flex justify-content-center">User not found.</div>;

  return (
    <div className="UserDetails">
      <div className="card mt-3">
        <div className="card-body d-flex flex-column-reverse flex-md-row justify-content-evenly">
          <div className="align-self-center text-center text-md-start flex-md-fill m-2 m-md-5">
            <p className="card-title display-3">{user.name}</p>
            <p className="card-text display-6 mb-4">{user.email}</p>
            <EditForm userInfo={user} isDisabled={isDeleting} />
            <button
              className="btn btn-danger ms-2"
              disabled={isDeleting}
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
          <img
            className="rounded-1"
            src={`../uploads/${user.avatar}`}
            alt={user.name}
          />
        </div>
      </div>
    </div>
  );
};
export default UserDetails;

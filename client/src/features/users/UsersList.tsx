import User from './User';
import Spinner from '../../components/Spinner';
import { IUser } from '../../types';

const UsersList = ({
  users,
  isLoading,
}: {
  users: IUser[] | undefined;
  isLoading: boolean;
}) => {
  if (isLoading) return <Spinner />;

  if (!users) return <h3 className="text-center">No Users Found</h3>;

  return (
    <div className="mt-4">
      {users.map((user: IUser) => {
        return <User user={user} key={user._id} />;
      })}
    </div>
  );
};

export default UsersList;

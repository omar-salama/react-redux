import { useGetUsersQuery } from './usersApi';
import UsersList from './UsersList';
import Search from './Search';
import { useState } from 'react';

const Home = () => {
  const [query, setQuery] = useState<string | undefined>();
  const { data: users, isLoading } = useGetUsersQuery(query);
  const getFilterQuery = (query?: string) => {
    setQuery(query);
  };

  return (
    <div>
      <Search handleFilterQuery={getFilterQuery} />
      <UsersList isLoading={isLoading} users={users} />
    </div>
  );
};

export default Home;

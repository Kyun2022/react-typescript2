import { useState } from 'react';
import { UserCard } from './components/UserCard';
import { UserProfile } from './types/userProfile';
import axios from 'axios';
import { User } from './types/api/user';

// const user = {
//   id: 1,
//   name: 'きゅん',
//   email: 'aaa@ddd.com',
//   address: 'ADDRESS',
// };

const App = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClickFetchUser = () => {
    setLoading(true);
    setError(false);

    axios
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}${user.username}`,
          email: user.email,
          address: `${user.address.city}${user.address.street}${user.address.suite}`,
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="text-center mt-2 ">
      <button
        className="p-4  bg-gray-400 rounded-xl text-white"
        onClick={onClickFetchUser}
      >
        データ取得
      </button>
      {error ? (
        <p className="text-red-700 mt-8">データの取得に失敗しました</p>
      ) : loading ? (
        <p className="mt-8">Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
};

export default App;

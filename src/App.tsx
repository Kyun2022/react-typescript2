import { UserCard } from './components/UserCard';
import { useAllUsers } from './hooks/useAllUsers';

// const user = {
//   id: 1,
//   name: 'きゅん',
//   email: 'aaa@ddd.com',
//   address: 'ADDRESS',
// };

const App = () => {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();

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

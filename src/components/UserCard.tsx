import { FC } from 'react';
import { UserProfile } from '../types/userProfile';

type Props = {
  user: UserProfile;
};

export const UserCard: FC<Props> = (props) => {
  const { user } = props;

  return (
    <div
      className="border-2 border-gray-400 m-4 p-4 rounded-xl text-left
    "
    >
      <dl>
        <dd>名前</dd>
        <dt>{user.name}</dt>
      </dl>
      <dl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
      </dl>
      <dl>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
};

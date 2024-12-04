import React from "react";
import Image from "next/image";

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  profilePicture: string;
};

type UserCardProps = {
  user: User;
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <div className="profile-picture">
        <Image
          width={100}
          height={100}
          alt={`${user.name} profile picture`}
          src={user.profilePicture}
          className="profile-image"
        />
      </div>
      <div className="user-info">
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
      </div>
    </div>
  );
};

export default UserCard;
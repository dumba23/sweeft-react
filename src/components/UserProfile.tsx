import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import UserProfileCard from "./UserProfileCard";
import { UserType } from "../Types/user.types";
import ListUsers from "./ListUsers";

const UserProfile = () => {
  let { id } = useParams<string>();

  const [user, setUser] = useState<UserType | null>(null);
  const [users, setUsers] = useState<Array<UserType>>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
      );
      setUser({ ...response.data });
      setUsers([...users, response.data]);
    };

    getData();
    /**
     * No need to fill deps array because we only want to show more friends based on id, not according to users state
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const filteredUsers = users.filter(
    (user, index, self) =>
      index ===
      self.findIndex((item) => item.id === user.id && item.name === user.name)
  );

  return (
    <div className="border-[1px] border-[#ccc]">
      {user !== null && <UserProfileCard user={user as UserType} />}
      <div style={{ margin: "20px" }} className="flex">
        {filteredUsers.map((user, index) => {
          return (
            <div key={user.id}>
              <Link
                to={`/user/${user.id}`}
                className="underline text-[#551A8B]"
              >
                {`${user.prefix + " " + user.name + " " + user.lastName}  `}
              </Link>
              {index !== filteredUsers.length - 1 && (
                <span className="mx-1">{">"}</span>
              )}
            </div>
          );
        })}
      </div>
      <h1 className="text-2xl font-bold ml-[10px]">Friends:</h1>
      <ListUsers />
    </div>
  );
};

export default UserProfile;

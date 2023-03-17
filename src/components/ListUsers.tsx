import { useState, useEffect, useRef } from "react";
import axios from "axios";

import { ListUsersArray } from "../Types/listUsers.types";
import User from "./User";

const ListUsers = () => {
  const [users, setUsers] = useState<ListUsersArray>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const loadingDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${currentPage}/20`
      );
      setUsers([...users, ...response.data.list]);
    };

    getData();

    /**
     * There is no need to mention users in dep array because we are fetching data according to currentPage size change during scroll
     * mentioning users in dep array will cause infinite rerender
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 10
      ) {
        setCurrentPage(currentPage + 1);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [currentPage]);

  return (
    <div>
      <div className="flex flex-row flex-wrap">
        {users.map((user) => {
          return (
            <User
              key={user.id}
              id={user.id}
              prefix={user.prefix}
              title={user.title}
              lastName={user.lastName}
              name={user.name}
              imageUrl={user.imageUrl}
            />
          );
        })}
      </div>
      <div ref={loadingDiv}>Loading...</div>
    </div>
  );
};

export default ListUsers;

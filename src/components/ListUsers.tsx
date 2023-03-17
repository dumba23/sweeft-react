import { useState, useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";

import User from "./User";

import { useGetUsers } from "../Hooks/useGetUsers";

const ListUsers = () => {
  let { id } = useParams();
  let location = useLocation();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const loadingDiv = useRef<HTMLDivElement>(null);

  const url =
    location.pathname === "/"
      ? `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${currentPage}/20`
      : `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${currentPage}/20`;
  const { users } = useGetUsers(url, currentPage);

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

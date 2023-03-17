import axios from "axios";
import { useEffect, useState } from "react";
import { ListUsersArray } from "../Types/listUsers.types";

export const useGetUsers = (url: string, currentPage: number) => {
  const [users, setUsers] = useState<ListUsersArray>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      if (currentPage > 1) {
        setUsers([...users, ...response.data.list]);
      } else {
        setUsers(response.data.list);
      }
    };

    getData();
    /**
     * There is no need to mention users in dep array because we are fetching data according to currentPage size change during scroll
     * mentioning users in dep array will cause infinite rerender
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { users };
};

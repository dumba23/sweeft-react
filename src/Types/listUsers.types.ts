export type PaginationObject = {
  current: number;
  nextPage: number;
  pageSize: number;
  previousPage: number | null;
  total: number;
};

export type UserObject = {
  id: number;
  imageUrl: string;
  lastName: string;
  name: string;
  prefix: string;
  title: string;
};

export type ListUsersArray = UserObject[];

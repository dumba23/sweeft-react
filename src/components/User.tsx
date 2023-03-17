import { useNavigate } from "react-router-dom";
import { UserObject } from "../Types/listUsers.types";

const User = ({ id, prefix, name, lastName, title, imageUrl }: UserObject) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/${id}`);
  };

  return (
    <div className="w-[25%] lg:w-[50%]" onClick={handleClick}>
      <div className="text-base m-[12px] border-[1px] border-[solid #ccc] cursor-pointer">
        <div className="overflow-clip bg-clip-content w-[100%]">
          <img src={`${imageUrl}?v=${id}`} alt="Person" />
        </div>
        <div className="font-bold ">{`${prefix} ${name} ${lastName}`}</div>
        <div>{title}</div>
      </div>
    </div>
  );
};

export default User;

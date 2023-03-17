import { UserType } from "../Types/user.types";

const UserProfileCard = ({ user }: { user: UserType }) => {
  return (
    <div className="flex justify-between p-[20px] items-center lg:flex-col ">
      <img
        src={`${user.imageUrl}?v=${user.id}`}
        className="h-[200px] lg:w-[100%]"
        alt="person"
      />
      <fieldset className="ml-[20px] w-[100%] lg:ml-0">
        <legend>Info</legend>
        <div className="font-bold">{`${user.prefix} ${user.name} ${user.lastName}`}</div>
        <div className="italic">{user.title}</div> <br />
        <div>
          <span className="underline">Email:</span>
          {user.email}
        </div>
        <div>
          <span className="underline">Ip Address:</span>
          {user.ip}
        </div>
        <div>
          <span className="underline">Ip Address:</span>
          {user.ip}
        </div>
        <div>
          <span className="underline">Job Area:</span>
          {user.jobArea}
        </div>
        <div>
          <span className="underline">Job Type:</span>
          {user.jobDescriptor}
        </div>
      </fieldset>
      <fieldset className="lg:w-[100%]">
        <legend>Address</legend>
        <div className="font-bold">{`${user.company.name} ${user.company.suffix}`}</div>
        <div>
          <span className="underline">City:</span>
          {user.address.city}
        </div>
        <div>
          <span className="underline">Country:</span>
          {user.address.country}
        </div>
        <div>
          <span className="underline">State:</span>
          {user.address.state}
        </div>
        <div>
          <span className="underline">Street Address:</span>
          {user.address.streetAddress}
        </div>
        <div>
          <span className="underline">ZIP:</span>
          {user.address.zipCode}
        </div>
      </fieldset>
    </div>
  );
};

export default UserProfileCard;

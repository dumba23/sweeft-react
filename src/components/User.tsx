const User = ({
  name,
  title,
  image,
}: {
  name: string;
  title: string;
  image: string;
}) => {
  return (
    <div className="w-[100%] text-base">
      <div className="overflow-clip bg-clip-content">img</div>
      <div className="font-bold ">Name</div>
      <div>Title</div>
    </div>
  );
};

export default User;

import { FiHeart } from "react-icons/fi";
interface LikeButtonProps {
  state: boolean;
}
const LikeButton = ({ state }: LikeButtonProps) => {
  //
  return (
    <div className="p-0">
      {/*  */}
      <FiHeart
        className={`${
          state ? "fill-red-500 text-red-500" : "fill-none text-white"
        } hover:text-red-500 transition-all hover:scale-[1.2] duration-300 cursor-pointer`}
        size={30}
      />
      {/*  */}
    </div>
  );
};

export default LikeButton;

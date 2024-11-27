import { FiThumbsDown } from "react-icons/fi";
interface DislikeButtonProps {
  state: boolean;
}
const DislikeButton = ({ state }: DislikeButtonProps) => {
  //
  return (
    <div className="p-0">
      {/*  */}
      <FiThumbsDown
        className={`${
          state ? "fill-[#00aeff]/40 text-white" : "fill-none text-white"
        } transition-all hover:scale-[1.2] duration-300 cursor-pointer`}
        size={30}
      />
      {/*  */}
    </div>
  );
};

export default DislikeButton;

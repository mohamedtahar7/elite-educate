import { FiBookmark } from "react-icons/fi";
interface SaveButtonProps {
  state: boolean;
}
const SaveButton = ({ state }: SaveButtonProps) => {
  //
  return (
    <div className="p-0">
      {/*  */}
      <FiBookmark
        className={`${
          state ? "fill-white text-white" : "fill-none text-white"
        } transition-all hover:scale-[1.2] duration-300 cursor-pointer`}
        size={30}
      />
      {/*  */}
    </div>
  );
};

export default SaveButton;

import { FaGithub, FaLink } from "react-icons/fa";

const CardSideBar = ({ githubUrl, liveUrl }) => {
  return (
    <div className="absolute top-25 right-2 flex flex-col gap-2 transform translate-x-16 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 z-40">
      {/* GitHub Link */}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 border border-gray-200 rounded-md bg-amber-600 shadow hover:bg-amber-500 flex items-center justify-center">
        <FaGithub className="text-2xl cursor-pointer transition duration-200" />
      </a>

      {/* Live Site Link */}
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 border border-gray-200 rounded-md bg-amber-600 shadow hover:bg-amber-500 flex items-center justify-center">
        <FaLink className="text-2xl cursor-pointer transition duration-200" />
      </a>
    </div>
  );
};

export default CardSideBar;

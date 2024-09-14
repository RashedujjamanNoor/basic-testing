import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";

const Navbar = (props) => {
  const { mood, setMood } = props;
  return (
    <div
      className={`flex justify-between gap-2 w-full px-96 py-3 ${
        mood ? "bg-gray-700 text-white" : "bg-slate-300 text-black"
      }`}
    >
      <ul className="flex flex-1 justify-evenly items-center py-2 font-medium">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Projects</li>
      </ul>
      <div
        onClick={() => setMood(!mood)}
        className="flex justify-center items-center cursor-pointer"
      >
        {mood ? (
          <LuMoon className="text-2xl " />
        ) : (
          <LuSun className="text-2xl" />
        )}
      </div>
    </div>
  );
};

export default Navbar;

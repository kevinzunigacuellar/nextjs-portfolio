import Tooltip from "components/Tooltip";
import { useEffect, useState } from "react";

const DarkmodeButton = () => {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    if (localStorage.getItem("mode") === "true") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const handleToggleDarkTheme = () => {
    const darkTheme = document.documentElement.classList.toggle("dark");
    localStorage.setItem("mode", darkTheme.toString());
    setDark((prevState) => !prevState);
  };

  return (
    <button
      onClick={handleToggleDarkTheme}
      className="group relative snap-end flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-2xl bg-gray-200 dark:bg-gray-800 transition-all hover:scale-110 active:scale-95 border-2 border-opacity-0 dark:border-opacity-0 dark:hover:border-opacity-100 hover:border-opacity-100 border-blue-600 dark:border-blue-700 hover:shadow-blue-200 dark:hover:shadow-blue-800 hover:shadow-md"
    >
      <svg
        className="h-8 w-8 fill-gray-400 dark:fill-gray-500 group-hover:scale-125 dark:group-hover:fill-gray-400 group-hover:fill-gray-500 duration-300"
        viewBox="0 0 20 20"
      >
        {!dark ? (
          <path
            fillRule="evenodd"
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            clipRule="evenodd"
          />
        ) : (
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        )}
      </svg>
      <Tooltip text={dark ? "Light mode" : "Dark mode"} />
    </button>
  );
};

export default DarkmodeButton;

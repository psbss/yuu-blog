import React from "react"
import useDarkMode from "use-dark-mode"
import Toggle from "./toggle"
import sunSvg from "../../static/img/sun.svg"
import moonSvg from "../../static/img/moon.svg"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="flex p-4 ml-auto mr-0 relative">
      <button className="mr-2 focus:outline-none" type="button" onClick={darkMode.disable}>
        <img src={sunSvg} width="25px" className="mb-0 p-1 svg-sun rounded-full"></img>
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button className="ml-2 focus:outline-none" type="button" onClick={darkMode.enable}>
        <img src={moonSvg} width="25px" className="mb-0 p-1 svg-moon rounded-full"></img>
      </button>
    </div>
  )
};

export default DarkModeToggle;
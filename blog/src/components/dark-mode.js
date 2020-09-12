import React from "react"
import useDarkMode from "use-dark-mode"
import Toggle from "./toggle"
import sunSvg from "../../static/img/sun.svg"
import moonSvg from "../../static/img/moon.svg"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="">
      <button type="button" onClick={darkMode.disable}>
        <img src={sunSvg} width="25px"></img>
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
        <img src={moonSvg} width="25px"></img>
      </button>
    </div>
  )
};

export default DarkModeToggle;
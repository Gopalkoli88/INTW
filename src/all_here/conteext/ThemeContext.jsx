import React, { Children, createContext, useState } from 'react'

const ThemeContext = () => {
  const ThemeContext=createContext();
const [theme,SetTheme]=useState('light');
const toggleTheme=()=>{
  SetTheme(prev=>prev==='light'?'dark':'light');
}
const themeValue={
  theme,toggleTheme
}
  return (
    <ThemeContext.Provider value={themeValue}>
      <div className={theme}>
        {Children}
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeContext
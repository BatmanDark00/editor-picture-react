import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    console.log('isDark state', localStorage.getItem('isDark'));
    const isDarkLocalStorage = localStorage.getItem('isDark');
    return isDarkLocalStorage === "true";
  });

  useEffect(() => {
    console.log('isDark effect', localStorage.getItem('isDark'));
    const isDarkLocalStorage = localStorage.getItem('isDark');
    setIsDark(isDarkLocalStorage === "true");
  }, []);

  const toggleDarkMode = () => {
    setIsDark(prevIsDark => {
        const newIsDark = !prevIsDark;
        console.log('isDark', newIsDark); // Utiliza newIsDark aquí
        localStorage.setItem('isDark', newIsDark.toString());
        //Refrescar sitio
        document.location.reload();
        return newIsDark;
      });
  };

  
  

  return { isDark, toggleDarkMode};
};

export default useDarkMode;

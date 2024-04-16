import { useState, useEffect } from "react";

export function useOpenMenuEdit () {
    const [isMenuEditOpen, setMenuEditOpen] = useState(false);

    useEffect(() => {
      const handleOpenMenuEdit = (e)  => {
        e.stopPropagation(); // Evita la propagación del evento
        console.log('Evento personalizado recibido:', e.detail);
        
        // Espera un breve momento antes de cerrar el menú
        setTimeout(() => {
          setMenuEditOpen(true);
        }, 10);
      };
  
      const uploadFile = (e) => {
        console.log('Recibiendo la imagen:', e.detail);
        // Espera un breve momento antes de cerrar el menú
      }; 
    
      window.addEventListener('openMenuEdit', handleOpenMenuEdit);
      window.addEventListener('uploadFile', uploadFile);
    
      return () => {
        window.removeEventListener('openMenuEdit', handleOpenMenuEdit);
  
      };
    }, []); 
    
    function handleClosedMenuEdit () {
      console.log("Menú cerrado");
      setMenuEditOpen(isMenuEditOpen);
    }

    return { movies: isMenuEditOpen, handleClosedMenuEdit }
}
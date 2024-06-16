import {useState, useRef, useEffect} from "react"


function useSearchUnsplash () {
    const [search, updateSearch] = useState('nature');
    const [error, setError] = useState<string | null>(null);
    const isFirstInput = useRef(true);
  
    useEffect(() => {
      if (isFirstInput.current) {
        isFirstInput.current = search === ''
        return
      }
  
      if (search === '') {
        setError('No se puede buscar una imsgen con la entrada vacía')
        return
      }
  
      if (search.match(/^\d+$/)) {
        setError('No se puede buscar una imagen con un caracter desconocido')
        return
      }
  
      if (search.length < 3) {
        setError('La búsqueda debe tener al menos 3 caracteres')
        return
      }
  
      setError(null)
    }, [search])
  
    return { search, updateSearch, error }
  }

export default useSearchUnsplash;
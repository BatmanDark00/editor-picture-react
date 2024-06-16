// PhotoService.ts

interface Photo {
    id: number;
    title: string;
    url: string;
  }
  
  export const fetchPhotos = async (): Promise<Photo[]> => {    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      if (!response.ok) {
        throw new Error('Failed to fetch photos');
      }
      const data = await response.json();
      return data.slice(0, 10); // Limit to first 10 photos for this example
    } catch (error) {
      console.error('Error fetching photos:', error);
      return [];
    }
  };
  
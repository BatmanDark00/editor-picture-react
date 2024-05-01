import { createApi } from 'unsplash-js';
import * as nodeFetch from 'node-fetch'



const accessKey ="rhU-MQW7-BUMW1Mfp-whWdXjkGmuisyD9IQwS8IUSjo";

const unplashService = createApi({  
  accessKey: accessKey,
 // fetch: nodeFetch.default as unknown as typeof fetch,
});




export default unplashService;

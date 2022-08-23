import {useQuery} from 'react-query';
import axios from 'axios';

export const RQSuperHeroesPage = () => {
  const { data, error, isError, isLoading } = useQuery('superheroes', async () => {
    const { data } = await axios.get('http://localhost:4000/superheroes/');
    console.log(data);
    return data;
  });

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
      return <div>Error! {error.message}</div>
  }

  return(
    <div>
      <h2> Superheroes using React Query </h2>
      {
        data.map((heroes, id) => {
          return <div key={id}> {heroes.name} </div>
        })
      }
    </div>
  )
  
  
}

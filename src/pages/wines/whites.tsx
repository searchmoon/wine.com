
import type { NextPage } from "next";
import axios from 'axios';
import useSWR from 'swr';
import { Wine } from "../../types/wine";
import { fetcher } from "../../utils/fetcher";

const fetcher = (url: string) => axios.get(url).then(res =>res.data);

export async function getServerSideProps() {
  const { data, error } = useSWR('https://api.sampleapis.com/wines/port', fetcher);
  
  
const WhiteWinePage: NextPage = ({ data, error }) => {
  
  if(error) return <div>Failed to Loading...</div> 
  if(!data) return <div>...Loading</div> 

  return (
    <div>
      <h1>whites</h1>
      <main>
        {data.map((wineDataL: Wine) => {
          const { id, wine, winery } = wineData;
          return (
            <div key={`port-wine-list-${id}`}>
              <h1>{wine}</h1>
              <p>{winery}</p>
            </div>
          )
        })}
      </main>
    </div>
  )
}
//

  
  return { props: { data, error } }
}

export default WhiteWinePage;

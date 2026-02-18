import DestinationCard from "./DestinationCard";
import data from '../data'

export default function Main() {

    const destinations = data.map(dstn => {
        return (
            <DestinationCard 
                key = {dstn.id}
                {...dstn}
            />
        )
    })

    return (
        <main>
          {destinations}
        </main>
    );
}

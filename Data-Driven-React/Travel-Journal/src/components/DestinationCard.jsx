import markerIcon from '../assets/marker-icon.gif'

export default function DestinationCard(props) {

    const { destination, country, location, dateFrom, dateTo, description, imgSrc } = props;
    console.log(imgSrc)
    return (
        <>
            {
                
                    <div className="destination-card">
                        <img src={imgSrc} width={120} height={150}/>
                        <div className="dest-content">
                            <div className="dest-loc">
                                <img src={markerIcon} width={10} />
                                <p>{country}</p>
                                <a href={location}>View on Google Maps</a>
                            </div>
                            <h2>{destination}</h2>
                            <div className="duration">
                                <span>{dateFrom}</span>
                                <span>{dateTo}</span>
                            </div>
                            <p>{description}</p>
                        </div>
                    </div>
                
            }
        </>
    )
}

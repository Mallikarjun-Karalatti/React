import markerIcon from '../assets/marker-icon.gif'

export default function DestinationCard(props) {
    console.log(props);

    const { destinationImg, destination, country, googleMapsLink, duration, description } = props;

    return (
        <>
            {
                
                    <div className="destination-card">
                        <img className="destinImg" src={destinationImg.src} alt={destinationImg.alt}/>
                        <div className="dest-content">
                            <div className="destn-loc">
                                <img src={markerIcon} width={15} />
                                <p>{country}</p>
                                <a href={googleMapsLink}>View on Google Maps</a>
                            </div>
                            <h2>{destination}</h2>
                           <h3 className='duration'>{duration}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                
            }
        </>
    )
}

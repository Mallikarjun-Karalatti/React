import DestinationCard from "./DestinationCard";
import mountFujiPic from "../assets/volcanic-cone-Japan-Mount-Fuji.webp";

const destinations = [
    {
        destination: "Mount Fuji",
        country: "Japan",
        location: "https://www.google.com/maps/place/Mount+Fuji",
        dateFrom: Date(),
        dateTo: Date(),
        description:
            "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imgSrc: mountFujiPic,
    },
    {
        destination: "Mount Fuji",
        country: "Japan",
        location: "https://www.google.com/maps/place/Mount+Fuji",
        dateFrom: Date(),
        dateTo: Date(),
        description:
            "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imgSrc: mountFujiPic,
    },
    {
        destination: "Mount Fuji",
        country: "Japan",
        location: "https://www.google.com/maps/place/Mount+Fuji",
        dateFrom: Date(),
        dateTo: Date(),
        description:
            "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imgSrc: mountFujiPic,
    },
    {
        destination: "Mount Fuji",
        country: "Japan",
        location: "https://www.google.com/maps/place/Mount+Fuji",
        dateFrom: Date(),
        dateTo: Date(),
        description:
            "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imgSrc: mountFujiPic,
    },
];

export default function Main() {
    return (
        <Main>
            {destinations.map((destn) => (
                <DestinationCard
                    destination={destn.destination}
                    country={destn.country}
                    location={destn.location}
                    dateFro={destn.dateFrom}
                    dateT={destn.dateTo}
                    description={destn.description}
                    imgSrc={destn.imgSrc}
                />
            ))}
        </Main>
    );
}

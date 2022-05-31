import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import ArtistDetails from "../components/ArtistDetails";
import Loader from "../components/Loader";
import SearchArtists from "../components/SearchArtists";
import { Artist } from "../types/Artist";
import { Event } from "../types/Event";
import { getArtistByName, getArtistEvents } from "../utils/artistUtil";

function App() {
    const [artistData, setArtistData] = useState<Artist>();
    const [isLoading, setIsLoading] = useState(false);
    const [eventsData, setEventsData] = useState<Event[]>([]);

    useEffect(() => {}, []);

    const searchArtists = async (name: string) => {
        setIsLoading(true);
        const artistReq = getArtistByName(name);
        const eventsReq = getArtistEvents(name);

        try {
            const artist = await artistReq;
            const events = await eventsReq;

            setIsLoading(false);

            if (!artist) {
                // Artist Not Found. Show Error
                return;
            }

            setArtistData(artist);
            setEventsData(events);
        } catch (e) {
            console.log(e);
            setIsLoading(false);
            // Show Error Notification
        }
    };

    return (
        <Container maxWidth="xl">
            <div className="app-content">
                <Loader open={isLoading} />
                <Box
                    sx={{
                        height: "10vh",
                    }}
                >
                    {<SearchArtists onSearch={searchArtists} />}
                </Box>

                {artistData && !isLoading && (
                    <Box
                        sx={{
                            paddingTop: "10vh",
                        }}
                    >
                        <ArtistDetails data-testid="artist-detail" artist={artistData} events={eventsData} />
                    </Box>
                )}
            </div>
        </Container>
    );
}

export default App;

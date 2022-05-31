import { FacebookOutlined } from "@mui/icons-material";
import { Box, Card, CardContent, Chip, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { ArtistDetailsPropsType } from "../types/Props";
import SingleEvent from "./SingleEvent";

const ArtistDetails = ({ artist, events }: ArtistDetailsPropsType) => {
    useEffect(() => {
        artist.facebook_page_url =
            artist.links.find((l) => l.type === "facebook")?.url || artist.facebook_page_url;
    }, [artist]);

    const openLink = (url: string) => {
        window.open(url, "_blank")?.focus();
    };

    return (
        <div>
            <Grid container spacing={2}>
                {/* Artist Info */}
                <Grid
                    item
                    sm={3}
                    sx={{
                        marginTop: 7,
                    }}
                >
                    <Box>
                        <Card>
                            <CardContent>
                                <Box className="flex align-center justify-center">
                                    <img
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            borderRadius: "50%",
                                        }}
                                        src={artist.image_url}
                                        alt={artist.name}
                                    />
                                </Box>
                                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                                <Box textAlign="center">
                                    <Typography variant="h6" fontWeight="bold">
                                        {artist.name}
                                    </Typography>
                                </Box>

                                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                                <Box
                                    textAlign="center"
                                    className="flex align-center justify-center"
                                >
                                    <Box>
                                        <Typography fontWeight="bold" variant="h5">
                                            {artist.tracker_count}
                                        </Typography>
                                        <Typography variant="body1">Followers</Typography>
                                    </Box>
                                    <Divider orientation="vertical" sx={{ margin: 2 }} />
                                    <Box>
                                        <Typography fontWeight="bold" variant="h5">
                                            {events.length}
                                        </Typography>
                                        <Typography variant="body1">Events</Typography>
                                    </Box>
                                </Box>

                                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

                                <Box className="flex align-center justify-center">
                                    <Chip
                                        color="primary"
                                        size="small"
                                        label="Facebook"
                                        sx={{ color: "white" }}
                                        onClick={() => openLink(artist.facebook_page_url)}
                                        icon={<FacebookOutlined />}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
                <Grid item sm={1}></Grid>

                {/* Artist Events */}
                <Grid item sm={8}>
                    <Box>
                        <Typography variant="h5" fontWeight="bold">
                            Upcoming Events for {artist.name}
                        </Typography>
                        <Divider
                            sx={{
                                marginBottom: 2,
                                marginTop: 2,
                            }}
                        />
                        {events.map((e, i) => (
                            <SingleEvent event={e} key={i} isEven={i % 2 === 0} />
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default ArtistDetails;

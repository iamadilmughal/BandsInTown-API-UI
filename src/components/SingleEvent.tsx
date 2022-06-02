import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { MONTHS } from "../constants";
import { SingleEventPropsType } from "../types/Props";

const SingleEvent = ({ event, isEven }: SingleEventPropsType) => {

    const goToEvent = () => {
        window.open(event.url, "_blank")?.focus();
    }

    return (
        <Box
            sx={{
                overflow: "hidden",
                backgroundColor: "white",
                marginBottom: 2,
                boxShadow: '0 0 10px #dddddd'
            }}
        >
            <Grid container>
                <Grid
                    item
                    sm={1}
                    textAlign="center"
                    sx={({ palette }) => ({
                        padding: 1,
                        backgroundColor: isEven ? palette.primary.main : palette.secondary.main,
                        color: "white",
                    })}
                >
                    <Typography variant="h4" fontWeight="bold">
                        {new Date(event.datetime).getDate()}
                    </Typography>
                    <Typography variant="body1">
                        {MONTHS[new Date(event.datetime).getMonth()]}
                    </Typography>
                </Grid>

                <Grid
                    item
                    sm={9}
                    sx={{
                        paddingLeft: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Typography fontWeight="bold" variant="h6">
                        {event.venue.name}
                    </Typography>
                    <Typography variant="body2">
                        {event.venue.city}, {event.venue.country}
                    </Typography>
                </Grid>

                <Grid
                    item
                    sm={2}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyCenter: "center",
                    }}
                >
                    <Button
                        sx={{
                            fontWeight: "bold",
                            color: "white",
                            boxShadow: "unset",
                        }}
                        onClick={goToEvent}
                        variant="contained"
                    >
                        View More
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SingleEvent;

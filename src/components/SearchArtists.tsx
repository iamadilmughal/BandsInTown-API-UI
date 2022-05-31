import SearchIcon from "@mui/icons-material/Search";
import { Box, Grid, IconButton, InputBase, Paper } from "@mui/material";
import React, { FormEvent, MouseEvent, useState } from "react";
import bitLogo from "../assets/bitLogo.png";
import { SearchArtistPropsType } from "../types/Props";

const SearchArtists = ({ onSearch }: SearchArtistPropsType) => {
    const [query, setQuery] = useState("");

    const validateSearch = (e: MouseEvent<HTMLElement> | FormEvent<HTMLElement>) => {
        e.stopPropagation();
        e.preventDefault();
        if (!query || query === "") {
            return;
        }
        onSearch(query);
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Grid container>
                <Grid item xs={2} className="flex align-center">
                    <img
                        style={{
                            width: "80%",
                        }}
                        src={bitLogo}
                        alt="Bands in Town"
                    />
                </Grid>
                {/* <Grid item xs={1}></Grid> */}
                <Grid item sm={12} md={10} className="flex align-center">
                    <Paper
                        component="form"
                        onSubmit={validateSearch}
                        data-testid='data-test-query'
                        data-id="query"
                        sx={{
                            p: "2px 10px",
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            height: 55,
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            value={query}
                            placeholder="Search Artists"
                            inputProps={{ "aria-label": "search google maps" }}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <IconButton
                            color="primary"
                            type="submit"
                            sx={{ p: "10px" }}
                            aria-label="search"
                            onClick={validateSearch}
                        >
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SearchArtists;

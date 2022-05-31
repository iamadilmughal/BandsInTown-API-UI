import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { LoaderPropsType } from "../types/Props";

const Loader = ({ open }: LoaderPropsType) => {
    return (
        <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default Loader;

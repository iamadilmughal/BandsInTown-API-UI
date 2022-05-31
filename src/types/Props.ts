import { Artist } from "./Artist";
import { Event } from "./Event";

export type LoaderPropsType = {
    open: boolean;
};

export type ArtistDetailsPropsType = {
    artist: Artist;
    events: Event[];
};

export type SearchArtistPropsType = {
    onSearch: (query: string) => void;
};

export type SingleEventPropsType = {
    event: Event;
    isEven: boolean;
};

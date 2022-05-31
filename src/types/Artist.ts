import { Event } from "./Event";

type ArtistLink = { type: string; url: string };

export type Artist = {
    id: string;
    name: string;
    image_url: string;
    links: ArtistLink[];
    events: Event[];
    tracker_count: number;
    facebook_page_url: string;
};

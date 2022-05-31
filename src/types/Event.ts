import { Artist } from "./Artist";

export type EventVenue = {
    name: string;
    city: string;
    country: string;
};

export type Event = {
    id: string;
    url: string;
    datetime: string;
    artist: Artist;
    venue: EventVenue;
};

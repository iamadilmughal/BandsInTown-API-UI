import axios from "axios";
import { APP_ID, BASE_URL } from "../constants";
import { Artist } from "../types/Artist";
import { Event } from "../types/Event";

export const getArtistByName = async (name: string): Promise<Artist | undefined> => {
    const res = await axios.get(`${BASE_URL}/artists/${name}?app_id=${APP_ID}`);
    const { data } = res;
    if (data === "") {
        return;
    }
    return data;
};

export const getArtistEvents = async (name: string): Promise<Event[]> => {
    const res = await axios.get(`${BASE_URL}/artists/${name}/events?app_id=${APP_ID}`);
    return res.data;
};

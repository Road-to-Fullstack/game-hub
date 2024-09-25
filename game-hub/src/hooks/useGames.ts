import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClientWithCache from "../services/api-client";
export interface Game {
    id: number;
    name: string;
    image: {
        icon_url: string;
        medium_url: string;
        screen_url: string;
        // Add any other sizes the API provides
      };
  }
  interface GameResults {
    count: number;
    results: Game[];
  }
const useGames = () =>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();
        apiClientWithCache("", {signal: controller.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;
                setError(err.message)});

        return () =>controller.abort();
    });

    return {games, error};
}

export default useGames
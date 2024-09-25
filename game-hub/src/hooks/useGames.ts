import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClientWithCache from "../services/api-client";

export interface Platform{
    id: number,
    name: string,
    abbreviation: string;
}
export interface Game {
    id: number;
    name: string;
    image: {
        small_url: string;
      };
      platforms: Platform[]
  }
  interface GameResults {
    count: number;
    results: Game[];
  }
const useGames = () =>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false)


    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClientWithCache("", {signal: controller.signal})
        .then((res) => {setGames(res.data.results)
            setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)});

        return () =>controller.abort();
    }, []);

    return {games, error, isLoading};
}

export default useGames
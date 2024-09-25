import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClientWithCache from "../services/api-client";
import { Game } from "./useGames";

interface Genre{
    id: number;
    name:string;
}


const useGenres = () =>{
    const [genres, setGenres] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false)


    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClientWithCache("genres", {signal: controller.signal})
        .then((res) => {setGenres(res.data.results)
            setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)});

        return () =>controller.abort();
    }, []);

    return {genres, error, isLoading};
}

export default useGenres;
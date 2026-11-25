// Modules
import { useState, useEffect } from 'react'
import tmdb from '../tmdb'
import type { Movie } from '../types'

function TopRated() {

    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const response = await tmdb.get('/movie/top_rated', {
                    params: { page: 1 },
                });
                setMovies(response.data.results);
            } catch (err) {
                setError('Failed to fetch movies.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPopularMovies();
    }, []);

    if (loading) return <p>Loading movies...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className='movieGrid'>
            {movies.map((movie) => (
                <div className='movie' key={movie.id} style={{
                    backgroundImage: movie.poster_path
                        ? `url(${IMAGE_BASE_URL}${movie.poster_path})`
                        : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '8px',
                }}>
                    <div className='info'>
                        <p>{movie.title}</p>
                        <p>{movie.release_date}</p>
                        <p>⭐ {movie.vote_average.toFixed(1)}</p>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default TopRated

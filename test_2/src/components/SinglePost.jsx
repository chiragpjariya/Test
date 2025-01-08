import React from 'react'
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getSingleCard = async (postId) => {
    const response = await axios.get(`https://www.freetestapi.com/api/v1/movies/${postId}`);
    return response.data;
}

function SinglePost() {
    const { postId } = useParams();
    console.log('singlePost', postId);

    const { data: movie, isLoading, error } = useQuery({
        queryKey: ['singlePost', postId],
        queryFn: () => getSingleCard(postId),
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    console.log(movie);

    return (
        <div className="h-screen flex justify-center items-center"> 
            <Card sx={{ maxWidth: 345, marginBottom: 3 }}>
                <CardMedia
                    component="img"
                    alt={movie.title}
                    height="310"
                    image={movie.poster}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {movie.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Release Date: {movie.releaseDate}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Rating: {movie.rating}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default SinglePost;
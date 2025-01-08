import React from 'react'
import { Card, CardContent, CardMedia, Typography, Chip, Button, Grid } from '@mui/material';
import { NavLink, useParams } from 'react-router'


function Cards({ movie }) {

    const { id } = movie
    console.log(id);



    return (
        <>
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
                        <strong>Year:</strong> {movie.year}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Genre:</strong> {movie.genre.join(', ')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Rating:</strong> {movie.rating} / 10
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Director:</strong> {movie.director}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        <strong>Plot:</strong> {movie.plot}
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item>
                            <Chip label={movie.country} color="primary" />
                        </Grid>
                        <Grid item>
                            <Chip label={movie.language} color="secondary" />
                        </Grid>
                    </Grid>
                </CardContent>
                <Button size="small" color="primary" href={movie.website} target="_blank">
                    Official Website
                </Button>
                <Button size="small" color="secondary" href={movie.trailer} target="_blank">
                    Watch Trailer
                </Button>
                <button className="btn btn-outline btn-info mt-3 mb-3 ml-[20%]">
                    <NavLink to={`/${id}`} className='p-4'>
                        SigleCard
                    </NavLink>
                </button>
            </Card>
        </>
    )
}

export default Cards
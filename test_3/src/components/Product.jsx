import React from 'react'
import { Card, CardMedia, CardContent, Typography, Rating, Button, Box, Grid } from '@mui/material';
function Product({ product }) {
    return (
        <>
            <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.images[0]}
                    alt={product.title}
                />
                <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                        {product.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Rating value={product.rating} precision={0.1} readOnly />
                        <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                            {product.rating} ({product.reviews.length} reviews)
                        </Typography>
                    </Box>
                    <Typography variant="body1" color="textPrimary" fontWeight="bold" sx={{ mt: 1 }}>
                        ${product.price} <span style={{ textDecoration: 'line-through', color: '#888' }}>${(product.price + (product.price * product.discountPercentage / 100)).toFixed(2)}</span>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                        {product.availabilityStatus} | Stock: {product.stock}
                    </Typography>
                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Add to Cart
                    </Button>
                </CardContent>
            </Card>
        </>
    )
}

export default Product
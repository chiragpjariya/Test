import { useQuery } from '@tanstack/react-query';
import { getApi } from './api/Api';
import Cards from './Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function Posts() {
    const { data, isError, isPending } = useQuery({
        queryKey: 'posts',
        queryFn: getApi
    });

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;

    return (
        <Container>
            <Grid container spacing={3}>
                {data && data.map((movie, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Cards movie={movie} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Posts;
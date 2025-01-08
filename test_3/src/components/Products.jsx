import React from 'react'
import { useState } from 'react';
import { use } from 'react'
import { getApi } from './Api';
import {
    useQuery
} from '@tanstack/react-query'

import Product from './Product';



function Products() {


    const [skip, setSkip] = useState(0);

    const { data, isError, isPending } = useQuery({
        queryKey: ['products', skip],
        queryFn: () => getApi(skip),
        staleTime: 5000,

    })


    console.log(data);


    if (isPending) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error</div>
    }

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {data && data.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
           

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }} className='btn btn-neutral'>
                <button onClick={() => setSkip((prev) => prev - 10)}>previouse</button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }} className='btn btn-primary'>
                <button onClick={() => setSkip((prev) => prev + 10)}>Load More</button>
            </div>

        </>
    )
}

export default Products
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "Product | Nepali Pasal",
    description: "Product view by id",
    keywords: ['products', 'product']
};

const ProductViewPage = () => {
    return (
        <main>
            <h1>Products View Page</h1>
        </main>
    )
}

export default ProductViewPage
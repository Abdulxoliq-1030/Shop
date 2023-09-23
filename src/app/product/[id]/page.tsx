import CustomImage from '@/components/image';
import { ProductType } from '@/interfaces';
import { notFound } from 'next/navigation';
import React from 'react';

interface PageProps {
    params: {
        id: string;
    }
}



const Page: React.FC<PageProps> = async ({ params: { id } }) => {


    try {

        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const product: ProductType = await res.json();
        return (
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">
                <CustomImage product={product} />
                <div className="divide-2">
                    <div className="space-y-2 pb-8">
                        <h1 className="text-2xl md:text-4xl font-bold">
                            {product.title}
                        </h1>
                        <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
                            {product.price}
                        </h2>
                    </div>
                    <div>
                        <p className="text-xs md:text-sm">{product.description}</p>
                    </div>
                </div>
            </div>
        )
    } catch (err) {
        notFound()
    }


}

export default Page;
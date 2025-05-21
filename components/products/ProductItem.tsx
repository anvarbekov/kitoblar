import { Product } from '@/lib/models/ProductModel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="card w-full sm:w-72 bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-success">
      <Link href={`/product/${product.slug}`}>
        <figure className="p-4">
          <img
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-xl object-cover h-48 w-full sm:w-60 mx-auto"
          />
        </figure>
      </Link>
      <div className="card-body px-4 pt-0">
        <Link href={`/product/${product.slug}`}>
          <h2 className="card-title text-base font-semibold line-clamp-2">{product.name}</h2>
        </Link>
        <p className="text-sm text-gray-500">{product.brand}</p>
        {/* <Rating value={product.rating} caption={`(${product.numReviews})`} /> */}
        <p className="text-xl font-bold text-primary">${product.price}</p>
      </div>
    </div>
  )
}

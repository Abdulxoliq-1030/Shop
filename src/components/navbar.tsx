import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header className='flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white'>

            <Link href={"/"}>
                <h1 className="text-black">Next</h1>
            </Link>
            <div className="flex items-center space-x-2.5 text-sm">
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={"/"} className="mr-5 hover:text-gray-900">Home Page</Link>
                    <Link href={"/products"} className="mr-5 hover:text-gray-900">All Products</Link>
                    <Link href={"/contacts"} className="mr-5 hover:text-gray-900">Contacts</Link>
                </nav>
                <Link href={"/shopping-cart"}>
                    <button className="button bg-blue-500 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black transition-all">
                        My bag
                    </button>
                </Link>
            </div>
        </header>
    )
}

export default Navbar
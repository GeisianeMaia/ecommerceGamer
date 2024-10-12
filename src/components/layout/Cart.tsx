'use client'

import useCart from '@/data/hooks/useCart'
import { IconShoppingCart } from '@tabler/icons-react'
import Link from 'next/link'

export default function Cart() {
    const {qtdeItems} = useCart()
    return (
        <Link href="/cart">
            <div className="flex relative">
                <IconShoppingCart size={32} stroke={1} className="text-gray-500"/>
                <div
                    className="
                        absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full
                        flex justify-center items-center text-xs
                    "
                >{qtdeItems}
                </div>
            </div>
        </Link>
    )
}
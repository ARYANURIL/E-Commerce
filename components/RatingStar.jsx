import React from 'react'
import { Star } from 'lucide-react';

export default function RatingStar({ rating = 0, jumlahUlasan = 0}) {
    const totalBintang = [1, 2, 3, 4, 5]

    return(
        <div className='flex items-center gap-1.5'>
            <div className='flex items-center gap-0.5'>
                {totalBintang.map((nuril) => {
                    const isFull = rating >= nuril;
                    const isHalf = !isFull && rating >= nuril - 0.5;

                    return(
                        <div key={nuril} className='relative h-4 w-4'>
                            <Star className='w-4 h-4 text-slate-600 fill-slate-700 absolute top-0 left-0'/>
                            {isFull && (
                                <Star className='w-4 h-4 text-amber-400 fill-amber-400 absolute top-0 left-0'/>
                            )}

                            {isHalf && (
                                <div className='overflow-hidden w-[50%] absolute top-0 left-0 z-10'>
                                    <Star className='w-4 h-4 text-amber-400 fill-amber-400'/>
                                </div>
                            )}
                        </div>
                    )
                })}

                <div className="text-xs font-semibold text-slate-300 flex items-center gap-1 ml-1">
                    <span>{rating.toFixed(1)}</span>
                    <span className="text-slate-400">({jumlahUlasan} ulasan)</span>
                </div>
            </div>
        </div>
    )
}
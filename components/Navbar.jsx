'use client'
import Link from "next/link"
import { MdShoppingCart } from "react-icons/md"



export default function Navbar({
    setKeranjang,
    totalHarga,
    keranjangCount,
    setKeranjangOpen,
    keranjang = [],      
    keranjangOpen,
    setKataKunci,
    kategoriAktif,
    setKategoriAktif,
    setIsOpenMenu,
    isOpenMenu,
}) {
    return(
        <div className="min-h-auto flex justify-between items-center p-2 bg-slate-900  border-b border-slate-700 sticky top-0 z-40 ">
            <Link href="/" >
                <h1 className="text-[10px]w md:text-xl font-bold text-amber-400 cursor-pointer">
                    Bannur E-Commerce       
                </h1>
            </Link>
            <main>
                    <div className="flex gap-3">
                        <div className="bg-slate-800 px-8 py-1 rounded-xl border border-slate-700 flex justify-center items-center  md:flex gap-3 items-center">
                            <input type="search" name="" onChange={(e) => setKataKunci(e.target.value)} placeholder="Cari Barang" className="rounded-lg focus:outline-none" id="" />
                        </div>
                        <div className=" bg-slate-800 px-4 py-2 rounded-xl border border-slate-700 flex justify-center items-center hidden md:block">
                            <button onClick={() => setKategoriAktif("semua")} className={`px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
                                kategoriAktif === "semua" ? "bg-amber-400 text-slate-900" : "bg-slate-800 text-white"
                            }`}>semua</button>

                            <button onClick={() => setKategoriAktif("elektronik")} className={`px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
                                kategoriAktif === "elektronik" ? "bg-amber-400 text-slate-900" : "bg-slate-800 text-white"
                            }`}>elektronik</button>

                            <button onClick={() => setKategoriAktif("makanan")} className={`px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
                                kategoriAktif === "makanan" ? "bg-amber-400 text-slate-900" : "bg-slate-800 text-white"
                            }`}>makanan</button>
                         </div>
                            <div>
                            <button
                                onClick={() => setIsOpenMenu(!isOpenMenu)}
                                className="block md:hidden text-2xl rounded-lg bg-slate-800 border border-slate-700 text-amber-400 px-4 py-2 transition-all duration-100 active:scale-95"
                            >
                                {isOpenMenu ? "✕" : "☰"}
                            </button>
                        </div>
                    </div>     
            </main>
            {setKeranjangOpen ? (
                
                <button
                    onClick={() => setKeranjangOpen(true)}
                    className="bg-amber-400 text-black font-semibold px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-amber-300 transition cursor-pointer hidden md:block"
                >
                    <MdShoppingCart className="text-xl" />
                    <span>keranjang: {keranjangCount}</span>
                </button>
            ) : (
                <button onClick={() => setKeranjangOpen(true)} className="bg-amber-400 text-black font-semibold px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-amber-300 transition">
                    <MdShoppingCart className="text-xl" />
                    <span>Lihat Keranjang</span>
                </button>
            )}


           
        </div>
    )
}
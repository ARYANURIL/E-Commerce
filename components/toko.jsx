'use client'

import Image from "next/image";
import Link from "next/link";
import { lazy, useState } from "react";
import { FaShoppingCart } from 'react-icons/fa'
import Navbar from './Navbar'
import { Menu, X, ShoppingCart, Home, Package } from 'lucide-react';
import { useCart } from '../components/CartContext'

export default function Toko() {
    // const [dataProduk] = useState([
    //     {id:101, nama: "Iphone 17 Promag", harga: 299000, gambar: "📱"},
    //     {id: 102, nama: "Intel I5", harga: 599000, gambar: "⚙"},
    //     {id: 103, nama: "Seblak Level 5", harga: 10000, gambar: "🍲"},
    //     {id: 104, nama: "Smart Watch", harga: 299000, gambar: "⌚"}
    // ])  



    const elektronik = [
        {id:101, nama: "Redmi Note 13 5G", harga: 1500000, gambar: "/assets.image/redmi note 13 5g.jpg", kategori: "elektronik"},
        {id:102, nama: "Samsung J2 Prime", harga: 500000, gambar: "/assets.image/samsung j2 prime.jpg", kategori: "elektronik",},
        {id:103, nama: "iPhone 15", harga: 12000000, gambar: "/assets.image/iphone 15.jpg", kategori: "elektronik"},
        {id:104, nama: "iPhone 15 Pro", harga: 18000000, gambar: "/assets.image/iphone 15 pro.jpg", kategori: "elektronik"},
        {id:105, nama: "iPhone 16", harga: 14000000, gambar: "/assets.image/iphone 16.jpg", kategori: "elektronik"},
        {id:106, nama: "iPhone 16 Pro Max", harga: 22000000, gambar: "/assets.image/iphone 16 pro max.jpg", kategori: "elektronik"},
        {id:107, nama: "Samsung Galaxy A15", harga: 2500000, gambar: "/assets.image/Samsung Galaxy A15.jpg", kategori: "elektronik"},
        {id:108, nama: "Samsung Galaxy A35 5G", harga: 5000000, gambar: "/assets.image/Samsung Galaxy A35 5G.jpg", kategori: "elektronik"},
        {id:109, nama: "Samsung Galaxy A55 5G", harga: 6500000, gambar: "/assets.image/Samsung Galaxy A55 5G.jpg", kategori: "elektronik"},
        {id:110, nama: "Samsung Galaxy S24", harga: 11000000, gambar: "/assets.image/Samsung Galaxy S24.jpg", kategori: "elektronik"},
        {id:111, nama: "Samsung Galaxy S24 Ultra", harga: 19000000, gambar: "/assets.image/Samsung Galaxy S24 Ultra.jpg", kategori: "elektronik"},
        {id:112, nama: "Google Pixel 8", harga: 9000000, gambar: "/assets.image/Google Pixel 8.jpg", kategori: "elektronik"},
        {id:113, nama: "Google Pixel 8 Pro", harga: 14000000, gambar: "/assets.image/Google Pixel 8 Pro.jpg", kategori: "elektronik"},
        {id:114, nama: "Xiaomi Redmi Note 13 Pro", harga: 4000000, gambar: "/assets.image/Xiaomi Redmi Note 13 Pro.jpg", kategori: "elektronik"},
        {id:115, nama: "Xiaomi 14", harga: 11000000, gambar: "/assets.image/Xiaomi 14.jpg", kategori: "elektronik"},
        {id:116, nama: "Poco X6 Pro", harga: 5000000, gambar: "/assets.image/Poco X6 Pro.jpg", kategori: "elektronik"},
        {id:117, nama: "Poco F6", harga: 6000000, gambar: "/assets.image/Poco F6.jpg", kategori: "elektronik"},
        {id:118, nama: "Oppo A58", harga: 2300000, gambar: "/assets.image/Oppo A58.jpg", kategori: "elektronik"},
        {id:119, nama: "Oppo Reno 11 F 5G", harga: 4500000, gambar: "/assets.image/Oppo Reno 11 F 5G.jpg", kategori: "elektronik"},
        {id:120, nama: "Oppo Find N3 Flip", harga: 15000000, gambar: "/assets.image/Oppo Find N3 Flip.jpg", kategori: "elektronik"},
        {id:121, nama: "Vivo Y27 5G", harga: 2500000, gambar: "/assets.image/Vivo Y27 5G.jpg", kategori: "elektronik"},
        {id:122, nama: "Vivo V30", harga: 6000000, gambar: "/assets.image/Vivo V30.jpg", kategori: "elektronik"},
        {id:123, nama: "Vivo X100", harga: 14000000, gambar: "/assets.image/Vivo X100.jpg", kategori: "elektronik"},
        {id:124, nama: "Realme C67", harga: 2300000, gambar: "/assets.image/Realme C67.jpg", kategori: "elektronik"},
        {id:125, nama: "Realme 12 Pro+ 5G", harga: 6500000, gambar: "/assets.image/Realme 12 Pro+ 5G.jpg", kategori: "elektronik"},
        {id:126, nama: "Infinix Note 40 Pro", harga: 3500000, gambar: "/assets.image/Infinix Note 40 Pro.jpg", kategori: "elektronik"},
        {id:127, nama: "Infinix GT 20 Pro", harga: 4500000, gambar: "/assets.image/Infinix GT 20 Pro.jpg", kategori: "elektronik"},
        {id:128, nama: "Asus ROG Phone 8", harga: 12000000, gambar: "/assets.image/Asus ROG Phone 8.jpg", kategori: "elektronik"},
        {id:129, nama: "Nubia RedMagic 9 Pro", harga: 13000000, gambar: "/assets.image/Nubia RedMagic 9 Pro.jpg", kategori: "elektronik"},
        {id:130, nama: "Sony Xperia 1 V", harga: 18000000, gambar: "/assets.image/Sony Xperia 1 V.jpg", kategori: "elektronik"},
    ]

    const makanan = [
        {id: 201, nama: "Nasi Padang", harga: 20000, gambar: "/assets.image/makanan/nasi padang.jpg", kategori: "makanan"},
        {id: 202, nama: "Nasi Goreng", harga: 18000, gambar: "/assets.image/makanan/nasi goreng.jpg", kategori: "makanan"},
        {id: 203, nama: "Mie Goreng", harga: 15000, gambar: "/assets.image/makanan/mie goreng.jpg", kategori: "makanan"},
        {id: 204, nama: "Mie Ayam", harga: 16000, gambar: "/assets.image/makanan/mie ayam.jpg", kategori: "makanan"},
        {id: 205, nama: "Bakso", harga: 18000, gambar: "/assets.image/makanan/bakso.jpg", kategori: "makanan"},
        {id: 206, nama: "Soto Ayam", harga: 17000, gambar: "/assets.image/makanan/soto ayam.jpg", kategori: "makanan"},
        {id: 207, nama: "Ayam Geprek", harga: 22000, gambar: "/assets.image/makanan/ayam geprek.jpg", kategori: "makanan"},
        {id: 208, nama: "Ayam Bakar", harga: 25000, gambar: "/assets.image/makanan/ayam bakar.jpg", kategori: "makanan"},
        {id: 209, nama: "Ikan Bakar", harga: 30000, gambar: "/assets.image/makanan/ikan bakar.jpg", kategori: "makanan"},
        {id: 210, nama: "Sate Ayam", harga: 20000, gambar: "/assets.image/makanan/sate ayam.jpg", kategori: "makanan"},
        {id: 211, nama: "Gado-Gado", harga: 15000, gambar: "/assets.image/makanan/gado-gado.jpg", kategori: "makanan"},
        {id: 212, nama: "Karedok", harga: 14000, gambar: "/assets.image/makanan/karedok.jpg", kategori: "makanan"},
        {id: 213, nama: "Seblak", harga: 15000, gambar: "/assets.image/makanan/seblak.jpg", kategori: "makanan"},
        {id: 214, nama: "Pempek", harga: 20000, gambar: "/assets.image/makanan/pempek.jpg", kategori: "makanan"},
        {id: 215, nama: "Martabak Telur", harga: 25000, gambar: "/assets.image/makanan/martabak telur.jpg", kategori: "makanan"},
        {id: 216, nama: "Martabak Manis", harga: 30000, gambar: "/assets.image/makanan/martabak manis.jpg", kategori: "makanan"},
        {id: 217, nama: "Batagor", harga: 15000, gambar: "/assets.image/makanan/batagor.jpg", kategori: "makanan"},
        {id: 218, nama: "Siomay", harga: 15000, gambar: "/assets.image/makanan/siomay.jpg", kategori: "makanan"},
        {id: 219, nama: "Pisang Goreng", harga: 12000, gambar: "/assets.image/makanan/pisang goreng.jpg", kategori: "makanan"},
        {id: 220, nama: "Es Teh Manis", harga: 5000, gambar: "/assets.image/makanan/es teh manis.jpg", kategori: "makanan"}
    ]

    const semuaProduk = [...elektronik, ...makanan]

    






    // const dataTergantungKategoriBalekDaek = 
    //     kategoriAktif === "elektronik" ? elektronik :
    //     kategoriAktif === "makanan" ? makanan :
    //     [...elektronik, ...makanan]

    // const produkTersaring = dataTergantungKategoriBalekDaek.filter((produk) =>
    //     produk.nama.toLowerCase().includes(kataKunci.toLowerCase())
    // )    

    const {tambahKeranjang, keranjang, totalHarga, setKeranjang, setKeranjangOpen, keranjangOpen, kategoriAktif, setKategoriAktif, dataTergantungKategoriBalekDaek, produkTersaring, isOpenMenu, hapusItem, setIsOpenMenu} = useCart()

    return (
        <div className="p-8 w-full mx-auto bg-slate-900 text-white min-h-screen">

            <Navbar 
                // setKeranjang={setKeranjang}
                // totalHarga={totalHarga}
                // keranjangCount={keranjang.length}
                // setKeranjangOpen={setKeranjangOpen}
                // keranjangOpen={keranjangOpen}
                // keranjang={keranjang}
                // setKataKunci={setKataKunci}
                // kategoriAktif={kategoriAktif}
                // setKategoriAktif={setKategoriAktif}
                // setIsOpenMenu={setIsOpenMenu}
                // isOpenMenu={isOpenMenu}
            />



            <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {produkTersaring.length > 0 ?(

                    produkTersaring.map((produk) => (
                        <div key={produk.id} className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex flex-col justify-between">
                            <div className={`relative w-full h-48 overflow-hidden flex items-center justify-center rounded-lg ${
                                produk.kategori === 'makanan'
                                ? 'bg-slate-800 rounded-lg'
                                : 'bg-white'
                            }`}>
                                {produk.gambar ? (
                                    <Image
                                        priority
                                        src={produk.gambar}
                                        alt={produk.nama}
                                        fill
                                        className={`object-contain p-1 ${
                                            produk.kategori === 'makanan'
                                            ? 'rounded-lg object-cover'
                                            : 'rounded-none'
                                        }`}
                                    />
                                ) : (
                                    <span className="text-4xl">
                                        {produk.kategori === "makanan" ? "🍲" : "📱"}
                                    </span>
                                )}
                            </div>
                            <div>
                                {/* <div className="text-4xl mb-2 text-center">{produk.gambar}</div> */}
                                <h3 className="font-bold text-lg font-bold">{produk.nama}</h3>
                                <p className="text-emerald-400 font-semibold mb-4">
                                    Rp {produk.harga.toLocaleString('id-ID')}
                                </p>
                            </div>
                            <div className="flex justify-betwen items-center gap-3">
                                <div className="w-full">
                                    <Link href={`/produk/${produk.id}`} className="flex-1">
                                        <button className="w-full bg-indigo-600 hover:bg-indogo-500 text-white py-1.5 rounded-lg font-bold text-sm transition cursor-pointer active:scale-95">Beli</button>
                                    </Link>
                                </div>
                                <button onClick={() => tambahKeranjang(produk)} className="w-auto p-5 bg-indigo-600 hover:bg-indigo-500 text-white py-2.5 rounded-lg font-bold text-sm transition cursor-pointer active:scale-95"><FaShoppingCart /></button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 ">
                        <p className="text-xl font-semibold text-slate-400">Barang <span className="text-amber-400">"{kataKunci}" </span>Tidak Ditemukan</p>
                        <p className="text-sm text-amber-500 mt-1">Coba Cari Barang Lain</p>
                    </div>
                )}
            </div>
            {keranjangOpen && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
                    <div className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-2xl p-6 shadow-2xl flex flex-col max-h-[80vh]">
                        <div className="flex justify-between items-center border-b border-slate-700 pb-4 mb-4 gap-2">
                            <div className="w-full flex flex-col gap-2 justify-between items-center md:flex-row">
                                <h2 className="text-lg font-bold text-amber-400">🛍️ Isi Keranjang Belanja</h2>
                                <div className="w-auto items-center flex bg-slate-800 px-1 py-2 rounded-xl border border-slate-700 gap-1 md:flex-row justify-center gap-2">
                                    <span className="text-base">Total Pesaan :</span>
                                    <span className="text-emerald-500 text-base font-normal sm:font-normal">{totalHarga.toLocaleString('id-ID')}</span>
                                </div>
                            </div>
                            <button onClick={() => setKeranjangOpen(false)} className="text-slate-400 hover:text-white font-bold text-xl px-2">✕</button>
                        </div>

                        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                            {keranjang.length > 0 ? (
                                keranjang.map((item, index ) => (
                                    <div key={index} className="flex justify-between items-center bg-slate-900 p-3 rounded-xl border border-slate-700">

                                        <div className="flex items-center gap-3"></div>
                                        <div className="flex flex-col justify-center items-center">
                                            <h4 className="font-semibold text-white">{item.nama}</h4>
                                            <p className="text-xs text-emerald-400">Rp {item.harga.toLocaleString('id-ID')}</p>
                                        </div>
                                        <button onClick={() => hapusItem(index)} className="bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white text-xs px-3 py-1.5 rounded-lg transition">
                                            Cek Out
                                        </button>
                                    </div>
                                    
                                ))   
                            ) : (
                                <p className="text-center text-slate-400 py-8 ">your keranjang masih empty</p>
                            )}
                        </div>  

                    </div>
                </div>
            )}
            {isOpenMenu && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 pt-10 transition-all">
                    <div className="bg-slate-900 border border-slate-700 w-full max-w-md rounded-2xl p-5 shadow-2xl space-y-4">
                        <div className="flex flex-col gap-2 ">
                            <a 
                            href="#"
                            onClick={() => setIsOpenMenu(false)}
                            className="flex items-center gap-3 text-slate-300 hover:text-white bg-slate-800/50 p-3 rounded-xl hover:bg-slate-800 font-medium"
                            >
                                <Home className="w-5 h-5 text-indigo-400"/>
                                <span>Beranda</span>
                            </a>
                            <a 
                            onClick={() => setIsOpenMenu(false, alert("yakali jierr"))}
                            className="flex items-center gap-3 text-slate-300 hover:text-white bg-slate-800/50 p-3 rounded-xl hover:bg-slate-800 font-medium"
                            >
                                <Package className="w-5 h-5 text-indigo-400"/>
                                <span>Alamat Rumah Nuril</span>
                            </a>
                            <button 
                                onClick={() => {
                                    setIsOpenMenu(false)
                                    setKeranjangOpen(true)
                                }}
                                className="flex items-center justify-between text-white bg-indigo-600 hover:bg-indigo-500 p-3 rounded-xl font-semibold mt-2"
                            >
                                <div className="flex items-centergap-3">
                                    <ShoppingCart className="w-5 h-5 "/>
                                    <span>Keranjang</span>
                                    <span className="bg-indigo-900 text-xs px-2.5 py-1 rounded-full text-indigo-200 ml-2">
                                        {keranjang.length}
                                    </span>
                                </div>
                            </button>
                        </div>
                    
                    </div>
                </div>
            )}
        </div>
)
}
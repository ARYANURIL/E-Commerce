'use client'
import { useState } from "react"
import { useEffect } from "react";
import Link from "next/link"
import { useCart } from '@/components/CartContext';


export default function CheckoutPage() {

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


    const {keranjang, totalHarga} = useCart()

    const [produkSaatIni, setProdukSaatIni] = useState(null)

    const [namaLengkap, setNamaLengkap] = useState('')
    const [noHP, setNoHp] = useState('')
    const [alamatRumah, setAlamatRumah] = useState('')
    const [kota, setKota] = useState ('')
    const [kurir, setKurir] = useState('reguler')

    const subTotal = produkSaatIni ? produkSaatIni.harga : 0;
    const ongkir = produkSaatIni ? (kurir === 'express' ? 30000 : 15000) : 0;
    const grandTotal = subTotal + ongkir;
    
    useEffect(() => {
        const dataSimpanan = localStorage.getItem('produkCheckout');

        if (dataSimpanan) {
            const dataProduk = JSON.parse(dataSimpanan);

            // Mendukung data berbentuk array maupun objek
            const produk = Array.isArray(dataProduk)
                ? dataProduk[0]
                : dataProduk;

            setProdukSaatIni(produk ?? null);
        }
    }, []);
    
    
    const handleProsesPembayaran = (e) => {
        e.preventDefault();
        if (!namaLengkap || !noHP || !alamatRumah || !kota) {
            alert("Harap Lengkapi Data Pengiriman Anda!! well well well")
            return;
        }
    
        alert(`Pesanana Berhasil Dibuat \nTotal Pembayaran Rp${grandTotal.toLocaleString('id-ID')}\n\n Trimakasih Sudah Berbelanja Di BannurStore!`)
    }
    
    const link = '/'
    
    return(
        <div className="min-h-screen bg-slate-900 text-slate-100 p-4 md:p-8">
            <div className="max-w-5xl mx-auto">
                <div className="w-full gap-2 flex flex-col items-start mb-8 md:flex-row items-center justify-between">
                    <Link href={link} className="order-2 text-sm p-2 rounded-xl border border-indigo-500 bg-indigo-400 transition-all duration-100 hover:underline-none flex items-center gap-1 active:scale-95 md:order-1 ">
                        ← Kembali Berbelanja
                    </Link>
                    <h1 className="order-1 text-2xl font-bold text-slate-100 md:order-2">Halaman Pembayaran</h1>
                </div>
    
                {!produkSaatIni ? (
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
                        <p className="text-slate-400 mb-4">Keranjang Belanjaan Mu Masih Kosong Nih.</p>
                        <Link 
                            href={link}
                            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-2 rounded-lg transition"
                        >
                            Pilih Produk
                        </Link>
                        
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
                                <h2 className="text-lg font-semibold mb-4 text-emerald-400">1. Alamat Pengiriman</h2>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md: grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-medium text-slate-400 mb-1">Nama Lengkap</label>
                                            <input 
                                                type="text"
                                                placeholder="Arya Nuril"
                                                value={namaLengkap}
                                                onChange={(e) => setNamaLengkap(e.target.value)}
                                                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-500 text-slate-200"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-slate-400 mb-1">Nomor Hp / WhatsApp</label>
                                                <input 
                                                    type="text" 
                                                    placeholder="081232017763"
                                                    value={noHP}
                                                    onChange={(e) => setNoHp(e.target.value)}
                                                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border border-indigo-500 text-slate-200"    
                                                />
                                        </div>
                                    </div>
    
                                    <div>
                                        <label className="bloct text-xs font-medium text-slate-400 mb-1">Kota / Kabupaten</label>
                                        <input 
                                            type="text" 
                                            placeholder="Contoh : Kediri Anti Kirek"
                                            value={kota}
                                            onChange={(e) => setKota(e.target.value)}
                                            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border border-indigo-500 text-slate-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-400 mb-1">Alamat Lengkap</label>
                                        <textarea 
                                            rows="3"
                                            placeholder="Jalan, No. Rumah, RT/RW, Kecamatan"
                                            value={alamatRumah}
                                            onChange={(e) => setAlamatRumah(e.target.value)}
                                            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border border-indigo-500 text-slate-200"
                                            required
                                        ></textarea>
                                    </div>
                                </form>
                            </div>
    
                            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
                                <h2 className="text-lg font-semibold mb-4 text-emerald-400">2. Opsi Pengiriman</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <label 
                                        className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition ${
                                            kurir === 'reguler'
                                                ? 'border-indigo-500 bg-indigo-950/30'
                                                : 'border border-slate-800 bg-slate-950 hover:border-slate-700'
                                        }`}
                                    >
    
                                        <div className="flex items-center gap-3">
                                            <input 
                                                type="radio" 
                                                name="kurir" 
                                                value="reguler"
                                                checked={kurir === 'reguler'}
                                                onChange={() => setKurir('reguler')}
                                                className="accent-indigo-500"   
                                            />
                                            <div>
                                                <p className="text-sm font-medium text-slate-200">Pengiriman Reguler</p>
                                                <p className="text-xs text-slate-400">2 - 4 Hari Kerja</p>
                                            </div>
                                        </div>
                                        <span className="text-xs font-semibold text-slate-200">Rp 15.000</span>
                                    </label>
                                    <label 
                                        className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition ${
                                            kurir === 'express'
                                                ? 'border-indigo-500 bg-indigo-950/30'
                                                : 'border-slate-800 border-slate-950 hover:border-slate-700'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <input 
                                                type="radio"
                                                name="kurir"
                                                value="express"
                                                checked={kurir === 'express'}
                                                onChange={() => setKurir('express')}
                                                className="accent-indigo-500"
                                             />
                                             <div>
                                                <p className="text-sm font-medium text-slate-200">Pemgiriman Express</p>
                                                <p className="text-xs text-slate-400">1 - 2 Hari Kerja</p>
                                             </div>
                                        </div>
                                        <span className="text-sm font-semibold text-slate-200">Rp 30.000</span>
                                    </label>
                                </div>
                            </div>
    
                        </div>
    
                        <div className="space-y-6">
                            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl sticky top-8">
                                <h2 className="text-lg font-semibold mb-4 text-emerald-400">Ringkasan Pesanan</h2>
    
                                <div className="space-y-3 max-h-60 overflow-y-auto pr-1 mb-4">
                                    
                                        <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
                                            <div>
                                                <p className="font-medium text-slate-200">{produkSaatIni.nama}</p>
                                                <p className="text-xs text-slate-400">1x item</p>
                                            </div>
                                            <p className="font-semibold text-slate-300">Rp {produkSaatIni.harga.toLocaleString('id-ID')}</p>
                                        </div>
                                    
                                </div>
    
                                <div className="space-y-2 text-sm border-t border-slate-800 pt-4 mb-6">
                                    <div className="flex justify-between text-slate-400">
                                        <span>Subtotal Produk</span>
                                        <span>Rp {subTotal.toLocaleString('id-ID')}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-400">
                                        <span>Ongkos Kirim</span>
                                        <span>Rp {ongkir.toLocaleString('id-ID')}</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-base text-slate-100 border-t border-slate-800 pt-3">
                                        <span>Total Bayar</span>
                                        <span>Rp {grandTotal.toLocaleString('id-ID')}</span>
                                    </div>
                                </div>
    
                                <button
                                    onClick={handleProsesPembayaran}
                                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 rounded-xl shadow-lg transition"
                                >
                                    Bayar Saiki
                                </button>
                                        
                            </div>
                        </div>
    
                    </div>
                )}
            </div>
        </div>
    )
}


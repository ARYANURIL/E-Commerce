'use client'
import { useState } from "react"
import Link from "next/link"
import { useCart } from '@/components/CartContext';

export default function CheckoutPage() {
    const {keranjang, totalHarga} = useCart()

    const [namaLengkap, setNamaLengkap] = useState('')
    const [noHP, setNoHp] = useState('')
    const [alamatRumah, setAlamatRumah] = useState('')
    const [kota, setKota] = useState ('')
    const [kurir, setKurir] = useState('reguler')

    const ongkir = keranjang.length > 0 ? (kurir === 'express' ? 30000 : 15000) : 0;
    const grandTotal = totalHarga + ongkir;

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
                <div className="flex items-center justify-between mb-8">
                    <Link href={link} className="text-sm p-2 rounded-xl border border-indigo-500 bg-indigo-400 transition-all duration-100 hover:underline-none flex items-center gap-1 active:scale-95">
                        ← Kembali Berbelanja
                    </Link>
                    <h1 className="text-2xl font-bold text-slate-100">Halaman Pembayaran</h1>
                </div>

                {keranjang.length === 0 ? (
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
                        <p className="text-slate-400 mb-4">Keranjang Belanjaan Mu Masih Kosong Nih.</p>
                        <Link 
                            href={link}
                            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-2 rounded-lg transition"
                        >
                            Cari Barang Sekarang 
                        </Link>
                        
                    </div>
                ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-2 gap-8">
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
                                    {keranjang.map((item, index) => (
                                        <div key={index} className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
                                            <div>
                                                <p className="font-medium text-slate-200">{item.nama}</p>
                                                <p className="text-xs text-slate-400">1x item</p>
                                            </div>
                                            <p className="font-semibold text-slate-300">Rp {item.harga.toLocaleString('id-ID')}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-2 text-sm border-t border-slate-800 pt-4 mb-6">
                                    <div className="flex justify-between text-slate-400">
                                        <span>Subtotal Produk</span>
                                        <span>Rp {totalHarga.toLocaleString('id-ID')}</span>
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
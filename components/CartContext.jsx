'use client'

import { createContext, useContext, useState, useEffect } from "react";
const CartContext = createContext();

export default function CartProvider({ children }) {
    const [keranjang, setkeranjang] = useState([])
    const [keranjangOpen, setKeranjangOpen] = useState(false)
    const [kategoriAktif, setKategoriAktif] = useState("semua")
    
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

    const [kataKunci, setKataKunci] = useState("")
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const dataTergantungKategoriBalekDaek = 
        kategoriAktif === "elektronik" ? elektronik :
        kategoriAktif === "makanan" ? makanan :
        [...elektronik, ...makanan]

    const produkTersaring = dataTergantungKategoriBalekDaek.filter((produk) =>
        produk.nama.toLowerCase().includes(kataKunci.toLowerCase())
    )    

    useEffect (() => {
        const dataDiSimpen = localStorage.getItem('bannur_cart')
        if  (dataDiSimpen) {
            try {
                setkeranjang(JSON.parse(dataDiSimpen))
            } catch (e) {
                console.error("Data Ne Gagal Di Simpen Ning LocalStorage Lek!!", e)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('bannur_cart', JSON.stringify(keranjang))
    }, [keranjang])

    const tambahKeranjang = (produk) => {
        setkeranjang((prev) => [...prev, produk])
    }

    const hapusItem = (indexHapus) => {
        setkeranjang((prev) => prev.filter ((_, index ) => index !== indexHapus))
    }

    const totalHarga = keranjang.reduce((total, item) => total + (item.harga || 0), 0)

    return (
        <CartContext.Provider 
            value = {{
                setKataKunci,
                setIsOpenMenu,
                isOpenMenu,
                produkTersaring,
                keranjang,
                dataTergantungKategoriBalekDaek,
                setkeranjang,
                tambahKeranjang,
                kategoriAktif,
                setKategoriAktif,
                setKeranjangOpen,
                keranjangOpen,
                hapusItem,
                totalHarga,
                keranjangCount: keranjang.length,

            }}
        >

            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext)
'use client'
    
    import Image from 'next/image';
    import Navbar from '@/components/Navbar'
    import RatingStar from '@/components/RatingStar'
    import Link from "next/link";
    import React, { useState, use, useEffect } from 'react';
    import { FaShoppingCart } from 'react-icons/fa'
    import { Truck, ShieldCheck } from 'lucide-react';
    import { GiD10 } from 'react-icons/gi';
    import { Inter } from 'next/font/google'
    import { useCart } from '@/components/CartContext';
    import { useRouter } from 'next/navigation';    

    const intermie = Inter ({
        subsets : ['latin'],
        variable : '--font-intermie'
    })

   
    
    const elektronik = [
        {id:101, nama: "Redmi Note 13 5G", harga: 1500000, gambar: "/assets.image/redmi note 13 5g.jpg", kategori: "elektronik", deskripsi: "Smartphone 5G dengan layar jernih dan performa andal untuk aktivitas harian dan hp ini juga di gunakan oleh bannur", tentangProduk: "Redmi Note 13 5G cocok untuk aktivitas harian dengan konektivitas 5G, layar jernih, dan performa andal.", spesifikasiProduk: ["Konektivitas 5G", "Layar jernih", "Performa andal"], warna:[{namaWarna:"Warna Putih", classBg:"bg-white"}, {namaWarna:"Warna Hitam", classBg:"bg-slate-700"}]},
        {id:102, nama: "Samsung J2 Prime", harga: 500000, gambar: "/assets.image/samsung j2 prime.jpg", kategori: "elektronik", deskripsi: "Smartphone praktis dengan harga terjangkau untuk komunikasi dan kebutuhan dasar.", tentangProduk: "Samsung J2 Prime merupakan smartphone praktis dan terjangkau untuk komunikasi serta kebutuhan dasar.", spesifikasiProduk: ["Smartphone", "Untuk komunikasi", "Untuk kebutuhan dasar"]},
        {id:103, nama: "iPhone 15", harga: 12000000, gambar: "/assets.image/iphone 15.jpg", kategori: "elektronik", deskripsi: "iPhone dengan performa cepat, kamera berkualitas, dan desain modern.", tentangProduk: "iPhone 15 menggabungkan performa cepat, kamera berkualitas, dan desain modern.", spesifikasiProduk: ["Performa cepat", "Kamera berkualitas", "Desain modern"]},
        {id:104, nama: "iPhone 15 Pro", harga: 18000000, gambar: "/assets.image/iphone 15 pro.jpg", kategori: "elektronik", deskripsi: "iPhone kelas profesional dengan performa tinggi dan sistem kamera canggih.", tentangProduk: "iPhone 15 Pro dirancang untuk penggunaan profesional dengan performa tinggi dan kamera canggih.", spesifikasiProduk: ["Kelas profesional", "Performa tinggi", "Sistem kamera canggih"]},
        {id:105, nama: "iPhone 16", harga: 14000000, gambar: "/assets.image/iphone 16.jpg", kategori: "elektronik", deskripsi: "Smartphone generasi terbaru dengan performa responsif dan kamera mumpuni.", tentangProduk: "iPhone 16 menawarkan performa responsif dan kamera mumpuni dalam generasi terbaru.", spesifikasiProduk: ["Performa responsif", "Kamera mumpuni"]},
        {id:106, nama: "iPhone 16 Pro Max", harga: 22000000, gambar: "/assets.image/iphone 16 pro max.jpg", kategori: "elektronik", deskripsi: "Model premium dengan layar luas, kamera profesional, dan daya tahan baterai optimal.", tentangProduk: "iPhone 16 Pro Max menghadirkan layar luas, kamera profesional, dan daya tahan baterai optimal.", spesifikasiProduk: ["Layar luas", "Kamera profesional", "Baterai tahan lama"]},
        {id:107, nama: "Samsung Galaxy A15", harga: 2500000, gambar: "/assets.image/Samsung Galaxy A15.jpg", kategori: "elektronik", deskripsi: "Smartphone terjangkau dengan layar nyaman dan baterai tahan lama.", tentangProduk: "Samsung Galaxy A15 adalah smartphone terjangkau untuk penggunaan harian dengan layar nyaman dan baterai tahan lama.", spesifikasiProduk: ["Layar nyaman", "Baterai tahan lama", "Harga terjangkau"]},
        {id:108, nama: "Samsung Galaxy A35 5G", harga: 5000000, gambar: "/assets.image/Samsung Galaxy A35 5G.jpg", kategori: "elektronik", deskripsi: "Smartphone 5G dengan desain elegan, kamera tajam, dan performa seimbang.", tentangProduk: "Samsung Galaxy A35 5G memadukan desain elegan, kamera tajam, dan performa seimbang.", spesifikasiProduk: ["Konektivitas 5G", "Desain elegan", "Kamera tajam", "Performa seimbang"]},
        {id:109, nama: "Samsung Galaxy A55 5G", harga: 6500000, gambar: "/assets.image/Samsung Galaxy A55 5G.jpg", kategori: "elektronik", deskripsi: "Smartphone 5G premium dengan layar cerah dan kemampuan fotografi yang baik.", tentangProduk: "Samsung Galaxy A55 5G menawarkan layar cerah dan kemampuan fotografi untuk kelas premium.", spesifikasiProduk: ["Konektivitas 5G", "Layar cerah", "Fotografi"]},
        {id:110, nama: "Samsung Galaxy S24", harga: 11000000, gambar: "/assets.image/Samsung Galaxy S24.jpg", kategori: "elektronik", deskripsi: "Flagship ringkas dengan performa kuat, kamera cerdas, dan desain premium.", tentangProduk: "Samsung Galaxy S24 adalah flagship ringkas dengan performa kuat, kamera cerdas, dan desain premium.", spesifikasiProduk: ["Flagship ringkas", "Performa kuat", "Kamera cerdas", "Desain premium"]},
        {id:111, nama: "Samsung Galaxy S24 Ultra", harga: 19000000, gambar: "/assets.image/Samsung Galaxy S24 Ultra.jpg", kategori: "elektronik", deskripsi: "Flagship berfitur lengkap dengan kamera profesional dan dukungan S Pen.", tentangProduk: "Samsung Galaxy S24 Ultra menghadirkan fitur lengkap, kamera profesional, dan dukungan S Pen.", spesifikasiProduk: ["Flagship", "Kamera profesional", "Dukungan S Pen"]},
        {id:112, nama: "Google Pixel 8", harga: 9000000, gambar: "/assets.image/Google Pixel 8.jpg", kategori: "elektronik", deskripsi: "Smartphone dengan kamera berbasis AI dan pengalaman Android yang bersih.", tentangProduk: "Google Pixel 8 menawarkan kamera berbasis AI dan pengalaman Android yang bersih.", spesifikasiProduk: ["Kamera berbasis AI", "Sistem Android"]},
        {id:113, nama: "Google Pixel 8 Pro", harga: 14000000, gambar: "/assets.image/Google Pixel 8 Pro.jpg", kategori: "elektronik", deskripsi: "Pixel premium dengan kamera canggih, layar halus, dan fitur AI pintar.", tentangProduk: "Google Pixel 8 Pro memadukan kamera canggih, layar halus, dan fitur AI pintar.", spesifikasiProduk: ["Kamera canggih", "Layar halus", "Fitur AI"]},
        {id:114, nama: "Xiaomi Redmi Note 13 Pro", harga: 4000000, gambar: "/assets.image/Xiaomi Redmi Note 13 Pro.jpg", kategori: "elektronik", deskripsi: "Smartphone bertenaga dengan kamera beresolusi tinggi dan layar imersif.", tentangProduk: "Xiaomi Redmi Note 13 Pro menawarkan performa bertenaga, kamera beresolusi tinggi, dan layar imersif.", spesifikasiProduk: ["Performa bertenaga", "Kamera resolusi tinggi", "Layar imersif"]},
        {id:115, nama: "Xiaomi 14", harga: 11000000, gambar: "/assets.image/Xiaomi 14.jpg", kategori: "elektronik", deskripsi: "Flagship kompak dengan performa cepat dan kamera berkualitas tinggi.", tentangProduk: "Xiaomi 14 adalah flagship kompak dengan performa cepat dan kamera berkualitas tinggi.", spesifikasiProduk: ["Flagship kompak", "Performa cepat", "Kamera berkualitas tinggi"]},
        {id:116, nama: "Poco X6 Pro", harga: 5000000, gambar: "/assets.image/Poco X6 Pro.jpg", kategori: "elektronik", deskripsi: "Smartphone berperforma tinggi yang cocok untuk bermain gim dan multitasking.", tentangProduk: "Poco X6 Pro cocok untuk bermain gim dan multitasking berkat performanya yang tinggi.", spesifikasiProduk: ["Performa tinggi", "Untuk bermain gim", "Multitasking"]},
        {id:117, nama: "Poco F6", harga: 6000000, gambar: "/assets.image/Poco F6.jpg", kategori: "elektronik", deskripsi: "Ponsel performa tinggi dengan chipset kencang dan layar responsif.", tentangProduk: "Poco F6 menghadirkan chipset kencang, layar responsif, dan performa tinggi.", spesifikasiProduk: ["Performa tinggi", "Chipset kencang", "Layar responsif"]},
        {id:118, nama: "Oppo A58", harga: 2300000, gambar: "/assets.image/Oppo A58.jpg", kategori: "elektronik", deskripsi: "Smartphone harian dengan desain menarik, baterai awet, dan pengisian cepat.", tentangProduk: "Oppo A58 dirancang untuk penggunaan harian dengan desain menarik, baterai awet, dan pengisian cepat.", spesifikasiProduk: ["Desain menarik", "Baterai awet", "Pengisian cepat"]},
        {id:119, nama: "Oppo Reno 11 F 5G", harga: 4500000, gambar: "/assets.image/Oppo Reno 11 F 5G.jpg", kategori: "elektronik", deskripsi: "Smartphone 5G tipis dengan kamera portrait dan desain elegan.", tentangProduk: "Oppo Reno 11 F 5G memadukan bodi tipis, kamera portrait, dan desain elegan.", spesifikasiProduk: ["Konektivitas 5G", "Desain tipis dan elegan", "Kamera portrait"]},
        {id:120, nama: "Oppo Find N3 Flip", harga: 15000000, gambar: "/assets.image/Oppo Find N3 Flip.jpg", kategori: "elektronik", deskripsi: "Smartphone lipat bergaya dengan layar fleksibel dan kamera premium.", tentangProduk: "Oppo Find N3 Flip adalah smartphone lipat dengan layar fleksibel dan kamera premium.", spesifikasiProduk: ["Desain lipat", "Layar fleksibel", "Kamera premium"]},
        {id:121, nama: "Vivo Y27 5G", harga: 2500000, gambar: "/assets.image/Vivo Y27 5G.jpg", kategori: "elektronik", deskripsi: "Smartphone 5G terjangkau dengan baterai besar untuk penggunaan sehari-hari.", tentangProduk: "Vivo Y27 5G menyediakan baterai besar dan konektivitas 5G untuk penggunaan sehari-hari.", spesifikasiProduk: ["Konektivitas 5G", "Baterai besar", "Untuk penggunaan sehari-hari"]},
        {id:122, nama: "Vivo V30", harga: 6000000, gambar: "/assets.image/Vivo V30.jpg", kategori: "elektronik", deskripsi: "Smartphone stylish dengan kamera portrait dan layar berkualitas.", tentangProduk: "Vivo V30 memiliki desain stylish, kamera portrait, dan layar berkualitas.", spesifikasiProduk: ["Desain stylish", "Kamera portrait", "Layar berkualitas"]},
        {id:123, nama: "Vivo X100", harga: 14000000, gambar: "/assets.image/Vivo X100.jpg", kategori: "elektronik", deskripsi: "Flagship dengan kamera profesional, performa cepat, dan desain premium.", tentangProduk: "Vivo X100 adalah flagship dengan kamera profesional, performa cepat, dan desain premium.", spesifikasiProduk: ["Flagship", "Kamera profesional", "Performa cepat", "Desain premium"]},
        {id:124, nama: "Realme C67", harga: 2300000, gambar: "/assets.image/Realme C67.jpg", kategori: "elektronik", deskripsi: "Smartphone ekonomis dengan kamera tajam dan baterai yang tahan lama.", tentangProduk: "Realme C67 menawarkan kamera tajam dan baterai tahan lama dengan harga ekonomis.", spesifikasiProduk: ["Kamera tajam", "Baterai tahan lama", "Harga ekonomis"]},
        {id:125, nama: "Realme 12 Pro+ 5G", harga: 6500000, gambar: "/assets.image/Realme 12 Pro+ 5G.jpg", kategori: "elektronik", deskripsi: "Smartphone 5G dengan kamera telefoto dan desain premium.", tentangProduk: "Realme 12 Pro+ 5G memadukan konektivitas 5G, kamera telefoto, dan desain premium.", spesifikasiProduk: ["Konektivitas 5G", "Kamera telefoto", "Desain premium"]},
        {id:126, nama: "Infinix Note 40 Pro", harga: 3500000, gambar: "/assets.image/Infinix Note 40 Pro.jpg", kategori: "elektronik", deskripsi: "Smartphone dengan layar luas, pengisian cepat, dan kamera beresolusi tinggi.", tentangProduk: "Infinix Note 40 Pro memiliki layar luas, pengisian cepat, dan kamera beresolusi tinggi.", spesifikasiProduk: ["Layar luas", "Pengisian cepat", "Kamera resolusi tinggi"]},
        {id:127, nama: "Infinix GT 20 Pro", harga: 4500000, gambar: "/assets.image/Infinix GT 20 Pro.jpg", kategori: "elektronik", deskripsi: "Ponsel gaming dengan performa kuat, layar cepat, dan desain futuristis.", tentangProduk: "Infinix GT 20 Pro dirancang untuk gaming dengan performa kuat, layar cepat, dan desain futuristis.", spesifikasiProduk: ["Ponsel gaming", "Performa kuat", "Layar cepat", "Desain futuristis"]},
        {id:128, nama: "Asus ROG Phone 8", harga: 12000000, gambar: "/assets.image/Asus ROG Phone 8.jpg", kategori: "elektronik", deskripsi: "Smartphone gaming premium dengan performa tinggi dan sistem pendingin khusus.", tentangProduk: "Asus ROG Phone 8 adalah smartphone gaming premium dengan performa tinggi dan sistem pendingin khusus.", spesifikasiProduk: ["Smartphone gaming", "Performa tinggi", "Sistem pendingin khusus"]},
        {id:129, nama: "Nubia RedMagic 9 Pro", harga: 13000000, gambar: "/assets.image/Nubia RedMagic 9 Pro.jpg", kategori: "elektronik", deskripsi: "Ponsel gaming bertenaga dengan kipas pendingin dan layar tanpa gangguan.", tentangProduk: "Nubia RedMagic 9 Pro menawarkan kipas pendingin dan layar tanpa gangguan untuk pengalaman gaming.", spesifikasiProduk: ["Ponsel gaming", "Kipas pendingin", "Layar tanpa gangguan"]},
        {id:130, nama: "Sony Xperia 1 V", harga: 18000000, gambar: "/assets.image/Sony Xperia 1 V.jpg", kategori: "elektronik", deskripsi: "Smartphone premium dengan layar sinematik dan kamera berfitur profesional.", tentangProduk: "Sony Xperia 1 V menghadirkan layar sinematik dan kamera dengan fitur profesional.", spesifikasiProduk: ["Smartphone premium", "Layar sinematik", "Kamera profesional"]},
    ]

    const makanan = [
        {id: 201, nama: "Nasi Padang", harga: 20000, gambar: "/assets.image/makanan/nasi padang.jpg", kategori: "makanan", deskripsi: "Nasi putih hangat dengan pilihan lauk dan kuah khas masakan Padang."},
        {id: 202, nama: "Nasi Goreng", harga: 18000, gambar: "/assets.image/makanan/nasi goreng.jpg", kategori: "makanan", deskripsi: "Nasi goreng gurih dengan bumbu pilihan dan pelengkap yang menggugah selera."},
        {id: 203, nama: "Mie Goreng", harga: 15000, gambar: "/assets.image/makanan/mie goreng.jpg", kategori: "makanan", deskripsi: "Mie goreng berbumbu gurih dengan sayuran dan pelengkap pilihan."},
        {id: 204, nama: "Mie Ayam", harga: 16000, gambar: "/assets.image/makanan/mie ayam.jpg", kategori: "makanan", deskripsi: "Mie kenyal dengan potongan ayam berbumbu dan kuah kaldu yang hangat."},
        {id: 205, nama: "Bakso", harga: 18000, gambar: "/assets.image/makanan/bakso.jpg", kategori: "makanan", deskripsi: "Bakso sapi kenyal disajikan bersama kuah gurih dan pelengkap segar."},
        {id: 206, nama: "Soto Ayam", harga: 17000, gambar: "/assets.image/makanan/soto ayam.jpg", kategori: "makanan", deskripsi: "Soto ayam berkuah gurih dengan suwiran ayam dan pelengkap khas."},
        {id: 207, nama: "Ayam Geprek", harga: 22000, gambar: "/assets.image/makanan/ayam geprek.jpg", kategori: "makanan", deskripsi: "Ayam goreng renyah yang digeprek dengan sambal pedas pilihan."},
        {id: 208, nama: "Ayam Bakar", harga: 25000, gambar: "/assets.image/makanan/ayam bakar.jpg", kategori: "makanan", deskripsi: "Ayam bakar berbumbu manis gurih dengan aroma panggangan yang khas."},
        {id: 209, nama: "Ikan Bakar", harga: 30000, gambar: "/assets.image/makanan/ikan bakar.jpg", kategori: "makanan", deskripsi: "Ikan segar yang dibakar dengan bumbu rempah dan disajikan hangat."},
        {id: 210, nama: "Sate Ayam", harga: 20000, gambar: "/assets.image/makanan/sate ayam.jpg", kategori: "makanan", deskripsi: "Sate ayam empuk dengan bumbu kacang gurih dan aroma bakaran."},
        {id: 211, nama: "Gado-Gado", harga: 15000, gambar: "/assets.image/makanan/gado-gado.jpg", kategori: "makanan", deskripsi: "Campuran sayuran segar, tahu, dan tempe dengan siraman saus kacang."},
        {id: 212, nama: "Karedok", harga: 14000, gambar: "/assets.image/makanan/karedok.jpg", kategori: "makanan", deskripsi: "Sayuran mentah segar dengan saus kacang khas yang gurih dan pedas."},
        {id: 213, nama: "Seblak", harga: 15000, gambar: "/assets.image/makanan/seblak.jpg", kategori: "makanan", deskripsi: "Seblak kenyal dengan bumbu pedas gurih dan pilihan topping yang lezat."},
        {id: 214, nama: "Pempek", harga: 20000, gambar: "/assets.image/makanan/pempek.jpg", kategori: "makanan", deskripsi: "Pempek ikan yang kenyal disajikan dengan kuah cuko asam, manis, dan pedas."},
        {id: 215, nama: "Martabak Telur", harga: 25000, gambar: "/assets.image/makanan/martabak telur.jpg", kategori: "makanan", deskripsi: "Martabak gurih berisi telur, daging, dan daun bawang dengan kulit renyah."},
        {id: 216, nama: "Martabak Manis", harga: 30000, gambar: "/assets.image/makanan/martabak manis.jpg", kategori: "makanan", deskripsi: "Martabak manis lembut dengan pilihan topping cokelat, keju, atau kacang."},
        {id: 217, nama: "Batagor", harga: 15000, gambar: "/assets.image/makanan/batagor.jpg", kategori: "makanan", deskripsi: "Pangsit dan tahu goreng dengan isian ikan, disajikan bersama saus kacang."},
        {id: 218, nama: "Siomay", harga: 15000, gambar: "/assets.image/makanan/siomay.jpg", kategori: "makanan", deskripsi: "Siomay dan pelengkap kukus dengan saus kacang yang gurih dan lembut."},
        {id: 219, nama: "Pisang Goreng", harga: 12000, gambar: "/assets.image/makanan/pisang goreng.jpg", kategori: "makanan", deskripsi: "Pisang manis berbalut adonan renyah, cocok sebagai camilan hangat."},
        {id: 220, nama: "Es Teh Manis", harga: 5000, gambar: "/assets.image/makanan/es teh manis.jpg", kategori: "makanan", deskripsi: "Teh manis dingin yang segar untuk menemani makanan atau diminum sendiri."}
    ]

    
    const semuaProduk = [...elektronik, ...makanan]

    
    export default  function DetailProdukPage({ params, }) {
        const router = useRouter();
        const [tabAktif, setTabAktif] = useState('deskripsi')
        const parameterTerbuka = React.use(params); 
        const idProdukSaatIni = parameterTerbuka.id

        const resolvedParams= use(params)
        const { id } = resolvedParams;

        const SEMUA_PRODUK = [...elektronik, ...makanan]

        const ProdukSaatIni = SEMUA_PRODUK.find(
            (item) => String(item.id) === String(id)
        );

        const [textPencarian, setTextPencarian] = useState('')
        const [sedangketik, setSedangKetik] = useState(false)
        const [kategoriAktif, setKategoriAktif] = useState(ProdukSaatIni.id)

        useEffect(() => {
            if (ProdukSaatIni) {
                setKategoriAktif(ProdukSaatIni.kategori)
            }
        }, [ProdukSaatIni])

        const hasilRekomendasi = SEMUA_PRODUK.filter((barang) => {
            const cocokKategori = kategoriAktif === 'semua' || barang.kategori === kategoriAktif;

            const cocokNama = barang.nama.toLowerCase().includes(textPencarian.toLowerCase());

            return cocokKategori && cocokNama;
        })

        // const [keranjang, setKeranjang] = useState([])
        // const [keranjangOpen, setKeranjangOpen] = useState(false)

        // const totalHarga = keranjang.reduce((total, item) => total + item.harga, 0)

        const produk = semuaProduk.find((item) => String(item.id) === String(id));

        if (!produk) {
            return (
                <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
                    <h1 className="text-2xl font-bold mb-4">Produk Tidak Ditemukan</h1>
                    <Link href="/" className="bg-indigo-600 px-4 py-2 rounded-xl">Kembali Ke Beranda</Link>
                </div>
            )
        }    
            const {tambahKeranjang, keranjang, totalHarga, setKeranjang, setKeranjangOpen, keranjangOpen, hapusItem} = useCart()
        return (
           <div className='min-h-screen bg-slate-900 text-white p-6'>

            <nav className='flex items-center justify-between gap-4 bg-slate-800/80 p-4 rounded-xl mb-8 relative '>
                <h1 className='text-sm font-bold text-amber-400 md:text-lg'>Bannur E-Commerece</h1>
                <div className='hidden md:block relative flex-1 max-w-md '>
                    <input 
                        type='text'
                        placeholder='Cari Barang....'
                        value={textPencarian}
                        onChange={(e) => setTextPencarian(e.target.value)}
                        onFocus={() => setSedangKetik(true)}
                        onBlur={() => setTimeout(() => setSedangKetik(false), 200)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault()

                                const barangDiTemukan = hasilRekomendasi[0] || semuaProduk.find(
                                    (b) => b.nama.toLowerCase().includes(textPencarian.toLowerCase())
                                );

                                if (barangDiTemukan) {
                                    router.push(`/produk/${barangDiTemukan.id}`)
                                }
                            }
                        }}
                        className='w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-500'
                    />

                    {sedangketik && (
                        <div className='absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 roundede-xl shadow-2xl z-50 p-2 max-h-64 overflow-y-auto'>
                            {/* onMouseDown={(e) => e.preventDefault()} */}
                            <div className='text-xs font-semibold text-slate-400 px-3 py-1 mb-1 border-b border-slate-700 '>
                                Rekomendasi ({kategoriAktif.toUpperCase()}) 
                            </div>
                            {hasilRekomendasi.length > 0 ? (
                                hasilRekomendasi.map((barang) => (
                                    <Link 
                                        key={barang.id}
                                        href={`/produk/${barang.id}`}
                                        className='flex items-center justify-between px-3 py-2 text-sm text-slate-200 hover:bg-slate-700 rounded-lg transition'
                                    >
                                        <span>{barang.nama}</span>
                                        <span className='text-xs text-emerald-400 font-medium'>
                                            Rp {barang.harga.toLocaleString('id-ID')}
                                        </span>
                                    </Link>
                                ))
                            ) : (
                                <div className='px-3 py-3 text-xs text-slate-400 text-center'>
                                    Barang Tidak Ditemukan 
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className='flex bg-slate-900 p-1 rounded-lg border border-slate-700 text-xs hidden md:block'>
                    {['semua', 'elektronik', 'makanan'].map((pilihan) =>(
                        <button 
                            key={pilihan}
                            onClick={() => setKategoriAktif(pilihan)}
                            className={`px-3 py-1.5 rounded-md capitalize font-medium transition ${
                                kategoriAktif === pilihan 
                                ? 'bg-indigo-600 text-white '
                                : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            {pilihan}
                        </button>
                    ))}
                </div>
                {/* bagian keranjang masih perlu di perbaiki lagi agar nilainya bisa di tampung oleh variabel */}
                <button onClick={() => setKeranjangOpen(true)} className='cursor-pointer bg-amber-500 font-bold px-4 py-2 rounded-lg text-sm flex items-center gap-2'>
                    <FaShoppingCart className='w-3 h-3 text-white'/>
                    <span className='text-xs text-white font-sans antialiased'>Keranjang : {keranjang.length}</span>
                </button>
            </nav>

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
            
            <div className='max-w-4xl mx-auto bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6'>
                    <Link href="/" className='inline-block bg-slate-800 border border-slate-700 text-sm px-4 py-2 rounded-xl text-slate-300 hover:text-white mb-6'>
                        ← Kembali ke Toko
                    </Link>

                    <div className='grid gird-cols-1 md:grid-cols-2 gap-8'>
                        <div className={`relative overflow-hidden rounded-xl h-72 flex items-center justify-center text-6xl ${
                            ProdukSaatIni.kategori === 'makanan'
                            ? 'bg-slate-900'
                            : 'bg-white'
                        }`}>
                            <Image
                                fill
                                priority
                                src={ProdukSaatIni.gambar}
                                alt={ProdukSaatIni.nama}
                                className='w-full h-full object-contain rounded-xl'
                            />
                        </div>

                        <div>
                            <div className='border-b border-slate-500 shadow-md'>
                                <span className='bg-indigo-600/30 text-indigo-400 border border-indigo-500 text-xs px-3 py-1 rounded-full uppercase font-semibold'>
                                    {ProdukSaatIni.kategori}
                                </span>
                                <div className='w-auto h-auto my-4 flex flex-col justify-start'>
                                    <RatingStar 
                                        rating = {ProdukSaatIni?.rating || 4.8}
                                        jumlahUlasan = {ProdukSaatIni?.jumlahUlasan || 120} 
                                    />
                                </div>
                                <h1 className='text-3xl font-bold mt-3 mb-2'>{ProdukSaatIni.nama}</h1>
                                <p className='text-2xl font-bold text-emerald-400 mb-4'>
                                    Rp {ProdukSaatIni.harga.toLocaleString('id-ID')}
                                </p>
                                <p className='text-sm text-slate-400 mb-6'>
                                    {ProdukSaatIni.deskripsi}
                                </p>
                            </div>

                                    <div className='w-full flex flex-col gap-2 my-3'>
                                        <div className='flex flex-col justify-start '>
                                            <div>
                                                <span className='text-sm text-white font-bold '>Warna :</span>
                                            </div>
                                            <div className='w-full flex gap-2 justify-start items-center'>
                                                {ProdukSaatIni?.warna?.map((w, index) => (
                                                    <div key={index} className='gap-2'>
                                                        <div className='flex mt-1 gap-2'> 
                                                            <div className='flex bg-slate-800 border border-slate-600 rounded-xl p-1.5 justify-center items-center gap-2 text-sm text-white font-bold'>
                                                                <div className={`w-4 h-4 rounded-full ${w.classBg}`}></div>
                                                                <span>{w.namaWarna}</span>
                                                            </div>
                                                        </div>
                                                    </div>    
                                                ))}
                                            </div>
                                            </div>
                                    </div>

                            <button className='w-full bg-emerald-600 hover:bg-emerald-500 font-bold py-3 rounded-xl transition my-2'>
                                Beli Sekarang
                            </button>
                        </div>

                    </div>
            </div>
            <div className="w-full max-w-4xl mx-auto p-4 md:p-6 bg-slate-900/80 border border-slate-700/50 rounded-2xl mt-5">
                <div className="flex flex-col gap-6">
                    
                    {/* Tab Navigation */}
                    <div className="flex gap-6 border-b border-slate-700/50 pb-3">
                    <button
                        onClick={() => setTabAktif('deskripsi')}
                        className={`font-semibold pb-1 transition text-xs md:text-sm ${
                        tabAktif === 'deskripsi'
                            ? 'text-amber-500 border-b-2 border-amber-500'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                    >
                        Deskripsi Produk
                    </button>

                    <button
                        onClick={() => setTabAktif('spesifikasi')}
                        className={`font-semibold pb-1 transition text-xs md:text-sm ${
                        tabAktif === 'spesifikasi'
                            ? 'text-amber-500 border-b-2 border-amber-500'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                    >
                        Spesifikasi Produk
                    </button>
                    </div>

                    {/* Isi Tab Content */}
                    <div>
                    {tabAktif === 'deskripsi' ? (
                        <div className="space-y-2">
                        <h3 className="text-xs md:text-sm font-bold text-white">Tentang Produk</h3>
                        <p className="text-[11px] md:text-xs text-slate-300 leading-relaxed">
                            {ProdukSaatIni?.tentangProduk || 'Deskripsi produk belum tersedia'}
                        </p>
                        </div>
                    ) : (
                        <div className="space-y-2">
                        <h3 className="text-xs md:text-sm font-bold text-white">Spesifikasi Produk</h3>
                        <p className="text-[11px] md:text-xs text-slate-300 leading-relaxed">
                            {ProdukSaatIni?.spesifikasiProduk || 'Spesifikasi produk belum ada'}
                        </p>
                        </div>
                    )}
                    </div>

                    {/* Grid Fitur (Duduk Rapi di Bawah Teks Deskripsi) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                    {/* Card 1: Pengiriman Cepat */}
                    <div className="w-full flex items-center p-3 bg-slate-800/60 border border-slate-700/50 rounded-2xl gap-3">
                        <div className="w-11 h-11 shrink-0 bg-emerald-400/20 border border-emerald-500/30 rounded-xl flex justify-center items-center">
                        <Truck className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div className="flex flex-col justify-center gap-0.5 min-w-0">
                        <span className="text-xs font-bold text-white">Pengiriman Cepat</span>
                        <p className="text-[10px] text-slate-300 leading-tight">
                            pesanan diproses dengan cepat dan aman sampai ke tangan anda
                        </p>
                        </div>
                    </div>

                    {/* Card 2: Garansi Toko */}
                    <div className="w-full flex items-center p-3 bg-slate-800/60 border border-slate-700/50 rounded-2xl gap-3">
                        <div className="w-11 h-11 shrink-0 bg-purple-400/20 border border-purple-500/30 rounded-xl flex justify-center items-center">
                        <ShieldCheck className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="flex flex-col justify-center gap-0.5 min-w-0">
                        <span className="text-xs font-bold text-white">Garansi Toko</span>
                        <p className="text-[10px] text-slate-300 leading-tight">
                            produk original dengan garansi resmi dari toko kami
                        </p>
                        </div>
                    </div>
                    </div>

                </div>
                </div>


        </div>
        )
    }
'use client'
    
    import Navbar from '@/components/Navbar'
    import RatingStar from '@/components/RatingStar'
    import Link from "next/link";
    import React, { useState, use, useEffect } from 'react';
    import { FaShoppingCart } from 'react-icons/fa'
    import { Truck, ShieldCheck } from 'lucide-react';
    import { GiD10 } from 'react-icons/gi';
    
    const elektronik = [
        {id:101, nama: "Redmi Note 13 5G", harga: 1500000, gambar: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80", kategori: "elektronik", deskripsi: "Smartphone 5G dengan layar jernih dan performa andal untuk aktivitas harian dan hp ini juga di gunakan oleh bannur", tentangProduk: "Redmi Note 13 5G cocok untuk aktivitas harian dengan konektivitas 5G, layar jernih, dan performa andal.", spesifikasiProduk: ["Konektivitas 5G", "Layar jernih", "Performa andal"], warna:[{namaWarna:"Warna Biru", classBg:"bg-blue-500"}, {namaWarna:"Warna Hitam", classBg:"bg-slate-700"}]},
        {id:102, nama: "Samsung J2 Prime", harga: 500000, gambar: "", kategori: "elektronik", deskripsi: "Smartphone praktis dengan harga terjangkau untuk komunikasi dan kebutuhan dasar.", tentangProduk: "Samsung J2 Prime merupakan smartphone praktis dan terjangkau untuk komunikasi serta kebutuhan dasar.", spesifikasiProduk: ["Smartphone", "Untuk komunikasi", "Untuk kebutuhan dasar"]},
        {id:103, nama: "iPhone 15", harga: 12000000, gambar: "", kategori: "elektronik", deskripsi: "iPhone dengan performa cepat, kamera berkualitas, dan desain modern.", tentangProduk: "iPhone 15 menggabungkan performa cepat, kamera berkualitas, dan desain modern.", spesifikasiProduk: ["Performa cepat", "Kamera berkualitas", "Desain modern"]},
        {id:104, nama: "iPhone 15 Pro", harga: 18000000, gambar: "", kategori: "elektronik", deskripsi: "iPhone kelas profesional dengan performa tinggi dan sistem kamera canggih.", tentangProduk: "iPhone 15 Pro dirancang untuk penggunaan profesional dengan performa tinggi dan kamera canggih.", spesifikasiProduk: ["Kelas profesional", "Performa tinggi", "Sistem kamera canggih"]},
        {id:105, nama: "iPhone 16", harga: 14000000, gambar: "", kategori: "elektronik", deskripsi: "Smartphone generasi terbaru dengan performa responsif dan kamera mumpuni.", tentangProduk: "iPhone 16 menawarkan performa responsif dan kamera mumpuni dalam generasi terbaru.", spesifikasiProduk: ["Performa responsif", "Kamera mumpuni"]},
        {id:106, nama: "iPhone 16 Pro Max", harga: 22000000, gambar: "", kategori: "elektronik", deskripsi: "Model premium dengan layar luas, kamera profesional, dan daya tahan baterai optimal.", tentangProduk: "iPhone 16 Pro Max menghadirkan layar luas, kamera profesional, dan daya tahan baterai optimal.", spesifikasiProduk: ["Layar luas", "Kamera profesional", "Baterai tahan lama"]},
        {id:107, nama: "Samsung Galaxy A15", harga: 2500000, gambar: "", kategori: "elektronik", deskripsi: "Smartphone terjangkau dengan layar nyaman dan baterai tahan lama.", tentangProduk: "Samsung Galaxy A15 adalah smartphone terjangkau untuk penggunaan harian dengan layar nyaman dan baterai tahan lama.", spesifikasiProduk: ["Layar nyaman", "Baterai tahan lama", "Harga terjangkau"]},
        {id:108, nama: "Samsung Galaxy A35 5G", harga: 5000000, gambar: "", kategori: "elektronik", deskripsi: "Smartphone 5G dengan desain elegan, kamera tajam, dan performa seimbang.", tentangProduk: "Samsung Galaxy A35 5G memadukan desain elegan, kamera tajam, dan performa seimbang.", spesifikasiProduk: ["Konektivitas 5G", "Desain elegan", "Kamera tajam", "Performa seimbang"]},
        {id:109, nama: "Samsung Galaxy A55 5G", harga: 6500000, gambar: "", kategori: "elektronik", deskripsi: "Smartphone 5G premium dengan layar cerah dan kemampuan fotografi yang baik.", tentangProduk: "Samsung Galaxy A55 5G menawarkan layar cerah dan kemampuan fotografi untuk kelas premium.", spesifikasiProduk: ["Konektivitas 5G", "Layar cerah", "Fotografi"]},
        {id:110, nama: "Samsung Galaxy S24", harga: 11000000, gambar: "", kategori: "elektronik", deskripsi: "Flagship ringkas dengan performa kuat, kamera cerdas, dan desain premium.", tentangProduk: "Samsung Galaxy S24 adalah flagship ringkas dengan performa kuat, kamera cerdas, dan desain premium.", spesifikasiProduk: ["Flagship ringkas", "Performa kuat", "Kamera cerdas", "Desain premium"]},
        {id:111, nama: "Samsung Galaxy S24 Ultra", harga: 19000000, gambar: "", kategori: "elektronik", deskripsi: "Flagship berfitur lengkap dengan kamera profesional dan dukungan S Pen.", tentangProduk: "Samsung Galaxy S24 Ultra menghadirkan fitur lengkap, kamera profesional, dan dukungan S Pen.", spesifikasiProduk: ["Flagship", "Kamera profesional", "Dukungan S Pen"]},
        {id:112, nama: "Google Pixel 8", harga: 9000000, gambar: "", kategori: "elektronik", deskripsi: "Smartphone dengan kamera berbasis AI dan pengalaman Android yang bersih.", tentangProduk: "Google Pixel 8 menawarkan kamera berbasis AI dan pengalaman Android yang bersih.", spesifikasiProduk: ["Kamera berbasis AI", "Sistem Android"]},
        {id:113, nama: "Google Pixel 8 Pro", harga: 14000000, gambar: "", kategori: "elektronik", deskripsi: "Pixel premium dengan kamera canggih, layar halus, dan fitur AI pintar.", tentangProduk: "Google Pixel 8 Pro memadukan kamera canggih, layar halus, dan fitur AI pintar.", spesifikasiProduk: ["Kamera canggih", "Layar halus", "Fitur AI"]},
        {id:114, nama: "Xiaomi Redmi Note 13 Pro", harga: 4000000, gambar: "", kategori: "elektronik", deskripsi: "Smartphone bertenaga dengan kamera beresolusi tinggi dan layar imersif.", tentangProduk: "Xiaomi Redmi Note 13 Pro menawarkan performa bertenaga, kamera beresolusi tinggi, dan layar imersif.", spesifikasiProduk: ["Performa bertenaga", "Kamera resolusi tinggi", "Layar imersif"]},
        {id:115, nama: "Xiaomi 14", harga: 11000000, gambar: "", kategori: "elektronik", deskripsi: "Flagship kompak dengan performa cepat dan kamera berkualitas tinggi.", tentangProduk: "Xiaomi 14 adalah flagship kompak dengan performa cepat dan kamera berkualitas tinggi.", spesifikasiProduk: ["Flagship kompak", "Performa cepat", "Kamera berkualitas tinggi"]},
        {id:116, nama: "Poco X6 Pro", harga: 5000000, gambar: "", kategori: "elektronik", deskripsi: "Smartphone berperforma tinggi yang cocok untuk bermain gim dan multitasking.", tentangProduk: "Poco X6 Pro cocok untuk bermain gim dan multitasking berkat performanya yang tinggi.", spesifikasiProduk: ["Performa tinggi", "Untuk bermain gim", "Multitasking"]},
        {id:117, nama: "Poco F6", harga: 6000000, gambar: "", kategori: "elektronik", deskripsi: "Ponsel performa tinggi dengan chipset kencang dan layar responsif.", tentangProduk: "Poco F6 menghadirkan chipset kencang, layar responsif, dan performa tinggi.", spesifikasiProduk: ["Performa tinggi", "Chipset kencang", "Layar responsif"]},
        {id:118, nama: "Oppo A58", harga: 2300000, gambar: "", kategori: "elektronik", deskripsi: "Smartphone harian dengan desain menarik, baterai awet, dan pengisian cepat.", tentangProduk: "Oppo A58 dirancang untuk penggunaan harian dengan desain menarik, baterai awet, dan pengisian cepat.", spesifikasiProduk: ["Desain menarik", "Baterai awet", "Pengisian cepat"]},
        {id:119, nama: "Oppo Reno 11 F 5G", harga: 4500000, gambar: "", kategori: "elektronik", deskripsi: "Smartphone 5G tipis dengan kamera portrait dan desain elegan.", tentangProduk: "Oppo Reno 11 F 5G memadukan bodi tipis, kamera portrait, dan desain elegan.", spesifikasiProduk: ["Konektivitas 5G", "Desain tipis dan elegan", "Kamera portrait"]},
        {id:120, nama: "Oppo Find N3 Flip", harga: 15000000, gambar: "", kategori: "elektronik", deskripsi: "Smartphone lipat bergaya dengan layar fleksibel dan kamera premium.", tentangProduk: "Oppo Find N3 Flip adalah smartphone lipat dengan layar fleksibel dan kamera premium.", spesifikasiProduk: ["Desain lipat", "Layar fleksibel", "Kamera premium"]},
        {id:121, nama: "Vivo Y27 5G", harga: 2500000, gambar: "", kategori: "elektronik", deskripsi: "Smartphone 5G terjangkau dengan baterai besar untuk penggunaan sehari-hari.", tentangProduk: "Vivo Y27 5G menyediakan baterai besar dan konektivitas 5G untuk penggunaan sehari-hari.", spesifikasiProduk: ["Konektivitas 5G", "Baterai besar", "Untuk penggunaan sehari-hari"]},
        {id:122, nama: "Vivo V30", harga: 6000000, gambar: "", kategori: "elektronik", deskripsi: "Smartphone stylish dengan kamera portrait dan layar berkualitas.", tentangProduk: "Vivo V30 memiliki desain stylish, kamera portrait, dan layar berkualitas.", spesifikasiProduk: ["Desain stylish", "Kamera portrait", "Layar berkualitas"]},
        {id:123, nama: "Vivo X100", harga: 14000000, gambar: "", kategori: "elektronik", deskripsi: "Flagship dengan kamera profesional, performa cepat, dan desain premium.", tentangProduk: "Vivo X100 adalah flagship dengan kamera profesional, performa cepat, dan desain premium.", spesifikasiProduk: ["Flagship", "Kamera profesional", "Performa cepat", "Desain premium"]},
        {id:124, nama: "Realme C67", harga: 2300000, gambar: "", kategori: "elektronik", deskripsi: "Smartphone ekonomis dengan kamera tajam dan baterai yang tahan lama.", tentangProduk: "Realme C67 menawarkan kamera tajam dan baterai tahan lama dengan harga ekonomis.", spesifikasiProduk: ["Kamera tajam", "Baterai tahan lama", "Harga ekonomis"]},
        {id:125, nama: "Realme 12 Pro+ 5G", harga: 6500000, gambar: "", kategori: "elektronik", deskripsi: "Smartphone 5G dengan kamera telefoto dan desain premium.", tentangProduk: "Realme 12 Pro+ 5G memadukan konektivitas 5G, kamera telefoto, dan desain premium.", spesifikasiProduk: ["Konektivitas 5G", "Kamera telefoto", "Desain premium"]},
        {id:126, nama: "Infinix Note 40 Pro", harga: 3500000, gambar: "", kategori: "elektronik", deskripsi: "Smartphone dengan layar luas, pengisian cepat, dan kamera beresolusi tinggi.", tentangProduk: "Infinix Note 40 Pro memiliki layar luas, pengisian cepat, dan kamera beresolusi tinggi.", spesifikasiProduk: ["Layar luas", "Pengisian cepat", "Kamera resolusi tinggi"]},
        {id:127, nama: "Infinix GT 20 Pro", harga: 4500000, gambar: "", kategori: "elektronik", deskripsi: "Ponsel gaming dengan performa kuat, layar cepat, dan desain futuristis.", tentangProduk: "Infinix GT 20 Pro dirancang untuk gaming dengan performa kuat, layar cepat, dan desain futuristis.", spesifikasiProduk: ["Ponsel gaming", "Performa kuat", "Layar cepat", "Desain futuristis"]},
        {id:128, nama: "Asus ROG Phone 8", harga: 12000000, gambar: "", kategori: "elektronik", deskripsi: "Smartphone gaming premium dengan performa tinggi dan sistem pendingin khusus.", tentangProduk: "Asus ROG Phone 8 adalah smartphone gaming premium dengan performa tinggi dan sistem pendingin khusus.", spesifikasiProduk: ["Smartphone gaming", "Performa tinggi", "Sistem pendingin khusus"]},
        {id:129, nama: "Nubia RedMagic 9 Pro", harga: 13000000, gambar: "", kategori: "elektronik", deskripsi: "Ponsel gaming bertenaga dengan kipas pendingin dan layar tanpa gangguan.", tentangProduk: "Nubia RedMagic 9 Pro menawarkan kipas pendingin dan layar tanpa gangguan untuk pengalaman gaming.", spesifikasiProduk: ["Ponsel gaming", "Kipas pendingin", "Layar tanpa gangguan"]},
        {id:130, nama: "Sony Xperia 1 V", harga: 18000000, gambar: "", kategori: "elektronik", deskripsi: "Smartphone premium dengan layar sinematik dan kamera berfitur profesional.", tentangProduk: "Sony Xperia 1 V menghadirkan layar sinematik dan kamera dengan fitur profesional.", spesifikasiProduk: ["Smartphone premium", "Layar sinematik", "Kamera profesional"]},
    ]

    const makanan = [
        {id: 201, nama: "Nasi Padang", harga: 20000, gambar: "", kategori: "makanan", deskripsi: "Nasi putih hangat dengan pilihan lauk dan kuah khas masakan Padang."},
        {id: 202, nama: "Nasi Goreng", harga: 18000, gambar: "", kategori: "makanan", deskripsi: "Nasi goreng gurih dengan bumbu pilihan dan pelengkap yang menggugah selera."},
        {id: 203, nama: "Mie Goreng", harga: 15000, gambar: "", kategori: "makanan", deskripsi: "Mie goreng berbumbu gurih dengan sayuran dan pelengkap pilihan."},
        {id: 204, nama: "Mie Ayam", harga: 16000, gambar: "", kategori: "makanan", deskripsi: "Mie kenyal dengan potongan ayam berbumbu dan kuah kaldu yang hangat."},
        {id: 205, nama: "Bakso", harga: 18000, gambar: "", kategori: "makanan", deskripsi: "Bakso sapi kenyal disajikan bersama kuah gurih dan pelengkap segar."},
        {id: 206, nama: "Soto Ayam", harga: 17000, gambar: "", kategori: "makanan", deskripsi: "Soto ayam berkuah gurih dengan suwiran ayam dan pelengkap khas."},
        {id: 207, nama: "Ayam Geprek", harga: 22000, gambar: "", kategori: "makanan", deskripsi: "Ayam goreng renyah yang digeprek dengan sambal pedas pilihan."},
        {id: 208, nama: "Ayam Bakar", harga: 25000, gambar: "", kategori: "makanan", deskripsi: "Ayam bakar berbumbu manis gurih dengan aroma panggangan yang khas."},
        {id: 209, nama: "Ikan Bakar", harga: 30000, gambar: "", kategori: "makanan", deskripsi: "Ikan segar yang dibakar dengan bumbu rempah dan disajikan hangat."},
        {id: 210, nama: "Sate Ayam", harga: 20000, gambar: "", kategori: "makanan", deskripsi: "Sate ayam empuk dengan bumbu kacang gurih dan aroma bakaran."},
        {id: 211, nama: "Gado-Gado", harga: 15000, gambar: "", kategori: "makanan", deskripsi: "Campuran sayuran segar, tahu, dan tempe dengan siraman saus kacang."},
        {id: 212, nama: "Karedok", harga: 14000, gambar: "", kategori: "makanan", deskripsi: "Sayuran mentah segar dengan saus kacang khas yang gurih dan pedas."},
        {id: 213, nama: "Seblak", harga: 15000, gambar: "", kategori: "makanan", deskripsi: "Seblak kenyal dengan bumbu pedas gurih dan pilihan topping yang lezat."},
        {id: 214, nama: "Pempek", harga: 20000, gambar: "", kategori: "makanan", deskripsi: "Pempek ikan yang kenyal disajikan dengan kuah cuko asam, manis, dan pedas."},
        {id: 215, nama: "Martabak Telur", harga: 25000, gambar: "", kategori: "makanan", deskripsi: "Martabak gurih berisi telur, daging, dan daun bawang dengan kulit renyah."},
        {id: 216, nama: "Martabak Manis", harga: 30000, gambar: "", kategori: "makanan", deskripsi: "Martabak manis lembut dengan pilihan topping cokelat, keju, atau kacang."},
        {id: 217, nama: "Batagor", harga: 15000, gambar: "", kategori: "makanan", deskripsi: "Pangsit dan tahu goreng dengan isian ikan, disajikan bersama saus kacang."},
        {id: 218, nama: "Siomay", harga: 15000, gambar: "", kategori: "makanan", deskripsi: "Siomay dan pelengkap kukus dengan saus kacang yang gurih dan lembut."},
        {id: 219, nama: "Pisang Goreng", harga: 12000, gambar: "", kategori: "makanan", deskripsi: "Pisang manis berbalut adonan renyah, cocok sebagai camilan hangat."},
        {id: 220, nama: "Es Teh Manis", harga: 5000, gambar: "", kategori: "makanan", deskripsi: "Teh manis dingin yang segar untuk menemani makanan atau diminum sendiri."}
    ]

    
    const semuaProduk = [...elektronik, ...makanan]

    
    export default  function DetailProdukPage({ params, }) {
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

        const [keranjang, setKeranjang] = useState([])
        const [keranjangOpen, setKeranjangOpen] = useState(false)



        const produk = semuaProduk.find((item) => String(item.id) === String(id));

        if (!produk) {
            return (
                <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
                    <h1 className="text-2xl font-bold mb-4">Produk Tidak Ditemukan</h1>
                    <Link href="/" className="bg-indigo-600 px-4 py-2 rounded-xl">Kembali Ke Beranda</Link>
                </div>
            )
        }    

        return (
           <div className='min-h-screen bg-slate-900 text-white p-6'>

            <nav className='flex items-center justify-between gap-4 bg-slate-800/80 p-4 rounded-xl mb-8 relative'>
                <h1 className='text-xl font-bold text-amber-400 '>Bannur E-Commerece</h1>
                <div className='relative flex-1 max-w-md'>
                    <input 
                        type='text'
                        placeholder='Cari Barang....'
                        value={textPencarian}
                        onChange={(e) => setTextPencarian(e.target.value)}
                        onFocus={() => setSedangKetik(true)}
                        onBlur={() => setTimeout(() => setSedangKetik(false), 200)}
                        className='w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-indigo-500'
                    />

                    {sedangketik && (
                        <div className='absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 roundede-xl shadow-2xl z-50 p-2 max-h-64 overflow-y-auto'>
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
                <div className='flex bg-slate-900 p-1 rounded-lg border border-slate-700 text-xs'>
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
                <div className='bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm flex items-center gap-2'>
                    🛒 keranjang: 0
                </div>
            </nav>
            
            <div className='max-w-4xl mx-auto bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6'>
                    <Link href="/" className='inline-block bg-slate-800 border border-slate-700 text-sm px-4 py-2 rounded-xl text-slate-300 hover:text-white mb-6'>
                        ← Kembali ke Toko
                    </Link>

                    <div className='grid gird-cols-1 md:grid-cols-2 gap-8'>
                        <div className='bg-slate-900 rounded-xl h-72 flex items-center justify-center text-6xl'>
                            <img
                                src={ProdukSaatIni.gambar}
                                alt={ProdukSaatIni.nama}
                                className='w-full h-full object-cover rounded-xl'
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
            <div className='w-full h--auto flex justify-center items-center mt-5 '>
                <div className='border border-slate-700/50 flex justify-center items-center bg-slate-800/40 rounded-xl '>

                    <div className='w-[28rem] h--auto rounded-xl p-5 flex flex-col gap-8 justify-start my-2  '>
                        <div className='flex gap-8 rounded-2xl '>
                            <button
                                onClick={() => setTabAktif('deskripsi')}
                                className={`font-semibold pb-3 -mb-3 transition ${
                                    tabAktif === 'deskripsi'
                                    ? 'text-amber-600 border-b-2 border-amber-400'
                                    : 'text-slate-400 hover:text-slate-200'
                                }`}
                            >
                                Deskripsi Produk
                            </button>

                            <button
                                onClick={() => setTabAktif('spesifikasi')}
                                className={`font-semibold pb-3 -mb-3 transition ${
                                    tabAktif === 'spesifikasi'
                                    ? 'text-amber-600 border-b-2 border-amber-400'
                                    : 'text-slate-400 hover:text-slate-200'
                                }`}
                            >
                                Spesifikasi Produk
                            </button>
                        </div>

                        <div>
                            {tabAktif === 'deskripsi' ? (
                                <div className=''>
                                    <h3 className='text-base font-bold text-white mb-2 '>Tentang Produk</h3>
                                    <p className='text-xs text-slate-300 leading-relaxed'>{ProdukSaatIni?.tentangProduk || 'Deskripsi produk belum tersedia' }</p>
                                </div>
                            ) : (
                                <div>
                                    <h3 className='text-base font-bold text-white mb-2'>Spesifikasi Produk</h3>
                                    <p className='text-xs text-slate-300 leading-relaxed'>{ProdukSaatIni?.spesifikasiProduk || 'Spesifikasi produk belum ada '}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='w-[28rem] flex flex-col items-center justify-center gap-2'>
                            <div className='w-auto flex justify-center items-center p-2 bg-slate-800 border border-slate-700/50 rounded-xl gap-3'>
                                <div className='w-13 h-13 bg-emerald-300 border border-emerald-800 rounded-xl flex justify-center items-center'>
                                    <Truck className='w-7 h-7 text-emerald-600'/>
                                </div>
                                <div className='w-[15rem] h--auto flex flex-col justify-start gap-1'>
                                    <span className='text-xs font-bold text-white'>Pengiriman Cepat</span>
                                    <p className='text-[10px] text-slate-300 leading-relaxed'>pesanana di proses dengan cepat dan aman sampai ke tangan anda</p>
                                </div>
                            </div>

                            <div className='w-auto flex justify-center items-center p-2 bg-slate-800 border border-slate-700/50 rounded-xl gap-3'>
                                <div className='w-13 h-13 bg-purple-400 border border-purple-700 rounded-xl flex justify-center items-center'>
                                    <ShieldCheck className='w-7 h-7 text-purple-500'/>
                                </div>
                                <div className='w-[15rem] h--auto flex flex-col justify-start gap-1'>
                                    <span className='text-xs font-bold text-white'>Garansi Toko</span>
                                    <p className='text-[10px] text-slate-300 leading-relaxed'>produk original dengan garansi resmi dari toko kami </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>


        </div>
        )
    }
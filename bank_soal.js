// DATABASE SOAL 34 PAKET (SESUAI ABSEN)
// File ini otomatis dibaca oleh lkpd.html berdasarkan urutan abjad siswa

const DATA_LKPD = {
    judul: "Bab 2: Analisis Data & Privasi",
    deskripsi: "Kerjakan soal sesuai nomor urut presensi masing-masing dengan jujur.",
    soal: [
        {
            no: 1,
            soal_1: "Sebutkan 3 contoh data pribadi yang bersifat rahasia!",
            soal_2: "Analisis mengapa kita tidak boleh memberikan kode OTP WhatsApp kepada siapa pun, bahkan yang mengaku petugas bank!"
        },
        {
            no: 2,
            soal_1: "Apa kepanjangan dari NIK dan mengapa nomor ini unik?",
            soal_2: "Jika kamu menemukan flashdisk tak dikenal tergeletak di sekolah, apa risiko keamanan jika kamu langsung mencolokkannya ke laptop?"
        },
        {
            no: 3,
            soal_1: "Jelaskan perbedaan antara Data Privat dan Data Publik!",
            soal_2: "Seorang teman memposting foto tiket pesawat lengkap dengan barcode di Story Instagram. Jelaskan bahaya yang mengintai!"
        },
        {
            no: 4,
            soal_1: "Apa yang dimaksud dengan 'Jejak Digital'?",
            soal_2: "Bagaimana cara mengecek apakah sebuah link/tautan yang dikirim lewat SMS itu asli atau penipuan (phishing)?"
        },
        {
            no: 5,
            soal_1: "Sebutkan fungsi sandi (password) yang kuat!",
            soal_2: "Mengapa menggunakan WiFi gratisan di kafe/warung kopi berbahaya untuk melakukan transaksi mobile banking?"
        },
        {
            no: 6,
            soal_1: "Apa itu autentikasi dua faktor (2FA)?",
            soal_2: "Analisis kasus: Ada email masuk mengaku dari Instagram mengatakan akunmu akan dihapus jika tidak login di link terlampir. Apa tindakanmu?"
        },
        {
            no: 7,
            soal_1: "Sebutkan bahaya membagikan lokasi terkini (Live Location) di media sosial publik!",
            soal_2: "Mengapa tanggal lahir ibu kandung sering dijadikan pertanyaan keamanan bank? Apakah aman disebar di medsos?"
        },
        {
            no: 8,
            soal_1: "Apa yang dimaksud dengan pencurian identitas?",
            soal_2: "Jelaskan mengapa kita harus rutin mengganti password akun media sosial secara berkala!"
        },
        {
            no: 9,
            soal_1: "Sebutkan 2 ciri-ciri akun online shop penipu di Instagram!",
            soal_2: "Jika HP-mu hilang, langkah apa saja yang harus segera dilakukan untuk mengamankan data-data di dalamnya?"
        },
        {
            no: 10,
            soal_1: "Apa itu Malware? Jelaskan secara singkat.",
            soal_2: "Mengapa aplikasi pinjaman online ilegal sering meminta izin akses ke 'Kontak' di HP pengguna? Jelaskan analisismu."
        },
        {
            no: 11,
            soal_1: "Apa bedanya HTTP dan HTTPS pada alamat website?",
            soal_2: "Kamu mendapat telpon dari nomor asing yang mengaku saudara dan minta transfer uang darurat. Bagaimana cara memvalidasi kebenarannya?"
        },
        {
            no: 12,
            soal_1: "Apa resiko login akun Google di komputer warnet?",
            soal_2: "Jelaskan istilah 'Social Engineering' dalam keamanan data dan berikan satu contoh kasus sederhananya!"
        },
        {
            no: 13,
            soal_1: "Sebutkan data apa saja yang ada di KTP yang tidak boleh disebar!",
            soal_2: "Analisis mengapa kita perlu mengunci layar HP (Screen Lock) menggunakan pola atau sidik jari!"
        },
        {
            no: 14,
            soal_1: "Apa itu Cyberbullying? Berikan contohnya.",
            soal_2: "Mengapa kita tidak boleh asal klik 'Izinkan' (Allow) saat website meminta izin notifikasi atau lokasi?"
        },
        {
            no: 15,
            soal_1: "Jelaskan pengertian Hoaks (Berita Bohong)!",
            soal_2: "Bagaimana caramu membedakan foto asli dan foto editan yang beredar di grup WhatsApp keluarga?"
        },
        {
            no: 16,
            soal_1: "Apa fungsi fitur 'Privasi Akun' (Gembok Akun) di media sosial?",
            soal_2: "Analisis dampak negatif dari 'Oversharing' (terlalu banyak berbagi masalah pribadi) di media sosial bagi masa depanmu!"
        },
        {
            no: 17,
            soal_1: "Sebutkan satu aplikasi untuk mengecek validitas nomor telepon penipu!",
            soal_2: "Mengapa data riwayat penyakit seseorang termasuk data sensitif yang harus dilindungi rumah sakit?"
        },
        {
            no: 18,
            soal_1: "Apa itu Hacker?",
            soal_2: "Jelaskan skenario penipuan 'Undangan Pernikahan Digital' yang berbentuk file APK di WhatsApp! Apa bahayanya jika diklik?"
        },
        {
            no: 19,
            soal_1: "Sebutkan 3 jenis media penyimpanan data digital!",
            soal_2: "Mengapa kita disarankan melakukan Backup Data secara rutin? Berikan contoh kejadian yang membutuhkan backup!"
        },
        {
            no: 20,
            soal_1: "Apa itu Enkripsi WhatsApp (End-to-End Encryption)?",
            soal_2: "Jika kamu ingin menjual HP bekasmu, apa yang harus dilakukan pada data di dalamnya agar tidak bisa dipulihkan orang lain?"
        },
        {
            no: 21,
            soal_1: "Sebutkan etika berkomentar di media sosial!",
            soal_2: "Analisis mengapa situs web pemerintah (.go.id) sering menjadi sasaran peretas situs judi online!"
        },
        {
            no: 22,
            soal_1: "Apa itu cookies pada browser internet?",
            soal_2: "Bagaimana cara kerja penipuan dengan modus 'Kurir Paket' yang mengirim file foto tapi formatnya .APK?"
        },
        {
            no: 23,
            soal_1: "Sebutkan contoh pelanggaran hak cipta di internet!",
            soal_2: "Mengapa mengunduh aplikasi modifikasi (Mod APK) berisiko tinggi bagi keamanan data di HP-mu?"
        },
        {
            no: 24,
            soal_1: "Apa itu VPN dan apa kegunaan utamanya?",
            soal_2: "Analisis mengapa kita tidak boleh menggunakan tanggal lahir (misal: 12122005) sebagai PIN ATM!"
        },
        {
            no: 25,
            soal_1: "Apa yang dimaksud dengan Digital Citizenship?",
            soal_2: "Seorang teman meminta username dan password game-mu untuk 'joki'. Apa risiko keamanan yang mungkin terjadi?"
        },
        {
            no: 26,
            soal_1: "Sebutkan satu undang-undang di Indonesia yang mengatur informasi elektronik!",
            soal_2: "Jelaskan bahaya fitur 'Ingat Password Saya' (Remember Me) jika digunakan pada komputer publik/sekolah!"
        },
        {
            no: 27,
            soal_1: "Apa itu Spam Email?",
            soal_2: "Analisis mengapa perusahaan besar seperti Google dan Facebook mengumpulkan data perilaku penggunanya!"
        },
        {
            no: 28,
            soal_1: "Sebutkan cara mengenali berita Clickbait!",
            soal_2: "Jika akun WhatsApp-mu tiba-tiba logout sendiri dan meminta verifikasi ulang padahal kamu tidak melakukannya, apa yang sedang terjadi?"
        },
        {
            no: 29,
            soal_1: "Apa itu Cloud Storage? Berikan contohnya.",
            soal_2: "Jelaskan risiko keamanan jika kamu menggunakan password yang sama untuk semua akun (FB, IG, Email, Game)!"
        },
        {
            no: 30,
            soal_1: "Sebutkan bahaya FOMO (Fear of Missing Out) di dunia digital!",
            soal_2: "Bagaimana cara memastikan bahwa toko online tempat kita belanja adalah toko resmi dan bukan penipu?"
        },
        {
            no: 31,
            soal_1: "Apa itu Adware dalam istilah virus komputer?",
            soal_2: "Mengapa kita dilarang memfoto kartu debit/kredit (ATM) bagian depan dan belakang dan mengirimnya ke orang lain?"
        },
        {
            no: 32,
            soal_1: "Sebutkan dampak positif internet bagi pelajar!",
            soal_2: "Analisis mengapa menyebarkan foto aib teman di grup WhatsApp bisa terjerat hukum UU ITE!"
        },
        {
            no: 33,
            soal_1: "Apa itu Plagiarisme?",
            soal_2: "Jika kamu menerima email hadiah iPhone gratis tapi harus membayar biaya kirim dulu, apa analisismu tentang hal ini?"
        },
        {
            no: 34,
            soal_1: "Sebutkan satu cara menjaga kesehatan mata saat menggunakan gadget!",
            soal_2: "Mengapa data 'Nama Gadis Ibu Kandung' sangat diincar oleh peretas data perbankan? Jelaskan!"
        }
    ]
};

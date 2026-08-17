# ProkerKita: Ekosistem Cerdas Evaluasi Risiko dan Arsip Interaktif untuk 	Optimalisasi Keberhasilan Program Kerja Nyata

## Instansi
IPB University

## Anggota Tim
- Ketua: Nur'afia Avanza
- Anggota 1: Nada Haifa Nurfadhillah

## Deskripsi Karya

**ProkerKita** dibuat berdasarkan masalah yang sering banget kita temui: program KKN atau pengabdian masyarakat seringkali monoton (misalnya mentok di bikin seminar) atau malah mengulang proker yang sebenarnya sudah pernah gagal di desa lain. Selama ini, ribuan laporan KKN cuma berakhir jadi tumpukan arsip dan jarang banget dibaca lagi untuk dijadikan bahan evaluasi atau contekan ide.

Karena itu, kami membuat sistem ini sebagai ***AI-Powered Precedent Checker*** (mesin pengecek riwayat berbasis AI). Cara kerjanya simpel: mahasiswa tinggal memasukkan ide proker, kondisi desa target (misal: susah air bersih, warga mayoritas petani), dan batas *budget*. 

Di balik layar, AI (dengan teknologi NLP) akan langsung mencocokkan ide tersebut dengan ribuan *database* laporan KKN terdahulu di kondisi desa yang mirip.
- Kalau ide itu historisnya **berhasil**, AI akan menampilkan persentase tingkat kesuksesannya supaya mahasiswa bisa mengeksekusinya dengan yakin.
- Kalau idenya punya riwayat **gagal**, AI akan langsung memberi peringatan dan otomatis memberikan rekomendasi proker alternatif yang terbukti lebih *works* (sukses) untuk kondisi desa tersebut.

Manfaat utama aplikasi ini adalah mencegah mahasiswa buang-buang dana dan waktu untuk proker yang salah sasaran. Keputusan pemilihan program jadi benar-benar berbasis data (*data-driven*), sehingga inovasi yang dibawa ke desa jauh lebih matang dan masyarakat bisa merasakan manfaat yang nyata.

Terkait subtema **Humanity OS**, kami mengibaratkan aplikasi ini sebagai "sistem operasi" yang mendukung gotong royong dan kemanusiaan. Kami menggunakan AI bukan sekadar untuk *show-off* teknologi, tapi untuk memanfaatkan pengalaman ribuan mahasiswa di masa lalu agar program sosial ke depannya tidak mengulangi kesalahan yang sama dan berdampak lebih besar.

## Cara Menjalankan Proyek (Instalasi Lokal)

1. **Clone repositori**
   Buka terminal, lalu jalankan perintah ini untuk mengunduh kode proyek:
   ```bash
   git clone https://github.com/NadaaaaH/ProkerKita.git
   ```
2. **Masuk ke folder proyek**
   Setelah selesai diunduh, masuk ke dalam folder dengan perintah:
   ```bash
   cd ProkerKita
   ```
3. **Instal paket (Dependencies)**
   Pastikan Node.js sudah terpasang, lalu jalankan perintah ini untuk menginstal semua kebutuhan sistem:
   ```bash
   npm install
   ```
4. **Jalankan aplikasi**
   Terakhir, nyalakan *server* lokal dengan perintah:
   ```bash
   npm run dev
   ```
   Nanti akan muncul *link* lokal (biasanya `http://localhost:5173/`). Tinggal buka *link* tersebut di *browser*

## Tautan / Link Deploy Website
https://prokerkita.vercel.app/

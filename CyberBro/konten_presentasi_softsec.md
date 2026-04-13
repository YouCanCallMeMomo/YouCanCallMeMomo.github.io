# Presentasi Software Security: Analisis Keamanan Aplikasi BINUS Parent
[Dokumen ini berisi draf konten untuk di copy-paste ke dalam slide Canva Anda]

## Slide 1: Judul Pendahuluan
- **Judul Besar:** Analisis Keamanan Perangkat Lunak: BINUS Parent Platform
- **Sub-judul:** Mengamankan Data Akademik dan Identitas Orang Tua Mahasiswa
- **Deskripsi:** Analisis ini difokuskan pada aplikasi portal BINUS Parent yang digunakan oleh orang tua untuk memantau nilai (GPA), Finansial, dan Jadwal mahasiswa.

## Slide 2: Fitur Aplikasi
- **Dashboard & Profile:** Menampilkan performa akademik mahasiswa secara real-time seperti IPK (GPA), SKS yang diambil/sisa, dan Poin SAT (Jam Komunitas).
- **Financial & Learning:** Fitur pengunduhan *Payment Receipt*, pengecekan kehadiran (Attendance), jadwal kelas, hingga tampilan nilai kuliah (*View Score & Grade*).
- **Menu Ekstra:** *Student Violation*, *Feedback*, *Graduation*, hingga informasi akomodasi (*Binus Square*).
*(Di Canva: Gunakan tangkapan layar / screenshot dari menu samping yang Anda berikan untuk mempercantik slide ini).*

## Slide 3: Diagram Arsitektur (Konsep)
- **Aktor:** Orang Tua (Parent)
- **Frontend / Client:** Portal Web (Browser)
- **Sistem Backend Utama:** Server Web Portal -> Database Autentikasi (Penyimpanan sandi tanpa verifikasi ketat) -> Database Akademik & Finansial.
*(Di Canva: Anda bisa menggunakan elemen Canva bernama "Process Flow" atau kotak-kotak sederhana (Kotak Laptop -> Kotak Awan/Server -> Kotak Database)).*

## Slide 4: Analisis STRIDE
- **S - Spoofing:** Otentikasi lemah memungkinkan penyerang menyamar sebagai orang tua asli melalui serangan *Brute Force*.
- **T - Tampering:** Penyerang mengubah *password* parent tanpa verifikasi, atau memanipulasi fitur "protes nilai" ke pihak akademik.
- **R - Repudiation:** Kurangnya ketertelusuran log (*logging*) sehingga jika *password* terganti, sulit dibuktikan siapa pelakunya.
- **I - Information Disclosure:** Terungkapnya *Payment Receipt*, jadwal harian kelas mahasiswa, dan riwayat pelanggaran (violation).
- **D - Denial of Service:** Celah otentikasi dapat dieksploitasi dengan robot botnet untuk men-down-kan server halaman login.
- **E - Elevation of Privilege:** Mengeksploitasi celah otorisasi dari akun Parent biasa hingga bisa mengeksekusi sistem yang merugikan.

## Slide 5: Skenario Analisis
**Skenario Pengambilalihan Akun secara Diam-diam (Silent Account Takeover)**
- **Kondisi:** Sistem login tidak mempunyai fitur perlindungan *brute-force* dan fitur *ganti password* langsung men-save tanpa proses validasi kode OTP atau konfirmasi password lama.
- **Aksi:** Penyerang meluncurkan *script brute-force* login. Setelah masuk, penyerang langsung menabrak menu profil dan mengganti *password*. 
- **Dampak:** Orang tua asli terkunci dari luar, sedangkan penyerang kini leluasa mengakses riwayat pembayaran, menyembunyikan poin pelanggaran, atau menyabotase nilai dengan protes palsu.

## Slide 6: Premortem (Melihat 10 Tahun Ke Depan)
- **Kondisi di Tahun 2036:** Proyek portal BINUS Parent terpaksa ditutup dan reputasi universitas hancur akibat "Skandal Data Terbesar 2036".
- **Apa yang menyebabkan hal ini gagal di masa lalu?**
  1. Pembiaran terhadap fitur pengubahan identitas sandi (password) yang tidak melewati sistem autentikasi bertingkat.
  2. Absennya *Multi-Factor Authentication* (MFA) pada akses yang berhubungan langsung dengan riwayat finansial keluarga.
  3. Serangan masif yang mengkompromikan jadwal mahasiswa, menyebabkan ancaman privasi di dunia nyata.

## Slide 7: Movie Plotting (Skenario ala Film Hacker)
**Teaser Plot: "The Grade Syndicate"**
Seorang mahasiswa yang terancam teguran keras dari orang tuanya karena nilainya hancur dan memiliki catatan "Student Violation", menyewa sindikat *hacker* dari forum gelap. 

Berbekal celah pada portal BINUS Parent, *hacker* mem-brute-force akun orang tua sang mahasiswa. Detik itu juga, hacker langsung mengganti password (yang tak perlu verifikasi). Kini, saat orang tua mahasiswa log-in, mereka mendapati akun terkunci. Sementara itu, si mahasiswa lewat akun curiannya memanipulasi fitur *Feedback* dan merusuh untuk meminta protes perbaikan nilai dari dosen secara sepihak! 

## Slide 8: Attack Tree
**(Pohon Serangan Visual untuk Canva)**
* **Tujuan Induk:** Menguasai Akun Orang Tua & Data Mahasiswa
   * **Cabang 1 (Jalan Masuk):** Membobol Sistem Login
      * *Daun (Aksi):* Meluncurkan serbuan peretasan **Brute Force** sandi. *(Tercapai karena tidak ada CAPTCHA / Lockout).*
   * **Cabang 2 (Penguncian Akun):** Mengunci Ortu Asli dari luar.
      * *Daun (Aksi):* Klik fitur **Ganti Password**. *(Tercapai karena Save Log langsung menimpa DB tanpa verifikasi OTP).*
   * **Cabang 3 (Manipulasi Sistem):** Menyabotase Kampus.
      * *Daun (Aksi):* Lakukan **Protes Nilai** dari dalam menu Parent.

## Slide 9: Attack Library (10 Tipe Serangan Berdasarkan Fiturnya)
*(Bisa dibagi menjadi 2 slide di Canva)*

1. **Brute Force Authentication:** Menebak *password* parent jutaan kali tanpa diblokir sistem.
2. **Broken Logical Auth (Insecure Password Change):** Merubah kata sandi secara instan tanpa validasi konfirmasi ke email ibu/bapak.
3. **Malicious Business Logic (Protes Nilai Ilegal):** Eksploitasi hak akses Parent yang sudah ditebak dari sisi attacker untuk memaksa dosen mengubah *grade*.
4. **IDOR (Insecure Direct Object Reference) pada Finansial:** Bermain dengan URL id dari 1 menjadi 2 untuk mengintip resi bayaran UKT (*Payment Receipt*) milik mahasiswa kampus lain.
5. **Information Disclosure (Jadwal Pribadi):** Penyerang memantau jadwal harian kampus mahasiswa (Class Schedule) dengan niat penguntitan fisik (Stalking).
6. **Cross-Site Scripting (XSS) via Feedback Box:** Menyisipkan *script malware* berbahaya pada isian formulir "Send Feedback" yang akan berjalan di browser Admin Binus saat dibaca.
7. **Session Hijacking:** Mengambil sesi login orang tua jika mereka sedang mengakses Wi-Fi public secara tidak aman, tanpa menggunakan token yang baik.
8. **Missing Rate Limiting:** Server dibanjiri permintaan pada layanan unduh *Financial Summary*.
9. **Data Exposure via API:** API yang berhubungan dengan "Student Violation" mengeluarkan data lebih banyak daripada yang terlihat di layar UI dashboard.
10. **Lack of MFA:** Absennya *Multi-Factor Authentication* membuat pertahanan akun murni hanya bergantung pada rentannya *password*.

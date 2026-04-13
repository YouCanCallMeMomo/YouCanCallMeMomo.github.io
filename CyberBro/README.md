# SiagaSiber Youth System 🛡️🎒

SiagaSiber Youth System adalah sebuah platform edukasi keamanan siber (Cyber Security) interaktif yang dirancang khusus untuk pelajar SMP dan SMA di Indonesia. Dengan pendekatan gamifikasi modern, platform ini menjadikan belajar "hacking" dan "cyber defense" sangat aman, asyik, dan seru layaknya bermain *escape room* digital.

## ✨ Fitur-Fitur Utama

Website interaktif (*Single Page Application*) ini memiliki beberapa modul pembelajaran dan permainan yang seru:

*   **📚 Modul Belajar Cyber:** Materi ringkas seputar Phishing, Social Engineering, Malware, Password, Web Defacement, dan Wi-Fi Publik yang ditulis dengan bahasa santai ala Gen-Z.
*   **🎮 Mini-Games Interaktif:**
    *   **The Leaked Vault:** Melatih pemahaman pemain untuk membedakan password kuat vs password lemah dari tumpukan data base bocor dalam 90 detik.
    *   **The Chat Trap:** Simulasi *chatting* dengan teknik Phishing atau Social Engineering.
    *   **Defacement Scanner:** Menginspeksi situs sekolah yang diretas dan memulihkan kembali elemen yang berubah.
    *   **Forensic Investigator (Baru!):** Mode memilah log mentah layaknya detektif siber.
    *   **SQLi Scanner (Baru!):** Simulasi firewall yang mendeteksi input berbahaya di sebuah form aplikasi web.
*   **📝 Kuis Offline Acak (General, Forensic, SQLi):** Uji pengetahuanmu menggunakan bank soal berisi 600 variasi pertanyaan berbeda yang akan selalu teracak di mode General, Mode Forensic, atau Mode SQL-Injection.
*   **🤖 CyberBro AI:** Chatbot berbasis kecerdasan buatan (OpenAI GPT) yang siap menjawab pertanyaan apa pun seputar keamanan siber non-stop.

## 🛠️ Tech Stack Platform

Proyek edukasi ini dibuat menggunakan ekosistem *Frontend* berfokus ke performa dan UI cantik kekinian:
*   **ViteJS & React TypeScript**: Core framework super cepat tanpa re-render berat.
*   **TailwindCSS**: Utilitas pewarnaan, gradient animasi, dan *glassmorphism layout*.
*   **Lucide React**: Icon pack modern yang solid.
*   **Framer Motion / Motion React**: Animasi mulus saat perpindahan halaman dan munculnya elemen game.

## 🚀 Panduan Instalasi Lokal

Kamu dapat mencoba SiagaSiber di komputer pribadimu untuk kebutuhan tugas/lokal dengan cara:

1. Pastikan kamu sudah menginstal pustaka **Node.js** (rekomendasi versi >= 18).
2. Git Clone / Unduh repository proyek dan buka di command prompt.
3. Ketikkan perintah: `npm install` untuk memuat seluruh dependensi (seperti React, Tailwind, Lucide, dsj).
4. Buat sebuah file bernama `.env` di luar (*root path*) dan isi menggunakan API Key OpenAI yang aktif:
   ```env
   VITE_OPENAI_API_KEY=sk-proj-xxxxxxxx...
   ```
5. Ketik perintah: `npm run dev` untuk menyalakan server lokal secara otomatis (*Hot Reload*).
6. Akses `http://localhost:3000` di web browser kesayanganmu.

*(NB: Jika terjadi permasalahan saat kamu menambahkan API Key, pastikan kamu telah merestart server / menekan ulang* `npm run dev`*)*.

---
Dikembangkan dalam semangat meningkatkan kesadaran keamanan data dan etika digital masyarakat sejak dini. Stay Safe! 🌐✨
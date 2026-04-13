@echo off
echo ==========================================
echo    MENJALANKAN SIAGASIBER (FULLSTACK)
echo ==========================================
echo.

:: Menjalankan Backend di window baru
echo [1/2] Menjalankan Backend (Dapur)...
start cmd /k "cd server && node index.js"

:: Menjalankan Frontend di window ini
echo [2/2] Menjalankan Frontend (Halaman Depan)...
echo Tunggu sebentar, aplikasi akan siap di http://localhost:3000
npm run dev

pause

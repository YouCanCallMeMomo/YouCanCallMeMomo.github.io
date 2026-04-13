# 🧬 Materi Persiapan UTS Biologi Komputasi

## Ketentuan Ujian
- **Sifat**: Tutup Buku (Close Book), Tanpa Catatan (Close Notes)
- **Alat Bantu**: Tanpa Kalkulator (No Calculator)

---

## 1. Dogma Sentral Biologi Molekuler & Mutasi

### A. Untai Pengode (Coding Strand) & Untai Cetakan (Template Strand)
DNA memiliki dua untai yang anti-paralel dan saling komplementer.

- **Untai Cetakan (Template Strand / Antisense strand)**: Untai DNA yang bertindak sebagai **cetakan** bagi enzim RNA polimerase selama proses transkripsi. Untai ini dibaca dari arah 3' ke 5', sehingga menghasilkan mRNA dengan arah 5' ke 3'.
- **Untai Pengode (Coding Strand / Sense strand)**: Untai DNA pasangan dari untai cetakan. Untai ini **tidak** digunakan sebagai cetakan, namun arah (5' ke 3') dan urutan nukleotidanya **sama persis** dengan mRNA yang dihasilkan (dengan pengecualian T pada DNA diganti menjadi U pada mRNA).

### B. Transkripsi & Translasi
- **Transkripsi (Transcription)**: Proses menyalin informasi genetik dari DNA menjadi mRNA.
  - Lokasi: Nukleus (inti sel, pada organisme eukariotik).
  - Enzim utama: RNA Polimerase.
  - Basa Nitrogen RNA: Adenin (A), Urasil (U), Sitosin (C), Guanin (G). *(A berpasangan dengan U).*
- **Translasi (Translation)**: Proses penerjemahan urutan nukleotida mRNA menjadi rangkaian asam amino pembentuk protein.
  - Lokasi: Ribosom (di sitoplasma).
  - **Kodon**: Urutan 3 nukleotida (triplet) pada mRNA yang menyandikan satu asam amino spesifik. Terdapat kodon mulai/start (AUG) dan kodon berhenti/stop (UAA, UAG, UGA).
  - **tRNA (Transfer RNA)**: Molekul pembawa asam amino yang memiliki antikodon, yang akan berpasangan dengan kodon pada mRNA.

### C. Jenis & Efek Mutasi
Mutasi adalah perubahan pada urutan nukleotida DNA. Jenis-jenis mutasi gen meliputi:
- **Mutasi Titik (Point Mutation / Substitusi)**: Penggantian satu basa nukleotida dengan basa lain.
  - **Mutasi Diam (Silent Mutation)**: Mutasi substitusi yang **tidak mengubah** urutan asam amino karena adanya degenerasi kode genetik (beberapa kodon berbeda bisa menyandikan asam amino yang sama). *Efek: Tidak ada perubahan fungsi protein.*
  - **Mutasi Salah Arti (Missense Mutation)**: Mutasi substitusi yang menyebabkan **perubahan satu asam amino** pada protein. *Efek: Dapat mengubah bentuk/struktur protein, contohnya kondisi penyakit Anemia Sel Sabit.*
  - **Mutasi Tanpa Arti (Nonsense Mutation)**: Mutasi substitusi yang mengubah kodon normal menjadi **kodon stop**. *Efek: Sintesis protein berhenti prematur, menghasilkan protein terpotong pendek yang tidak berfungsi.*
- **Mutasi Pergeseran Kerangka (Frameshift Mutation / Insersi maupun Delesi)**: Penambahan atau pengurangan satu atau beberapa basa nukleotida (yang bukan kelipatan tiga).
  - *Efek:* Menyebabkan pergeseran kerangka baca (*reading frame*) pada mesin ribosom. Semua asam amino memanjang lurus setelah titik mutasi akan salah diterjemahkan, sangat merusak dan menghasilkan protein non-fungsional.

---

## 2. Ekspresi Gen Dasar & Pemrosesan RNA

### A. Ekspresi Gen Dasar
Ekspresi Gen merupakan instruksi cetak biru kehidupan dalam sel, yakni proses di mana informasi dari gen secara nyata digunakan dalam sintesis produk akhir (seperti selulosa protein alat gerak atau RNA non-coding penyusunan struktur jaringan). Proses esensial mencakup Transkripsi dan Translasi.

### B. Penyambungan RNA (RNA Splicing: Ekson & Intron)
Pada eukariota (sel berinti kompleks), mRNA cetakan orisinil hasil transkripsi (dijuluki pre-mRNA) mengandung porsi gen yang cacat/campuran ekson serta intron. Untuk melahirkan mRNA yang siap diekspor ke ribosom, pre-mRNA harus diringkas/dimodifikasi.
- **Ekson (Exon / Expressed sequences)**: Bagian fragmen gen yang mutlak mengkodekan asam amino penyusun protein final.
- **Intron (Intervening sequences)**: Bagian DNA mati / kosong yang _tidak_ mengkode protein dan terletak menempat rongga/menyela di antara ekson-ekson yang beririsan tersebut.
- **Penyambungan RNA (RNA Splicing)**: Proses kimiawi pemotongan membuang baris intron dan serangkaian jahitan sambungan antar ekson.
  - Mesin fungsional pengkaryanya dinamai kompleks padat **Spliceosome**.
  - **Penyambungan Alternatif (Alternative Splicing)**: Sebuah misteri krusial biologi di mana satu untaian peninggalan pre-mRNA identik dapat digunting / disambung secara acak bervariasi susunan tata letak rutenya. Merestuinya dalam kemampuan memproduksi ratusan derivatif protein jenis berbeda bermodalkan sel gen awal yang sama.

---

## 3. Landasan Bioinformatika (Bioinformatics)

Bionformatika lahir dari pemanfaatan teknologi super komputer demi merekam rakyasa biologi masif. 

### A. Basis Data Biologis (Biological Database : NCBI, GenBank)
- **Basis Data Biologis (Biological Database)**: Penyediaan online tempat ribuan cendekiawan dunia menitipkan dan mengais tumpukan bank DNA, RNA turunan virus, rantai protein sel primitif, sampai temuan makalah genetika yang ditata layaknya pustaka universal komputasi mutakhir.
- **NCBI (National Center for Biotechnology Information)**: Institusi federal pilar milik negara Amerika Serikat (berstatus otoriter global) penyokong perawatan komprehensif, desain simulasi biokimia digital, dan menyediakan arsitektur publik pemegang kendali server basis data utama.
- **GenBank**: Ruang sub-database esensial yang dikelola birokratis oleh NCBI bagi seluruh setoran sampel urutan asam nukleat global. Peneliti global bakal dikucuri identitas nomor sidik / pertinggal lisensi universal dengan penyebutan khusus yakni: **Nomor Aksesi (Accession Number)**.

### B. Aplikasi Dasar Bioteknologi
- **Pensejajaran Sekuens Gen & Metrik Kesamaan (Sequence Alignment)**: Praktik pemrosesan menggunakan mesin **BLAST** (*Basic Local Alignment Search Tool*) untuk menyodorkan untaian pita gen misteri yang ada ditangan kita demi membongkar rasio akurasi identitasnya selaras temuan wabah patogen mendunia.
- **Pendesainan Primer PCR (Primer Design)**: Usaha simulasi laboratorium biologi molekuler secara virtual, menggunakan bantuan komputasi digital mensimulasikan jepitan buatan tiruan asam nukleat pembungkus target ujung sel (primer) DNA, mempermudah mesin amplifikasi perbanyak sel (PCR).
- **Analisis Filogenetik (Phylogenetics)**: Kalkulasi rekam jejak penyebaran genetik ribuan silang famili demi menganalisa divergensi evolusional pergeseran DNA suatu makhluk dengan moyang leluhurnya dan dituangkan berbentuk kanvas visual diagram interaksi percabangan layaknya skema Pohon Keluarga evolusi spesies (Phylogenetic Tree).

---

## 4. Studi Kasus Bioinformatika Terapan (Case Bioinformatics)

**Skenario Ujian Tengah Semester:** Investigasi Komputasi Wabah Patogenik Mutan.

**Kondisi Lingkungan:**
Suatu malam yang parah, para sapi dan domba lokal terserang bakteri patogen masal misterius peredam pasokan ternak. Analisis laboratorium tuntas mengekstraksi material DNA dari biang virus wabah dan mentranslasikannya ke kode digital komputerisasi di pangkalan operasi riset.

**Alur Prosedur Eksekusi (Bioinformatics Workflow):**
1. **Validasi Modus Basis Data (Pencarian NCBI BLAST)**: Peneliti meninjau pita teks rentetan huruf purin & pirimidin di komputer, merujukkannya melalui mesin algoritma teruji BLAST untuk berselancar mendeteksi data purba **GenBank**. Dua faktor acuan penilaiannya bertumpu pada **Persentase Identitas (Identity Percentage)**  (menakar probabilitas kesamaan persis seperti kemiripan mutlak gen 95% ke *Coronaviridae* misalnya) serta skala minim galat ukur bernama **E-Value**.
2. **Kalkulasi Titik Mulai Pembacaan Translasi / Untai Pengode (Coding Strand Parameter)**: Penguraian perangkat lunak (software decryption decoding) secara cerdas melacak koordinasi tepat **Kodon Mulai / Start (AUG)** sampai **Kodon Berhenti**, yang diisolasi dalam bentangan Kerangka Baca Terbuka (*Open Reading Frame/ORF*) agar sistem operasi komputer mendedikasikannya mentransformasikan nukleotida semu ke dalam prototipe prediksi model asam amino terstruktur.
3. **Penyidikan Deteksi Mutasi Nukleotida Sentral**: Pembedahan data pita hasil isolasi hari ini diperbandingkan dengan jejak rekaman pita patogen flu peternakan puluhan tahun silang. Komputer membunyikan alarm kelaziman perbedaan satu nukleotida (T ke S). Melalui kajian *Mutasi Substitusi Tipe Salah Arti (Missense Mutation)*, pakar mengamati efek deformasi ekstrem reseptor ekuitas ikatan antar sel penyidik tubuh yang kini malah lumpuh dipermainkan oleh wujud asam amino Threonine adaptasi virus wabah.
4. **Analisis Pembajakan Mesin Penyambungan (Alternative RNA Splicing)**: Apabila genetik bakteri yang dibaca pada layar perangkat keras amat masif dan panjang tapi hasil akhirnya begitu padat, perangkat bioinformatika akan melaporkan penemuan janggal dari kemampuan parasit luar patogen meretas sarana eksisi / buang elemen *Intron* dari sistem pernapasan sel target agar mencetak kloning protein gen cacat yang terus menipu antibodi host korbannya di setiap sirkulasi infeksi sekunder.

*Pesan untuk rekan-rekan menjelang UTS:* Kuasai materi transisi sistem translasi dogma biologi, ingat padanan istilah bahasa Indonesianya, ketahui detail tipe mutasi pergeseran dan titik substitusi mematikan (jangan tertukar mutasi salah arti dengan diam), tata letak algoritma NCBI & BLAST di lingkungan basis data biokomputasi dunia, dan tetap rileks membaca petunjuk alur tabel translasi pengkodean basa mRna di lembaran kalkulasi ujian nantinya. Semangat berlatih!

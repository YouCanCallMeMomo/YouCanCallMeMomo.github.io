// File ini menampung total 600 pertanyaan seputar Cyber Security
// Mode didukung: 'general', 'forensic', 'sqli'.
import { Question } from '../types';

export const QUIZ_QUESTIONS_BANK: Question[] = [
  {
    "questionID": "q1",
    "questionText": "Apa nama konsep membatasi akses sekecil mungkin agar user hanya dapat melakukan tugasnya (tidak lebih)?",
    "options": [
      "Defense in Depth",
      "Zero Trust",
      "Segregation of Duties",
      "Principle of Least Privilege"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Jawaban tepat adalah Principle of Least Privilege.",
    "category": "general"
  },
  {
    "questionID": "q2",
    "questionText": "Fungsi utama dari Hashing (seperti SHA-256) dalam CIA Triad adalah untuk menjaga...",
    "options": [
      "Integrity (Integritas)",
      "Availability (Ketersediaan)",
      "Confidentiality (Kerahasiaan)",
      "Authentication (Otentikasi)"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Jawaban tepat adalah Integrity (Integritas).",
    "category": "general"
  },
  {
    "questionID": "q3",
    "questionText": "Jenis malware yang mengenkripsi data korban dan meminta uang tebusan adalah...",
    "options": [
      "Worm",
      "Spyware",
      "Ransomware",
      "Adware"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Jawaban tepat adalah Ransomware.",
    "category": "general"
  },
  {
    "questionID": "q4",
    "questionText": "Serangan membanjiri server dengan trafik palsu hingga down disebut...",
    "options": [
      "Phishing",
      "SQL Injection",
      "Man In The Middle",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Jawaban tepat adalah DDoS.",
    "category": "general"
  },
  {
    "questionID": "q5",
    "questionText": "Kemarin, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_5]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q6",
    "questionText": "Baru-baru ini, seorang hacker mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_6]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q7",
    "questionText": "Baru-baru ini, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_7]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q8",
    "questionText": "Dalam skenario terkini, seorang script kiddie mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_8]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q9",
    "questionText": "Dalam skenario terkini, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_9]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q10",
    "questionText": "Dalam skenario terkini, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_10]",
    "options": [
      "Phishing",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q11",
    "questionText": "Kemarin, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_11]",
    "options": [
      "Phishing",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q12",
    "questionText": "Dalam skenario terkini, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_12]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q13",
    "questionText": "Sepanjang tahun ini, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_13]",
    "options": [
      "DDoS",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q14",
    "questionText": "Sepanjang tahun ini, penyerang memasukkan perintah database ke form login website. [Generate_Gen_14]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "DDoS",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q15",
    "questionText": "Baru-baru ini, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_15]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q16",
    "questionText": "Kemarin, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_16]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q17",
    "questionText": "Dalam skenario terkini, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_17]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q18",
    "questionText": "Kemarin, aktor ancaman apt mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_18]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q19",
    "questionText": "Baru-baru ini, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_19]",
    "options": [
      "DDoS",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q20",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_20]",
    "options": [
      "Phishing",
      "SQL Injection",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q21",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_21]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q22",
    "questionText": "Sepanjang tahun ini, seorang pentester mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_22]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q23",
    "questionText": "Dalam skenario terkini, penyerang memasukkan perintah database ke form login website. [Generate_Gen_23]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q24",
    "questionText": "Kemarin, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_24]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q25",
    "questionText": "Baru-baru ini, penyerang mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_25]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q26",
    "questionText": "Baru-baru ini, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_26]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q27",
    "questionText": "Baru-baru ini, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_27]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q28",
    "questionText": "Dalam skenario terkini, seorang pentester mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_28]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q29",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_29]",
    "options": [
      "DDoS",
      "Phishing",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q30",
    "questionText": "Dalam skenario terkini, seorang pentester memasukkan perintah database ke form login website. [Generate_Gen_30]",
    "options": [
      "Phishing",
      "SQL Injection",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q31",
    "questionText": "Sepanjang tahun ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_31]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q32",
    "questionText": "Dalam skenario terkini, seorang script kiddie mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_32]",
    "options": [
      "Phishing",
      "SQL Injection",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q33",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_33]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "DDoS",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q34",
    "questionText": "Dalam skenario terkini, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_34]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q35",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_35]",
    "options": [
      "DDoS",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q36",
    "questionText": "Sepanjang tahun ini, seorang pentester mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_36]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q37",
    "questionText": "Baru-baru ini, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_37]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q38",
    "questionText": "Sepanjang tahun ini, seorang hacker mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_38]",
    "options": [
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q39",
    "questionText": "Baru-baru ini, seorang pentester memasukkan perintah database ke form login website. [Generate_Gen_39]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q40",
    "questionText": "Kemarin, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_40]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q41",
    "questionText": "Kemarin, seorang pentester mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_41]",
    "options": [
      "Phishing",
      "SQL Injection",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q42",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_42]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q43",
    "questionText": "Sepanjang tahun ini, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_43]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q44",
    "questionText": "Baru-baru ini, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_44]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q45",
    "questionText": "Kemarin, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_45]",
    "options": [
      "Phishing",
      "SQL Injection",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q46",
    "questionText": "Baru-baru ini, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_46]",
    "options": [
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q47",
    "questionText": "Dalam skenario terkini, seorang hacker mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_47]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q48",
    "questionText": "Baru-baru ini, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_48]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q49",
    "questionText": "Baru-baru ini, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_49]",
    "options": [
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q50",
    "questionText": "Kemarin, seorang pentester mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_50]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q51",
    "questionText": "Baru-baru ini, seorang hacker mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_51]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q52",
    "questionText": "Dalam skenario terkini, seorang pentester mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_52]",
    "options": [
      "SQL Injection",
      "Phishing",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q53",
    "questionText": "Baru-baru ini, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_53]",
    "options": [
      "SQL Injection",
      "DDoS",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q54",
    "questionText": "Dalam skenario terkini, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_54]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q55",
    "questionText": "Baru-baru ini, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_55]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q56",
    "questionText": "Sepanjang tahun ini, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_56]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q57",
    "questionText": "Dalam skenario terkini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_57]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q58",
    "questionText": "Sepanjang tahun ini, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_58]",
    "options": [
      "SQL Injection",
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q59",
    "questionText": "Kemarin, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_59]",
    "options": [
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q60",
    "questionText": "Sepanjang tahun ini, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_60]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "DDoS",
      "Phishing"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q61",
    "questionText": "Dalam skenario terkini, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_61]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q62",
    "questionText": "Dalam skenario terkini, seorang pentester mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_62]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q63",
    "questionText": "Dalam skenario terkini, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_63]",
    "options": [
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q64",
    "questionText": "Baru-baru ini, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_64]",
    "options": [
      "SQL Injection",
      "DDoS",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q65",
    "questionText": "Sepanjang tahun ini, seorang script kiddie mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_65]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q66",
    "questionText": "Kemarin, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_66]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q67",
    "questionText": "Sepanjang tahun ini, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_67]",
    "options": [
      "Phishing",
      "SQL Injection",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q68",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_68]",
    "options": [
      "SQL Injection",
      "DDoS",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q69",
    "questionText": "Sepanjang tahun ini, seorang pentester memasukkan perintah database ke form login website. [Generate_Gen_69]",
    "options": [
      "Phishing",
      "SQL Injection",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q70",
    "questionText": "Baru-baru ini, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_70]",
    "options": [
      "SQL Injection",
      "DDoS",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q71",
    "questionText": "Kemarin, aktor ancaman apt mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_71]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q72",
    "questionText": "Sepanjang tahun ini, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_72]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q73",
    "questionText": "Sepanjang tahun ini, seorang script kiddie mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_73]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q74",
    "questionText": "Kemarin, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_74]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q75",
    "questionText": "Dalam skenario terkini, seorang script kiddie mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_75]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q76",
    "questionText": "Dalam skenario terkini, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_76]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q77",
    "questionText": "Kemarin, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_77]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q78",
    "questionText": "Baru-baru ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_78]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q79",
    "questionText": "Dalam skenario terkini, seorang pentester mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_79]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q80",
    "questionText": "Baru-baru ini, seorang script kiddie mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_80]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q81",
    "questionText": "Kemarin, penyerang memasukkan perintah database ke form login website. [Generate_Gen_81]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q82",
    "questionText": "Dalam skenario terkini, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_82]",
    "options": [
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q83",
    "questionText": "Sepanjang tahun ini, penyerang mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_83]",
    "options": [
      "DDoS",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q84",
    "questionText": "Dalam skenario terkini, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_84]",
    "options": [
      "SQL Injection",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q85",
    "questionText": "Dalam skenario terkini, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_85]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q86",
    "questionText": "Kemarin, seorang pentester memasukkan perintah database ke form login website. [Generate_Gen_86]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q87",
    "questionText": "Kemarin, seorang script kiddie mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_87]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q88",
    "questionText": "Kemarin, seorang hacker mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_88]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q89",
    "questionText": "Sepanjang tahun ini, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_89]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q90",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_90]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q91",
    "questionText": "Baru-baru ini, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_91]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q92",
    "questionText": "Kemarin, seorang script kiddie mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_92]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q93",
    "questionText": "Dalam skenario terkini, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_93]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q94",
    "questionText": "Kemarin, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_94]",
    "options": [
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q95",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_95]",
    "options": [
      "Phishing",
      "SQL Injection",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q96",
    "questionText": "Dalam skenario terkini, seorang script kiddie mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_96]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q97",
    "questionText": "Dalam skenario terkini, penyerang mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_97]",
    "options": [
      "Phishing",
      "DDoS",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q98",
    "questionText": "Dalam skenario terkini, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_98]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q99",
    "questionText": "Baru-baru ini, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_99]",
    "options": [
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q100",
    "questionText": "Kemarin, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_100]",
    "options": [
      "SQL Injection",
      "DDoS",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q101",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_101]",
    "options": [
      "SQL Injection",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q102",
    "questionText": "Kemarin, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_102]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q103",
    "questionText": "Sepanjang tahun ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_103]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q104",
    "questionText": "Baru-baru ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_104]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q105",
    "questionText": "Dalam skenario terkini, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_105]",
    "options": [
      "DDoS",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q106",
    "questionText": "Kemarin, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_106]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q107",
    "questionText": "Baru-baru ini, seorang pentester mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_107]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q108",
    "questionText": "Kemarin, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_108]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q109",
    "questionText": "Sepanjang tahun ini, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_109]",
    "options": [
      "Phishing",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q110",
    "questionText": "Sepanjang tahun ini, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_110]",
    "options": [
      "SQL Injection",
      "DDoS",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q111",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_111]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q112",
    "questionText": "Kemarin, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_112]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q113",
    "questionText": "Dalam skenario terkini, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_113]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q114",
    "questionText": "Baru-baru ini, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_114]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q115",
    "questionText": "Kemarin, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_115]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q116",
    "questionText": "Dalam skenario terkini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_116]",
    "options": [
      "Phishing",
      "SQL Injection",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q117",
    "questionText": "Sepanjang tahun ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_117]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q118",
    "questionText": "Dalam skenario terkini, seorang pentester mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_118]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q119",
    "questionText": "Kemarin, seorang pentester mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_119]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q120",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_120]",
    "options": [
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q121",
    "questionText": "Kemarin, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_121]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q122",
    "questionText": "Kemarin, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_122]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q123",
    "questionText": "Baru-baru ini, penyerang memasukkan perintah database ke form login website. [Generate_Gen_123]",
    "options": [
      "Phishing",
      "SQL Injection",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q124",
    "questionText": "Sepanjang tahun ini, seorang pentester mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_124]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q125",
    "questionText": "Kemarin, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_125]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q126",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_126]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q127",
    "questionText": "Baru-baru ini, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_127]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q128",
    "questionText": "Kemarin, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_128]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q129",
    "questionText": "Kemarin, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_129]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q130",
    "questionText": "Kemarin, seorang pentester mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_130]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q131",
    "questionText": "Kemarin, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_131]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q132",
    "questionText": "Baru-baru ini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_132]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q133",
    "questionText": "Baru-baru ini, seorang hacker mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_133]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q134",
    "questionText": "Kemarin, seorang pentester mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_134]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q135",
    "questionText": "Kemarin, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_135]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q136",
    "questionText": "Baru-baru ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_136]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q137",
    "questionText": "Kemarin, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_137]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q138",
    "questionText": "Kemarin, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_138]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q139",
    "questionText": "Dalam skenario terkini, penyerang memasukkan perintah database ke form login website. [Generate_Gen_139]",
    "options": [
      "DDoS",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q140",
    "questionText": "Kemarin, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_140]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q141",
    "questionText": "Kemarin, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_141]",
    "options": [
      "DDoS",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q142",
    "questionText": "Dalam skenario terkini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_142]",
    "options": [
      "Phishing",
      "SQL Injection",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q143",
    "questionText": "Baru-baru ini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_143]",
    "options": [
      "SQL Injection",
      "DDoS",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q144",
    "questionText": "Baru-baru ini, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_144]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q145",
    "questionText": "Baru-baru ini, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_145]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q146",
    "questionText": "Dalam skenario terkini, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_146]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q147",
    "questionText": "Kemarin, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_147]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q148",
    "questionText": "Baru-baru ini, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_148]",
    "options": [
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q149",
    "questionText": "Dalam skenario terkini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_149]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q150",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_150]",
    "options": [
      "DDoS",
      "Phishing",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q151",
    "questionText": "Sepanjang tahun ini, penyerang mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_151]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q152",
    "questionText": "Dalam skenario terkini, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_152]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q153",
    "questionText": "Kemarin, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_153]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q154",
    "questionText": "Baru-baru ini, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_154]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q155",
    "questionText": "Dalam skenario terkini, seorang hacker mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_155]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q156",
    "questionText": "Baru-baru ini, seorang pentester mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_156]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q157",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_157]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q158",
    "questionText": "Baru-baru ini, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_158]",
    "options": [
      "SQL Injection",
      "DDoS",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q159",
    "questionText": "Sepanjang tahun ini, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_159]",
    "options": [
      "Phishing",
      "DDoS",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q160",
    "questionText": "Kemarin, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_160]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q161",
    "questionText": "Baru-baru ini, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_161]",
    "options": [
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q162",
    "questionText": "Sepanjang tahun ini, seorang pentester mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_162]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q163",
    "questionText": "Baru-baru ini, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_163]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q164",
    "questionText": "Dalam skenario terkini, seorang pentester memasukkan perintah database ke form login website. [Generate_Gen_164]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q165",
    "questionText": "Sepanjang tahun ini, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_165]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q166",
    "questionText": "Kemarin, seorang hacker mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_166]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q167",
    "questionText": "Baru-baru ini, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_167]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q168",
    "questionText": "Sepanjang tahun ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_168]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q169",
    "questionText": "Baru-baru ini, seorang pentester mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_169]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q170",
    "questionText": "Baru-baru ini, seorang pentester mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_170]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q171",
    "questionText": "Sepanjang tahun ini, seorang hacker mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_171]",
    "options": [
      "Phishing",
      "DDoS",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q172",
    "questionText": "Kemarin, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_172]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q173",
    "questionText": "Baru-baru ini, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_173]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q174",
    "questionText": "Kemarin, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_174]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q175",
    "questionText": "Baru-baru ini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_175]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q176",
    "questionText": "Sepanjang tahun ini, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_176]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q177",
    "questionText": "Kemarin, seorang hacker mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_177]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q178",
    "questionText": "Kemarin, seorang script kiddie mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_178]",
    "options": [
      "SQL Injection",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q179",
    "questionText": "Dalam skenario terkini, seorang pentester memasukkan perintah database ke form login website. [Generate_Gen_179]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q180",
    "questionText": "Baru-baru ini, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_180]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q181",
    "questionText": "Sepanjang tahun ini, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_181]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q182",
    "questionText": "Kemarin, seorang script kiddie mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_182]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q183",
    "questionText": "Kemarin, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_183]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q184",
    "questionText": "Sepanjang tahun ini, seorang script kiddie mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_184]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q185",
    "questionText": "Baru-baru ini, penyerang mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_185]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "DDoS",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q186",
    "questionText": "Kemarin, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_186]",
    "options": [
      "DDoS",
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q187",
    "questionText": "Kemarin, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_187]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q188",
    "questionText": "Sepanjang tahun ini, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_188]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q189",
    "questionText": "Sepanjang tahun ini, seorang pentester memasukkan perintah database ke form login website. [Generate_Gen_189]",
    "options": [
      "SQL Injection",
      "DDoS",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q190",
    "questionText": "Kemarin, seorang script kiddie mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_190]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q191",
    "questionText": "Dalam skenario terkini, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_191]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q192",
    "questionText": "Dalam skenario terkini, penyerang memasukkan perintah database ke form login website. [Generate_Gen_192]",
    "options": [
      "Phishing",
      "SQL Injection",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q193",
    "questionText": "Baru-baru ini, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_193]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q194",
    "questionText": "Sepanjang tahun ini, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_194]",
    "options": [
      "Phishing",
      "DDoS",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q195",
    "questionText": "Dalam skenario terkini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_195]",
    "options": [
      "Phishing",
      "DDoS",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q196",
    "questionText": "Kemarin, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_196]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q197",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_197]",
    "options": [
      "Phishing",
      "SQL Injection",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q198",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_198]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q199",
    "questionText": "Baru-baru ini, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_199]",
    "options": [
      "DDoS",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q200",
    "questionText": "Dalam skenario terkini, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_200]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q201",
    "questionText": "Sepanjang tahun ini, penyerang memasukkan perintah database ke form login website. [Generate_Gen_201]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q202",
    "questionText": "Baru-baru ini, seorang pentester mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_202]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q203",
    "questionText": "Kemarin, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_203]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q204",
    "questionText": "Dalam skenario terkini, seorang script kiddie mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_204]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q205",
    "questionText": "Dalam skenario terkini, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_205]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q206",
    "questionText": "Kemarin, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_206]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q207",
    "questionText": "Kemarin, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_207]",
    "options": [
      "DDoS",
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q208",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_208]",
    "options": [
      "Phishing",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q209",
    "questionText": "Baru-baru ini, seorang script kiddie mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_209]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q210",
    "questionText": "Baru-baru ini, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_210]",
    "options": [
      "SQL Injection",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q211",
    "questionText": "Kemarin, penyerang memasukkan perintah database ke form login website. [Generate_Gen_211]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q212",
    "questionText": "Kemarin, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_212]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q213",
    "questionText": "Sepanjang tahun ini, seorang pentester mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_213]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "DDoS",
      "Phishing"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q214",
    "questionText": "Baru-baru ini, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_214]",
    "options": [
      "Phishing",
      "SQL Injection",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q215",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_215]",
    "options": [
      "SQL Injection",
      "DDoS",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q216",
    "questionText": "Sepanjang tahun ini, penyerang memasukkan perintah database ke form login website. [Generate_Gen_216]",
    "options": [
      "SQL Injection",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q217",
    "questionText": "Baru-baru ini, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_217]",
    "options": [
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q218",
    "questionText": "Baru-baru ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_218]",
    "options": [
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q219",
    "questionText": "Kemarin, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_219]",
    "options": [
      "Phishing",
      "DDoS",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q220",
    "questionText": "Sepanjang tahun ini, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_220]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q221",
    "questionText": "Kemarin, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_221]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q222",
    "questionText": "Baru-baru ini, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_222]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q223",
    "questionText": "Kemarin, seorang pentester mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_223]",
    "options": [
      "SQL Injection",
      "Phishing",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q224",
    "questionText": "Sepanjang tahun ini, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_224]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q225",
    "questionText": "Baru-baru ini, seorang pentester mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_225]",
    "options": [
      "DDoS",
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q226",
    "questionText": "Baru-baru ini, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_226]",
    "options": [
      "DDoS",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q227",
    "questionText": "Baru-baru ini, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_227]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q228",
    "questionText": "Dalam skenario terkini, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_228]",
    "options": [
      "Phishing",
      "DDoS",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q229",
    "questionText": "Kemarin, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_229]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q230",
    "questionText": "Baru-baru ini, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_230]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q231",
    "questionText": "Sepanjang tahun ini, seorang pentester mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_231]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q232",
    "questionText": "Sepanjang tahun ini, seorang hacker mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_232]",
    "options": [
      "Phishing",
      "DDoS",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q233",
    "questionText": "Dalam skenario terkini, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_233]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q234",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_234]",
    "options": [
      "DDoS",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q235",
    "questionText": "Dalam skenario terkini, seorang hacker mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_235]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q236",
    "questionText": "Kemarin, penyerang memasukkan perintah database ke form login website. [Generate_Gen_236]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q237",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_237]",
    "options": [
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q238",
    "questionText": "Sepanjang tahun ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_238]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q239",
    "questionText": "Dalam skenario terkini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_239]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q240",
    "questionText": "Baru-baru ini, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_240]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q241",
    "questionText": "Dalam skenario terkini, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_241]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q242",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_242]",
    "options": [
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q243",
    "questionText": "Dalam skenario terkini, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_243]",
    "options": [
      "Phishing",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q244",
    "questionText": "Baru-baru ini, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_244]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q245",
    "questionText": "Sepanjang tahun ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_245]",
    "options": [
      "SQL Injection",
      "DDoS",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q246",
    "questionText": "Kemarin, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_246]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q247",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_247]",
    "options": [
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q248",
    "questionText": "Sepanjang tahun ini, penyerang mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_248]",
    "options": [
      "DDoS",
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q249",
    "questionText": "Baru-baru ini, seorang script kiddie mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_249]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q250",
    "questionText": "Kemarin, seorang script kiddie mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_250]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q251",
    "questionText": "Kemarin, seorang script kiddie mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_251]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q252",
    "questionText": "Kemarin, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_252]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q253",
    "questionText": "Dalam skenario terkini, penyerang mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_253]",
    "options": [
      "Phishing",
      "SQL Injection",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q254",
    "questionText": "Kemarin, seorang pentester mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_254]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q255",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_255]",
    "options": [
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q256",
    "questionText": "Sepanjang tahun ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_256]",
    "options": [
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q257",
    "questionText": "Baru-baru ini, seorang pentester mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_257]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q258",
    "questionText": "Kemarin, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_258]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "DDoS",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q259",
    "questionText": "Kemarin, penyerang memasukkan perintah database ke form login website. [Generate_Gen_259]",
    "options": [
      "Phishing",
      "SQL Injection",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q260",
    "questionText": "Sepanjang tahun ini, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_260]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q261",
    "questionText": "Baru-baru ini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_261]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q262",
    "questionText": "Baru-baru ini, seorang pentester memasukkan perintah database ke form login website. [Generate_Gen_262]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q263",
    "questionText": "Sepanjang tahun ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_263]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q264",
    "questionText": "Kemarin, seorang pentester mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_264]",
    "options": [
      "Phishing",
      "SQL Injection",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q265",
    "questionText": "Baru-baru ini, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_265]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q266",
    "questionText": "Baru-baru ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_266]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q267",
    "questionText": "Baru-baru ini, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_267]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q268",
    "questionText": "Kemarin, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_268]",
    "options": [
      "DDoS",
      "Phishing",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q269",
    "questionText": "Sepanjang tahun ini, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_269]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q270",
    "questionText": "Baru-baru ini, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_270]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q271",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_271]",
    "options": [
      "Phishing",
      "DDoS",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q272",
    "questionText": "Dalam skenario terkini, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_272]",
    "options": [
      "Phishing",
      "DDoS",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q273",
    "questionText": "Kemarin, seorang pentester mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_273]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q274",
    "questionText": "Sepanjang tahun ini, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_274]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q275",
    "questionText": "Kemarin, seorang pentester mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_275]",
    "options": [
      "SQL Injection",
      "Phishing",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q276",
    "questionText": "Kemarin, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_276]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q277",
    "questionText": "Kemarin, seorang pentester memasukkan perintah database ke form login website. [Generate_Gen_277]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q278",
    "questionText": "Dalam skenario terkini, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_278]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q279",
    "questionText": "Kemarin, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_279]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q280",
    "questionText": "Sepanjang tahun ini, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_280]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q281",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_281]",
    "options": [
      "Phishing",
      "DDoS",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q282",
    "questionText": "Baru-baru ini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_282]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q283",
    "questionText": "Dalam skenario terkini, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_283]",
    "options": [
      "SQL Injection",
      "DDoS",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q284",
    "questionText": "Kemarin, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_284]",
    "options": [
      "DDoS",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q285",
    "questionText": "Kemarin, seorang script kiddie mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_285]",
    "options": [
      "DDoS",
      "Phishing",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q286",
    "questionText": "Baru-baru ini, penyerang memasukkan perintah database ke form login website. [Generate_Gen_286]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q287",
    "questionText": "Baru-baru ini, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_287]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q288",
    "questionText": "Dalam skenario terkini, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_288]",
    "options": [
      "DDoS",
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q289",
    "questionText": "Kemarin, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_289]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q290",
    "questionText": "Baru-baru ini, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_290]",
    "options": [
      "Phishing",
      "SQL Injection",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q291",
    "questionText": "Kemarin, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_291]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q292",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_292]",
    "options": [
      "Phishing",
      "DDoS",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q293",
    "questionText": "Baru-baru ini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_293]",
    "options": [
      "DDoS",
      "Phishing",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q294",
    "questionText": "Kemarin, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_294]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q295",
    "questionText": "Baru-baru ini, aktor ancaman apt mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_295]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q296",
    "questionText": "Sepanjang tahun ini, seorang script kiddie mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_296]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q297",
    "questionText": "Kemarin, seorang script kiddie mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_297]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q298",
    "questionText": "Baru-baru ini, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_298]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q299",
    "questionText": "Baru-baru ini, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_299]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q300",
    "questionText": "Dalam skenario terkini, seorang script kiddie mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_300]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q301",
    "questionText": "Baru-baru ini, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_301]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q302",
    "questionText": "Kemarin, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_302]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q303",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_303]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q304",
    "questionText": "Baru-baru ini, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_304]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q305",
    "questionText": "Sepanjang tahun ini, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_305]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q306",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_306]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q307",
    "questionText": "Dalam skenario terkini, seorang pentester mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_307]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q308",
    "questionText": "Baru-baru ini, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_308]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q309",
    "questionText": "Sepanjang tahun ini, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_309]",
    "options": [
      "Phishing",
      "DDoS",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q310",
    "questionText": "Baru-baru ini, seorang pentester mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_310]",
    "options": [
      "DDoS",
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q311",
    "questionText": "Kemarin, penyerang mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_311]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q312",
    "questionText": "Kemarin, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_312]",
    "options": [
      "DDoS",
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q313",
    "questionText": "Dalam skenario terkini, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_313]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q314",
    "questionText": "Baru-baru ini, aktor ancaman apt mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_314]",
    "options": [
      "DDoS",
      "Phishing",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q315",
    "questionText": "Kemarin, seorang script kiddie mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_315]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q316",
    "questionText": "Baru-baru ini, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_316]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q317",
    "questionText": "Sepanjang tahun ini, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_317]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q318",
    "questionText": "Kemarin, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_318]",
    "options": [
      "SQL Injection",
      "Phishing",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q319",
    "questionText": "Kemarin, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_319]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q320",
    "questionText": "Kemarin, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_320]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q321",
    "questionText": "Kemarin, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_321]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q322",
    "questionText": "Kemarin, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_322]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q323",
    "questionText": "Baru-baru ini, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_323]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q324",
    "questionText": "Dalam skenario terkini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_324]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "DDoS",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q325",
    "questionText": "Kemarin, seorang hacker mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_325]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q326",
    "questionText": "Baru-baru ini, penyerang mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_326]",
    "options": [
      "SQL Injection",
      "Phishing",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q327",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_327]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q328",
    "questionText": "Baru-baru ini, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_328]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q329",
    "questionText": "Kemarin, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_329]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q330",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_330]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q331",
    "questionText": "Kemarin, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_331]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q332",
    "questionText": "Sepanjang tahun ini, seorang script kiddie mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_332]",
    "options": [
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q333",
    "questionText": "Kemarin, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_333]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q334",
    "questionText": "Baru-baru ini, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_334]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q335",
    "questionText": "Dalam skenario terkini, penyerang mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_335]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q336",
    "questionText": "Baru-baru ini, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_336]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q337",
    "questionText": "Baru-baru ini, seorang script kiddie mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_337]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q338",
    "questionText": "Baru-baru ini, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_338]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q339",
    "questionText": "Baru-baru ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_339]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q340",
    "questionText": "Dalam skenario terkini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_340]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q341",
    "questionText": "Kemarin, aktor ancaman apt mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_341]",
    "options": [
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q342",
    "questionText": "Sepanjang tahun ini, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_342]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q343",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_343]",
    "options": [
      "DDoS",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q344",
    "questionText": "Kemarin, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_344]",
    "options": [
      "DDoS",
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q345",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_345]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q346",
    "questionText": "Dalam skenario terkini, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_346]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q347",
    "questionText": "Baru-baru ini, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_347]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q348",
    "questionText": "Dalam skenario terkini, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_348]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q349",
    "questionText": "Dalam skenario terkini, penyerang mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_349]",
    "options": [
      "SQL Injection",
      "Phishing",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q350",
    "questionText": "Dalam skenario terkini, seorang pentester mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_350]",
    "options": [
      "SQL Injection",
      "Phishing",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q351",
    "questionText": "Sepanjang tahun ini, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_351]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q352",
    "questionText": "Baru-baru ini, seorang script kiddie mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_352]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q353",
    "questionText": "Baru-baru ini, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_353]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q354",
    "questionText": "Sepanjang tahun ini, seorang pentester mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_354]",
    "options": [
      "DDoS",
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q355",
    "questionText": "Kemarin, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_355]",
    "options": [
      "Phishing",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q356",
    "questionText": "Kemarin, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_356]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q357",
    "questionText": "Baru-baru ini, seorang pentester mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_357]",
    "options": [
      "DDoS",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q358",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_358]",
    "options": [
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q359",
    "questionText": "Dalam skenario terkini, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_359]",
    "options": [
      "SQL Injection",
      "DDoS",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q360",
    "questionText": "Baru-baru ini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_360]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q361",
    "questionText": "Kemarin, penyerang memasukkan perintah database ke form login website. [Generate_Gen_361]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q362",
    "questionText": "Baru-baru ini, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_362]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q363",
    "questionText": "Sepanjang tahun ini, seorang script kiddie mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_363]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q364",
    "questionText": "Sepanjang tahun ini, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_364]",
    "options": [
      "SQL Injection",
      "DDoS",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q365",
    "questionText": "Dalam skenario terkini, seorang script kiddie mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_365]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q366",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_366]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q367",
    "questionText": "Sepanjang tahun ini, seorang script kiddie mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_367]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q368",
    "questionText": "Dalam skenario terkini, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_368]",
    "options": [
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q369",
    "questionText": "Kemarin, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_369]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q370",
    "questionText": "Sepanjang tahun ini, seorang pentester mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_370]",
    "options": [
      "Phishing",
      "DDoS",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q371",
    "questionText": "Sepanjang tahun ini, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_371]",
    "options": [
      "SQL Injection",
      "DDoS",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q372",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_372]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q373",
    "questionText": "Kemarin, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_373]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q374",
    "questionText": "Baru-baru ini, seorang hacker mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_374]",
    "options": [
      "Phishing",
      "DDoS",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q375",
    "questionText": "Sepanjang tahun ini, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_375]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q376",
    "questionText": "Baru-baru ini, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_376]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q377",
    "questionText": "Baru-baru ini, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_377]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q378",
    "questionText": "Sepanjang tahun ini, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_378]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q379",
    "questionText": "Baru-baru ini, aktor ancaman apt mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_379]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q380",
    "questionText": "Dalam skenario terkini, penyerang memasukkan perintah database ke form login website. [Generate_Gen_380]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q381",
    "questionText": "Baru-baru ini, aktor ancaman apt mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_381]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q382",
    "questionText": "Kemarin, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_382]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q383",
    "questionText": "Sepanjang tahun ini, penyerang mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_383]",
    "options": [
      "DDoS",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q384",
    "questionText": "Dalam skenario terkini, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_384]",
    "options": [
      "DDoS",
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q385",
    "questionText": "Kemarin, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_385]",
    "options": [
      "Phishing",
      "DDoS",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q386",
    "questionText": "Sepanjang tahun ini, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_386]",
    "options": [
      "Phishing",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q387",
    "questionText": "Kemarin, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_387]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q388",
    "questionText": "Kemarin, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_388]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q389",
    "questionText": "Dalam skenario terkini, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_389]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q390",
    "questionText": "Baru-baru ini, seorang script kiddie mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_390]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q391",
    "questionText": "Kemarin, seorang script kiddie mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_391]",
    "options": [
      "Phishing",
      "SQL Injection",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q392",
    "questionText": "Kemarin, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_392]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q393",
    "questionText": "Kemarin, seorang pentester mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_393]",
    "options": [
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q394",
    "questionText": "Baru-baru ini, aktor ancaman apt mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_394]",
    "options": [
      "DDoS",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q395",
    "questionText": "Sepanjang tahun ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_395]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "DDoS",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q396",
    "questionText": "Sepanjang tahun ini, seorang script kiddie mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_396]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q397",
    "questionText": "Kemarin, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_397]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q398",
    "questionText": "Kemarin, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_398]",
    "options": [
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q399",
    "questionText": "Sepanjang tahun ini, seorang pentester mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_399]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q400",
    "questionText": "Baru-baru ini, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_400]",
    "options": [
      "DDoS",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q401",
    "questionText": "Baru-baru ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_401]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q402",
    "questionText": "Dalam skenario terkini, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_402]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q403",
    "questionText": "Baru-baru ini, aktor ancaman apt mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_403]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "DDoS",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q404",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_404]",
    "options": [
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q405",
    "questionText": "Sepanjang tahun ini, penyerang memasukkan perintah database ke form login website. [Generate_Gen_405]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q406",
    "questionText": "Sepanjang tahun ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_406]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q407",
    "questionText": "Baru-baru ini, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_407]",
    "options": [
      "DDoS",
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q408",
    "questionText": "Kemarin, seorang pentester mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_408]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q409",
    "questionText": "Dalam skenario terkini, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_409]",
    "options": [
      "Phishing",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q410",
    "questionText": "Dalam skenario terkini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_410]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q411",
    "questionText": "Sepanjang tahun ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_411]",
    "options": [
      "SQL Injection",
      "DDoS",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q412",
    "questionText": "Sepanjang tahun ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_412]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q413",
    "questionText": "Sepanjang tahun ini, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_413]",
    "options": [
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q414",
    "questionText": "Sepanjang tahun ini, penyerang memasukkan perintah database ke form login website. [Generate_Gen_414]",
    "options": [
      "SQL Injection",
      "DDoS",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q415",
    "questionText": "Kemarin, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_415]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q416",
    "questionText": "Dalam skenario terkini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_416]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q417",
    "questionText": "Baru-baru ini, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_417]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q418",
    "questionText": "Sepanjang tahun ini, seorang script kiddie mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_418]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q419",
    "questionText": "Kemarin, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_419]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q420",
    "questionText": "Baru-baru ini, penyerang memasukkan perintah database ke form login website. [Generate_Gen_420]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q421",
    "questionText": "Dalam skenario terkini, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_421]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q422",
    "questionText": "Sepanjang tahun ini, seorang hacker mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_422]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q423",
    "questionText": "Kemarin, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_423]",
    "options": [
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q424",
    "questionText": "Baru-baru ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_424]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q425",
    "questionText": "Sepanjang tahun ini, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_425]",
    "options": [
      "Phishing",
      "DDoS",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q426",
    "questionText": "Dalam skenario terkini, seorang pentester mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_426]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q427",
    "questionText": "Kemarin, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_427]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q428",
    "questionText": "Sepanjang tahun ini, seorang pentester memasukkan perintah database ke form login website. [Generate_Gen_428]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q429",
    "questionText": "Sepanjang tahun ini, seorang hacker mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_429]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q430",
    "questionText": "Baru-baru ini, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_430]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q431",
    "questionText": "Sepanjang tahun ini, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_431]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q432",
    "questionText": "Dalam skenario terkini, seorang script kiddie mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_432]",
    "options": [
      "SQL Injection",
      "Phishing",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q433",
    "questionText": "Kemarin, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_433]",
    "options": [
      "Ransomware Attack",
      "Phishing",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q434",
    "questionText": "Kemarin, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_434]",
    "options": [
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q435",
    "questionText": "Dalam skenario terkini, seorang pentester mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_435]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q436",
    "questionText": "Sepanjang tahun ini, seorang pentester mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_436]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q437",
    "questionText": "Dalam skenario terkini, seorang pentester mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_437]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q438",
    "questionText": "Dalam skenario terkini, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_438]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q439",
    "questionText": "Sepanjang tahun ini, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_439]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q440",
    "questionText": "Sepanjang tahun ini, penyerang mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_440]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q441",
    "questionText": "Dalam skenario terkini, seorang pentester mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_441]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "DDoS",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q442",
    "questionText": "Dalam skenario terkini, seorang pentester mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_442]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q443",
    "questionText": "Dalam skenario terkini, seorang hacker mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_443]",
    "options": [
      "Phishing",
      "SQL Injection",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q444",
    "questionText": "Dalam skenario terkini, seorang script kiddie mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_444]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q445",
    "questionText": "Baru-baru ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_445]",
    "options": [
      "Phishing",
      "SQL Injection",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q446",
    "questionText": "Kemarin, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_446]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q447",
    "questionText": "Kemarin, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_447]",
    "options": [
      "DDoS",
      "Phishing",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q448",
    "questionText": "Kemarin, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_448]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q449",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_449]",
    "options": [
      "Phishing",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q450",
    "questionText": "Baru-baru ini, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_450]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q451",
    "questionText": "Sepanjang tahun ini, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_451]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q452",
    "questionText": "Kemarin, seorang hacker memasukkan perintah database ke form login website. [Generate_Gen_452]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q453",
    "questionText": "Dalam skenario terkini, seorang script kiddie mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_453]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q454",
    "questionText": "Dalam skenario terkini, seorang hacker mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_454]",
    "options": [
      "Ransomware Attack",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q455",
    "questionText": "Kemarin, seorang script kiddie mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_455]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q456",
    "questionText": "Sepanjang tahun ini, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_456]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q457",
    "questionText": "Sepanjang tahun ini, seorang script kiddie mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_457]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q458",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_458]",
    "options": [
      "DDoS",
      "Phishing",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q459",
    "questionText": "Kemarin, seorang script kiddie mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_459]",
    "options": [
      "SQL Injection",
      "Phishing",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q460",
    "questionText": "Baru-baru ini, penyerang memasukkan perintah database ke form login website. [Generate_Gen_460]",
    "options": [
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q461",
    "questionText": "Sepanjang tahun ini, penyerang mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_461]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q462",
    "questionText": "Baru-baru ini, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_462]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q463",
    "questionText": "Sepanjang tahun ini, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_463]",
    "options": [
      "DDoS",
      "Phishing",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q464",
    "questionText": "Dalam skenario terkini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_464]",
    "options": [
      "Phishing",
      "SQL Injection",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q465",
    "questionText": "Baru-baru ini, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_465]",
    "options": [
      "SQL Injection",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q466",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_466]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q467",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_467]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "DDoS",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q468",
    "questionText": "Dalam skenario terkini, seorang hacker mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_468]",
    "options": [
      "DDoS",
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q469",
    "questionText": "Sepanjang tahun ini, seorang script kiddie mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_469]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q470",
    "questionText": "Baru-baru ini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_470]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q471",
    "questionText": "Kemarin, seorang pentester mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_471]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q472",
    "questionText": "Dalam skenario terkini, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_472]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q473",
    "questionText": "Kemarin, penyerang memasukkan perintah database ke form login website. [Generate_Gen_473]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q474",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_474]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q475",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_475]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q476",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_476]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q477",
    "questionText": "Baru-baru ini, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_477]",
    "options": [
      "DDoS",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q478",
    "questionText": "Sepanjang tahun ini, penyerang memasukkan perintah database ke form login website. [Generate_Gen_478]",
    "options": [
      "DDoS",
      "Phishing",
      "Ransomware Attack",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q479",
    "questionText": "Baru-baru ini, seorang hacker mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_479]",
    "options": [
      "SQL Injection",
      "Ransomware Attack",
      "Phishing",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q480",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_480]",
    "options": [
      "SQL Injection",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q481",
    "questionText": "Sepanjang tahun ini, seorang pentester mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_481]",
    "options": [
      "Phishing",
      "DDoS",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q482",
    "questionText": "Sepanjang tahun ini, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_482]",
    "options": [
      "Phishing",
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q483",
    "questionText": "Dalam skenario terkini, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_483]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q484",
    "questionText": "Kemarin, seorang pentester memasukkan perintah database ke form login website. [Generate_Gen_484]",
    "options": [
      "DDoS",
      "Ransomware Attack",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q485",
    "questionText": "Kemarin, seorang script kiddie mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_485]",
    "options": [
      "SQL Injection",
      "DDoS",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q486",
    "questionText": "Sepanjang tahun ini, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_486]",
    "options": [
      "Phishing",
      "DDoS",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q487",
    "questionText": "Sepanjang tahun ini, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_487]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q488",
    "questionText": "Dalam skenario terkini, aktor ancaman apt mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_488]",
    "options": [
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Ransomware Attack",
      "Phishing"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q489",
    "questionText": "Kemarin, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_489]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q490",
    "questionText": "Kemarin, seorang hacker mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_490]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "SQL Injection",
      "DDoS",
      "Ransomware Attack"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q491",
    "questionText": "Sepanjang tahun ini, penyerang mengumpulkan informasi publik dari target sebelum meretas. [Generate_Gen_491]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "Phishing",
      "SQL Injection",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan OSINT Phase / Reconnaissance.",
    "category": "general"
  },
  {
    "questionID": "q492",
    "questionText": "Dalam skenario terkini, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_492]",
    "options": [
      "Phishing",
      "Ransomware Attack",
      "SQL Injection",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q493",
    "questionText": "Kemarin, seorang script kiddie mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_493]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q494",
    "questionText": "Baru-baru ini, penyerang mengenkripsi database rumah sakit dan meminta bayaran. [Generate_Gen_494]",
    "options": [
      "Ransomware Attack",
      "DDoS",
      "OSINT Phase / Reconnaissance",
      "Phishing"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Ransomware Attack.",
    "category": "general"
  },
  {
    "questionID": "q495",
    "questionText": "Kemarin, aktor ancaman apt mencoba membanjiri server dengan jutaan paket agar down. [Generate_Gen_495]",
    "options": [
      "Phishing",
      "SQL Injection",
      "OSINT Phase / Reconnaissance",
      "DDoS"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan DDoS.",
    "category": "general"
  },
  {
    "questionID": "q496",
    "questionText": "Baru-baru ini, seorang pentester memasukkan perintah database ke form login website. [Generate_Gen_496]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing",
      "SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q497",
    "questionText": "Kemarin, seorang script kiddie memasukkan perintah database ke form login website. [Generate_Gen_497]",
    "options": [
      "DDoS",
      "SQL Injection",
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q498",
    "questionText": "Sepanjang tahun ini, penyerang mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_498]",
    "options": [
      "Ransomware Attack",
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q499",
    "questionText": "Kemarin, aktor ancaman apt memasukkan perintah database ke form login website. [Generate_Gen_499]",
    "options": [
      "SQL Injection",
      "Phishing",
      "Ransomware Attack",
      "DDoS"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan SQL Injection.",
    "category": "general"
  },
  {
    "questionID": "q500",
    "questionText": "Kemarin, penyerang mengirimkan puluhan email penipuan dengan link ke web bank palsu. [Generate_Gen_500]",
    "options": [
      "OSINT Phase / Reconnaissance",
      "DDoS",
      "SQL Injection",
      "Phishing"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Aksi tersebut menggambarkan Phishing.",
    "category": "general"
  },
  {
    "questionID": "q501",
    "questionText": "Sebagai investigator, Anda mengekstraksi file tersembunyi dari dalam sebuah gambar JPG. Proses ini dinamakan... [Gen_For_501]",
    "options": [
      "Memory Forensics",
      "Data Carving",
      "Steganography Analysis",
      "Chain of Custody"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Steganography Analysis.",
    "category": "forensic"
  },
  {
    "questionID": "q502",
    "questionText": "Sebagai investigator, Anda melakukan bit-by-bit copy dari hard drive tersangka. Proses ini dinamakan... [Gen_For_502]",
    "options": [
      "Data Carving",
      "Disk Imaging",
      "Chain of Custody",
      "Memory Forensics"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Disk Imaging.",
    "category": "forensic"
  },
  {
    "questionID": "q503",
    "questionText": "Sebagai investigator, Anda memulihkan file yang sudah dihapus dari Recycle Bin tersangka. Proses ini dinamakan... [Gen_For_503]",
    "options": [
      "Memory Forensics",
      "Steganography Analysis",
      "Disk Imaging",
      "Data Carving"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Data Carving.",
    "category": "forensic"
  },
  {
    "questionID": "q504",
    "questionText": "Sebagai investigator, Anda mengekstraksi file tersembunyi dari dalam sebuah gambar JPG. Proses ini dinamakan... [Gen_For_504]",
    "options": [
      "Data Carving",
      "Steganography Analysis",
      "Disk Imaging",
      "Chain of Custody"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Steganography Analysis.",
    "category": "forensic"
  },
  {
    "questionID": "q505",
    "questionText": "Sebagai investigator, Anda mencatat setiap orang yang memegang hardisk barang bukti. Proses ini dinamakan... [Gen_For_505]",
    "options": [
      "Chain of Custody",
      "Steganography Analysis",
      "Memory Forensics",
      "Data Carving"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Chain of Custody.",
    "category": "forensic"
  },
  {
    "questionID": "q506",
    "questionText": "Sebagai investigator, Anda mengekstraksi file tersembunyi dari dalam sebuah gambar JPG. Proses ini dinamakan... [Gen_For_506]",
    "options": [
      "Memory Forensics",
      "Chain of Custody",
      "Steganography Analysis",
      "Disk Imaging"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Steganography Analysis.",
    "category": "forensic"
  },
  {
    "questionID": "q507",
    "questionText": "Sebagai investigator, Anda mencatat setiap orang yang memegang hardisk barang bukti. Proses ini dinamakan... [Gen_For_507]",
    "options": [
      "Data Carving",
      "Chain of Custody",
      "Memory Forensics",
      "Steganography Analysis"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Chain of Custody.",
    "category": "forensic"
  },
  {
    "questionID": "q508",
    "questionText": "Sebagai investigator, Anda memulihkan file yang sudah dihapus dari Recycle Bin tersangka. Proses ini dinamakan... [Gen_For_508]",
    "options": [
      "Data Carving",
      "Steganography Analysis",
      "Disk Imaging",
      "Memory Forensics"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Data Carving.",
    "category": "forensic"
  },
  {
    "questionID": "q509",
    "questionText": "Sebagai investigator, Anda mencatat setiap orang yang memegang hardisk barang bukti. Proses ini dinamakan... [Gen_For_509]",
    "options": [
      "Steganography Analysis",
      "Memory Forensics",
      "Chain of Custody",
      "Disk Imaging"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Chain of Custody.",
    "category": "forensic"
  },
  {
    "questionID": "q510",
    "questionText": "Sebagai investigator, Anda menganalisis RAM dari komputer menyala untuk mencari malware. Proses ini dinamakan... [Gen_For_510]",
    "options": [
      "Memory Forensics",
      "Chain of Custody",
      "Disk Imaging",
      "Steganography Analysis"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Memory Forensics.",
    "category": "forensic"
  },
  {
    "questionID": "q511",
    "questionText": "Sebagai investigator, Anda menganalisis RAM dari komputer menyala untuk mencari malware. Proses ini dinamakan... [Gen_For_511]",
    "options": [
      "Memory Forensics",
      "Steganography Analysis",
      "Data Carving",
      "Chain of Custody"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Memory Forensics.",
    "category": "forensic"
  },
  {
    "questionID": "q512",
    "questionText": "Sebagai investigator, Anda mengekstraksi file tersembunyi dari dalam sebuah gambar JPG. Proses ini dinamakan... [Gen_For_512]",
    "options": [
      "Steganography Analysis",
      "Disk Imaging",
      "Memory Forensics",
      "Data Carving"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Steganography Analysis.",
    "category": "forensic"
  },
  {
    "questionID": "q513",
    "questionText": "Sebagai investigator, Anda mencatat setiap orang yang memegang hardisk barang bukti. Proses ini dinamakan... [Gen_For_513]",
    "options": [
      "Data Carving",
      "Memory Forensics",
      "Chain of Custody",
      "Disk Imaging"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Chain of Custody.",
    "category": "forensic"
  },
  {
    "questionID": "q514",
    "questionText": "Sebagai investigator, Anda melakukan bit-by-bit copy dari hard drive tersangka. Proses ini dinamakan... [Gen_For_514]",
    "options": [
      "Chain of Custody",
      "Memory Forensics",
      "Disk Imaging",
      "Data Carving"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Disk Imaging.",
    "category": "forensic"
  },
  {
    "questionID": "q515",
    "questionText": "Sebagai investigator, Anda mengekstraksi file tersembunyi dari dalam sebuah gambar JPG. Proses ini dinamakan... [Gen_For_515]",
    "options": [
      "Chain of Custody",
      "Data Carving",
      "Disk Imaging",
      "Steganography Analysis"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Steganography Analysis.",
    "category": "forensic"
  },
  {
    "questionID": "q516",
    "questionText": "Sebagai investigator, Anda menganalisis RAM dari komputer menyala untuk mencari malware. Proses ini dinamakan... [Gen_For_516]",
    "options": [
      "Data Carving",
      "Disk Imaging",
      "Memory Forensics",
      "Steganography Analysis"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Memory Forensics.",
    "category": "forensic"
  },
  {
    "questionID": "q517",
    "questionText": "Sebagai investigator, Anda mencatat setiap orang yang memegang hardisk barang bukti. Proses ini dinamakan... [Gen_For_517]",
    "options": [
      "Disk Imaging",
      "Chain of Custody",
      "Data Carving",
      "Memory Forensics"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Chain of Custody.",
    "category": "forensic"
  },
  {
    "questionID": "q518",
    "questionText": "Sebagai investigator, Anda melakukan bit-by-bit copy dari hard drive tersangka. Proses ini dinamakan... [Gen_For_518]",
    "options": [
      "Data Carving",
      "Steganography Analysis",
      "Chain of Custody",
      "Disk Imaging"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Disk Imaging.",
    "category": "forensic"
  },
  {
    "questionID": "q519",
    "questionText": "Sebagai investigator, Anda memulihkan file yang sudah dihapus dari Recycle Bin tersangka. Proses ini dinamakan... [Gen_For_519]",
    "options": [
      "Disk Imaging",
      "Steganography Analysis",
      "Chain of Custody",
      "Data Carving"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Data Carving.",
    "category": "forensic"
  },
  {
    "questionID": "q520",
    "questionText": "Sebagai investigator, Anda menganalisis RAM dari komputer menyala untuk mencari malware. Proses ini dinamakan... [Gen_For_520]",
    "options": [
      "Memory Forensics",
      "Chain of Custody",
      "Data Carving",
      "Steganography Analysis"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Memory Forensics.",
    "category": "forensic"
  },
  {
    "questionID": "q521",
    "questionText": "Sebagai investigator, Anda memulihkan file yang sudah dihapus dari Recycle Bin tersangka. Proses ini dinamakan... [Gen_For_521]",
    "options": [
      "Steganography Analysis",
      "Chain of Custody",
      "Data Carving",
      "Memory Forensics"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Data Carving.",
    "category": "forensic"
  },
  {
    "questionID": "q522",
    "questionText": "Sebagai investigator, Anda mengekstraksi file tersembunyi dari dalam sebuah gambar JPG. Proses ini dinamakan... [Gen_For_522]",
    "options": [
      "Data Carving",
      "Disk Imaging",
      "Memory Forensics",
      "Steganography Analysis"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Steganography Analysis.",
    "category": "forensic"
  },
  {
    "questionID": "q523",
    "questionText": "Sebagai investigator, Anda mencatat setiap orang yang memegang hardisk barang bukti. Proses ini dinamakan... [Gen_For_523]",
    "options": [
      "Chain of Custody",
      "Disk Imaging",
      "Memory Forensics",
      "Steganography Analysis"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Chain of Custody.",
    "category": "forensic"
  },
  {
    "questionID": "q524",
    "questionText": "Sebagai investigator, Anda melakukan bit-by-bit copy dari hard drive tersangka. Proses ini dinamakan... [Gen_For_524]",
    "options": [
      "Chain of Custody",
      "Memory Forensics",
      "Disk Imaging",
      "Steganography Analysis"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Disk Imaging.",
    "category": "forensic"
  },
  {
    "questionID": "q525",
    "questionText": "Sebagai investigator, Anda memulihkan file yang sudah dihapus dari Recycle Bin tersangka. Proses ini dinamakan... [Gen_For_525]",
    "options": [
      "Memory Forensics",
      "Steganography Analysis",
      "Disk Imaging",
      "Data Carving"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Data Carving.",
    "category": "forensic"
  },
  {
    "questionID": "q526",
    "questionText": "Sebagai investigator, Anda mencatat setiap orang yang memegang hardisk barang bukti. Proses ini dinamakan... [Gen_For_526]",
    "options": [
      "Chain of Custody",
      "Disk Imaging",
      "Memory Forensics",
      "Steganography Analysis"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Chain of Custody.",
    "category": "forensic"
  },
  {
    "questionID": "q527",
    "questionText": "Sebagai investigator, Anda melakukan bit-by-bit copy dari hard drive tersangka. Proses ini dinamakan... [Gen_For_527]",
    "options": [
      "Steganography Analysis",
      "Chain of Custody",
      "Disk Imaging",
      "Memory Forensics"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Disk Imaging.",
    "category": "forensic"
  },
  {
    "questionID": "q528",
    "questionText": "Sebagai investigator, Anda memulihkan file yang sudah dihapus dari Recycle Bin tersangka. Proses ini dinamakan... [Gen_For_528]",
    "options": [
      "Data Carving",
      "Memory Forensics",
      "Disk Imaging",
      "Steganography Analysis"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Data Carving.",
    "category": "forensic"
  },
  {
    "questionID": "q529",
    "questionText": "Sebagai investigator, Anda memulihkan file yang sudah dihapus dari Recycle Bin tersangka. Proses ini dinamakan... [Gen_For_529]",
    "options": [
      "Chain of Custody",
      "Disk Imaging",
      "Steganography Analysis",
      "Data Carving"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Data Carving.",
    "category": "forensic"
  },
  {
    "questionID": "q530",
    "questionText": "Sebagai investigator, Anda memulihkan file yang sudah dihapus dari Recycle Bin tersangka. Proses ini dinamakan... [Gen_For_530]",
    "options": [
      "Memory Forensics",
      "Chain of Custody",
      "Disk Imaging",
      "Data Carving"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Data Carving.",
    "category": "forensic"
  },
  {
    "questionID": "q531",
    "questionText": "Sebagai investigator, Anda melakukan bit-by-bit copy dari hard drive tersangka. Proses ini dinamakan... [Gen_For_531]",
    "options": [
      "Data Carving",
      "Chain of Custody",
      "Disk Imaging",
      "Memory Forensics"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Disk Imaging.",
    "category": "forensic"
  },
  {
    "questionID": "q532",
    "questionText": "Sebagai investigator, Anda memulihkan file yang sudah dihapus dari Recycle Bin tersangka. Proses ini dinamakan... [Gen_For_532]",
    "options": [
      "Memory Forensics",
      "Steganography Analysis",
      "Chain of Custody",
      "Data Carving"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Data Carving.",
    "category": "forensic"
  },
  {
    "questionID": "q533",
    "questionText": "Sebagai investigator, Anda menganalisis RAM dari komputer menyala untuk mencari malware. Proses ini dinamakan... [Gen_For_533]",
    "options": [
      "Memory Forensics",
      "Chain of Custody",
      "Disk Imaging",
      "Steganography Analysis"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Memory Forensics.",
    "category": "forensic"
  },
  {
    "questionID": "q534",
    "questionText": "Sebagai investigator, Anda mengekstraksi file tersembunyi dari dalam sebuah gambar JPG. Proses ini dinamakan... [Gen_For_534]",
    "options": [
      "Steganography Analysis",
      "Disk Imaging",
      "Data Carving",
      "Memory Forensics"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Steganography Analysis.",
    "category": "forensic"
  },
  {
    "questionID": "q535",
    "questionText": "Sebagai investigator, Anda menganalisis RAM dari komputer menyala untuk mencari malware. Proses ini dinamakan... [Gen_For_535]",
    "options": [
      "Disk Imaging",
      "Chain of Custody",
      "Data Carving",
      "Memory Forensics"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Memory Forensics.",
    "category": "forensic"
  },
  {
    "questionID": "q536",
    "questionText": "Sebagai investigator, Anda mencatat setiap orang yang memegang hardisk barang bukti. Proses ini dinamakan... [Gen_For_536]",
    "options": [
      "Steganography Analysis",
      "Chain of Custody",
      "Data Carving",
      "Memory Forensics"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Chain of Custody.",
    "category": "forensic"
  },
  {
    "questionID": "q537",
    "questionText": "Sebagai investigator, Anda memulihkan file yang sudah dihapus dari Recycle Bin tersangka. Proses ini dinamakan... [Gen_For_537]",
    "options": [
      "Chain of Custody",
      "Memory Forensics",
      "Steganography Analysis",
      "Data Carving"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Data Carving.",
    "category": "forensic"
  },
  {
    "questionID": "q538",
    "questionText": "Sebagai investigator, Anda melakukan bit-by-bit copy dari hard drive tersangka. Proses ini dinamakan... [Gen_For_538]",
    "options": [
      "Disk Imaging",
      "Memory Forensics",
      "Chain of Custody",
      "Steganography Analysis"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Disk Imaging.",
    "category": "forensic"
  },
  {
    "questionID": "q539",
    "questionText": "Sebagai investigator, Anda memulihkan file yang sudah dihapus dari Recycle Bin tersangka. Proses ini dinamakan... [Gen_For_539]",
    "options": [
      "Data Carving",
      "Disk Imaging",
      "Memory Forensics",
      "Chain of Custody"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Data Carving.",
    "category": "forensic"
  },
  {
    "questionID": "q540",
    "questionText": "Sebagai investigator, Anda mengekstraksi file tersembunyi dari dalam sebuah gambar JPG. Proses ini dinamakan... [Gen_For_540]",
    "options": [
      "Steganography Analysis",
      "Memory Forensics",
      "Data Carving",
      "Chain of Custody"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Steganography Analysis.",
    "category": "forensic"
  },
  {
    "questionID": "q541",
    "questionText": "Sebagai investigator, Anda mengekstraksi file tersembunyi dari dalam sebuah gambar JPG. Proses ini dinamakan... [Gen_For_541]",
    "options": [
      "Disk Imaging",
      "Steganography Analysis",
      "Chain of Custody",
      "Data Carving"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Steganography Analysis.",
    "category": "forensic"
  },
  {
    "questionID": "q542",
    "questionText": "Sebagai investigator, Anda mengekstraksi file tersembunyi dari dalam sebuah gambar JPG. Proses ini dinamakan... [Gen_For_542]",
    "options": [
      "Data Carving",
      "Disk Imaging",
      "Chain of Custody",
      "Steganography Analysis"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Steganography Analysis.",
    "category": "forensic"
  },
  {
    "questionID": "q543",
    "questionText": "Sebagai investigator, Anda melakukan bit-by-bit copy dari hard drive tersangka. Proses ini dinamakan... [Gen_For_543]",
    "options": [
      "Memory Forensics",
      "Disk Imaging",
      "Steganography Analysis",
      "Chain of Custody"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Disk Imaging.",
    "category": "forensic"
  },
  {
    "questionID": "q544",
    "questionText": "Sebagai investigator, Anda memulihkan file yang sudah dihapus dari Recycle Bin tersangka. Proses ini dinamakan... [Gen_For_544]",
    "options": [
      "Data Carving",
      "Chain of Custody",
      "Memory Forensics",
      "Steganography Analysis"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Data Carving.",
    "category": "forensic"
  },
  {
    "questionID": "q545",
    "questionText": "Sebagai investigator, Anda mencatat setiap orang yang memegang hardisk barang bukti. Proses ini dinamakan... [Gen_For_545]",
    "options": [
      "Steganography Analysis",
      "Memory Forensics",
      "Disk Imaging",
      "Chain of Custody"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Chain of Custody.",
    "category": "forensic"
  },
  {
    "questionID": "q546",
    "questionText": "Sebagai investigator, Anda melakukan bit-by-bit copy dari hard drive tersangka. Proses ini dinamakan... [Gen_For_546]",
    "options": [
      "Data Carving",
      "Disk Imaging",
      "Steganography Analysis",
      "Chain of Custody"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Disk Imaging.",
    "category": "forensic"
  },
  {
    "questionID": "q547",
    "questionText": "Sebagai investigator, Anda menganalisis RAM dari komputer menyala untuk mencari malware. Proses ini dinamakan... [Gen_For_547]",
    "options": [
      "Disk Imaging",
      "Steganography Analysis",
      "Memory Forensics",
      "Data Carving"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Memory Forensics.",
    "category": "forensic"
  },
  {
    "questionID": "q548",
    "questionText": "Sebagai investigator, Anda menganalisis RAM dari komputer menyala untuk mencari malware. Proses ini dinamakan... [Gen_For_548]",
    "options": [
      "Data Carving",
      "Memory Forensics",
      "Disk Imaging",
      "Chain of Custody"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Memory Forensics.",
    "category": "forensic"
  },
  {
    "questionID": "q549",
    "questionText": "Sebagai investigator, Anda menganalisis RAM dari komputer menyala untuk mencari malware. Proses ini dinamakan... [Gen_For_549]",
    "options": [
      "Data Carving",
      "Memory Forensics",
      "Steganography Analysis",
      "Disk Imaging"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Memory Forensics.",
    "category": "forensic"
  },
  {
    "questionID": "q550",
    "questionText": "Sebagai investigator, Anda menganalisis RAM dari komputer menyala untuk mencari malware. Proses ini dinamakan... [Gen_For_550]",
    "options": [
      "Disk Imaging",
      "Data Carving",
      "Memory Forensics",
      "Chain of Custody"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Proses tersebut adalah Memory Forensics.",
    "category": "forensic"
  },
  {
    "questionID": "q551",
    "questionText": "Dalam analisis log/kode, penyerang memperhatikan bahwa server menjadi lambat 10 detik setelah diinput `WAITFOR DELAY '0:0:10'`. Hal ini merujuk pada... [Gen_SQL_551]",
    "options": [
      "Authentication Bypass lewat SQLi",
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Time-Based Blind SQL Injection",
      "Error-Based SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Time-Based Blind SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q552",
    "questionText": "Dalam analisis log/kode, penyerang melihat pesan `Unclosed quotation mark after the character string` muncul di layar. Hal ini merujuk pada... [Gen_SQL_552]",
    "options": [
      "Error-Based SQL Injection",
      "Time-Based Blind SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Union-Based SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Error-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q553",
    "questionText": "Dalam analisis log/kode, penyerang memperhatikan bahwa server menjadi lambat 10 detik setelah diinput `WAITFOR DELAY '0:0:10'`. Hal ini merujuk pada... [Gen_SQL_553]",
    "options": [
      "Authentication Bypass lewat SQLi",
      "Time-Based Blind SQL Injection",
      "Union-Based SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Time-Based Blind SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q554",
    "questionText": "Dalam analisis log/kode, penyerang melihat pesan `Unclosed quotation mark after the character string` muncul di layar. Hal ini merujuk pada... [Gen_SQL_554]",
    "options": [
      "Time-Based Blind SQL Injection",
      "Error-Based SQL Injection",
      "Authentication Bypass lewat SQLi",
      "Union-Based SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Error-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q555",
    "questionText": "Dalam analisis log/kode, penyerang memperhatikan bahwa server menjadi lambat 10 detik setelah diinput `WAITFOR DELAY '0:0:10'`. Hal ini merujuk pada... [Gen_SQL_555]",
    "options": [
      "Error-Based SQL Injection",
      "Time-Based Blind SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Union-Based SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Time-Based Blind SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q556",
    "questionText": "Dalam analisis log/kode, penyerang menginisialisasi Prepared Statements alih-alih merangkai string query. Hal ini merujuk pada... [Gen_SQL_556]",
    "options": [
      "Union-Based SQL Injection",
      "Time-Based Blind SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Authentication Bypass lewat SQLi"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Mitigasi Utama SQL Injection (Parameterized Query).",
    "category": "sqli"
  },
  {
    "questionID": "q557",
    "questionText": "Dalam analisis log/kode, penyerang melihat pesan `Unclosed quotation mark after the character string` muncul di layar. Hal ini merujuk pada... [Gen_SQL_557]",
    "options": [
      "Time-Based Blind SQL Injection",
      "Error-Based SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Union-Based SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Error-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q558",
    "questionText": "Dalam analisis log/kode, penyerang menginisialisasi Prepared Statements alih-alih merangkai string query. Hal ini merujuk pada... [Gen_SQL_558]",
    "options": [
      "Time-Based Blind SQL Injection",
      "Union-Based SQL Injection",
      "Error-Based SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Mitigasi Utama SQL Injection (Parameterized Query).",
    "category": "sqli"
  },
  {
    "questionID": "q559",
    "questionText": "Dalam analisis log/kode, penyerang menginputkan payload `admin' --` pada form login. Hal ini merujuk pada... [Gen_SQL_559]",
    "options": [
      "Authentication Bypass lewat SQLi",
      "Time-Based Blind SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Union-Based SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Authentication Bypass lewat SQLi.",
    "category": "sqli"
  },
  {
    "questionID": "q560",
    "questionText": "Dalam analisis log/kode, penyerang melihat pesan `Unclosed quotation mark after the character string` muncul di layar. Hal ini merujuk pada... [Gen_SQL_560]",
    "options": [
      "Union-Based SQL Injection",
      "Time-Based Blind SQL Injection",
      "Error-Based SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Error-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q561",
    "questionText": "Dalam analisis log/kode, penyerang melihat pesan `Unclosed quotation mark after the character string` muncul di layar. Hal ini merujuk pada... [Gen_SQL_561]",
    "options": [
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Union-Based SQL Injection",
      "Error-Based SQL Injection",
      "Authentication Bypass lewat SQLi"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Error-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q562",
    "questionText": "Dalam analisis log/kode, penyerang melihat pesan `Unclosed quotation mark after the character string` muncul di layar. Hal ini merujuk pada... [Gen_SQL_562]",
    "options": [
      "Time-Based Blind SQL Injection",
      "Error-Based SQL Injection",
      "Union-Based SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Error-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q563",
    "questionText": "Dalam analisis log/kode, penyerang menginputkan payload `admin' --` pada form login. Hal ini merujuk pada... [Gen_SQL_563]",
    "options": [
      "Error-Based SQL Injection",
      "Union-Based SQL Injection",
      "Time-Based Blind SQL Injection",
      "Authentication Bypass lewat SQLi"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Authentication Bypass lewat SQLi.",
    "category": "sqli"
  },
  {
    "questionID": "q564",
    "questionText": "Dalam analisis log/kode, penyerang melihat pesan `Unclosed quotation mark after the character string` muncul di layar. Hal ini merujuk pada... [Gen_SQL_564]",
    "options": [
      "Time-Based Blind SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Authentication Bypass lewat SQLi",
      "Error-Based SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Error-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q565",
    "questionText": "Dalam analisis log/kode, penyerang menginisialisasi Prepared Statements alih-alih merangkai string query. Hal ini merujuk pada... [Gen_SQL_565]",
    "options": [
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Union-Based SQL Injection",
      "Authentication Bypass lewat SQLi",
      "Error-Based SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Mitigasi Utama SQL Injection (Parameterized Query).",
    "category": "sqli"
  },
  {
    "questionID": "q566",
    "questionText": "Dalam analisis log/kode, penyerang menginisialisasi Prepared Statements alih-alih merangkai string query. Hal ini merujuk pada... [Gen_SQL_566]",
    "options": [
      "Union-Based SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Time-Based Blind SQL Injection",
      "Error-Based SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Mitigasi Utama SQL Injection (Parameterized Query).",
    "category": "sqli"
  },
  {
    "questionID": "q567",
    "questionText": "Dalam analisis log/kode, penyerang melihat pesan `Unclosed quotation mark after the character string` muncul di layar. Hal ini merujuk pada... [Gen_SQL_567]",
    "options": [
      "Union-Based SQL Injection",
      "Time-Based Blind SQL Injection",
      "Error-Based SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Error-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q568",
    "questionText": "Dalam analisis log/kode, penyerang menginisialisasi Prepared Statements alih-alih merangkai string query. Hal ini merujuk pada... [Gen_SQL_568]",
    "options": [
      "Error-Based SQL Injection",
      "Authentication Bypass lewat SQLi",
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Time-Based Blind SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Mitigasi Utama SQL Injection (Parameterized Query).",
    "category": "sqli"
  },
  {
    "questionID": "q569",
    "questionText": "Dalam analisis log/kode, penyerang menginputkan payload `admin' --` pada form login. Hal ini merujuk pada... [Gen_SQL_569]",
    "options": [
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Authentication Bypass lewat SQLi",
      "Time-Based Blind SQL Injection",
      "Union-Based SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Authentication Bypass lewat SQLi.",
    "category": "sqli"
  },
  {
    "questionID": "q570",
    "questionText": "Dalam analisis log/kode, penyerang menginisialisasi Prepared Statements alih-alih merangkai string query. Hal ini merujuk pada... [Gen_SQL_570]",
    "options": [
      "Error-Based SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Time-Based Blind SQL Injection",
      "Authentication Bypass lewat SQLi"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Mitigasi Utama SQL Injection (Parameterized Query).",
    "category": "sqli"
  },
  {
    "questionID": "q571",
    "questionText": "Dalam analisis log/kode, penyerang melihat adanya parameter URL `?id=1 UNION SELECT null, password`. Hal ini merujuk pada... [Gen_SQL_571]",
    "options": [
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Union-Based SQL Injection",
      "Authentication Bypass lewat SQLi",
      "Error-Based SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Union-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q572",
    "questionText": "Dalam analisis log/kode, penyerang menginisialisasi Prepared Statements alih-alih merangkai string query. Hal ini merujuk pada... [Gen_SQL_572]",
    "options": [
      "Authentication Bypass lewat SQLi",
      "Time-Based Blind SQL Injection",
      "Union-Based SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Mitigasi Utama SQL Injection (Parameterized Query).",
    "category": "sqli"
  },
  {
    "questionID": "q573",
    "questionText": "Dalam analisis log/kode, penyerang melihat pesan `Unclosed quotation mark after the character string` muncul di layar. Hal ini merujuk pada... [Gen_SQL_573]",
    "options": [
      "Authentication Bypass lewat SQLi",
      "Union-Based SQL Injection",
      "Error-Based SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Error-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q574",
    "questionText": "Dalam analisis log/kode, penyerang melihat adanya parameter URL `?id=1 UNION SELECT null, password`. Hal ini merujuk pada... [Gen_SQL_574]",
    "options": [
      "Union-Based SQL Injection",
      "Authentication Bypass lewat SQLi",
      "Error-Based SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Union-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q575",
    "questionText": "Dalam analisis log/kode, penyerang menginputkan payload `admin' --` pada form login. Hal ini merujuk pada... [Gen_SQL_575]",
    "options": [
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Time-Based Blind SQL Injection",
      "Authentication Bypass lewat SQLi",
      "Error-Based SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Authentication Bypass lewat SQLi.",
    "category": "sqli"
  },
  {
    "questionID": "q576",
    "questionText": "Dalam analisis log/kode, penyerang menginisialisasi Prepared Statements alih-alih merangkai string query. Hal ini merujuk pada... [Gen_SQL_576]",
    "options": [
      "Error-Based SQL Injection",
      "Authentication Bypass lewat SQLi",
      "Union-Based SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Mitigasi Utama SQL Injection (Parameterized Query).",
    "category": "sqli"
  },
  {
    "questionID": "q577",
    "questionText": "Dalam analisis log/kode, penyerang melihat pesan `Unclosed quotation mark after the character string` muncul di layar. Hal ini merujuk pada... [Gen_SQL_577]",
    "options": [
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Error-Based SQL Injection",
      "Time-Based Blind SQL Injection",
      "Union-Based SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Error-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q578",
    "questionText": "Dalam analisis log/kode, penyerang melihat adanya parameter URL `?id=1 UNION SELECT null, password`. Hal ini merujuk pada... [Gen_SQL_578]",
    "options": [
      "Authentication Bypass lewat SQLi",
      "Union-Based SQL Injection",
      "Error-Based SQL Injection",
      "Time-Based Blind SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Union-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q579",
    "questionText": "Dalam analisis log/kode, penyerang menginisialisasi Prepared Statements alih-alih merangkai string query. Hal ini merujuk pada... [Gen_SQL_579]",
    "options": [
      "Authentication Bypass lewat SQLi",
      "Time-Based Blind SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Union-Based SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Mitigasi Utama SQL Injection (Parameterized Query).",
    "category": "sqli"
  },
  {
    "questionID": "q580",
    "questionText": "Dalam analisis log/kode, penyerang menginputkan payload `admin' --` pada form login. Hal ini merujuk pada... [Gen_SQL_580]",
    "options": [
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Time-Based Blind SQL Injection",
      "Error-Based SQL Injection",
      "Authentication Bypass lewat SQLi"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Authentication Bypass lewat SQLi.",
    "category": "sqli"
  },
  {
    "questionID": "q581",
    "questionText": "Dalam analisis log/kode, penyerang melihat adanya parameter URL `?id=1 UNION SELECT null, password`. Hal ini merujuk pada... [Gen_SQL_581]",
    "options": [
      "Error-Based SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Time-Based Blind SQL Injection",
      "Union-Based SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Union-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q582",
    "questionText": "Dalam analisis log/kode, penyerang menginputkan payload `admin' --` pada form login. Hal ini merujuk pada... [Gen_SQL_582]",
    "options": [
      "Union-Based SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Time-Based Blind SQL Injection",
      "Authentication Bypass lewat SQLi"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Authentication Bypass lewat SQLi.",
    "category": "sqli"
  },
  {
    "questionID": "q583",
    "questionText": "Dalam analisis log/kode, penyerang memperhatikan bahwa server menjadi lambat 10 detik setelah diinput `WAITFOR DELAY '0:0:10'`. Hal ini merujuk pada... [Gen_SQL_583]",
    "options": [
      "Authentication Bypass lewat SQLi",
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Time-Based Blind SQL Injection",
      "Error-Based SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Time-Based Blind SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q584",
    "questionText": "Dalam analisis log/kode, penyerang menginputkan payload `admin' --` pada form login. Hal ini merujuk pada... [Gen_SQL_584]",
    "options": [
      "Time-Based Blind SQL Injection",
      "Authentication Bypass lewat SQLi",
      "Union-Based SQL Injection",
      "Error-Based SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Authentication Bypass lewat SQLi.",
    "category": "sqli"
  },
  {
    "questionID": "q585",
    "questionText": "Dalam analisis log/kode, penyerang memperhatikan bahwa server menjadi lambat 10 detik setelah diinput `WAITFOR DELAY '0:0:10'`. Hal ini merujuk pada... [Gen_SQL_585]",
    "options": [
      "Union-Based SQL Injection",
      "Authentication Bypass lewat SQLi",
      "Time-Based Blind SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Time-Based Blind SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q586",
    "questionText": "Dalam analisis log/kode, penyerang melihat pesan `Unclosed quotation mark after the character string` muncul di layar. Hal ini merujuk pada... [Gen_SQL_586]",
    "options": [
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Authentication Bypass lewat SQLi",
      "Error-Based SQL Injection",
      "Time-Based Blind SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Error-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q587",
    "questionText": "Dalam analisis log/kode, penyerang menginputkan payload `admin' --` pada form login. Hal ini merujuk pada... [Gen_SQL_587]",
    "options": [
      "Authentication Bypass lewat SQLi",
      "Time-Based Blind SQL Injection",
      "Error-Based SQL Injection",
      "Union-Based SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Authentication Bypass lewat SQLi.",
    "category": "sqli"
  },
  {
    "questionID": "q588",
    "questionText": "Dalam analisis log/kode, penyerang memperhatikan bahwa server menjadi lambat 10 detik setelah diinput `WAITFOR DELAY '0:0:10'`. Hal ini merujuk pada... [Gen_SQL_588]",
    "options": [
      "Error-Based SQL Injection",
      "Union-Based SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Time-Based Blind SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Time-Based Blind SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q589",
    "questionText": "Dalam analisis log/kode, penyerang memperhatikan bahwa server menjadi lambat 10 detik setelah diinput `WAITFOR DELAY '0:0:10'`. Hal ini merujuk pada... [Gen_SQL_589]",
    "options": [
      "Error-Based SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Time-Based Blind SQL Injection",
      "Authentication Bypass lewat SQLi"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Time-Based Blind SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q590",
    "questionText": "Dalam analisis log/kode, penyerang melihat pesan `Unclosed quotation mark after the character string` muncul di layar. Hal ini merujuk pada... [Gen_SQL_590]",
    "options": [
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Error-Based SQL Injection",
      "Time-Based Blind SQL Injection",
      "Authentication Bypass lewat SQLi"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Error-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q591",
    "questionText": "Dalam analisis log/kode, penyerang menginisialisasi Prepared Statements alih-alih merangkai string query. Hal ini merujuk pada... [Gen_SQL_591]",
    "options": [
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Authentication Bypass lewat SQLi",
      "Time-Based Blind SQL Injection",
      "Error-Based SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Mitigasi Utama SQL Injection (Parameterized Query).",
    "category": "sqli"
  },
  {
    "questionID": "q592",
    "questionText": "Dalam analisis log/kode, penyerang melihat adanya parameter URL `?id=1 UNION SELECT null, password`. Hal ini merujuk pada... [Gen_SQL_592]",
    "options": [
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Union-Based SQL Injection",
      "Authentication Bypass lewat SQLi",
      "Time-Based Blind SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Union-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q593",
    "questionText": "Dalam analisis log/kode, penyerang melihat adanya parameter URL `?id=1 UNION SELECT null, password`. Hal ini merujuk pada... [Gen_SQL_593]",
    "options": [
      "Error-Based SQL Injection",
      "Authentication Bypass lewat SQLi",
      "Time-Based Blind SQL Injection",
      "Union-Based SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Union-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q594",
    "questionText": "Dalam analisis log/kode, penyerang melihat pesan `Unclosed quotation mark after the character string` muncul di layar. Hal ini merujuk pada... [Gen_SQL_594]",
    "options": [
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Error-Based SQL Injection",
      "Authentication Bypass lewat SQLi",
      "Union-Based SQL Injection"
    ],
    "correctAnswer": 1,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Error-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q595",
    "questionText": "Dalam analisis log/kode, penyerang menginputkan payload `admin' --` pada form login. Hal ini merujuk pada... [Gen_SQL_595]",
    "options": [
      "Error-Based SQL Injection",
      "Time-Based Blind SQL Injection",
      "Authentication Bypass lewat SQLi",
      "Union-Based SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Authentication Bypass lewat SQLi.",
    "category": "sqli"
  },
  {
    "questionID": "q596",
    "questionText": "Dalam analisis log/kode, penyerang memperhatikan bahwa server menjadi lambat 10 detik setelah diinput `WAITFOR DELAY '0:0:10'`. Hal ini merujuk pada... [Gen_SQL_596]",
    "options": [
      "Time-Based Blind SQL Injection",
      "Authentication Bypass lewat SQLi",
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Union-Based SQL Injection"
    ],
    "correctAnswer": 0,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Time-Based Blind SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q597",
    "questionText": "Dalam analisis log/kode, penyerang melihat pesan `Unclosed quotation mark after the character string` muncul di layar. Hal ini merujuk pada... [Gen_SQL_597]",
    "options": [
      "Time-Based Blind SQL Injection",
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Error-Based SQL Injection",
      "Authentication Bypass lewat SQLi"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Error-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q598",
    "questionText": "Dalam analisis log/kode, penyerang melihat adanya parameter URL `?id=1 UNION SELECT null, password`. Hal ini merujuk pada... [Gen_SQL_598]",
    "options": [
      "Mitigasi Utama SQL Injection (Parameterized Query)",
      "Error-Based SQL Injection",
      "Union-Based SQL Injection",
      "Authentication Bypass lewat SQLi"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Union-Based SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q599",
    "questionText": "Dalam analisis log/kode, penyerang memperhatikan bahwa server menjadi lambat 10 detik setelah diinput `WAITFOR DELAY '0:0:10'`. Hal ini merujuk pada... [Gen_SQL_599]",
    "options": [
      "Authentication Bypass lewat SQLi",
      "Union-Based SQL Injection",
      "Time-Based Blind SQL Injection",
      "Error-Based SQL Injection"
    ],
    "correctAnswer": 2,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Time-Based Blind SQL Injection.",
    "category": "sqli"
  },
  {
    "questionID": "q600",
    "questionText": "Dalam analisis log/kode, penyerang memperhatikan bahwa server menjadi lambat 10 detik setelah diinput `WAITFOR DELAY '0:0:10'`. Hal ini merujuk pada... [Gen_SQL_600]",
    "options": [
      "Union-Based SQL Injection",
      "Error-Based SQL Injection",
      "Authentication Bypass lewat SQLi",
      "Time-Based Blind SQL Injection"
    ],
    "correctAnswer": 3,
    "questionScore": 10,
    "explanation": "Itu adalah bentuk Time-Based Blind SQL Injection.",
    "category": "sqli"
  }
];

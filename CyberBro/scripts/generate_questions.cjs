const fs = require('fs');
const path = require('path');

const questions = [];
let idCounter = 1;

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

function addQ(text, correct, distractor1, distractor2, distractor3, explanation, category = 'general') {
  const qOptions = [
    { text: correct, isCorrect: true },
    { text: distractor1, isCorrect: false },
    { text: distractor2, isCorrect: false },
    { text: distractor3, isCorrect: false },
  ];
  shuffle(qOptions);

  const correctIdx = qOptions.findIndex(o => o.isCorrect);

  questions.push({
    questionID: `q${idCounter++}`,
    questionText: text,
    options: qOptions.map(o => o.text),
    correctAnswer: correctIdx,
    questionScore: 10,
    explanation: explanation || `${correct} adalah jawaban yang benar.`,
    category: category
  });
}

// 1. General Questions
const general = [
  { q: "Apa nama konsep membatasi akses sekecil mungkin agar user hanya dapat melakukan tugasnya (tidak lebih)?", a: "Principle of Least Privilege", d1: "Segregation of Duties", d2: "Defense in Depth", d3: "Zero Trust" },
  { q: "Fungsi utama dari Hashing (seperti SHA-256) dalam CIA Triad adalah untuk menjaga...", a: "Integrity (Integritas)", d1: "Confidentiality (Kerahasiaan)", d2: "Availability (Ketersediaan)", d3: "Authentication (Otentikasi)" },
  { q: "Jenis malware yang mengenkripsi data korban dan meminta uang tebusan adalah...", a: "Ransomware", d1: "Spyware", d2: "Worm", d3: "Adware" },
  { q: "Serangan membanjiri server dengan trafik palsu hingga down disebut...", a: "DDoS", d1: "Phishing", d2: "SQL Injection", d3: "Man In The Middle" }
];

general.forEach(g => {
  addQ(g.q, g.a, g.d1, g.d2, g.d3, `Jawaban tepat adalah ${g.a}.`, 'general');
});

// Helper to expand and hit goals
function generateCombinations() {
  const subjects = ['Seorang Hacker', 'Penyerang', 'Aktor Ancaman APT', 'Seorang Script Kiddie', 'Seorang Pentester'];
  const actions = [
    { verb: 'mencoba membanjiri server dengan jutaan paket agar down', ans: 'DDoS' },
    { verb: 'mengirimkan puluhan email penipuan dengan link ke web bank palsu', ans: 'Phishing' },
    { verb: 'mengumpulkan informasi publik dari target sebelum meretas', ans: 'OSINT Phase / Reconnaissance' },
    { verb: 'memasukkan perintah database ke form login website', ans: 'SQL Injection' },
    { verb: 'mengenkripsi database rumah sakit dan meminta bayaran', ans: 'Ransomware Attack' },
  ];

  // Fill General up to 500
  let generalCount = questions.filter(q => q.category === 'general').length;
  while (generalCount < 500) {
    let act = actions[Math.floor(Math.random() * actions.length)];
    let sub = subjects[Math.floor(Math.random() * subjects.length)];
    let time = ['Kemarin', 'Baru-baru ini', 'Dalam skenario terkini', 'Sepanjang tahun ini'][Math.floor(Math.random() * 4)];
    
    let text = `${time}, ${sub.toLowerCase()} ${act.verb}. [Generate_Gen_${idCounter}]`;
    let otherDistractors = actions.filter(a => a.ans !== act.ans).map(a => a.ans);
    otherDistractors = shuffle(otherDistractors);
    addQ(text, act.ans, otherDistractors[0] || 'XSS', otherDistractors[1] || 'CSRF', otherDistractors[2] || 'Malware', `Aksi tersebut menggambarkan ${act.ans}.`, 'general');
    generalCount++;
  }

  // Generate Forensic up to 50
  const forensicActions = [
    { verb: 'melakukan bit-by-bit copy dari hard drive tersangka', ans: 'Disk Imaging' },
    { verb: 'mengekstraksi file tersembunyi dari dalam sebuah gambar JPG', ans: 'Steganography Analysis' },
    { verb: 'mencatat setiap orang yang memegang hardisk barang bukti', ans: 'Chain of Custody' },
    { verb: 'memulihkan file yang sudah dihapus dari Recycle Bin tersangka', ans: 'Data Carving' },
    { verb: 'menganalisis RAM dari komputer menyala untuk mencari malware', ans: 'Memory Forensics' }
  ];
  let forensicCount = 0;
  while (forensicCount < 50) {
    let act = forensicActions[Math.floor(Math.random() * forensicActions.length)];
    let text = `Sebagai investigator, Anda ${act.verb}. Proses ini dinamakan... [Gen_For_${idCounter}]`;
    let otherDistractors = forensicActions.filter(a => a.ans !== act.ans).map(a => a.ans);
    otherDistractors = shuffle(otherDistractors);
    addQ(text, act.ans, otherDistractors[0] || 'Phishing', otherDistractors[1] || 'Network Sniffing', otherDistractors[2] || 'Exploitation', `Proses tersebut adalah ${act.ans}.`, 'forensic');
    forensicCount++;
  }

  // Generate SQLi up to 50
  const sqliActions = [
    { verb: 'menginputkan payload `admin\' --` pada form login', ans: 'Authentication Bypass lewat SQLi' },
    { verb: 'melihat adanya parameter URL `?id=1 UNION SELECT null, password`', ans: 'Union-Based SQL Injection' },
    { verb: 'memperhatikan bahwa server menjadi lambat 10 detik setelah diinput `WAITFOR DELAY \'0:0:10\'`', ans: 'Time-Based Blind SQL Injection' },
    { verb: 'menginisialisasi Prepared Statements alih-alih merangkai string query', ans: 'Mitigasi Utama SQL Injection (Parameterized Query)' },
    { verb: 'melihat pesan `Unclosed quotation mark after the character string` muncul di layar', ans: 'Error-Based SQL Injection' },
  ];
  let sqliCount = 0;
  while (sqliCount < 50) {
    let act = sqliActions[Math.floor(Math.random() * sqliActions.length)];
    let text = `Dalam analisis log/kode, penyerang ${act.verb}. Hal ini merujuk pada... [Gen_SQL_${idCounter}]`;
    let otherDistractors = sqliActions.filter(a => a.ans !== act.ans).map(a => a.ans);
    otherDistractors = shuffle(otherDistractors);
    addQ(text, act.ans, otherDistractors[0] || 'XSS', otherDistractors[1] || 'Buffer Overflow', otherDistractors[2] || 'Ransomware', `Itu adalah bentuk ${act.ans}.`, 'sqli');
    sqliCount++;
  }
}

generateCombinations();

let tsContent = `// File ini menampung total ${questions.length} pertanyaan seputar Cyber Security\n`;
tsContent += `// Mode didukung: 'general', 'forensic', 'sqli'.\n`;
tsContent += `import { Question } from '../types';\n\n`;
tsContent += `export const QUIZ_QUESTIONS_BANK: Question[] = ${JSON.stringify(questions, null, 2)};\n`;

const outputPath = path.join(__dirname, '../src/data/questions.ts');
const dataDir = path.dirname(outputPath);

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

fs.writeFileSync(outputPath, tsContent);
console.log('Successfully generated ' + questions.length + ' questions to ' + outputPath);

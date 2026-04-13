import { useNavigate } from 'react-router';
import { ArrowLeft, BookOpen, CheckCircle, ChevronRight, Shield, Link, UserX, Bug, Lock, Wifi, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { getCurrentUserSync, completeModule, addPoints, awardBadge } from '../gameStore';
import { Student, Module } from '../types';

const renderIcon = (category: string, className: string) => {
  switch (category) {
    case 'phishing': return <Link className={className} />;
    case 'social-engineering': return <UserX className={className} />;
    case 'malware': return <Bug className={className} />;
    case 'credential': return <Lock className={className} />;
    case 'wifi': return <Wifi className={className} />;
    case 'defacement': return <Globe className={className} />;
    default: return <BookOpen className={className} />;
  }
};

const MODULES: Module[] = [
  {
    moduleID: 'phishing',
    title: 'Phishing (URL Palsu)',
    subtitle: 'Jangan Ketipu Link Abal-Abal!',
    content: [
      'Apa itu Phishing?',
      'Phishing itu kayak "mancing" — peretas bikin link/website PALSU yang mirip banget sama yang asli. Tujuannya? Nyolong data kamu!',
      'Contoh Sehari-hari:',
      '• DM Instagram: "Akun kamu akan dihapus! Klik link ini buat verifikasi" → PALSU!',
      '• Email: "Selamat! Kamu menang voucher 1 juta! Klik di sini" → JEBAKAN!',
      '• WhatsApp: "BRI: Verifikasi data Anda di link berikut" → SCAM!',
      'Cara Deteksi URL Palsu:',
      '• Cek domain: "bank-bri.com" beda sama "bri.co.id" (yang asli!)',
      '• Perhatikan https:// — tapi HTTPS bukan jaminan 100% aman',
      '• Hover dulu sebelum klik, lihat URL tujuan sebenarnya',
      '• URL pendek (bit.ly, tinyurl) bisa jadi berbahaya',
    ],
    tips: [
      'Selalu ketik URL langsung di browser, jangan klik link dari pesan',
      'Cek ejaan domain — "g00gle.com" bukan "google.com"',
      'Jangan login lewat link dari email, langsung buka website-nya',
      'Aktifkan 2FA (Two-Factor Authentication) di semua akun',
    ],
    category: 'phishing',
    icon: '',
    color: 'from-red-500 to-rose-600',
    badgeReward: 'phishing-expert',
    pointReward: 100,
  },
  {
    moduleID: 'social-engineering',
    title: 'Rekayasa Sosial (OTP)',
    subtitle: 'OTP Itu Rahasia, Bro!',
    content: [
      'Apa itu Social Engineering?',
      'Social Engineering itu seni manipulasi — peretas nggak hack komputer kamu, tapi HACK PIKIRAN kamu biar ngasih info secara sukarela!',
      'Modus yang Sering Dipake:',
      '• Telepon ngaku dari bank: "Ibu/Bapak, tolong sebutkan kode OTP yang baru dikirim"',
      '• SMS: "Maaf salah kirim OTP, bisa tolong forward?" → JANGAN!',
      '• Ngaku teman: "Bro, pinjam akun kamu sebentar, lagi urgent nih"',
      'Kenapa OTP Nggak Boleh Dikasih?',
      '• OTP = kunci sementara ke akun kamu',
      '• Bank/platform NGGAK PERNAH minta OTP lewat telepon!',
      '• Sekali OTP dikasih, akun kamu bisa diambil alih dalam hitungan detik',
    ],
    tips: [
      'OTP itu ibarat PIN ATM — JANGAN PERNAH kasih ke siapapun',
      'Kalau ada telepon minta OTP, langsung PUTUS!',
      'Verifikasi dulu identitas penelepon lewat channel resmi',
      'Ingat: yang urgent biasanya SCAM, legit nggak pernah buru-buru',
    ],
    category: 'social-engineering',
    icon: '',
    color: 'from-orange-500 to-amber-600',
    badgeReward: 'social-shield',
    pointReward: 100,
  },
  {
    moduleID: 'malware',
    title: 'Malware & Virus',
    subtitle: 'Bahaya Aplikasi Bajakan!',
    content: [
      'Apa itu Malware?',
      'Malware = Malicious Software, alias software jahat. Ini termasuk virus, trojan, ransomware, spyware, dll.',
      'Sumber Malware Paling Umum:',
      '• Aplikasi bajakan / crack dari situs ilegal',
      '• APK dari luar Play Store / App Store',
      '• File attachment di email yang nggak jelas',
      '• Pop-up: "HP kamu kena virus! Download antivirus ini!" → INI MALWARE!',
      'Bahaya Malware:',
      '• Ransomware: File kamu di-encrypt, minta tebusan Bitcoin',
      '• Keylogger: Merekam semua yang kamu ketik (password, chat)',
      '• Spyware: Nyalain kamera/mic tanpa kamu tahu',
      '• Trojan: Pura-pura jadi app normal, tapi curi data di belakang',
    ],
    tips: [
      'JANGAN download aplikasi bajakan — murah di awal, mahal di akhir',
      'Install aplikasi HANYA dari store resmi (Play Store, App Store)',
      'Update OS dan aplikasi secara rutin',
      'Gunakan antivirus terpercaya dan scan secara berkala',
    ],
    category: 'malware',
    icon: '',
    color: 'from-green-500 to-emerald-600',
    badgeReward: 'malware-hunter',
    pointReward: 100,
  },
  {
    moduleID: 'credential',
    title: 'Pencurian Kredensial',
    subtitle: 'Password Sama = Bahaya Besar!',
    content: [
      'Apa itu Credential Theft?',
      'Credential theft = pencurian username & password. Kalau 1 akun bocor dan kamu pakai password sama di mana-mana, semua akun kena!',
      'Fakta Mengerikan:',
      '• 80% data breach terjadi karena password lemah atau reuse',
      '• Database password yang bocor dijual di Dark Web',
      '• "123456" masih jadi password paling banyak dipakai di dunia!',
      'Tips Bikin Password Kuat:',
      '• Minimal 12 karakter — makin panjang makin aman',
      '• Kombinasi huruf besar, kecil, angka, simbol',
      '• Gunakan passphrase: "KucingkuSuka$MakanIk4n!" lebih kuat dari "P@ssw0rd"',
      '• JANGAN pakai info pribadi (nama, tanggal lahir, nama pacar)',
    ],
    tips: [
      'Gunakan password BERBEDA untuk setiap akun',
      'Pakai Password Manager (Bitwarden, Google Password Manager)',
      'Aktifkan 2FA di semua akun penting',
      'Cek apakah akun kamu pernah bocor di haveibeenpwned.com',
    ],
    category: 'credential',
    icon: '',
    color: 'from-purple-500 to-violet-600',
    badgeReward: 'password-master',
    pointReward: 100,
  },
  {
    moduleID: 'wifi',
    title: 'Bahaya Wi-Fi Publik',
    subtitle: 'Ngopi + WiFi Gratis = Hati-Hati!',
    content: [
      'Kenapa WiFi Publik Berbahaya?',
      'WiFi gratis di kafe, mall, atau bandara bisa jadi jebakan! Hacker bisa "nguping" semua yang kamu kirim lewat jaringan yang sama.',
      'Serangan di WiFi Publik:',
      '• Man-in-the-Middle (MITM): Hacker nyegat data antara HP kamu dan internet',
      '• Evil Twin: Hacker bikin WiFi palsu dengan nama mirip ("Starbucks_Free_WiFi")',
      '• Packet Sniffing: Menangkap data yang dikirim lewat jaringan',
      'Yang JANGAN Dilakukan di WiFi Publik:',
      '• Login mobile banking atau e-wallet',
      '• Belanja online dan masukkan data kartu kredit',
      '• Login email atau media sosial tanpa VPN',
      '• Transfer file sensitif',
    ],
    tips: [
      'Gunakan VPN saat terhubung ke WiFi publik',
      'Matikan auto-connect WiFi di HP',
      'Pastikan website pakai HTTPS sebelum login',
      'Lebih aman pakai data seluler untuk transaksi penting',
    ],
    category: 'wifi',
    icon: '',
    color: 'from-cyan-500 to-blue-600',
    badgeReward: 'wifi-warrior',
    pointReward: 100,
  },
  {
    moduleID: 'defacement',
    title: 'Web Defacement',
    subtitle: 'Website Sekolah Bisa Dicoret!',
    content: [
      'Apa itu Web Defacement?',
      'Web Defacement = mengganti tampilan website tanpa izin. Ibarat dinding sekolah yang dicoret-coret, tapi ini versi digital!',
      'Kenapa Hacker Deface Website?',
      '• Pamer skill (script kiddies)',
      '• Aktivisme / pesan politik',
      '• Merusak reputasi organisasi',
      '• Kadang sebagai distraksi untuk serangan yang lebih besar',
      'Bagaimana Website Bisa Di-deface?',
      '• SQL Injection: Masuk ke database lewat input form yang nggak aman',
      '• File Upload Vulnerability: Upload shell/backdoor lewat form upload',
      '• Credential Stuffing: Login admin pakai password yang bocor',
      '• Exploit CMS: WordPress, Joomla yang nggak di-update',
    ],
    tips: [
      'Selalu update CMS dan plugin website',
      'Gunakan password admin yang kuat dan unik',
      'Backup website secara rutin',
      'Pasang WAF (Web Application Firewall)',
    ],
    category: 'defacement',
    icon: '',
    color: 'from-pink-500 to-rose-600',
    badgeReward: 'web-defender',
    pointReward: 100,
  },
];

export default function ModulesPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<Student | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [quizActive, setQuizActive] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  useEffect(() => {
    const currentUser = getCurrentUserSync();
    if (!currentUser) { navigate('/register'); return; }
    setUser(currentUser);
  }, [navigate]);

  const moduleQuizzes: Record<string, { question: string; options: string[]; correct: number }> = {
    phishing: { question: 'Mana yang merupakan tanda URL phishing?', options: ['URL menggunakan HTTPS', 'Domain berbeda dari website resmi', 'Ada gambar logo bank', 'Website loading cepat'], correct: 1 },
    'social-engineering': { question: 'Apa yang harus dilakukan jika ada telepon minta OTP?', options: ['Kasih OTP-nya', 'Tanya balik alasannya', 'Langsung PUTUS teleponnya', 'Forward ke teman'], correct: 2 },
    malware: { question: 'Sumber malware paling umum adalah?', options: ['Play Store resmi', 'Aplikasi bajakan / crack', 'Update OS terbaru', 'Browser Chrome'], correct: 1 },
    credential: { question: 'Password mana yang paling kuat?', options: ['123456', 'password', 'KucingSuka$Ik4n!2024', 'tanggallahir'], correct: 2 },
    wifi: { question: 'Yang AMAN dilakukan di WiFi publik?', options: ['Login mobile banking', 'Browsing biasa dengan VPN', 'Input data kartu kredit', 'Login email tanpa VPN'], correct: 1 },
    defacement: { question: 'Bagaimana website bisa di-deface?', options: ['Update rutin', 'SQL Injection', 'Pakai HTTPS', 'Backup berkala'], correct: 1 },
  };

  const handleCompleteModule = async () => {
    if (!selectedModule || !user) return;
    await completeModule(selectedModule.moduleID);
    await addPoints(selectedModule.pointReward);
    await awardBadge(selectedModule.badgeReward, selectedModule.title, `Selesaikan modul ${selectedModule.title}`, selectedModule.icon);
    if (user.completedModules.length === 0) {
      await awardBadge('first-steps', 'First Steps', 'Selesaikan modul pertama', '');
    }
    const updated = getCurrentUserSync();
    if (updated) setUser(updated);
    setSelectedModule(null);
    setQuizActive(false);
    setQuizAnswer(null);
    setQuizSubmitted(false);
  };

  if (!user) return null;

  // Module detail view
  if (selectedModule) {
    const quiz = moduleQuizzes[selectedModule.moduleID];
    const isCompleted = user.completedModules.includes(selectedModule.moduleID);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden">
        <motion.div className="absolute top-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />
        <div className="relative z-10 container mx-auto px-4 py-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-6">
            <button onClick={() => { setSelectedModule(null); setQuizActive(false); setQuizAnswer(null); setQuizSubmitted(false); }} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" /> Kembali
            </button>
            {isCompleted && <span className="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1.5 rounded-full border border-emerald-400/30">✓ Selesai</span>}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${selectedModule.color} mb-6`}>
              {renderIcon(selectedModule.category, "w-6 h-6 text-white")}
              <span className="text-white font-bold">{selectedModule.title}</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">{selectedModule.subtitle}</h2>

            <div className="space-y-4 mt-6">
              {selectedModule.content.map((line, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.03 * idx }}>
                  {line.startsWith('•') ? (
                    <p className="text-gray-300 pl-4 text-sm leading-relaxed">{line}</p>
                  ) : line.includes('Apa itu') || line.includes('Contoh') || line.includes('Cara') || line.includes('Modus') || line.includes('Kenapa') || line.includes('Sumber') || line.includes('Bahaya') || line.includes('Tips') || line.includes('Fakta') || line.includes('Serangan') || line.includes('JANGAN') || line.includes('Bagaimana') ? (
                    <h3 className="text-lg font-bold text-cyan-300 mt-4">{line}</h3>
                  ) : (
                    <p className="text-gray-200 leading-relaxed">{line}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Tips */}
            <div className="mt-8 bg-cyan-500/10 border border-cyan-400/20 rounded-2xl p-6">
              <h4 className="text-cyan-300 font-bold mb-3">Tips & Tricks:</h4>
              <ul className="space-y-2">
                {selectedModule.tips.map((tip, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini Quiz */}
            {!isCompleted && !quizActive && (
              <button onClick={() => setQuizActive(true)} className="mt-6 w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                Ambil Quiz untuk Selesaikan Modul
              </button>
            )}

            {quizActive && quiz && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="text-white font-bold mb-4">{quiz.question}</h4>
                <div className="space-y-3">
                  {quiz.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => !quizSubmitted && setQuizAnswer(idx)}
                      disabled={quizSubmitted}
                      className={`w-full text-left p-4 rounded-xl transition-all ${
                        quizSubmitted && idx === quiz.correct ? 'bg-emerald-500/30 border-2 border-emerald-400' :
                        quizSubmitted && idx === quizAnswer && idx !== quiz.correct ? 'bg-red-500/30 border-2 border-red-400' :
                        quizAnswer === idx ? 'bg-purple-500/30 border-2 border-purple-400' :
                        'bg-white/5 border-2 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-white text-sm">{String.fromCharCode(65 + idx)}. {opt}</span>
                    </button>
                  ))}
                </div>
                {!quizSubmitted && quizAnswer !== null && (
                  <button onClick={() => setQuizSubmitted(true)} className="mt-4 w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl">
                    Cek Jawaban
                  </button>
                )}
                {quizSubmitted && quizAnswer === quiz.correct && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <p className="mt-4 text-emerald-300 text-sm">Benar! Kamu paham materinya.</p>
                    <button onClick={handleCompleteModule} className="mt-3 w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl">
                      Klaim {selectedModule.pointReward} Poin + Badge
                    </button>
                  </motion.div>
                )}
                {quizSubmitted && quizAnswer !== quiz.correct && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <p className="mt-4 text-red-300 text-sm">Belum tepat. Baca lagi materinya dan coba lagi.</p>
                    <button onClick={() => { setQuizAnswer(null); setQuizSubmitted(false); }} className="mt-3 w-full py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all">
                      Coba Lagi
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    );
  }

  // Module list
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden">
      <motion.div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 10, repeat: Infinity }} />
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-8">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" /> Dashboard
          </button>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-lg px-4 py-2 rounded-full border border-white/10">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span className="text-white text-sm font-semibold">Modul Belajar</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Modul "Bahasa Anak Muda"</h1>
          <p className="text-gray-400">Belajar cyber security dengan bahasa yang asik dan mudah dipahami!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MODULES.map((mod, idx) => {
            const isCompleted = user.completedModules.includes(mod.moduleID);
            return (
              <motion.div
                key={mod.moduleID}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedModule(mod)}
                className="cursor-pointer group"
              >
                <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10 h-full transition-all group-hover:border-white/20 group-hover:bg-white/8">
                  {isCompleted && (
                    <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">✓</div>
                  )}
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center flex-shrink-0`}>
                      {renderIcon(mod.category, "w-8 h-8 text-white")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-sm mb-1">{mod.title}</h3>
                      <p className="text-gray-400 text-xs">{mod.subtitle}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-cyan-400">+{mod.pointReward} pts</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-xs text-amber-400">Badge</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

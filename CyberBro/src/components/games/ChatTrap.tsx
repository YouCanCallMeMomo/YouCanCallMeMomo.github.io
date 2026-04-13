import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, MessageCircle, Clock, Trophy, ShieldAlert, ShieldCheck, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getCurrentUserSync, addPoints, awardBadge, completeGame } from '../../gameStore';
import { Student } from '../../types';

interface ChatScenario {
  id: number;
  sender: string;
  avatar: string;
  platform: string;
  messages: string[];
  isDangerous: boolean;
  category: string;
  explanation: string;
}

const SCENARIOS: ChatScenario[] = [
  {
    id: 1,
    sender: 'Admin_BankBCA',
    avatar: '🏦',
    platform: 'WhatsApp',
    messages: [
      'Selamat siang, ini dari Bank BCA.',
      'Akun Anda terblokir karena aktivitas mencurigakan.',
      'Segera verifikasi data Anda di link berikut:',
      'https://bca-secure-verify.weebly.com/login',
      'Jika tidak dalam 24 jam, akun akan dinonaktifkan permanen.',
    ],
    isDangerous: true,
    category: 'Phishing',
    explanation: 'Bank resmi TIDAK pernah kirim link verifikasi lewat WhatsApp. URL-nya juga bukan domain resmi BCA (bca.co.id). Ini jelas phishing!',
  },
  {
    id: 2,
    sender: 'Ibu Guru Siti',
    avatar: '👩‍🏫',
    platform: 'WhatsApp',
    messages: [
      'Anak-anak, besok kumpul tugas paling lambat jam 3 sore ya.',
      'Upload di Google Classroom seperti biasa.',
      'Yang belum join kelasnya, kode kelasnya: abc123x',
      'Terima kasih 🙏',
    ],
    isDangerous: false,
    category: 'Legitimate',
    explanation: 'Pesan normal dari guru. Tidak ada link mencurigakan, tidak minta data pribadi, dan instruksinya jelas lewat platform resmi (Google Classroom).',
  },
  {
    id: 3,
    sender: 'GiveawayKingID',
    avatar: '🎁',
    platform: 'Instagram DM',
    messages: [
      'SELAMAT! 🎉🎉🎉',
      'Kamu terpilih sebagai pemenang iPhone 15 Pro Max!',
      'Untuk klaim hadiah, masukkan data kamu di:',
      'https://free-iphone-giveaway.blogspot.com',
      'Jangan lupa masukkan nomor KTP dan nomor HP ya!',
    ],
    isDangerous: true,
    category: 'Scam / Giveaway Palsu',
    explanation: '"Too good to be true" = SCAM. Nggak pernah ada giveaway yang minta KTP. Link-nya juga domain gratisan (blogspot). Mau nyolong identitas kamu!',
  },
  {
    id: 4,
    sender: 'Andi (Teman Kelas)',
    avatar: '🧑',
    platform: 'WhatsApp',
    messages: [
      'Bro, tugas MTK yang nomor 5 gimana ya?',
      'Gw udah coba tapi stuck 😭',
      'Tolong foto-in jawaban kamu dong',
      'Nanti gw traktir kantin deh hehe',
    ],
    isDangerous: false,
    category: 'Legitimate',
    explanation: 'Chat biasa dari teman. Nggak ada link mencurigakan, nggak minta data sensitif. Soal mau kasih jawaban atau nggak, itu urusan kamu sama guru 😄',
  },
  {
    id: 5,
    sender: 'CS_Shopee_Official',
    avatar: '🛒',
    platform: 'SMS',
    messages: [
      'Pesanan Anda bermasalah!',
      'Paket dengan nomor resi JNE938271 tertahan di gudang.',
      'Bayar biaya admin Rp 50.000 untuk melanjutkan pengiriman.',
      'Transfer ke: BCA 1234567890 a.n. Siti Aminah',
      'Konfirmasi ke WA: 0812-xxxx-xxxx',
    ],
    isDangerous: true,
    category: 'Penipuan Transfer',
    explanation: 'Shopee nggak pernah minta transfer ke rekening pribadi! Customer service resmi cuma lewat chat di aplikasi. Ini penipuan transfer!',
  },
  {
    id: 6,
    sender: 'Tokopedia',
    avatar: '🟢',
    platform: 'Email',
    messages: [
      'Halo, terima kasih sudah belanja di Tokopedia!',
      'Pesanan #INV-2026-12345 sudah dikirim.',
      'Kurir: JNE | Resi: TLKB001234567',
      'Lacak pesanan kamu di aplikasi Tokopedia.',
      'Jika ada pertanyaan, hubungi Pusat Bantuan di aplikasi.',
    ],
    isDangerous: false,
    category: 'Legitimate',
    explanation: 'Notifikasi pesanan normal dari Tokopedia. Tidak minta data pribadi, mengarahkan ke aplikasi resmi, dan format invoice-nya profesional.',
  },
  {
    id: 7,
    sender: 'FBI_Warning',
    avatar: '🔒',
    platform: 'Pop-up Browser',
    messages: [
      '⚠️ WARNING! YOUR DEVICE IS INFECTED! ⚠️',
      'We have detected 3 VIRUSES on your phone!',
      'Your personal data is at risk of being stolen!',
      'CLICK HERE TO INSTALL ANTIVIRUS NOW!',
      'If you ignore this, your phone will be LOCKED!',
    ],
    isDangerous: true,
    category: 'Scareware / Fake Alert',
    explanation: 'FBI dan antivirus nggak pernah kirim pop-up di browser! Ini scareware yang mau kamu install malware. JANGAN PERNAH klik pop-up kayak gini!',
  },
  {
    id: 8,
    sender: 'Unknown Number',
    avatar: '📱',
    platform: 'WhatsApp',
    messages: [
      'Kak, maaf ganggu 🙏',
      'Saya salah kirim kode OTP ke nomor kakak.',
      'Bisa tolong forward kode yang masuk tadi?',
      'Cuma 6 digit kok kak, saya lagi butuh banget.',
      'Makasih banyak ya kak 🙏🙏🙏',
    ],
    isDangerous: true,
    category: 'Social Engineering (OTP Theft)',
    explanation: 'KLASIK! OTP itu dikirim ke NOMOR KAMU karena ada yang nyoba login ke AKUN KAMU. Kalau di-forward, akun kamu bisa diambil alih!',
  },
  {
    id: 9,
    sender: 'Mama',
    avatar: '👩',
    platform: 'WhatsApp',
    messages: [
      'Nak, mama lagi di pasar.',
      'Tolong beliin pulsa mama ya 50rb.',
      'Pulsa mama habis nih.',
      'Nanti mama ganti uangnya.',
    ],
    isDangerous: false,
    category: 'Legitimate',
    explanation: 'Pesan normal dari orang tua. Tapi kalau ragu, coba telepon balik untuk verifikasi. Kadang nomor bisa dipalsukan (caller ID spoofing).',
  },
  {
    id: 10,
    sender: 'HR_Company_XYZ',
    avatar: '💼',
    platform: 'Email',
    messages: [
      'Kamu diterima magang di perusahaan kami!',
      'Tapi sebelumnya, kamu harus bayar biaya training Rp 500.000.',
      'Transfer ke rekening BRI 9876543210.',
      'Kirim bukti transfer ke email ini.',
      'Setelah itu kami akan kirim surat penerimaan.',
    ],
    isDangerous: true,
    category: 'Job Scam',
    explanation: 'Perusahaan resmi TIDAK pernah minta bayar untuk diterima kerja/magang! Ini penipuan berkedok lowongan kerja.',
  },
];

export default function ChatTrap() {
  const navigate = useNavigate();
  const [user, setUser] = useState<Student | null>(null);
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'result'>('intro');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const currentUser = getCurrentUserSync();
    if (!currentUser) { navigate('/register'); return; }
    setUser(currentUser);
  }, [navigate]);

  // Animate messages appearing
  useEffect(() => {
    if (gameState !== 'playing' || answered) return;
    const scenario = SCENARIOS[currentIdx];
    if (messageIndex < scenario.messages.length) {
      const timer = setTimeout(() => setMessageIndex(i => i + 1), 600);
      return () => clearTimeout(timer);
    }
  }, [gameState, currentIdx, messageIndex, answered]);

  const startGame = () => {
    setGameState('playing');
    setCurrentIdx(0);
    setScore(0);
    setTotalCorrect(0);
    setAnswered(false);
    setUserAnswer(null);
    setMessageIndex(0);
  };

  const classify = (isDangerous: boolean) => {
    const scenario = SCENARIOS[currentIdx];
    const correct = isDangerous === scenario.isDangerous;
    setUserAnswer(isDangerous);
    setAnswered(true);
    if (correct) {
      setScore(s => s + 10);
      setTotalCorrect(t => t + 1);
    }
  };

  const next = () => {
    if (currentIdx < SCENARIOS.length - 1) {
      setCurrentIdx(i => i + 1);
      setAnswered(false);
      setUserAnswer(null);
      setMessageIndex(0);
    } else {
      endGame();
    }
  };

  const endGame = async () => {
    setGameState('result');
    const finalScore = score;
    if (finalScore >= 70) {
      await addPoints(180);
      await awardBadge('chat-detective', 'Chat Detective', 'Selesaikan game Chat Trap', '');
      await completeGame('chat-trap');
    } else {
      await addPoints(Math.floor(finalScore / 2));
    }
    const updated = getCurrentUserSync();
    if (updated) setUser(updated);
  };

  if (!user) return null;

  const scenario = SCENARIOS[currentIdx];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 relative overflow-hidden">
      <motion.div className="absolute top-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="absolute bottom-10 left-10 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" animate={{ scale: [1.2, 1, 1.2] }} transition={{ duration: 10, repeat: Infinity }} />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" /> Dashboard
          </button>
          <div className="flex items-center gap-2 bg-purple-500/10 backdrop-blur-lg px-4 py-2 rounded-full border border-purple-400/20">
            <MessageCircle className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-semibold">The Chat Trap</span>
          </div>
        </motion.div>

        {/* INTRO */}
        {gameState === 'intro' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center"><MessageCircle className="w-8 h-8 text-white" /></div>
            <h1 className="text-3xl font-bold text-white mb-4">The Chat Trap</h1>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              Kamu akan menerima berbagai pesan chat. Tugasmu: tentukan mana yang <span className="text-red-400 font-bold">BAHAYA (Scam/Phishing)</span> dan mana yang <span className="text-emerald-400 font-bold">AMAN (Legitimate)</span>!
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-8">
              <div className="bg-red-500/10 rounded-xl p-4 border border-red-400/20">
                <ShieldAlert className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <p className="text-red-300 font-bold text-sm">BAHAYA</p>
                <p className="text-gray-400 text-xs mt-1">Phishing, Scam, Malware</p>
              </div>
              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-400/20">
                <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <p className="text-emerald-300 font-bold text-sm">AMAN</p>
                <p className="text-gray-400 text-xs mt-1">Pesan legitimate</p>
              </div>
            </div>
            <button onClick={startGame} className="px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all text-lg">
              Mulai Deteksi
            </button>
          </motion.div>
        )}

        {/* PLAYING */}
        {gameState === 'playing' && (
          <>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm">Chat {currentIdx + 1}/{SCENARIOS.length}</span>
              <div className="flex items-center gap-2 bg-amber-500/10 rounded-full px-4 py-2 border border-amber-400/20">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300 font-bold">{score}</span>
              </div>
            </div>

            <div className="w-full bg-white/5 rounded-full h-1.5 mb-6 overflow-hidden">
              <motion.div animate={{ width: `${((currentIdx + 1) / SCENARIOS.length) * 100}%` }} className="h-full bg-gradient-to-r from-purple-500 to-violet-500" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Chat Window */}
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
                  {/* Chat Header */}
                  <div className="bg-white/5 px-5 py-3 border-b border-white/10 flex items-center gap-3">
                    <span className="text-2xl">{scenario.avatar}</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{scenario.sender}</p>
                      <p className="text-gray-500 text-xs">{scenario.platform}</p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="p-5 space-y-3 min-h-[200px]">
                    {scenario.messages.slice(0, messageIndex).map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex"
                      >
                        <div className={`max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-2.5 ${
                          msg.includes('http') || msg.includes('.com') || msg.includes('.html')
                            ? 'bg-blue-500/20 border border-blue-400/30'
                            : 'bg-white/10'
                        }`}>
                          <p className={`text-sm ${
                            msg.includes('http') || msg.includes('.com') || msg.includes('.html')
                              ? 'text-blue-300 underline'
                              : 'text-gray-200'
                          }`}>{msg}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  {messageIndex >= scenario.messages.length && !answered && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-5 pt-0">
                      <p className="text-gray-400 text-sm mb-3 text-center">Chat ini AMAN atau BAHAYA?</p>
                      <div className="grid grid-cols-2 gap-3">
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => classify(true)}
                          className="py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold rounded-xl flex items-center justify-center gap-2"
                        >
                          <ShieldAlert className="w-5 h-5" /> BAHAYA!
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => classify(false)}
                          className="py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl flex items-center justify-center gap-2"
                        >
                          <ShieldCheck className="w-5 h-5" /> AMAN
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Feedback */}
                {answered && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                    <div className={`rounded-2xl p-5 border ${
                      (userAnswer === scenario.isDangerous)
                        ? 'bg-emerald-500/10 border-emerald-400/30'
                        : 'bg-red-500/10 border-red-400/30'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        {(userAnswer === scenario.isDangerous) ?
                          <><ShieldCheck className="w-5 h-5 text-emerald-400" /><span className="text-emerald-300 font-bold">BENAR! +10 poin</span></> :
                          <><AlertTriangle className="w-5 h-5 text-red-400" /><span className="text-red-300 font-bold">SALAH!</span></>
                        }
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${scenario.isDangerous ? 'bg-red-500/20 text-red-300' : 'bg-emerald-500/20 text-emerald-300'}`}>
                          {scenario.category}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">{scenario.explanation}</p>
                    </div>
                    <button onClick={next} className="mt-4 w-full py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold rounded-xl">
                      {currentIdx < SCENARIOS.length - 1 ? 'Chat Berikutnya →' : 'Lihat Hasil'}
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </>
        )}

        {/* RESULT */}
        {gameState === 'result' && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center"><Trophy className="w-8 h-8 text-white" /></div>
            <h2 className="text-3xl font-bold text-white mb-2">Deteksi Selesai!</h2>
            <div className="text-5xl font-bold text-purple-400 mb-2">{totalCorrect}/{SCENARIOS.length}</div>
            <p className="text-gray-400 mb-2">Chat terdeteksi dengan benar</p>
            <div className="text-2xl font-bold text-amber-400 mb-6">Skor: {score}</div>
            {score >= 70 && (
              <div className="bg-purple-500/10 border border-purple-400/30 rounded-xl p-4 mb-6 inline-block">
                <p className="text-purple-300 font-bold">Badge "Chat Detective" Unlocked! +180 poin!</p>
              </div>
            )}
            {score < 70 && (
              <p className="text-gray-400 mb-6 text-sm">Dapatkan 70+ poin untuk unlock badge. Coba lagi!</p>
            )}
            <div className="flex gap-4 justify-center">
              <button onClick={startGame} className="px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold rounded-xl">Main Lagi</button>
              <button onClick={() => navigate('/')} className="px-6 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20">Dashboard</button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

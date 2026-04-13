import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Database, Terminal, Clock, Trophy, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getCurrentUserSync, addPoints, awardBadge, completeGame } from '../../gameStore';
import { Student } from '../../types';

interface SqliData {
  id: number;
  inputField: string;
  payload: string;
  isSqli: boolean;
  reason: string;
}

const SQLI_PAYLOADS: SqliData[] = [
  { id: 1, inputField: 'Username', payload: 'admin\' --', isSqli: true, reason: 'Karakter \' (quote) menutup string, dan -- menjadikan sisa query sebagai komentar. Ini untuk by-pass login!' },
  { id: 2, inputField: 'Search Product', payload: 'baju koko putih lengan panjang', isSqli: false, reason: 'Input pencarian teks normal tanpa karakter berbahaya.' },
  { id: 3, inputField: 'User ID', payload: '1 OR 1=1', isSqli: true, reason: 'Kondisi OR 1=1 akan selalu TRUE. Ini memaksa database mengembalikan semua data dari tabel.' },
  { id: 4, inputField: 'Age', payload: '25', isSqli: false, reason: 'Input angka integer wajar.' },
  { id: 5, inputField: 'Category', payload: 'shoes\' UNION SELECT null, password FROM users--', isSqli: true, reason: 'Ini Union-Based SQLi yang dirancang untuk membocorkan kolom password dari tabel users.' },
  { id: 6, inputField: 'Email', payload: 'johndoe@gmail.com', isSqli: false, reason: 'Format email standar yang aman.' },
  { id: 7, inputField: 'Order ID', payload: '1234; DROP TABLE orders', isSqli: true, reason: 'Penyisipan instruksi DROP TABLE bisa menghapus struktur tabel jika aplikasi memiliki hak akses yang salah.' },
  { id: 8, inputField: 'Comment', payload: '<script>alert("hello")</script>', isSqli: false, reason: 'Walaupun ini berbahaya, ini adalah payload XSS (Cross Site Scripting), BUKAN SQL Injection.' },
  { id: 9, inputField: 'Item Name', payload: '" OR ""="', isSqli: true, reason: 'Sama seperti OR 1=1, namun menggunakan teknik double-quote string evasion.' },
  { id: 10, inputField: 'Date', payload: '2023-12-01', isSqli: false, reason: 'Format tanggal yang normal.' },
];

export default function SqliScanner() {
  const navigate = useNavigate();
  const [user, setUser] = useState<Student | null>(null);
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'result'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'safe' | 'sqli'>>({});
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const currentUser = getCurrentUserSync();
    if (!currentUser) { navigate('/register'); return; }
    setUser(currentUser);
  }, [navigate]);

  useEffect(() => {
    if (gameState !== 'playing') return;
    if (timeLeft <= 0) { endGame(); return; }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const startGame = () => {
    setGameState('playing');
    setCurrentIndex(0);
    setAnswers({});
    setTimeLeft(90);
    setScore(0);
    setShowResult(false);
  };

  const classify = (id: number, answer: 'safe' | 'sqli') => {
    const item = SQLI_PAYLOADS.find(p => p.id === id);
    if (!item) return;
    const isCorrect = (answer === 'sqli' && item.isSqli) || (answer === 'safe' && !item.isSqli);
    setAnswers(prev => ({ ...prev, [id]: answer }));
    setShowResult(true);
    if (isCorrect) setScore(s => s + 10);
  };

  const nextPayload = () => {
    setShowResult(false);
    if (currentIndex < SQLI_PAYLOADS.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      endGame();
    }
  };

  const endGame = useCallback(async () => {
    setGameState('result');
    if (score >= 80) {
      await addPoints(150);
      await awardBadge('sqli-defender', 'SQLi Defender', 'Selesaikan game SQLi Scanner', '');
      await completeGame('sqli-scanner');
    } else {
      await addPoints(Math.floor(score / 2));
    }
    const updated = getCurrentUserSync();
    if (updated) setUser(updated);
  }, [score]);

  if (!user) return null;

  const currentPayload = SQLI_PAYLOADS[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-orange-950/40 to-slate-950 relative overflow-hidden">
      <motion.div className="absolute top-10 right-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="absolute bottom-10 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" animate={{ scale: [1.2, 1, 1.2] }} transition={{ duration: 10, repeat: Infinity }} />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-3xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" /> Dashboard
          </button>
          <div className="flex items-center gap-2 bg-orange-500/10 backdrop-blur-lg px-4 py-2 rounded-full border border-orange-400/20">
            <Database className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-semibold">SQLi Scanner</span>
          </div>
        </motion.div>

        {/* INTRO */}
        {gameState === 'intro' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center"><Database className="w-8 h-8 text-white" /></div>
            <h1 className="text-3xl font-bold text-white mb-4">SQL Injection Scanner</h1>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              Firewall mendeteksi banyak input aneh menuju Database! Cek apakah input yang masuk itu adalah form NORMAL ataukah terdapat skrip injeksi SQL. Waktumu 90 detik!
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-8">
              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-400/20">
                <p className="text-emerald-300 font-bold text-sm">AMAN (NORMAL)</p>
                <p className="text-gray-400 text-xs mt-1">Input pengguna biasa</p>
              </div>
              <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-400/20">
                <p className="text-orange-300 font-bold text-sm">SQL INJECTION</p>
                <p className="text-gray-400 text-xs mt-1">Mengandung sintaks SQL</p>
              </div>
            </div>
            <button onClick={startGame} className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all text-lg">
              Mulai Scanning
            </button>
          </motion.div>
        )}

        {/* PLAYING */}
        {gameState === 'playing' && currentPayload && (
          <>
            {/* Timer & Score */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                <Clock className={`w-4 h-4 ${timeLeft <= 15 ? 'text-red-400 animate-pulse' : 'text-gray-400'}`} />
                <span className={`font-mono font-bold ${timeLeft <= 15 ? 'text-red-400' : 'text-white'}`}>{timeLeft}s</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">{currentIndex + 1}/{SQLI_PAYLOADS.length}</span>
                <div className="flex items-center gap-2 bg-amber-500/10 rounded-full px-4 py-2 border border-amber-400/20">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-300 font-bold">{score}</span>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="w-full bg-white/5 rounded-full h-1.5 mb-6 overflow-hidden">
              <motion.div animate={{ width: `${((currentIndex + 1) / SQLI_PAYLOADS.length) * 100}%` }} className="h-full bg-gradient-to-r from-orange-500 to-amber-500" />
            </div>

            {/* Analysis Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPayload.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              >
                <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50 mb-6 font-mono relative overflow-hidden">
                  <div className="flex items-center gap-2 text-orange-500 text-xs mb-4">
                    <Terminal className="w-3 h-3" /> REQUEST PAYLOAD INTERCEPTED
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-gray-500 text-xs block mb-1">FIELD TARGET:</span>
                      <span className="text-orange-300 text-sm bg-orange-900/30 px-2 py-1 rounded">{currentPayload.inputField}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs block mb-1">USER INPUT VALUE:</span>
                      <p className="text-amber-400 font-bold text-lg break-all leading-relaxed bg-black/50 p-4 rounded-lg border border-amber-500/20">
                        {currentPayload.payload}
                      </p>
                    </div>
                  </div>
                </div>

                {!showResult ? (
                  <div className="grid grid-cols-2 gap-4">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => classify(currentPayload.id, 'safe')}
                      className="py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
                    >
                      AMAN / NORMAL
                    </motion.button>
                     <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => classify(currentPayload.id, 'sqli')}
                      className="py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2"
                    >
                       <AlertTriangle className="w-5 h-5"/> SQL INJECTION
                    </motion.button>
                  </div>
                ) : (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    {(answers[currentPayload.id] === 'sqli' && currentPayload.isSqli) || (answers[currentPayload.id] === 'safe' && !currentPayload.isSqli) ? (
                      <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-xl p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2"><CheckCircle className="w-5 h-5 text-emerald-400" /><span className="text-emerald-300 font-bold">BENAR! (+10 poin)</span></div>
                        <p className="text-gray-300 text-sm">{currentPayload.reason}</p>
                      </div>
                    ) : (
                      <div className="bg-red-500/10 border border-red-400/30 rounded-xl p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2"><XCircle className="w-5 h-5 text-red-400" /><span className="text-red-300 font-bold">SALAH! Deteksi Meleset.</span></div>
                        <p className="text-gray-300 text-sm">{currentPayload.reason}</p>
                      </div>
                    )}
                    <button onClick={nextPayload} className="w-full py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all">
                      {currentIndex < SQLI_PAYLOADS.length - 1 ? 'Payload Berikutnya →' : 'Lihat Hasil Scan'}
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
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center"><Database className="w-8 h-8 text-white" /></div>
            <h2 className="text-3xl font-bold text-white mb-2">Scanning Selesai!</h2>
            <div className="text-5xl font-bold text-amber-400 mb-2">{score}</div>
            <p className="text-gray-400 mb-6">dari {SQLI_PAYLOADS.length * 10} poin maksimal</p>

            {score >= 80 && (
              <div className="bg-amber-500/10 border border-amber-400/30 rounded-xl p-4 mb-6 inline-block">
                <p className="text-amber-300 font-bold">Badge "SQLi Defender" Unlocked! +150 poin!</p>
              </div>
            )}
            {score < 80 && (
              <p className="text-gray-400 mb-6 text-sm">Dapatkan minimal 80 poin untuk unlock badge defender. Coba lagi!</p>
            )}

            <div className="flex gap-4 justify-center">
              <button onClick={startGame} className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl">
                Scan Ulang
              </button>
              <button onClick={() => navigate('/')} className="px-6 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20">
                Dashboard
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

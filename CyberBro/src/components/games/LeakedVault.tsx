import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Lock, Eye, EyeOff, Clock, Trophy, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getCurrentUserSync, addPoints, awardBadge, completeGame } from '../../gameStore';
import { Student } from '../../types';

interface LeakedPassword {
  id: number;
  username: string;
  password: string;
  isWeak: boolean;
  reason: string;
}

const LEAKED_PASSWORDS: LeakedPassword[] = [
  { id: 1, username: 'admin@sekolah.id', password: '123456', isWeak: true, reason: 'Password paling umum di dunia! Mudah ditebak.' },
  { id: 2, username: 'budi.santoso', password: 'P@ssw0rd!2024', isWeak: false, reason: 'Password cukup kuat dengan kombinasi huruf, angka, dan simbol.' },
  { id: 3, username: 'siti_rahayu', password: 'siti2008', isWeak: true, reason: 'Mengandung nama + tahun lahir. Mudah ditebak dari media sosial.' },
  { id: 4, username: 'guru.matematika', password: 'password', isWeak: true, reason: 'Password "password" ada di setiap wordlist hacker!' },
  { id: 5, username: 'andi_gamer99', password: 'Xk9$mP2!qL7@nR', isWeak: false, reason: 'Password acak yang sangat kuat. Sulit di-bruteforce.' },
  { id: 6, username: 'kepala.sekolah', password: 'sekolahku123', isWeak: true, reason: 'Kata umum + angka berturut. Sangat mudah ditebak.' },
  { id: 7, username: 'dina_cantik', password: 'iloveyou', isWeak: true, reason: 'Masuk Top 10 password paling sering dipakai!' },
  { id: 8, username: 'server.admin', password: 'G#7kL!mN$9pQ2x', isWeak: false, reason: 'Panjang dan acak. Butuh miliaran tahun untuk di-crack.' },
  { id: 9, username: 'roni.driver', password: 'qwerty', isWeak: true, reason: 'Pola keyboard berurutan. Sudah ada di semua wordlist.' },
  { id: 10, username: 'lab.komputer', password: 'M3l4tiPut1h!#Hy', isWeak: false, reason: 'Passphrase dengan substitusi karakter yang kreatif.' },
  { id: 11, username: 'lisa_kpop', password: 'blackpink4ever', isWeak: true, reason: 'Kata populer yang mudah ditebak dengan dictionary attack.' },
  { id: 12, username: 'security.team', password: 'vR$8nK#2mP!xQ5z', isWeak: false, reason: 'Password random yang sangat aman. Hampir mustahil di-crack.' },
];

export default function LeakedVault() {
  const navigate = useNavigate();
  const [user, setUser] = useState<Student | null>(null);
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'result'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'weak' | 'strong'>>({});
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90);
  const [score, setScore] = useState(0);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

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
    setRevealed({});
    setShowResult(false);
  };

  const classify = (id: number, answer: 'weak' | 'strong') => {
    const pw = LEAKED_PASSWORDS.find(p => p.id === id);
    if (!pw) return;
    const isCorrect = (answer === 'weak' && pw.isWeak) || (answer === 'strong' && !pw.isWeak);
    setAnswers(prev => ({ ...prev, [id]: answer }));
    setShowResult(true);
    if (isCorrect) setScore(s => s + 10);
  };

  const nextPassword = () => {
    setShowResult(false);
    if (currentIndex < LEAKED_PASSWORDS.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      endGame();
    }
  };

  const endGame = useCallback(async () => {
    setGameState('result');
    if (score >= 80) {
      await addPoints(150);
      await awardBadge('vault-breaker', 'Vault Breaker', 'Selesaikan game Leaked Vault', '');
      await completeGame('leaked-vault');
    } else {
      await addPoints(Math.floor(score / 2));
    }
    const updated = getCurrentUserSync();
    if (updated) setUser(updated);
  }, [score]);

  if (!user) return null;

  const currentPw = LEAKED_PASSWORDS[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950/50 to-slate-950 relative overflow-hidden">
      <motion.div className="absolute top-10 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="absolute bottom-10 left-10 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl" animate={{ scale: [1.2, 1, 1.2] }} transition={{ duration: 10, repeat: Infinity }} />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-3xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" /> Dashboard
          </button>
          <div className="flex items-center gap-2 bg-red-500/10 backdrop-blur-lg px-4 py-2 rounded-full border border-red-400/20">
            <Lock className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-semibold">The Leaked Vault</span>
          </div>
        </motion.div>

        {/* INTRO */}
        {gameState === 'intro' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center"><Lock className="w-8 h-8 text-white" /></div>
            <h1 className="text-3xl font-bold text-white mb-4">The Leaked Vault</h1>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              Database password bocor ditemukan! Tugasmu adalah mengidentifikasi password yang <span className="text-red-400 font-bold">LEMAH</span> dan yang <span className="text-emerald-400 font-bold">KUAT</span>. Kamu punya 90 detik!
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-8">
              <div className="bg-red-500/10 rounded-xl p-4 border border-red-400/20">
                <p className="text-red-300 font-bold text-sm">LEMAH</p>
                <p className="text-gray-400 text-xs mt-1">Password mudah ditebak</p>
              </div>
              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-400/20">
                <p className="text-emerald-300 font-bold text-sm">KUAT</p>
                <p className="text-gray-400 text-xs mt-1">Password susah di-crack</p>
              </div>
            </div>
            <button onClick={startGame} className="px-8 py-4 bg-gradient-to-r from-red-500 to-rose-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all text-lg">
              Mulai Misi
            </button>
          </motion.div>
        )}

        {/* PLAYING */}
        {gameState === 'playing' && currentPw && (
          <>
            {/* Timer & Score */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                <Clock className={`w-4 h-4 ${timeLeft <= 15 ? 'text-red-400 animate-pulse' : 'text-gray-400'}`} />
                <span className={`font-mono font-bold ${timeLeft <= 15 ? 'text-red-400' : 'text-white'}`}>{timeLeft}s</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">{currentIndex + 1}/{LEAKED_PASSWORDS.length}</span>
                <div className="flex items-center gap-2 bg-amber-500/10 rounded-full px-4 py-2 border border-amber-400/20">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-300 font-bold">{score}</span>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="w-full bg-white/5 rounded-full h-1.5 mb-6 overflow-hidden">
              <motion.div animate={{ width: `${((currentIndex + 1) / LEAKED_PASSWORDS.length) * 100}%` }} className="h-full bg-gradient-to-r from-red-500 to-rose-500" />
            </div>

            {/* Password Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPw.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              >
                <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50 mb-6 font-mono">
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                    <AlertTriangle className="w-3 h-3" /> LEAKED DATABASE ENTRY
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 text-sm w-20">User:</span>
                      <span className="text-cyan-300 text-sm">{currentPw.username}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 text-sm w-20">Pass:</span>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-300 text-sm">{revealed[currentPw.id] ? currentPw.password : '•'.repeat(currentPw.password.length)}</span>
                        <button onClick={() => setRevealed(r => ({ ...r, [currentPw.id]: !r[currentPw.id] }))} className="text-gray-500 hover:text-white">
                          {revealed[currentPw.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {!showResult ? (
                  <div className="grid grid-cols-2 gap-4">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => classify(currentPw.id, 'weak')}
                      className="py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all"
                    >
                      LEMAH
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => classify(currentPw.id, 'strong')}
                      className="py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
                    >
                      KUAT
                    </motion.button>
                  </div>
                ) : (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    {(answers[currentPw.id] === 'weak' && currentPw.isWeak) || (answers[currentPw.id] === 'strong' && !currentPw.isWeak) ? (
                      <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-xl p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2"><CheckCircle className="w-5 h-5 text-emerald-400" /><span className="text-emerald-300 font-bold">BENAR! +10 poin</span></div>
                        <p className="text-gray-300 text-sm">{currentPw.reason}</p>
                      </div>
                    ) : (
                      <div className="bg-red-500/10 border border-red-400/30 rounded-xl p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2"><XCircle className="w-5 h-5 text-red-400" /><span className="text-red-300 font-bold">SALAH!</span></div>
                        <p className="text-gray-300 text-sm">{currentPw.reason}</p>
                      </div>
                    )}
                    <button onClick={nextPassword} className="w-full py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all">
                      {currentIndex < LEAKED_PASSWORDS.length - 1 ? 'Password Berikutnya →' : 'Lihat Hasil'}
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
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center"><Trophy className="w-8 h-8 text-white" /></div>
            <h2 className="text-3xl font-bold text-white mb-2">Misi Selesai!</h2>
            <div className="text-5xl font-bold text-amber-400 mb-2">{score}</div>
            <p className="text-gray-400 mb-6">dari {LEAKED_PASSWORDS.length * 10} poin maksimal</p>

            {score >= 80 && (
              <div className="bg-amber-500/10 border border-amber-400/30 rounded-xl p-4 mb-6 inline-block">
                <p className="text-amber-300 font-bold">Badge "Vault Breaker" Unlocked! +150 poin!</p>
              </div>
            )}
            {score < 80 && (
              <p className="text-gray-400 mb-6 text-sm">Dapatkan minimal 80 poin untuk unlock badge. Coba lagi!</p>
            )}

            <div className="flex gap-4 justify-center">
              <button onClick={startGame} className="px-6 py-3 bg-gradient-to-r from-red-500 to-rose-500 text-white font-bold rounded-xl">
                Main Lagi
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

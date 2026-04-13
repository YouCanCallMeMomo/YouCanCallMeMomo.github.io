import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Clock, Trophy, Search, Eye, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getCurrentUserSync, addPoints, awardBadge, completeGame } from '../../gameStore';
import { Student } from '../../types';

interface WebElement {
  id: number;
  label: string;
  original: string;
  defaced: string;
  found: boolean;
  x: number;
  y: number;
  type: 'text' | 'link' | 'image' | 'button';
}

interface Round {
  id: number;
  title: string;
  siteType: string;
  elements: WebElement[];
}

const ROUNDS: Round[] = [
  {
    id: 1,
    title: 'Website Sekolah SMP Maju',
    siteType: 'school',
    elements: [
      { id: 1, label: 'Judul Halaman', original: 'SMP Negeri 1 Maju Bersama', defaced: 'H4CK3D BY DARK ARMY 🏴‍☠️', found: false, x: 30, y: 8, type: 'text' },
      { id: 2, label: 'Logo Sekolah', original: '🏫', defaced: '💀', found: false, x: 8, y: 8, type: 'image' },
      { id: 3, label: 'Menu Beranda', original: 'Beranda', defaced: 'pwned.html', found: false, x: 10, y: 22, type: 'link' },
      { id: 4, label: 'Pengumuman', original: 'Pendaftaran Siswa Baru 2026', defaced: 'WE OWN YOUR SERVER LOL', found: false, x: 10, y: 45, type: 'text' },
      { id: 5, label: 'Tombol Daftar', original: 'Daftar Sekarang', defaced: 'GET REKT', found: false, x: 10, y: 70, type: 'button' },
      { id: 6, label: 'Footer Copyright', original: '© 2026 SMP Negeri 1', defaced: '© DARK ARMY WAS HERE', found: false, x: 20, y: 90, type: 'text' },
    ],
  },
  {
    id: 2,
    title: 'Toko Online "Belanja Yuk"',
    siteType: 'shop',
    elements: [
      { id: 1, label: 'Nama Toko', original: 'Belanja Yuk!', defaced: 'SCAMMED BY X-CREW', found: false, x: 30, y: 8, type: 'text' },
      { id: 2, label: 'Harga Produk', original: 'Rp 150.000', defaced: 'Rp 0 (FREE HACK)', found: false, x: 12, y: 50, type: 'text' },
      { id: 3, label: 'Tombol Beli', original: '🛒 Beli Sekarang', defaced: '💣 BOOM!', found: false, x: 12, y: 70, type: 'button' },
      { id: 4, label: 'Rating Produk', original: '⭐⭐⭐⭐⭐', defaced: '💀💀💀💀💀', found: false, x: 55, y: 50, type: 'text' },
      { id: 5, label: 'Link Kebijakan', original: 'Kebijakan Privasi', defaced: 'your-data-leaked.txt', found: false, x: 30, y: 90, type: 'link' },
    ],
  },
  {
    id: 3,
    title: 'Portal Berita "Info Kini"',
    siteType: 'news',
    elements: [
      { id: 1, label: 'Headline Berita', original: 'Indonesia Juara Olimpiade Sains!', defaced: 'INDONESIA GOT HACKED LMAO', found: false, x: 10, y: 30, type: 'text' },
      { id: 2, label: 'Nama Media', original: 'Info Kini', defaced: 'FAKE NEWS BY H4X0R', found: false, x: 30, y: 8, type: 'text' },
      { id: 3, label: 'Link Trending', original: '#Trending', defaced: '#DEFACED', found: false, x: 70, y: 25, type: 'link' },
      { id: 4, label: 'Iklan Banner', original: 'Promo Akhir Tahun!', defaced: 'YOUR PC HAS VIRUS!!!', found: false, x: 70, y: 55, type: 'text' },
      { id: 5, label: 'Tombol Subscribe', original: 'Subscribe Newsletter', defaced: 'SUBSCRIBE 2 HACK', found: false, x: 70, y: 80, type: 'button' },
      { id: 6, label: 'Tanggal Artikel', original: '1 April 2026', defaced: '1337 H4CK 2026', found: false, x: 10, y: 50, type: 'text' },
      { id: 7, label: 'Nama Penulis', original: 'Oleh: Redaksi', defaced: 'Oleh: Anonymous', found: false, x: 10, y: 55, type: 'text' },
    ],
  },
];

export default function DefacementScanner() {
  const navigate = useNavigate();
  const [user, setUser] = useState<Student | null>(null);
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'result'>('intro');
  const [currentRound, setCurrentRound] = useState(0);
  const [elements, setElements] = useState<WebElement[]>([]);
  const [timeLeft, setTimeLeft] = useState(45);
  const [totalScore, setTotalScore] = useState(0);
  const [foundCount, setFoundCount] = useState(0);
  const [showRoundResult, setShowRoundResult] = useState(false);
  const [lastClickCorrect, setLastClickCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUserSync();
    if (!currentUser) { navigate('/register'); return; }
    setUser(currentUser);
  }, [navigate]);

  useEffect(() => {
    if (gameState !== 'playing' || showRoundResult) return;
    if (timeLeft <= 0) { finishRound(); return; }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [gameState, timeLeft, showRoundResult]);

  const startGame = () => {
    setGameState('playing');
    setCurrentRound(0);
    setTotalScore(0);
    startRound(0);
  };

  const startRound = (roundIdx: number) => {
    setElements(ROUNDS[roundIdx].elements.map(e => ({ ...e, found: false })));
    setTimeLeft(45);
    setFoundCount(0);
    setShowRoundResult(false);
    setLastClickCorrect(null);
  };

  const clickElement = (id: number) => {
    if (showRoundResult) return;
    const el = elements.find(e => e.id === id);
    if (!el || el.found) return;

    setElements(prev => prev.map(e => e.id === id ? { ...e, found: true } : e));
    setFoundCount(f => f + 1);
    setTotalScore(s => s + 15 + Math.max(0, timeLeft));
    setLastClickCorrect(true);

    // Check if all found
    const allFound = elements.filter(e => !e.found).length <= 1;
    if (allFound) {
      setTimeout(() => finishRound(), 500);
    }
  };

  const finishRound = useCallback(() => {
    setShowRoundResult(true);
  }, []);

  const nextRound = () => {
    if (currentRound < ROUNDS.length - 1) {
      const next = currentRound + 1;
      setCurrentRound(next);
      startRound(next);
    } else {
      endGame();
    }
  };

  const endGame = async () => {
    setGameState('result');
    if (totalScore >= 200) {
      await addPoints(200);
      await awardBadge('web-guardian', 'Web Guardian', 'Selesaikan game Defacement Scanner', '');
      await completeGame('defacement-scanner');
    } else {
      await addPoints(Math.floor(totalScore / 3));
    }
    const updated = getCurrentUserSync();
    if (updated) setUser(updated);
  };

  if (!user) return null;

  const round = ROUNDS[currentRound];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-amber-950/30 to-slate-950 relative overflow-hidden">
      <motion.div className="absolute top-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" /> Dashboard
          </button>
          <div className="flex items-center gap-2 bg-amber-500/10 backdrop-blur-lg px-4 py-2 rounded-full border border-amber-400/20">
            <Search className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-semibold">Defacement Scanner</span>
          </div>
        </motion.div>

        {/* INTRO */}
        {gameState === 'intro' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center"><Search className="w-8 h-8 text-white" /></div>
            <h1 className="text-3xl font-bold text-white mb-4">The Defacement Scanner</h1>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              Website telah di-deface oleh hacker! Tugasmu adalah menemukan semua elemen yang telah diubah. Klik elemen yang mencurigakan sebelum waktu habis!
            </p>
            <div className="bg-amber-500/10 border border-amber-400/20 rounded-xl p-4 mb-8 max-w-sm mx-auto">
              <p className="text-amber-300 text-sm"><strong>⏱️ 45 detik</strong> per website</p>
              <p className="text-gray-400 text-xs mt-1">Bonus poin untuk kecepatan!</p>
            </div>
            <button onClick={startGame} className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all text-lg">
              Mulai Scanning
            </button>
          </motion.div>
        )}

        {/* PLAYING */}
        {gameState === 'playing' && (
          <>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                  <Clock className={`w-4 h-4 ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-gray-400'}`} />
                  <span className={`font-mono font-bold ${timeLeft <= 10 ? 'text-red-400' : 'text-white'}`}>{timeLeft}s</span>
                </div>
                <span className="text-gray-400 text-sm">Round {currentRound + 1}/{ROUNDS.length}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-emerald-500/10 rounded-full px-3 py-1.5 border border-emerald-400/20">
                  <Eye className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 text-sm font-bold">{foundCount}/{elements.length}</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-500/10 rounded-full px-3 py-1.5 border border-amber-400/20">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-300 text-sm font-bold">{totalScore}</span>
                </div>
              </div>
            </div>

            <div className="bg-white/3 backdrop-blur-lg rounded-xl p-1 border border-white/10 mb-4">
              <p className="text-center text-gray-400 text-xs py-1">{round.title} — Klik elemen yang di-deface!</p>
            </div>

            {/* Simulated Website */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-2xl overflow-hidden border-2 border-white/20 relative"
              style={{ minHeight: '500px' }}
            >
              {/* Browser chrome */}
              <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded-md px-3 py-1 text-gray-400 text-xs font-mono">
                  https://{round.siteType === 'school' ? 'smpn1-maju.sch.id' : round.siteType === 'shop' ? 'belanja-yuk.co.id' : 'infokini.com'}
                </div>
              </div>

              {/* Website content */}
              <div className="relative p-6" style={{ minHeight: '450px' }}>
                {elements.map((el) => (
                  <motion.div
                    key={el.id}
                    style={{
                      position: 'absolute',
                      left: `${el.x}%`,
                      top: `${el.y}%`,
                      maxWidth: '40%',
                    }}
                    whileHover={{ scale: el.found ? 1 : 1.05 }}
                    onClick={() => clickElement(el.id)}
                    className={`cursor-pointer transition-all px-3 py-2 rounded-lg ${
                      el.found
                        ? 'ring-2 ring-emerald-500 bg-emerald-50'
                        : 'hover:bg-red-50 hover:ring-1 hover:ring-red-300'
                    } ${el.type === 'button' ? 'bg-blue-500 text-white rounded-lg px-4 py-2 shadow' : ''} ${el.type === 'link' ? 'text-blue-600 underline' : ''}`}
                  >
                    <span className={`text-sm ${
                      el.type === 'text' && el.id === 1 ? 'text-xl font-bold text-gray-900' :
                      el.type === 'text' ? 'text-gray-800' :
                      el.type === 'button' ? 'text-white font-semibold text-sm' :
                      el.type === 'image' ? 'text-3xl' :
                      ''
                    }`}>
                      {el.defaced}
                    </span>
                    {el.found && (
                      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} className="absolute -top-2 -right-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 bg-white rounded-full" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Round Result */}
            {showRoundResult && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-white font-bold mb-3">
                  {foundCount === elements.length ? 'Semua Ditemukan!' : `Waktu Habis! ${foundCount}/${elements.length} ditemukan`}
                </h3>
                <div className="space-y-2 mb-4">
                  {elements.map(el => (
                    <div key={el.id} className={`text-sm flex items-center gap-2 ${el.found ? 'text-emerald-300' : 'text-red-300'}`}>
                      {el.found ? <CheckCircle className="w-4 h-4" /> : <span className="w-4 h-4 text-center">✗</span>}
                      <strong>{el.label}:</strong> "{el.original}" → "{el.defaced}"
                    </div>
                  ))}
                </div>
                <button onClick={nextRound} className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl">
                  {currentRound < ROUNDS.length - 1 ? 'Website Berikutnya →' : 'Lihat Hasil'}
                </button>
              </motion.div>
            )}
          </>
        )}

        {/* RESULT */}
        {gameState === 'result' && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center"><Trophy className="w-8 h-8 text-white" /></div>
            <h2 className="text-3xl font-bold text-white mb-2">Scanning Selesai!</h2>
            <div className="text-5xl font-bold text-amber-400 mb-2">{totalScore}</div>
            <p className="text-gray-400 mb-6">Total Skor</p>
            {totalScore >= 200 && (
              <div className="bg-amber-500/10 border border-amber-400/30 rounded-xl p-4 mb-6 inline-block">
                <p className="text-amber-300 font-bold">Badge "Web Guardian" Unlocked! +200 poin!</p>
              </div>
            )}
            {totalScore < 200 && (
              <p className="text-gray-400 mb-6 text-sm">Dapatkan 200+ poin untuk unlock badge. Coba lagi!</p>
            )}
            <div className="flex gap-4 justify-center">
              <button onClick={startGame} className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl">Main Lagi</button>
              <button onClick={() => navigate('/')} className="px-6 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20">Dashboard</button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

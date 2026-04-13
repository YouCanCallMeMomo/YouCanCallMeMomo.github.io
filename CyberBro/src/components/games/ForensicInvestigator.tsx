import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Search, Fingerprint, Clock, Trophy, ShieldAlert, CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getCurrentUserSync, addPoints, awardBadge, completeGame } from '../../gameStore';
import { Student } from '../../types';

interface ForensicData {
  id: number;
  source: string;
  evidence: string;
  isMalicious: boolean;
  reason: string;
}

const FORENSIC_LOGS: ForensicData[] = [
  { id: 1, source: 'Network Log', evidence: 'INBOUND traffic from 192.168.1.100 to port 445 (SMB) at 03:00 AM', isMalicious: true, reason: 'Koneksi ke port 445 di luar jam kerja adalah indikasi eksploitasi penyebaran worm/ransomware (seperti WannaCry).' },
  { id: 2, source: 'Authentication Log', evidence: 'User "admin" logged in successfully from authorized VPN IP.', isMalicious: false, reason: 'Login yang sah dari sumber IP VPN yang telah diotorisasi.' },
  { id: 3, source: 'File System', evidence: 'svchost.exe running from C:\\Users\\Public\\Downloads\\svchost.exe', isMalicious: true, reason: 'Proses sistem svchost selalu berjalan dari folder System32, bukan folder Downloads/Public.' },
  { id: 4, source: 'Email Gateway', evidence: 'Attachment: invoice_urgent.pdf.exe', isMalicious: true, reason: 'Ekstensi ganda (.pdf.exe) adalah trik klasik malware menyembunyikan exec file.' },
  { id: 5, source: 'Database Audit', evidence: 'Query executed: SELECT * FROM products WHERE price < 100', isMalicious: false, reason: 'Query database standar untuk mencari produk murah.' },
  { id: 6, source: 'Memory Dump', evidence: 'Process powershell.exe executing base64 encoded string: JABzADOATmV3...', isMalicious: true, reason: 'Script ter-encode base64 yang dieksekusi Powershell seringkali adalah fileless malware.' },
  { id: 7, source: 'Antivirus Log', evidence: 'Definition update downloaded successfully.', isMalicious: false, reason: 'Hanya log rutin proses update database antivirus harian.' },
  { id: 8, source: 'Firewall Log', evidence: '10.000 ICMP ping requests blocked from single external IP within 1 second.', isMalicious: true, reason: 'Indikasi Ping Sweep atau serangan DoS (Denial of Service).' },
  { id: 9, source: 'Access Log', evidence: 'User access to /images/logo.png from Firefox Mozilla', isMalicious: false, reason: 'Akses wajar ke file gambar website dari browser biasa.' },
  { id: 10, source: 'Registry', evidence: 'New Run Key added: HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run -> "mssecsvc.exe"', isMalicious: true, reason: 'Menambahkan file misterius ke Run Key agar otomatis berjalan saat booting adalah teknik persistensi malware.' },
];

export default function ForensicInvestigator() {
  const navigate = useNavigate();
  const [user, setUser] = useState<Student | null>(null);
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'result'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'safe' | 'malicious'>>({});
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

  const classify = (id: number, answer: 'safe' | 'malicious') => {
    const log = FORENSIC_LOGS.find(p => p.id === id);
    if (!log) return;
    const isCorrect = (answer === 'malicious' && log.isMalicious) || (answer === 'safe' && !log.isMalicious);
    setAnswers(prev => ({ ...prev, [id]: answer }));
    setShowResult(true);
    if (isCorrect) setScore(s => s + 10);
  };

  const nextLog = () => {
    setShowResult(false);
    if (currentIndex < FORENSIC_LOGS.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      endGame();
    }
  };

  const endGame = useCallback(async () => {
    setGameState('result');
    if (score >= 80) {
      await addPoints(150);
      await awardBadge('forensic-investigator', 'Digital Investigator', 'Selesaikan game Forensic Investigator', '');
      await completeGame('forensic-investigator');
    } else {
      await addPoints(Math.floor(score / 2));
    }
    const updated = getCurrentUserSync();
    if (updated) setUser(updated);
  }, [score]);

  if (!user) return null;

  const currentLog = FORENSIC_LOGS[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950/40 to-slate-950 relative overflow-hidden">
      <motion.div className="absolute top-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" animate={{ scale: [1.2, 1, 1.2] }} transition={{ duration: 10, repeat: Infinity }} />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-3xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" /> Dashboard
          </button>
          <div className="flex items-center gap-2 bg-cyan-500/10 backdrop-blur-lg px-4 py-2 rounded-full border border-cyan-400/20">
            <Fingerprint className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-semibold">Forensic Investigator</span>
          </div>
        </motion.div>

        {/* INTRO */}
        {gameState === 'intro' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"><Fingerprint className="w-8 h-8 text-white" /></div>
            <h1 className="text-3xl font-bold text-white mb-4">Forensic Investigator</h1>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              Kamu ditugaskan menganalisis anomali pada log server! Kenali mana aktivitas yang <span className="text-emerald-400 font-bold">AMAN (Safe)</span> dan mana yang merupakan jejak <span className="text-red-400 font-bold">ANOMALI JAHAT (Malicious)</span>. Waktumu 90 detik!
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-8">
              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-400/20">
                <p className="text-emerald-300 font-bold text-sm">AMAN (SAFE)</p>
                <p className="text-gray-400 text-xs mt-1">Aktivitas normal sehari-hari</p>
              </div>
              <div className="bg-red-500/10 rounded-xl p-4 border border-red-400/20">
                <p className="text-red-300 font-bold text-sm">ANOMALI (MALICIOUS)</p>
                <p className="text-gray-400 text-xs mt-1">Indikasi serangan / malware</p>
              </div>
            </div>
            <button onClick={startGame} className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all text-lg">
              Mulai Analisis
            </button>
          </motion.div>
        )}

        {/* PLAYING */}
        {gameState === 'playing' && currentLog && (
          <>
            {/* Timer & Score */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                <Clock className={`w-4 h-4 ${timeLeft <= 15 ? 'text-red-400 animate-pulse' : 'text-gray-400'}`} />
                <span className={`font-mono font-bold ${timeLeft <= 15 ? 'text-red-400' : 'text-white'}`}>{timeLeft}s</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">{currentIndex + 1}/{FORENSIC_LOGS.length}</span>
                <div className="flex items-center gap-2 bg-amber-500/10 rounded-full px-4 py-2 border border-amber-400/20">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-300 font-bold">{score}</span>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="w-full bg-white/5 rounded-full h-1.5 mb-6 overflow-hidden">
              <motion.div animate={{ width: `${((currentIndex + 1) / FORENSIC_LOGS.length) * 100}%` }} className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" />
            </div>

            {/* Analysis Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLog.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              >
                <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50 mb-6 font-mono relative overflow-hidden">
                  <div className="flex items-center gap-2 text-cyan-500 text-xs mb-4">
                    <Search className="w-3 h-3" /> DIGITAL EVIDENCE PARSED
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-gray-500 text-xs block mb-1">SOURCE:</span>
                      <span className="text-cyan-300 text-sm bg-cyan-900/30 px-2 py-1 rounded">{currentLog.source}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs block mb-1">RAW DATA:</span>
                      <p className="text-gray-300 text-sm break-all leading-relaxed bg-black/40 p-3 rounded-lg border border-white/5">
                        {currentLog.evidence}
                      </p>
                    </div>
                  </div>
                </div>

                {!showResult ? (
                  <div className="grid grid-cols-2 gap-4">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => classify(currentLog.id, 'safe')}
                      className="py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
                    >
                      AMAN (SAFE)
                    </motion.button>
                     <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => classify(currentLog.id, 'malicious')}
                      className="py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all flex items-center justify-center gap-2"
                    >
                      <ShieldAlert className="w-5 h-5"/> ANOMALI (MALICIOUS)
                    </motion.button>
                  </div>
                ) : (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    {(answers[currentLog.id] === 'malicious' && currentLog.isMalicious) || (answers[currentLog.id] === 'safe' && !currentLog.isMalicious) ? (
                      <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-xl p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2"><CheckCircle className="w-5 h-5 text-emerald-400" /><span className="text-emerald-300 font-bold">BENAR! Analisis Tepat (+10 poin)</span></div>
                        <p className="text-gray-300 text-sm">{currentLog.reason}</p>
                      </div>
                    ) : (
                      <div className="bg-red-500/10 border border-red-400/30 rounded-xl p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2"><XCircle className="w-5 h-5 text-red-400" /><span className="text-red-300 font-bold">SALAH! Analisis Meleset.</span></div>
                        <p className="text-gray-300 text-sm">{currentLog.reason}</p>
                      </div>
                    )}
                    <button onClick={nextLog} className="w-full py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all">
                      {currentIndex < FORENSIC_LOGS.length - 1 ? 'Sampel Berikutnya →' : 'Buat Laporan Akhir'}
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
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"><Fingerprint className="w-8 h-8 text-white" /></div>
            <h2 className="text-3xl font-bold text-white mb-2">Investigasi Selesai!</h2>
            <div className="text-5xl font-bold text-amber-400 mb-2">{score}</div>
            <p className="text-gray-400 mb-6">dari {FORENSIC_LOGS.length * 10} poin maksimal</p>

            {score >= 80 && (
              <div className="bg-amber-500/10 border border-amber-400/30 rounded-xl p-4 mb-6 inline-block">
                <p className="text-amber-300 font-bold">Badge "Digital Investigator" Unlocked! +150 poin!</p>
              </div>
            )}
            {score < 80 && (
              <p className="text-gray-400 mb-6 text-sm">Dapatkan minimal 80 poin untuk unlock badge investigator. Coba lagi!</p>
            )}

            <div className="flex gap-4 justify-center">
              <button onClick={startGame} className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl">
                Investigasi Ulang
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

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Brain, Clock, CheckCircle, XCircle, Trophy, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getCurrentUserSync, addPoints, addQuizScore, awardBadge } from '../gameStore';
import { Student, Question } from '../types';

import { QUIZ_QUESTIONS_BANK } from '../data/questions';

const QUIZ_LENGTH = 15;

export default function QuizPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<Student | null>(null);
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'result'>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [answers, setAnswers] = useState<Record<number, { selected: number; correct: boolean }>>({});
  const [currentQuizSet, setCurrentQuizSet] = useState<Question[]>([]);
  const [quizMode, setQuizMode] = useState<'general' | 'forensic' | 'sqli'>('general');

  useEffect(() => {
    const currentUser = getCurrentUserSync();
    if (!currentUser) { navigate('/register'); return; }
    setUser(currentUser);
  }, [navigate]);

  useEffect(() => {
    if (gameState !== 'playing' || answered) return;
    if (timeLeft <= 0) {
      handleTimeout();
      return;
    }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [gameState, timeLeft, answered]);

  const startQuiz = () => {
    // Shuffle the bank and pick QUIZ_LENGTH questions
    const filteredQuestions = QUIZ_QUESTIONS_BANK.filter(q => q.category === quizMode || (!q.category && quizMode === 'general'));
    const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
    setCurrentQuizSet(shuffled.slice(0, Math.min(QUIZ_LENGTH, shuffled.length)));

    setGameState('playing');
    setCurrentQ(0);
    setScore(0);
    setCorrectCount(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setTimeLeft(20);
    setAnswers({});
  };

  const selectAnswer = (idx: number) => {
    if (answered) return;
    setSelectedAnswer(idx);
  };

  const submitAnswer = () => {
    if (selectedAnswer === null) return;
    const question = currentQuizSet[currentQ];
    const isCorrect = selectedAnswer === question.correctAnswer;
    setAnswered(true);
    setAnswers(prev => ({ ...prev, [currentQ]: { selected: selectedAnswer, correct: isCorrect } }));
    if (isCorrect) {
      const bonus = Math.max(0, timeLeft);
      setScore(s => s + question.questionScore + bonus);
      setCorrectCount(c => c + 1);
    }
  };

  const handleTimeout = () => {
    setAnswered(true);
    setAnswers(prev => ({ ...prev, [currentQ]: { selected: -1, correct: false } }));
  };

  const nextQuestion = () => {
    if (currentQ < currentQuizSet.length - 1) {
      setCurrentQ(q => q + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setTimeLeft(20);
    } else {
      endQuiz();
    }
  };

  const endQuiz = async () => {
    setGameState('result');
    const totalPossible = currentQuizSet.reduce((sum, q) => sum + q.questionScore, 0);
    await addPoints(score);
    await addQuizScore({
      quizID: `quiz_${Date.now()}`,
      score,
      totalQuestions: currentQuizSet.length,
      date: new Date().toISOString(),
    });
    if (correctCount === currentQuizSet.length) {
      await awardBadge('quiz-champion', 'Quiz Champion', 'Dapatkan skor sempurna di quiz', '');
    }
    const updated = getCurrentUserSync();
    if (updated) setUser(updated);
  };

  if (!user) return null;

  const question = currentQuizSet[currentQ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950 relative overflow-hidden">
      <motion.div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" /> Dashboard
          </button>
          <div className="flex items-center gap-2 bg-emerald-500/10 backdrop-blur-lg px-4 py-2 rounded-full border border-emerald-400/20">
            <Brain className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-semibold">Kuis Cyber Security</span>
          </div>
        </motion.div>

        {/* INTRO */}
        {gameState === 'intro' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center"><Brain className="w-8 h-8 text-white" /></div>
            <h1 className="text-3xl font-bold text-white mb-4">Kuis Cyber Security</h1>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              Uji pengetahuan kamu tentang cyber security! {QUIZ_LENGTH} soal dengan timer 20 detik per soal. Bonus poin untuk jawaban cepat!
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-8">
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                <p className="text-2xl font-bold text-emerald-400">{QUIZ_LENGTH}</p>
                <p className="text-gray-400 text-xs">Soal</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                <p className="text-2xl font-bold text-amber-400">20s</p>
                <p className="text-gray-400 text-xs">Per Soal</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                <p className="text-2xl font-bold text-purple-400">+</p>
                <p className="text-gray-400 text-xs">Bonus Speed</p>
              </div>
            </div>
            
            <div className="mb-8 max-w-lg mx-auto">
              <p className="text-gray-400 text-sm mb-3 font-semibold">Pilih Mode Kuis:</p>
              <div className="flex gap-3 justify-center text-sm font-bold">
                <button onClick={() => setQuizMode('general')} className={`flex-1 py-3 px-2 rounded-xl border-2 transition-all ${quizMode === 'general' ? 'bg-emerald-500/20 border-emerald-400 text-emerald-100 shadow-[0_0_15px_rgba(52,211,153,0.3)]' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}>General</button>
                <button onClick={() => setQuizMode('forensic')} className={`flex-1 py-3 px-2 rounded-xl border-2 transition-all ${quizMode === 'forensic' ? 'bg-emerald-500/20 border-emerald-400 text-emerald-100 shadow-[0_0_15px_rgba(52,211,153,0.3)]' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}>Forensic</button>
                <button onClick={() => setQuizMode('sqli')} className={`flex-1 py-3 px-2 rounded-xl border-2 transition-all ${quizMode === 'sqli' ? 'bg-emerald-500/20 border-emerald-400 text-emerald-100 shadow-[0_0_15px_rgba(52,211,153,0.3)]' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}>SQLi</button>
              </div>
            </div>

            <button onClick={startQuiz} className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all text-lg">
              Mulai Kuis
            </button>
          </motion.div>
        )}

        {/* PLAYING */}
        {gameState === 'playing' && (
          <>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-2 rounded-full px-4 py-2 border ${timeLeft <= 5 ? 'bg-red-500/10 border-red-400/30' : 'bg-white/5 border-white/10'}`}>
                  <Clock className={`w-4 h-4 ${timeLeft <= 5 ? 'text-red-400 animate-pulse' : 'text-gray-400'}`} />
                  <span className={`font-mono font-bold ${timeLeft <= 5 ? 'text-red-400' : 'text-white'}`}>{timeLeft}s</span>
                </div>
                <span className="text-gray-400 text-sm">Soal {currentQ + 1}/{currentQuizSet.length}</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-500/10 rounded-full px-4 py-2 border border-amber-400/20">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300 font-bold">{score}</span>
              </div>
            </div>

            <div className="w-full bg-white/5 rounded-full h-1.5 mb-6 overflow-hidden">
              <motion.div animate={{ width: `${((currentQ + 1) / currentQuizSet.length) * 100}%` }} className="h-full bg-gradient-to-r from-emerald-500 to-teal-500" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={currentQ} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">+{question.questionScore} pts</span>
                  {timeLeft > 0 && !answered && <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full">+{timeLeft} bonus</span>}
                </div>
                <h2 className="text-xl font-bold text-white mb-6">{question.questionText}</h2>

                <div className="space-y-3 mb-6">
                  {question.options.map((opt, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: answered ? 1 : 1.01 }}
                      onClick={() => selectAnswer(idx)}
                      disabled={answered}
                      className={`w-full text-left p-4 rounded-xl transition-all ${
                        answered && idx === question.correctAnswer ? 'bg-emerald-500/20 border-2 border-emerald-400' :
                        answered && idx === selectedAnswer && idx !== question.correctAnswer ? 'bg-red-500/20 border-2 border-red-400' :
                        selectedAnswer === idx ? 'bg-purple-500/20 border-2 border-purple-400' :
                        'bg-white/5 border-2 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                          answered && idx === question.correctAnswer ? 'bg-emerald-500 text-white' :
                          answered && idx === selectedAnswer && idx !== question.correctAnswer ? 'bg-red-500 text-white' :
                          selectedAnswer === idx ? 'bg-purple-500 text-white' :
                          'bg-white/10 text-gray-400'
                        }`}>
                          {answered && idx === question.correctAnswer ? <CheckCircle className="w-4 h-4" /> :
                           answered && idx === selectedAnswer && idx !== question.correctAnswer ? <XCircle className="w-4 h-4" /> :
                           String.fromCharCode(65 + idx)}
                        </div>
                        <span className="text-white text-sm">{opt}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {!answered && (
                  <button onClick={submitAnswer} disabled={selectedAnswer === null} className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl disabled:opacity-40 transition-all">
                    Jawab!
                  </button>
                )}

                {answered && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <div className={`rounded-xl p-4 mb-4 ${answers[currentQ]?.correct ? 'bg-emerald-500/10 border border-emerald-400/30' : 'bg-red-500/10 border border-red-400/30'}`}>
                      <p className={`text-sm font-semibold mb-1 ${answers[currentQ]?.correct ? 'text-emerald-300' : 'text-red-300'}`}>
                        {answers[currentQ]?.correct ? 'Benar!' : selectedAnswer === -1 ? 'Waktu Habis!' : 'Salah!'}
                      </p>
                      <p className="text-gray-300 text-sm">{question.explanation}</p>
                    </div>
                    <button onClick={nextQuestion} className="w-full py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all">
                      {currentQ < currentQuizSet.length - 1 ? 'Soal Berikutnya →' : 'Lihat Hasil'}
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
            <h2 className="text-3xl font-bold text-white mb-4">Kuis Selesai!</h2>
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-6">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-3xl font-bold text-emerald-400">{correctCount}/{currentQuizSet.length}</p>
                <p className="text-gray-400 text-xs">Jawaban Benar</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-3xl font-bold text-amber-400">{score}</p>
                <p className="text-gray-400 text-xs">Total Poin</p>
              </div>
            </div>
            {correctCount === currentQuizSet.length && (
              <div className="bg-amber-500/10 border border-amber-400/30 rounded-xl p-4 mb-6">
                <p className="text-amber-300 font-bold">Badge "Quiz Champion" Unlocked! Skor Sempurna!</p>
              </div>
            )}
            <p className="text-gray-400 mb-6 text-sm">+{score} poin ditambahkan ke akunmu!</p>
            <div className="flex gap-4 justify-center">
              <button onClick={startQuiz} className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl flex items-center gap-2">
                <RotateCcw className="w-4 h-4" /> Ulangi
              </button>
              <button onClick={() => navigate('/leaderboard')} className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl">
                Leaderboard
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

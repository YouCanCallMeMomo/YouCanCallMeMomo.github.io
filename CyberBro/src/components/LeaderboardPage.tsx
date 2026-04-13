import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Trophy, Crown, Medal, Award, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { getCurrentUserSync, getLeaderboard } from '../gameStore';
import { Student, LeaderboardEntry, getLevelTitle } from '../types';

export default function LeaderboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<Student | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const currentUser = getCurrentUserSync();
    if (!currentUser) { navigate('/register'); return; }
    setUser(currentUser);
    getLeaderboard().then(lb => setLeaderboard(lb));
  }, [navigate]);

  if (!user) return null;

  const userRank = leaderboard.findIndex(e => e.userID === user.userID) + 1;

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-yellow-400" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-300" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-amber-600" />;
    return <span className="text-gray-400 font-bold text-sm">#{rank}</span>;
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'from-yellow-500/20 to-amber-500/20 border-yellow-400/30';
    if (rank === 2) return 'from-gray-400/10 to-gray-500/10 border-gray-400/20';
    if (rank === 3) return 'from-amber-700/10 to-orange-800/10 border-amber-600/20';
    return 'from-white/3 to-white/3 border-white/5';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-amber-950/20 to-slate-950 relative overflow-hidden">
      <motion.div className="absolute top-10 right-10 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="absolute bottom-10 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" animate={{ scale: [1.2, 1, 1.2] }} transition={{ duration: 10, repeat: Infinity }} />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" /> Dashboard
          </button>
          <div className="flex items-center gap-2 bg-amber-500/10 backdrop-blur-lg px-4 py-2 rounded-full border border-amber-400/20">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-semibold">Leaderboard</span>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Leaderboard</h1>
          <p className="text-gray-400 text-sm">Ranking cyber warriors terhebat!</p>
        </motion.div>

        {/* Top 3 Podium */}
        {leaderboard.length >= 3 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex items-end justify-center gap-3 mb-8">
            {/* 2nd Place */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center border-4 border-gray-300/30 mb-2">
                <span className="text-2xl font-bold text-white">
                  {leaderboard[1].name.charAt(0).toUpperCase()}
                </span>
              </div>
              <p className="text-white font-bold text-xs mb-1 truncate w-24">{leaderboard[1].name}</p>
              <p className="text-gray-400 text-xs">{leaderboard[1].points} pts</p>
              <div className="bg-gray-400/20 rounded-t-xl mt-2 w-24 h-16 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-300">2</span>
              </div>
            </motion.div>

            {/* 1st Place */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center -mt-4"
            >
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Crown className="w-8 h-8 text-yellow-400 mx-auto mb-1" />
              </motion.div>
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center border-4 border-yellow-300/50 mb-2 shadow-lg shadow-yellow-500/30">
                <span className="text-3xl font-bold text-white">
                  {leaderboard[0].name.charAt(0).toUpperCase()}
                </span>
              </div>
              <p className="text-white font-bold text-sm mb-1 truncate w-28">{leaderboard[0].name}</p>
              <p className="text-yellow-400 text-xs font-bold">{leaderboard[0].points} pts</p>
              <div className="bg-yellow-500/20 rounded-t-xl mt-2 w-28 h-20 flex items-center justify-center">
                <span className="text-3xl font-bold text-yellow-400">1</span>
              </div>
            </motion.div>

            {/* 3rd Place */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center border-4 border-amber-500/30 mb-2">
                <span className="text-2xl font-bold text-white">
                  {leaderboard[2].name.charAt(0).toUpperCase()}
                </span>
              </div>
              <p className="text-white font-bold text-xs mb-1 truncate w-24">{leaderboard[2].name}</p>
              <p className="text-gray-400 text-xs">{leaderboard[2].points} pts</p>
              <div className="bg-amber-600/20 rounded-t-xl mt-2 w-24 h-12 flex items-center justify-center">
                <span className="text-2xl font-bold text-amber-400">3</span>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Your Rank Card */}
        {userRank > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-cyan-500/10 border border-cyan-400/20 rounded-2xl p-4 mb-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-cyan-300 font-bold text-sm">Ranking Kamu</p>
                  <p className="text-gray-400 text-xs">{getLevelTitle(user.level)} • Level {user.level}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-cyan-400">#{userRank}</p>
                <p className="text-gray-400 text-xs">{user.points} pts</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Full List */}
        <div className="space-y-2">
          {leaderboard.map((entry, idx) => {
            const rank = idx + 1;
            const isCurrentUser = entry.userID === user.userID;

            return (
              <motion.div
                key={entry.userID}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * idx }}
                className={`bg-gradient-to-r ${getRankColor(rank)} border rounded-xl p-4 ${isCurrentUser ? 'ring-1 ring-cyan-400/30' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      {getRankIcon(rank)}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{entry.name.charAt(0).toUpperCase()}</span>
                    </div>
                    <div className="min-w-0">
                      <p className={`font-bold text-sm truncate ${isCurrentUser ? 'text-cyan-300' : 'text-white'}`}>
                        {entry.name} {isCurrentUser && '(Kamu)'}
                      </p>
                      <p className="text-gray-400 text-xs">{getLevelTitle(entry.level)} • Lv.{entry.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {entry.badges.slice(0, 3).map(b => (
                        <span key={b.badgeID} title={b.badgeName}>
                          <Award className="w-4 h-4 text-amber-400" />
                        </span>
                      ))}
                      {entry.badges.length > 3 && <span className="text-gray-500 text-xs">+{entry.badges.length - 3}</span>}
                    </div>
                    <div className="text-right">
                      <p className="text-amber-400 font-bold text-sm">{entry.points}</p>
                      <p className="text-gray-500 text-xs">pts</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Level Guide */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white font-bold mb-4">Level System</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { level: 1, title: 'Newbie', pts: '0', color: 'text-gray-400' },
              { level: 2, title: 'Script Kiddie', pts: '200', color: 'text-green-400' },
              { level: 3, title: 'Cyber Explorer', pts: '500', color: 'text-blue-400' },
              { level: 4, title: 'Cyber Warrior', pts: '1000', color: 'text-purple-400' },
              { level: 5, title: 'Cyber Guardian', pts: '1500', color: 'text-amber-400' },
              { level: 6, title: 'Cyber Legend', pts: '2000', color: 'text-red-400' },
            ].map(l => (
              <div key={l.level} className="bg-white/3 rounded-lg p-3">
                <p className={`font-bold text-sm ${l.color}`}>Lv.{l.level} {l.title}</p>
                <p className="text-gray-500 text-xs">{l.pts}+ pts</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

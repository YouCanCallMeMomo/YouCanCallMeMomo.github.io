import { useNavigate } from 'react-router';
import { Shield, BookOpen, Gamepad2, Brain, Trophy, Bot, AlertTriangle, LogOut, Star, Zap, Award, Search, Database } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { getCurrentUserSync, logoutUser } from '../gameStore';
import { Student, getLevelTitle } from '../types';

export default function LandingPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<Student | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUserSync();
    if (!currentUser) {
      navigate('/register');
      return;
    }
    setUser(currentUser);
  }, [navigate]);

  const handleLogout = () => {
    logoutUser();
    navigate('/register');
  };

  if (!user) return null;

  const levelTitle = getLevelTitle(user.level);
  const nextLevelPoints = [0, 200, 500, 1000, 1500, 2000, 3000][user.level] || 3000;
  const prevLevelPoints = [0, 0, 200, 500, 1000, 1500, 2000][user.level] || 0;
  const progressPercent = Math.min(100, ((user.points - prevLevelPoints) / (nextLevelPoints - prevLevelPoints)) * 100);

  const menuItems = [
    {
      id: 'modules',
      title: 'Modul Belajar',
      subtitle: 'Materi cyber security bahasa anak muda',
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-600',
      glow: 'shadow-blue-500/30',
      path: '/modules',
      emoji: '',
    },
    {
      id: 'leaked-vault',
      title: 'The Leaked Vault',
      subtitle: 'Cari password yang bocor!',
      icon: Gamepad2,
      color: 'from-red-500 to-rose-600',
      glow: 'shadow-red-500/30',
      path: '/games/leaked-vault',
      emoji: '',
    },
    {
      id: 'defacement-scanner',
      title: 'Defacement Scanner',
      subtitle: 'Temukan elemen web yang di-hack!',
      icon: Zap,
      color: 'from-amber-500 to-orange-600',
      glow: 'shadow-amber-500/30',
      path: '/games/defacement-scanner',
      emoji: '',
    },
    {
      id: 'chat-trap',
      title: 'The Chat Trap',
      subtitle: 'Deteksi chat phishing & penipuan!',
      icon: Brain,
      color: 'from-purple-500 to-violet-600',
      glow: 'shadow-purple-500/30',
      path: '/games/chat-trap',
      emoji: '',
    },
    {
      id: 'forensic-investigator',
      title: 'Forensic Investigator',
      subtitle: 'Bongkar jejak digital aneh!',
      icon: Search,
      color: 'from-cyan-500 to-blue-600',
      glow: 'shadow-cyan-500/30',
      path: '/games/forensic-investigator',
      emoji: '',
    },
    {
      id: 'sqli-scanner',
      title: 'SQLi Scanner',
      subtitle: 'Tahan gempuran injeksi SQL!',
      icon: Database,
      color: 'from-orange-500 to-amber-600',
      glow: 'shadow-orange-500/30',
      path: '/games/sqli-scanner',
      emoji: '',
    },
    {
      id: 'quiz',
      title: 'Kuis Offline',
      subtitle: 'Uji pengetahuan cyber security!',
      icon: Star,
      color: 'from-emerald-500 to-teal-600',
      glow: 'shadow-emerald-500/30',
      path: '/quiz',
      emoji: '',
    },
    {
      id: 'leaderboard',
      title: 'Leaderboard',
      subtitle: 'Ranking & badge collection!',
      icon: Trophy,
      color: 'from-yellow-500 to-amber-600',
      glow: 'shadow-yellow-500/30',
      path: '/leaderboard',
      emoji: '',
    },
    {
      id: 'cyberbro',
      title: 'CyberBro AI',
      subtitle: 'Tanya apa aja soal cyber security!',
      icon: Bot,
      color: 'from-cyan-500 to-blue-600',
      glow: 'shadow-cyan-500/30',
      path: '/cyberbro',
      emoji: '',
    },
    {
      id: 'report',
      title: 'Bantuan Darurat',
      subtitle: 'Laporkan insiden cyber!',
      icon: AlertTriangle,
      color: 'from-rose-600 to-red-700',
      glow: 'shadow-rose-600/30',
      path: '/report',
      emoji: '',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
          animate={{ x: [-50, 50, -50], y: [-30, 30, -30] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Scan line effect */}
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Shield className="w-10 h-10 text-cyan-400" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                SiagaSiber
              </h1>
              <p className="text-gray-500 text-xs">Youth Cyber Security Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-white font-semibold text-sm">Halo, {user.name}!</p>
              <p className="text-cyan-400 text-xs">{levelTitle} • Level {user.level}</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-500/10 hover:border-red-400/30 transition-all"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 mb-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">{user.points}</div>
              <div className="text-gray-400 text-xs mt-1">Total Poin</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{user.level}</div>
              <div className="text-gray-400 text-xs mt-1">{levelTitle}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">{user.badges.length}</div>
              <div className="text-gray-400 text-xs mt-1">Badge</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">{user.completedModules.length + user.completedGames.length}</div>
              <div className="text-gray-400 text-xs mt-1">Selesai</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-xs">Level {user.level} → Level {user.level + 1}</span>
            <span className="text-cyan-400 text-xs font-semibold">{user.points}/{nextLevelPoints} pts</span>
          </div>
          <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"
            />
          </div>

          {/* Badges */}
          {user.badges.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {user.badges.map((badge) => (
                <motion.div
                  key={badge.badgeID}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                  title={badge.description}
                >
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-white text-xs">{badge.badgeName}</span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isCompleted = item.id.includes('leaked') ? user.completedGames.includes('leaked-vault')
              : item.id.includes('defacement') ? user.completedGames.includes('defacement-scanner')
              : item.id.includes('chat') ? user.completedGames.includes('chat-trap')
              : item.id.includes('forensic') ? user.completedGames.includes('forensic-investigator')
              : item.id.includes('sqli') ? user.completedGames.includes('sqli-scanner')
              : false;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate(item.path)}
                className="cursor-pointer group"
              >
                <div className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10 h-full transition-all duration-300 group-hover:border-white/20 group-hover:shadow-xl group-hover:${item.glow}`}>
                  {isCompleted && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <Award className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-10 text-gray-600 text-xs"
        >
          <p>SiagaSiber Youth System — Platform Edukasi Cyber Security untuk SMP & SMA</p>
        </motion.div>
      </div>
    </div>
  );
}

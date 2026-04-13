import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, AlertTriangle, Phone, Mail, Globe, Shield, Send, CheckCircle, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { getCurrentUserSync, submitReport } from '../gameStore';
import { Student } from '../types';

const INCIDENT_TYPES = [
  { id: 'hacked', label: 'Akun Diretas/Di-hack', color: 'border-red-400/30 bg-red-500/10' },
  { id: 'cyberbullying', label: 'Cyberbullying', color: 'border-purple-400/30 bg-purple-500/10' },
  { id: 'scam', label: 'Penipuan Online/Scam', color: 'border-amber-400/30 bg-amber-500/10' },
  { id: 'other', label: 'Lainnya', color: 'border-gray-400/30 bg-gray-500/10' },
] as const;

const EMERGENCY_CONTACTS = [
  {
    name: 'BSSN (Badan Siber dan Sandi Negara)',
    description: 'Lembaga pemerintah yang menangani keamanan siber nasional',
    phone: '(021) 78842700',
    website: 'https://bssn.go.id',
    icon: '',
  },
  {
    name: 'Kominfo (Kemenkominfo)',
    description: 'Aduan konten negatif dan penipuan online',
    phone: '(021) 3452841',
    website: 'https://aduankonten.id',
    icon: '',
  },
  {
    name: 'Polisi Cyber (Bareskrim)',
    description: 'Laporan kejahatan siber ke kepolisian',
    phone: '110',
    website: 'https://patrolisiber.id',
    icon: '',
  },
  {
    name: 'KPAI (Perlindungan Anak)',
    description: 'Perlindungan anak dari cyberbullying & eksploitasi',
    phone: '(021) 3190-6520',
    website: 'https://kpai.go.id',
    icon: '',
  },
  {
    name: 'Into The Light Indonesia',
    description: 'Konseling kesehatan mental & support cyberbullying',
    phone: '119 ext. 8',
    website: 'https://intothelightid.org',
    icon: '',
  },
];

const FIRST_AID_STEPS = {
  hacked: [
    'Segera ganti password dari perangkat yang AMAN',
    'Aktifkan Two-Factor Authentication (2FA)',
    'Cek dan hapus sesi login yang tidak dikenal',
    'Pastikan email pemulihan masih milik kamu',
    'Cek apakah ada transaksi mencurigakan',
    'Hubungi customer support platform terkait',
    'Laporkan ke polisi cyber jika ada kerugian finansial',
  ],
  cyberbullying: [
    'Screenshot semua bukti (chat, postingan, komentar)',
    'Block dan report akun yang melakukan bullying',
    'Cerita ke orang dewasa yang dipercaya (ortu, guru, konselor)',
    'Jangan balas atau berinteraksi dengan pelaku',
    'Laporkan ke pihak sekolah jika pelaku teman sekolah',
    'Hubungi hotline jika merasa tertekan (119 ext. 8)',
    'Laporkan ke polisi jika ada ancaman kekerasan',
  ],
  scam: [
    'JANGAN transfer uang lagi!',
    'Screenshot semua bukti (chat, bukti transfer, iklan)',
    'Hubungi bank segera untuk blokir rekening jika sudah transfer',
    'Laporkan nomor rekening penipu ke bank',
    'Laporkan ke polisi cyber (Patrolisiber.id)',
    'Laporkan nomor HP penipu ke operator seluler',
    'Share info penipuan ke teman agar tidak jadi korban juga',
  ],
  other: [
    'Dokumentasikan semua bukti yang ada',
    'Ceritakan masalah ke orang dewasa yang dipercaya',
    'Cari informasi terkait di sumber terpercaya',
    'Hubungi lembaga yang relevan sesuai masalah',
    'Pastikan perangkat kamu aman (scan antivirus)',
  ],
};

export default function ReportPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<Student | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  useEffect(() => {
    const currentUser = getCurrentUserSync();
    if (!currentUser) { navigate('/register'); return; }
    setUser(currentUser);
  }, [navigate]);

  const handleSubmit = async () => {
    if (!selectedType || !description.trim() || !user) return;
    await submitReport({
      studentID: user.userID,
      type: selectedType as any,
      description: description.trim(),
    });
    setSubmitted(true);
  };

  if (!user) return null;

  const firstAidSteps = selectedType ? FIRST_AID_STEPS[selectedType as keyof typeof FIRST_AID_STEPS] : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950/20 to-slate-950 relative overflow-hidden">
      <motion.div className="absolute top-10 left-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" /> Dashboard
          </button>
          <div className="flex items-center gap-2 bg-red-500/10 backdrop-blur-lg px-4 py-2 rounded-full border border-red-400/20">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-semibold">Bantuan Darurat</span>
          </div>
        </motion.div>

        {!submitted ? (
          <>
            {/* SOS Header */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="inline-block mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg shadow-red-500/30">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              <h1 className="text-3xl font-bold text-white mb-2">Bantuan Darurat</h1>
              <p className="text-gray-400 text-sm">Laporkan insiden cyber security. Kamu tidak sendirian!</p>
            </motion.div>

            {/* Incident Type */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 mb-6">
              <h3 className="text-white font-bold mb-4">Apa yang terjadi?</h3>
              <div className="grid grid-cols-2 gap-3">
                {INCIDENT_TYPES.map(type => (
                  <motion.button
                    key={type.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 rounded-xl text-left transition-all border-2 ${
                      selectedType === type.id ? type.color + ' ring-1 ring-white/20' : 'bg-white/3 border-white/5 hover:bg-white/5'
                    }`}
                  >
                    <span className="text-white text-sm font-semibold">{type.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* First Aid Steps */}
            {selectedType && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-amber-500/5 border border-amber-400/20 rounded-2xl p-6 mb-6">
                <h3 className="text-amber-300 font-bold mb-3">Langkah Pertama yang Harus Dilakukan:</h3>
                <div className="space-y-2">
                  {firstAidSteps.map((step, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * idx }} className="flex items-start gap-2">
                      <span className="text-gray-300 text-sm leading-relaxed">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Description */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 mb-6">
              <h3 className="text-white font-bold mb-4">Ceritakan lebih detail:</h3>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ceritakan apa yang terjadi... Kapan, di platform mana, dan bagaimana. Semua informasi akan dijaga kerahasiaannya."
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-400 transition-all resize-none"
              />
              <button
                onClick={handleSubmit}
                disabled={!selectedType || !description.trim()}
                className="mt-4 w-full py-4 bg-gradient-to-r from-red-500 to-rose-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all disabled:opacity-40 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" /> Kirim Laporan
              </button>
            </motion.div>

            {/* Emergency Contacts */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <button
                onClick={() => setShowContacts(!showContacts)}
                className="w-full mb-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 transition-all"
              >
                {showContacts ? 'Sembunyikan' : 'Tampilkan'} Kontak Darurat
              </button>

              {showContacts && (
                <div className="space-y-3">
                  {EMERGENCY_CONTACTS.map((contact, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * idx }}
                      className="bg-white/5 rounded-2xl p-5 border border-white/10"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{contact.icon}</span>
                        <div className="flex-1">
                          <h4 className="text-white font-bold text-sm">{contact.name}</h4>
                          <p className="text-gray-400 text-xs mt-1">{contact.description}</p>
                          <div className="flex flex-wrap gap-3 mt-3">
                            <div className="flex items-center gap-1.5 text-cyan-300 text-xs">
                              <Phone className="w-3.5 h-3.5" /> {contact.phone}
                            </div>
                            <a href={contact.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-blue-300 text-xs hover:text-blue-200 transition-colors">
                              <Globe className="w-3.5 h-3.5" /> Website <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </>
        ) : (
          /* Submitted Confirmation */
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
              <CheckCircle className="w-20 h-20 text-emerald-400 mx-auto mb-4" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-3">Laporan Terkirim!</h2>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Laporan kamu sudah kami terima. Ingat, kamu tidak sendirian! Jangan ragu untuk menghubungi kontak darurat di bawah jika butuh bantuan segera.
            </p>

            <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-xl p-4 mb-6 text-left">
              <h4 className="text-cyan-300 font-bold text-sm mb-2">Yang Bisa Kamu Lakukan Selanjutnya:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Hubungi kontak darurat yang relevan</li>
                <li>• Ceritakan ke orang dewasa yang kamu percaya</li>
                <li>• Amankan akun-akun pentingmu</li>
                <li>• Jangan hapus bukti digital (screenshot semua!)</li>
              </ul>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => { setSubmitted(false); setSelectedType(null); setDescription(''); setShowContacts(true); }}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-rose-500 text-white font-bold rounded-xl"
              >
                Lihat Kontak Darurat
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

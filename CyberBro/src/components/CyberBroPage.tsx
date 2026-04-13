import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Bot, Send, Sparkles, Shield, Wifi, WifiOff } from 'lucide-react';
import { motion } from 'motion/react';
import { getCurrentUserSync, checkBackend } from '../gameStore';
import { apiChatCyberBro, apiCyberBroStatus } from '../api';
import { Student, ChatMessage } from '../types';

const QUICK_TOPICS = [
  { label: 'Password aman', query: 'Gimana cara bikin password yang aman?' },
  { label: 'Apa itu phishing?', query: 'Apa itu phishing dan gimana cara menghindarinya?' },
  { label: 'WiFi publik', query: 'Kenapa WiFi publik itu berbahaya?' },
  { label: 'Malware', query: 'Apa itu malware dan gimana cara mencegahnya?' },
  { label: 'OTP', query: 'Kenapa nggak boleh kasih OTP ke orang lain?' },
  { label: '2FA', query: 'Apa itu Two Factor Authentication?' },
  { label: 'Akun di-hack', query: 'Akun saya di-hack, harus gimana?' },
  { label: 'Aplikasi bajakan', query: 'Kenapa nggak boleh install aplikasi bajakan?' },
];

// Fallback scripted responses (used when API is unavailable)
function getScriptedResponse(query: string): string {
  const q = query.toLowerCase();

  if (q.includes('password') || q.includes('sandi') || q.includes('pw')) {
    return `Soal Password ya? Sip, ini tips dari CyberBro!\n\n**Cara Bikin Password Kuat:**\n• Minimal 12 karakter — makin panjang makin susah di-crack\n• Campur huruf besar, kecil, angka, dan simbol\n• Pakai passphrase: \"KucingSuka$MakanIk4n!\" lebih kuat dari \"P@ssw0rd\"\n• JANGAN pakai nama, tanggal lahir, atau kata umum\n\n**Pro Tip:** Pakai Password Manager kayak Bitwarden (gratis!) buat simpan semua password dengan aman`;
  }

  if (q.includes('phishing') || q.includes('link palsu') || q.includes('url palsu')) {
    return `Phishing itu kayak \"mancing korban\" di dunia digital!\n\n**Cara Kerjanya:** Peretas bikin website/email PALSU yang mirip asli untuk nyolong data kamu.\n\n**Tanda-tanda Phishing:**\n• URL aneh: \"bank-bri.weebly.com\" bukan \"bri.co.id\"\n• Minta data sensitif lewat email/chat\n• Ada unsur DARURAT: \"Akun Anda akan diblokir!\"\n\n**Cara Menghindari:**\n• JANGAN klik link dari sumber yang nggak dikenal\n• Ketik URL langsung di browser\n• Aktifkan 2FA di semua akun`;
  }

  if (q.includes('wifi') || q.includes('wi-fi') || q.includes('hotspot')) {
    return `WiFi publik itu kayak ngobrol di tempat ramai — semua orang bisa nguping!\n\n• **Man-in-the-Middle Attack**: Hacker nyegat data kamu\n• **Evil Twin**: WiFi palsu dengan nama mirip\n• Gunakan **VPN** kalau harus pakai WiFi publik\n• Lebih aman pakai **data seluler** buat transaksi penting`;
  }

  if (q.includes('malware') || q.includes('virus') || q.includes('trojan') || q.includes('ransomware')) {
    return `Malware = program jahat! Jenisnya: Virus, Trojan, Ransomware, Spyware, Keylogger.\n\n**Sumber utama:** Aplikasi bajakan, APK luar store, attachment email aneh\n**Cara Mencegah:** Install dari store resmi, update rutin, gunakan antivirus`;
  }

  if (q.includes('otp') || q.includes('kode verifikasi')) {
    return `OTP = kunci sementara ke akun kamu! JANGAN PERNAH kasih ke siapapun. Bank/platform nggak pernah minta OTP lewat telepon. Kalau ada yang minta, 100% PENIPUAN!`;
  }

  if (q.includes('2fa') || q.includes('two factor') || q.includes('autentikasi')) {
    return `2FA = Verifikasi 2 Langkah. Selain password, butuh \"kunci kedua\" untuk login. Aktifkan pakai Google Authenticator atau Authy (lebih aman dari SMS!)`;
  }

  if (q.includes('hack') || q.includes('diretas') || q.includes('dibobol')) {
    return `Akun di-hack? Jangan panik!\n1. Ganti password segera\n2. Aktifkan 2FA\n3. Hapus sesi login asing\n4. Hubungi CS platform\nGunakan fitur **Bantuan Darurat** di SiagaSiber!`;
  }

  if (q.includes('bajakan') || q.includes('crack') || q.includes('pirate')) {
    return `Aplikasi bajakan = pintu masuk malware! File crack sering disusupi Trojan & Keylogger. Lebih baik pakai versi gratis/resmi daripada kehilangan data!`;
  }

  return `Pertanyaan menarik! Aku CyberBro, tutor cyber security kamu. Coba tanya tentang: password, phishing, malware, WiFi, OTP, 2FA, atau tips keamanan digital lainnya!`;
}

export default function CyberBroPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<Student | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'cyberbro',
      text: 'Halo! Aku **CyberBro**, asisten AI kamu yang didukung oleh **OpenAI**.\n\nMau tanya apa soal cyber security? Ketik pertanyaanmu atau pilih topik di bawah ini!',
      timestamp: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [useAI, setUseAI] = useState(true);
  const [aiAvailable, setAiAvailable] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const conversationRef = useRef<{ role: string; content: string }[]>([]);

  useEffect(() => {
    const currentUser = getCurrentUserSync();
    if (!currentUser) { navigate('/register'); return; }
    setUser(currentUser);

    // Check if backend AI is available
    (async () => {
      try {
        const available = await apiCyberBroStatus();
        setAiAvailable(available);
        setUseAI(available);
      } catch {
        setAiAvailable(false);
        setUseAI(false);
      }
    })();
  }, [navigate]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toISOString(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    let responseText: string;

    if (useAI && aiAvailable) {
      try {
        // Add user message to conversation history
        conversationRef.current.push({ role: 'user', content: text.trim() });

        // Call backend proxy (API key is safe on server!)
        responseText = await apiChatCyberBro(conversationRef.current);

        // Add assistant response to conversation history
        conversationRef.current.push({ role: 'assistant', content: responseText });

        // Keep conversation history manageable
        if (conversationRef.current.length > 20) {
          conversationRef.current = conversationRef.current.slice(-20);
        }
      } catch (error: any) {
        console.error('CyberBro API Error:', error);
        responseText = getScriptedResponse(text);
        responseText = `*AI sedang sibuk, pakai jawaban template dulu ya!*\n\n${responseText}`;
      }
    } else {
      // Use scripted responses
      await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500));
      responseText = getScriptedResponse(text);
    }

    const botMsg: ChatMessage = {
      id: `bot_${Date.now()}`,
      sender: 'cyberbro',
      text: responseText,
      timestamp: new Date().toISOString(),
    };
    setMessages(prev => [...prev, botMsg]);
    setIsTyping(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950/30 to-slate-950 flex flex-col relative overflow-hidden">
      <motion.div className="absolute top-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 px-4 py-4 border-b border-white/5">
        <div className="container mx-auto max-w-3xl flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" /> Dashboard
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">CyberBro AI</p>
              <div className="flex items-center gap-1.5">
                {useAI && aiAvailable ? (
                  <>
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <p className="text-emerald-400 text-xs">OpenAI GPT (Backend)</p>
                  </>
                ) : (
                  <>
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <p className="text-amber-400 text-xs">Mode Offline</p>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* AI Mode Toggle */}
          <button
            onClick={() => { setUseAI(!useAI); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              useAI && aiAvailable
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                : 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
            }`}
            title={useAI ? 'Switch ke Offline Mode' : 'Switch ke AI Mode'}
          >
            {useAI && aiAvailable ? <Wifi className="w-3.5 h-3.5" /> : <WifiOff className="w-3.5 h-3.5" />}
            {useAI && aiAvailable ? 'AI' : 'Offline'}
          </button>
        </div>
      </motion.div>

      {/* AI Status Banner */}
      {!aiAvailable && (
        <div className="relative z-10 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-amber-500/10 border border-amber-400/20 rounded-xl px-4 py-2 mt-2 flex items-center gap-2">
              <WifiOff className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <p className="text-amber-300 text-xs">Backend AI tidak tersedia. Menggunakan mode offline (scripted responses).</p>
            </div>
          </div>
        </div>
      )}

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto relative z-10">
        <div className="container mx-auto max-w-3xl px-4 py-6 space-y-4">
          {/* Quick Topics */}
          {messages.length <= 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-2 justify-center mb-4">
              {QUICK_TOPICS.map((topic, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  onClick={() => sendMessage(topic.query)}
                  className="px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 text-xs hover:bg-white/10 hover:border-cyan-400/30 transition-all"
                >
                  {topic.label}
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Messages */}
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'cyberbro' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              <div className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 rounded-tr-sm'
                  : 'bg-white/8 border border-white/10 rounded-tl-sm'
              }`}>
                <div className="text-sm text-gray-100 whitespace-pre-wrap leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: msg.text
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyan-300">$1</strong>')
                      .replace(/\n/g, '<br/>')
                  }}
                />
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white/8 border border-white/10 rounded-2xl rounded-tl-sm px-5 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-2 h-2 rounded-full bg-cyan-400" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 rounded-full bg-cyan-400" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  {useAI && aiAvailable && <span className="text-gray-500 text-xs ml-2">AI sedang berpikir...</span>}
                </div>
              </div>
            </motion.div>
          )}

          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="relative z-10 border-t border-white/5 bg-slate-950/50 backdrop-blur-lg">
        <div className="container mx-auto max-w-3xl px-4 py-4">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={useAI && aiAvailable ? "Tanya CyberBro (AI Mode)..." : "Tanya CyberBro (Offline Mode)..."}
              className="flex-1 px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
              disabled={isTyping}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={!input.trim() || isTyping}
              className="px-5 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl disabled:opacity-50 transition-all"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </form>
          <p className="text-gray-600 text-xs mt-2 text-center">
            {useAI && aiAvailable
              ? 'Didukung oleh OpenAI GPT via Backend — API key aman di server'
              : 'Mode Offline — Jawaban dari template'
            }
          </p>
        </div>
      </div>
    </div>
  );
}

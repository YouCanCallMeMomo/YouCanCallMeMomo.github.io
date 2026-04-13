// ============================================
// SiagaSiber Backend - Express.js Server
// ============================================

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import OpenAI from 'openai';
import {
  initDB,
  insertUser,
  findUserByEmail,
  findUserById,
  updateUserPoints,
  insertBadge,
  insertCompletedModule,
  insertCompletedGame,
  insertQuizScore,
  insertReport,
  getUserReports,
  getLevelFromPoints,
  buildStudentObject,
  buildLeaderboard,
  getUserCount,
} from './db.js';

const app = express();
const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_change_me';
const SALT_ROUNDS = 10;

// ---- OpenAI Client ----
let openai = null;
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  console.log('✅ OpenAI API key loaded');
} else {
  console.log('⚠️  No OpenAI API key — CyberBro will use offline mode');
}

// ---- Middleware ----
app.use(cors());
app.use(express.json());

// Request logging
app.use((req, _res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});

// ---- Auth Middleware ----
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token tidak ditemukan' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token tidak valid atau sudah expired' });
  }
}

// Generate JWT
function generateToken(userId) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '30d' });
}

// ===========================
// AUTH ROUTES
// ===========================

// POST /api/auth/register
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Semua field harus diisi!' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password minimal 6 karakter!' });
    }

    // Check if email exists
    const existing = findUserByEmail(email);
    if (existing) {
      return res.status(409).json({ error: 'Email sudah terdaftar!' });
    }

    const userId = `user_${Date.now()}`;
    const passwordHash = await bcryptjs.hash(password, SALT_ROUNDS);
    insertUser(userId, name, email, passwordHash);

    const token = generateToken(userId);
    const student = buildStudentObject(findUserById(userId));

    res.status(201).json({ token, user: student });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Gagal mendaftar. Coba lagi.' });
  }
});

// POST /api/auth/login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email dan password harus diisi!' });
    }

    const userRow = findUserByEmail(email);
    if (!userRow) {
      return res.status(401).json({ error: 'Email atau password salah!' });
    }

    // Demo users can't login
    if (userRow.password_hash === 'DEMO_NO_LOGIN') {
      return res.status(401).json({ error: 'Email atau password salah!' });
    }

    const validPassword = await bcryptjs.compare(password, userRow.password_hash);
    if (!validPassword) {
      return res.status(401).json({ error: 'Email atau password salah!' });
    }

    const token = generateToken(userRow.id);
    const student = buildStudentObject(userRow);

    res.json({ token, user: student });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Gagal login. Coba lagi.' });
  }
});

// GET /api/auth/me — Get current user from token
app.get('/api/auth/me', authMiddleware, (req, res) => {
  try {
    const userRow = findUserById(req.userId);
    if (!userRow) {
      return res.status(404).json({ error: 'User tidak ditemukan' });
    }
    const student = buildStudentObject(userRow);
    res.json({ user: student });
  } catch (err) {
    console.error('Get me error:', err);
    res.status(500).json({ error: 'Gagal mengambil data user' });
  }
});

// ==============================
// USER PROGRESS ROUTES
// ==============================

// POST /api/user/points — Add points
app.post('/api/user/points', authMiddleware, (req, res) => {
  try {
    const { points } = req.body;
    if (typeof points !== 'number' || points < 0) {
      return res.status(400).json({ error: 'Points harus berupa angka positif' });
    }

    const userRow = findUserById(req.userId);
    if (!userRow) return res.status(404).json({ error: 'User tidak ditemukan' });

    const newPoints = userRow.points + points;
    const newLevel = getLevelFromPoints(newPoints);
    updateUserPoints(newPoints, newLevel, req.userId);

    const updated = buildStudentObject(findUserById(req.userId));
    res.json({ user: updated });
  } catch (err) {
    console.error('Add points error:', err);
    res.status(500).json({ error: 'Gagal menambah poin' });
  }
});

// POST /api/user/badge — Award badge
app.post('/api/user/badge', authMiddleware, (req, res) => {
  try {
    const { badgeID, badgeName, description, icon } = req.body;
    if (!badgeID || !badgeName) {
      return res.status(400).json({ error: 'badgeID dan badgeName harus diisi' });
    }

    insertBadge(req.userId, badgeID, badgeName, description || '', icon || '');
    const updated = buildStudentObject(findUserById(req.userId));
    res.json({ user: updated });
  } catch (err) {
    console.error('Award badge error:', err);
    res.status(500).json({ error: 'Gagal memberikan badge' });
  }
});

// POST /api/user/module — Complete module
app.post('/api/user/module', authMiddleware, (req, res) => {
  try {
    const { moduleID } = req.body;
    if (!moduleID) return res.status(400).json({ error: 'moduleID harus diisi' });

    insertCompletedModule(req.userId, moduleID);
    const updated = buildStudentObject(findUserById(req.userId));
    res.json({ user: updated });
  } catch (err) {
    console.error('Complete module error:', err);
    res.status(500).json({ error: 'Gagal menyimpan progress module' });
  }
});

// POST /api/user/game — Complete game
app.post('/api/user/game', authMiddleware, (req, res) => {
  try {
    const { gameID } = req.body;
    if (!gameID) return res.status(400).json({ error: 'gameID harus diisi' });

    insertCompletedGame(req.userId, gameID);
    const updated = buildStudentObject(findUserById(req.userId));
    res.json({ user: updated });
  } catch (err) {
    console.error('Complete game error:', err);
    res.status(500).json({ error: 'Gagal menyimpan progress game' });
  }
});

// POST /api/user/quiz — Save quiz score
app.post('/api/user/quiz', authMiddleware, (req, res) => {
  try {
    const { quizID, score, totalQuestions, date } = req.body;
    if (!quizID || score === undefined || !totalQuestions) {
      return res.status(400).json({ error: 'Data quiz tidak lengkap' });
    }

    insertQuizScore(req.userId, quizID, score, totalQuestions, date || new Date().toISOString());
    const updated = buildStudentObject(findUserById(req.userId));
    res.json({ user: updated });
  } catch (err) {
    console.error('Save quiz error:', err);
    res.status(500).json({ error: 'Gagal menyimpan skor quiz' });
  }
});

// ==============================
// LEADERBOARD
// ==============================

// GET /api/leaderboard
app.get('/api/leaderboard', (_req, res) => {
  try {
    const leaderboard = buildLeaderboard();
    res.json({ leaderboard });
  } catch (err) {
    console.error('Leaderboard error:', err);
    res.status(500).json({ error: 'Gagal mengambil leaderboard' });
  }
});

// ==============================
// REPORTS
// ==============================

// POST /api/reports — Submit report
app.post('/api/reports', authMiddleware, (req, res) => {
  try {
    const { type, description } = req.body;
    if (!type || !description) {
      return res.status(400).json({ error: 'Tipe dan deskripsi harus diisi' });
    }

    const reportId = `report_${Date.now()}`;
    const date = new Date().toISOString();
    insertReport(reportId, req.userId, type, description, date);

    res.status(201).json({
      report: {
        reportID: reportId,
        studentID: req.userId,
        type,
        description,
        date,
        status: 'submitted',
      },
    });
  } catch (err) {
    console.error('Submit report error:', err);
    res.status(500).json({ error: 'Gagal mengirim laporan' });
  }
});

// GET /api/reports — Get user reports
app.get('/api/reports', authMiddleware, (req, res) => {
  try {
    const reports = getUserReports(req.userId).map(r => ({
      reportID: r.id,
      studentID: r.student_id,
      type: r.type,
      description: r.description,
      date: r.date,
      status: r.status,
    }));
    res.json({ reports });
  } catch (err) {
    console.error('Get reports error:', err);
    res.status(500).json({ error: 'Gagal mengambil laporan' });
  }
});

// ==============================
// CYBERBRO AI CHAT (OpenAI Proxy)
// ==============================

const SYSTEM_PROMPT = `Kamu adalah "CyberBro", asisten virtual AI yang ramah dan keren untuk platform edukasi cyber security bernama SiagaSiber.

IDENTITAS:
- Nama: CyberBro
- Peran: Tutor virtual cyber security untuk pelajar SMP & SMA di Indonesia
- Gaya bahasa: Santai, asik, pakai bahasa anak muda Indonesia tapi tetap informatif
- Tambahkan emoji yang relevan untuk membuat jawaban lebih menarik

ATURAN:
1. HANYA menjawab pertanyaan seputar cyber security, keamanan digital, dan IT security
2. Jika pertanyaan di luar topik, arahkan kembali ke topik cyber security dengan sopan
3. Gunakan bahasa Indonesia yang mudah dipahami anak SMP/SMA
4. Berikan contoh-contoh yang relevan dengan kehidupan pelajar (media sosial, game online, WiFi sekolah, dll)
5. Selalu tekankan pentingnya keamanan dan etika digital
6. Jika user melaporkan masalah serius (akun diretas, cyberbullying, ancaman), sarankan untuk:
   - Menggunakan fitur "Bantuan Darurat" di SiagaSiber
   - Menghubungi orang tua/guru
   - Menghubungi BSSN atau polisi cyber jika perlu
7. JANGAN memberikan instruksi untuk melakukan hacking atau aktivitas ilegal
8. Jawab dengan ringkas tapi informatif (maksimal 300 kata)
9. Format jawaban dengan bullet points dan bold (**text**) untuk poin penting

TOPIK KEAHLIAN:
- Password security & credential theft
- Phishing & social engineering
- Malware, virus, ransomware
- WiFi security
- Web defacement & web security
- Two-Factor Authentication (2FA)
- Online privacy & data protection
- Cyberbullying & online safety
- Safe browsing & digital hygiene`;

app.post('/api/cyberbro/chat', authMiddleware, async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array diperlukan' });
    }

    if (!openai) {
      return res.status(503).json({ error: 'OpenAI API tidak tersedia', offline: true });
    }

    // Build conversation with system prompt
    const conversation = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.slice(-20), // Keep last 20 messages
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: conversation,
      max_tokens: 500,
      temperature: 0.7,
    });

    const reply = completion.choices?.[0]?.message?.content || 'Maaf, aku nggak bisa memproses jawaban saat ini.';
    res.json({ reply });
  } catch (err) {
    console.error('CyberBro chat error:', err.message);
    res.status(500).json({ error: 'AI gagal memproses', offline: true });
  }
});

// GET /api/cyberbro/status — Check if AI is available
app.get('/api/cyberbro/status', (_req, res) => {
  res.json({ available: !!openai });
});

// ==============================
// HEALTH CHECK
// ==============================

app.get('/api/health', (_req, res) => {
  const userCount = getUserCount();
  res.json({
    status: 'ok',
    version: '1.0.0',
    platform: 'SiagaSiber Youth System',
    database: 'connected',
    users: userCount,
    ai: openai ? 'connected' : 'offline',
    timestamp: new Date().toISOString(),
  });
});

// ==============================
// START SERVER
// ==============================

// Initialize DB then start server
async function start() {
  await initDB();
  console.log('✅ Database initialized');

  app.listen(PORT, () => {
    console.log(`
╔══════════════════════════════════════════════╗
║     SiagaSiber Backend Server v1.0.0        ║
║     Running on http://localhost:${PORT}         ║
║     Database: SQLite (siagasiber.db)        ║
║     AI: ${openai ? 'OpenAI GPT Connected ✅' : 'Offline Mode ⚠️ '}             ║
╚══════════════════════════════════════════════╝
    `);
  });
}

start().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

export default app;

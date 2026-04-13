// ============================================
// SiagaSiber Backend - Database Layer (sql.js)
// Pure JavaScript SQLite — no native build needed
// ============================================

import initSqlJs from 'sql.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'siagasiber.db');

let db;

// Initialize database asynchronously
export async function initDB() {
  const SQL = await initSqlJs();

  // Load existing DB or create new
  if (fs.existsSync(dbPath)) {
    const buffer = fs.readFileSync(dbPath);
    db = new SQL.Database(buffer);
  } else {
    db = new SQL.Database();
  }

  // Create tables
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT DEFAULT 'student',
      points INTEGER DEFAULT 0,
      level INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS user_badges (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      badge_id TEXT NOT NULL,
      badge_name TEXT NOT NULL,
      description TEXT DEFAULT '',
      icon TEXT DEFAULT '',
      earned_at TEXT DEFAULT (datetime('now')),
      UNIQUE(user_id, badge_id)
    );

    CREATE TABLE IF NOT EXISTS completed_modules (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      module_id TEXT NOT NULL,
      completed_at TEXT DEFAULT (datetime('now')),
      UNIQUE(user_id, module_id)
    );

    CREATE TABLE IF NOT EXISTS completed_games (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      game_id TEXT NOT NULL,
      completed_at TEXT DEFAULT (datetime('now')),
      UNIQUE(user_id, game_id)
    );

    CREATE TABLE IF NOT EXISTS quiz_scores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      quiz_id TEXT NOT NULL,
      score INTEGER NOT NULL,
      total_questions INTEGER NOT NULL,
      date TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS reports (
      id TEXT PRIMARY KEY,
      student_id TEXT NOT NULL,
      type TEXT NOT NULL,
      description TEXT NOT NULL,
      date TEXT NOT NULL,
      status TEXT DEFAULT 'submitted'
    );
  `);

  saveDB();
  seedDemoData();
  return db;
}

// Save DB to disk
function saveDB() {
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(dbPath, buffer);
}

// ---- Helper: run queries ----

function runQuery(sql, params = []) {
  db.run(sql, params);
  saveDB();
}

function getOne(sql, params = []) {
  const stmt = db.prepare(sql);
  stmt.bind(params);
  let result = null;
  if (stmt.step()) {
    result = stmt.getAsObject();
  }
  stmt.free();
  return result;
}

function getAll(sql, params = []) {
  const stmt = db.prepare(sql);
  stmt.bind(params);
  const results = [];
  while (stmt.step()) {
    results.push(stmt.getAsObject());
  }
  stmt.free();
  return results;
}

// ---- DB Operations ----

export function insertUser(id, name, email, passwordHash) {
  runQuery(
    `INSERT INTO users (id, name, email, password_hash, role, points, level) VALUES (?, ?, ?, ?, 'student', 0, 1)`,
    [id, name, email, passwordHash]
  );
}

export function findUserByEmail(email) {
  return getOne(`SELECT * FROM users WHERE email = ?`, [email]);
}

export function findUserById(id) {
  return getOne(`SELECT * FROM users WHERE id = ?`, [id]);
}

export function updateUserPoints(points, level, id) {
  runQuery(`UPDATE users SET points = ?, level = ? WHERE id = ?`, [points, level, id]);
}

export function insertBadge(userId, badgeId, badgeName, description, icon) {
  try {
    runQuery(
      `INSERT OR IGNORE INTO user_badges (user_id, badge_id, badge_name, description, icon) VALUES (?, ?, ?, ?, ?)`,
      [userId, badgeId, badgeName, description || '', icon || '']
    );
  } catch (e) {
    // Ignore duplicate
  }
}

export function getUserBadges(userId) {
  return getAll(`SELECT * FROM user_badges WHERE user_id = ?`, [userId]);
}

export function insertCompletedModule(userId, moduleId) {
  try {
    runQuery(`INSERT OR IGNORE INTO completed_modules (user_id, module_id) VALUES (?, ?)`, [userId, moduleId]);
  } catch (e) { /* ignore dupe */ }
}

export function getCompletedModules(userId) {
  return getAll(`SELECT module_id FROM completed_modules WHERE user_id = ?`, [userId]);
}

export function insertCompletedGame(userId, gameId) {
  try {
    runQuery(`INSERT OR IGNORE INTO completed_games (user_id, game_id) VALUES (?, ?)`, [userId, gameId]);
  } catch (e) { /* ignore dupe */ }
}

export function getCompletedGames(userId) {
  return getAll(`SELECT game_id FROM completed_games WHERE user_id = ?`, [userId]);
}

export function insertQuizScore(userId, quizId, score, totalQuestions, date) {
  runQuery(
    `INSERT INTO quiz_scores (user_id, quiz_id, score, total_questions, date) VALUES (?, ?, ?, ?, ?)`,
    [userId, quizId, score, totalQuestions, date]
  );
}

export function getUserQuizScores(userId) {
  return getAll(`SELECT * FROM quiz_scores WHERE user_id = ?`, [userId]);
}

export function insertReport(id, studentId, type, description, date) {
  runQuery(
    `INSERT INTO reports (id, student_id, type, description, date, status) VALUES (?, ?, ?, ?, ?, 'submitted')`,
    [id, studentId, type, description, date]
  );
}

export function getUserReports(studentId) {
  return getAll(`SELECT * FROM reports WHERE student_id = ?`, [studentId]);
}

export function getLeaderboardQuery() {
  return getAll(`SELECT id, name, points, level FROM users ORDER BY points DESC LIMIT 50`);
}

// ---- Helper Functions ----

export function getLevelFromPoints(points) {
  if (points >= 2000) return 6;
  if (points >= 1500) return 5;
  if (points >= 1000) return 4;
  if (points >= 500) return 3;
  if (points >= 200) return 2;
  return 1;
}

export function buildStudentObject(userRow) {
  if (!userRow) return null;

  const badges = getUserBadges(userRow.id).map(b => ({
    badgeID: b.badge_id,
    badgeName: b.badge_name,
    description: b.description,
    icon: b.icon,
    earnedAt: b.earned_at,
  }));

  const completedModulesArr = getCompletedModules(userRow.id).map(m => m.module_id);
  const completedGamesArr = getCompletedGames(userRow.id).map(g => g.game_id);
  const quizScores = getUserQuizScores(userRow.id).map(q => ({
    quizID: q.quiz_id,
    score: q.score,
    totalQuestions: q.total_questions,
    date: q.date,
  }));

  return {
    userID: userRow.id,
    name: userRow.name,
    email: userRow.email,
    role: userRow.role,
    points: userRow.points,
    level: userRow.level,
    badges,
    completedModules: completedModulesArr,
    completedGames: completedGamesArr,
    quizScores,
  };
}

export function buildLeaderboard() {
  const users = getLeaderboardQuery();
  return users.map(u => {
    const badges = getUserBadges(u.id).map(b => ({
      badgeID: b.badge_id,
      badgeName: b.badge_name,
      description: b.description,
      icon: b.icon,
    }));
    return {
      userID: u.id,
      name: u.name,
      points: u.points,
      level: u.level,
      badges,
    };
  });
}

export function getUserCount() {
  const row = getOne('SELECT COUNT(*) as c FROM users');
  return row ? row.c : 0;
}

// ---- Seed demo data ----
function seedDemoData() {
  const count = getUserCount();
  if (count === 0) {
    const demoUsers = [
      { id: 'demo1', name: 'CyberNinja42', points: 2350, level: 6 },
      { id: 'demo2', name: 'H4ck3rGirl', points: 1980, level: 5 },
      { id: 'demo3', name: 'SecureByDefault', points: 1650, level: 5 },
      { id: 'demo4', name: 'FirewallKid', points: 1200, level: 4 },
      { id: 'demo5', name: 'ByteDefender', points: 890, level: 3 },
      { id: 'demo6', name: 'PixelShield', points: 720, level: 3 },
      { id: 'demo7', name: 'NetGuardian', points: 540, level: 3 },
      { id: 'demo8', name: 'CyberPunk99', points: 350, level: 2 },
    ];

    for (const u of demoUsers) {
      try {
        runQuery(
          `INSERT OR IGNORE INTO users (id, name, email, password_hash, points, level) VALUES (?, ?, ?, 'DEMO_NO_LOGIN', ?, ?)`,
          [u.id, u.name, `${u.id}@demo.local`, u.points, u.level]
        );
      } catch (e) { /* ignore */ }
    }

    // Demo badges
    insertBadge('demo1', 'vault-breaker', 'Vault Breaker', 'Selesaikan game Leaked Vault', '');
    insertBadge('demo1', 'chat-detective', 'Chat Detective', 'Selesaikan game Chat Trap', '');
    insertBadge('demo2', 'web-guardian', 'Web Guardian', 'Selesaikan game Defacement Scanner', '');
    insertBadge('demo3', 'quiz-champion', 'Quiz Champion', 'Dapatkan skor sempurna di quiz', '');
    insertBadge('demo4', 'malware-hunter', 'Malware Hunter', 'Selesaikan modul Malware & Virus', '');
    insertBadge('demo5', 'password-master', 'Password Master', 'Selesaikan modul Pencurian Kredensial', '');
    insertBadge('demo8', 'first-steps', 'First Steps', 'Selesaikan modul pertama', '');

    console.log('✅ Demo leaderboard data seeded');
  }
}

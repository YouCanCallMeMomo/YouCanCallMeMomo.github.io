// ============================================
// SiagaSiber Youth System - State Management
// Backend API + localStorage fallback
// ============================================

import { Student, Badge, QuizScore, Report, getLevelFromPoints, LeaderboardEntry } from './types';
import {
  apiRegister, apiLogin, apiGetMe, apiLogout as apiLogoutRemote,
  apiAddPoints, apiAwardBadge, apiCompleteModule as apiCompleteModuleRemote,
  apiCompleteGame as apiCompleteGameRemote, apiAddQuizScore,
  apiGetLeaderboard, apiSubmitReport, apiGetReports,
  hasToken, apiHealthCheck,
} from './api';

const STORAGE_KEYS = {
  CURRENT_USER: 'siagasiber_user',
  ALL_USERS: 'siagasiber_all_users',
  LEADERBOARD: 'siagasiber_leaderboard',
  REPORTS: 'siagasiber_reports',
  USE_BACKEND: 'siagasiber_use_backend',
};

// Track if backend is available
let backendAvailable: boolean | null = null;

export async function checkBackend(): Promise<boolean> {
  try {
    backendAvailable = await apiHealthCheck();
  } catch {
    backendAvailable = false;
  }
  localStorage.setItem(STORAGE_KEYS.USE_BACKEND, String(backendAvailable));
  return backendAvailable;
}

function isBackendMode(): boolean {
  if (backendAvailable !== null) return backendAvailable;
  const stored = localStorage.getItem(STORAGE_KEYS.USE_BACKEND);
  return stored === 'true';
}

// ---- User Management ----

export async function registerUser(name: string, email: string, password: string): Promise<Student> {
  // Try backend first
  if (isBackendMode()) {
    try {
      const user = await apiRegister(name, email, password);
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      return user;
    } catch (err: any) {
      console.error('Backend register failed:', err.message);
      throw err; // Don't fallback on register — show real error
    }
  }

  // localStorage fallback
  const student: Student = {
    userID: `user_${Date.now()}`,
    name,
    email,
    password,
    role: 'student',
    points: 0,
    level: 1,
    badges: [],
    completedModules: [],
    completedGames: [],
    quizScores: [],
  };

  const allUsersStr = localStorage.getItem(STORAGE_KEYS.ALL_USERS);
  const allUsers: Student[] = allUsersStr ? JSON.parse(allUsersStr) : [];
  if (allUsers.some(u => u.email === email)) {
    throw new Error('Email sudah terdaftar!');
  }
  allUsers.push(student);
  localStorage.setItem(STORAGE_KEYS.ALL_USERS, JSON.stringify(allUsers));
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(student));
  addToLeaderboardLocal(student);
  return student;
}

export async function loginUser(email: string, password: string): Promise<Student | null> {
  if (isBackendMode()) {
    try {
      const user = await apiLogin(email, password);
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      return user;
    } catch (err: any) {
      console.error('Backend login failed:', err.message);
      throw err;
    }
  }

  // localStorage fallback
  const allUsersStr = localStorage.getItem(STORAGE_KEYS.ALL_USERS);
  if (allUsersStr) {
    const allUsers: Student[] = JSON.parse(allUsersStr);
    const user = allUsers.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      return user;
    }
  }
  return null;
}

export async function getCurrentUser(): Promise<Student | null> {
  if (isBackendMode() && hasToken()) {
    try {
      const user = await apiGetMe();
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      return user;
    } catch {
      // Token might be expired — fall through to localStorage cache
    }
  }

  const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  if (saved) {
    return JSON.parse(saved);
  }
  return null;
}

// Sync version for components that can't be async
export function getCurrentUserSync(): Student | null {
  const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  if (saved) {
    return JSON.parse(saved);
  }
  return null;
}

export function updateUserLocal(user: Student): void {
  user.level = getLevelFromPoints(user.points);
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));

  const allUsersStr = localStorage.getItem(STORAGE_KEYS.ALL_USERS);
  if (allUsersStr) {
    const allUsers: Student[] = JSON.parse(allUsersStr);
    const idx = allUsers.findIndex(u => u.userID === user.userID);
    if (idx !== -1) {
      allUsers[idx] = user;
      localStorage.setItem(STORAGE_KEYS.ALL_USERS, JSON.stringify(allUsers));
    }
  }
  addToLeaderboardLocal(user);
}

export function logoutUser(): void {
  apiLogoutRemote();
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
}

// ---- Points & Badges ----

export async function addPoints(points: number): Promise<Student | null> {
  if (isBackendMode() && hasToken()) {
    try {
      const user = await apiAddPoints(points);
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      return user;
    } catch (err) {
      console.error('Backend addPoints failed:', err);
    }
  }

  // localStorage fallback
  const user = getCurrentUserSync();
  if (!user) return null;
  user.points += points;
  user.level = getLevelFromPoints(user.points);
  updateUserLocal(user);
  return user;
}

export async function awardBadge(badgeID: string, badgeName: string, description: string, icon: string): Promise<Student | null> {
  if (isBackendMode() && hasToken()) {
    try {
      const user = await apiAwardBadge(badgeID, badgeName, description, icon);
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      return user;
    } catch (err) {
      console.error('Backend awardBadge failed:', err);
    }
  }

  const user = getCurrentUserSync();
  if (!user) return null;
  if (user.badges.some(b => b.badgeID === badgeID)) return user;
  const badge: Badge = {
    badgeID,
    badgeName,
    description,
    icon,
    earnedAt: new Date().toISOString(),
  };
  user.badges.push(badge);
  updateUserLocal(user);
  return user;
}

export async function completeModule(moduleID: string): Promise<Student | null> {
  if (isBackendMode() && hasToken()) {
    try {
      const user = await apiCompleteModuleRemote(moduleID);
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      return user;
    } catch (err) {
      console.error('Backend completeModule failed:', err);
    }
  }

  const user = getCurrentUserSync();
  if (!user) return null;
  if (!user.completedModules.includes(moduleID)) {
    user.completedModules.push(moduleID);
    updateUserLocal(user);
  }
  return user;
}

export async function completeGame(gameID: string): Promise<Student | null> {
  if (isBackendMode() && hasToken()) {
    try {
      const user = await apiCompleteGameRemote(gameID);
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      return user;
    } catch (err) {
      console.error('Backend completeGame failed:', err);
    }
  }

  const user = getCurrentUserSync();
  if (!user) return null;
  if (!user.completedGames.includes(gameID)) {
    user.completedGames.push(gameID);
    updateUserLocal(user);
  }
  return user;
}

export async function addQuizScore(quizScore: QuizScore): Promise<Student | null> {
  if (isBackendMode() && hasToken()) {
    try {
      const user = await apiAddQuizScore(quizScore.quizID, quizScore.score, quizScore.totalQuestions, quizScore.date);
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      return user;
    } catch (err) {
      console.error('Backend addQuizScore failed:', err);
    }
  }

  const user = getCurrentUserSync();
  if (!user) return null;
  user.quizScores.push(quizScore);
  updateUserLocal(user);
  return user;
}

// ---- Leaderboard ----

export async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  if (isBackendMode()) {
    try {
      return await apiGetLeaderboard();
    } catch (err) {
      console.error('Backend getLeaderboard failed:', err);
    }
  }

  // localStorage fallback
  const saved = localStorage.getItem(STORAGE_KEYS.LEADERBOARD);
  if (saved) {
    const entries: LeaderboardEntry[] = JSON.parse(saved);
    return entries.sort((a, b) => b.points - a.points);
  }
  return generateDemoLeaderboard();
}

function addToLeaderboardLocal(user: Student): void {
  const saved = localStorage.getItem(STORAGE_KEYS.LEADERBOARD);
  const entries: LeaderboardEntry[] = saved ? JSON.parse(saved) : generateDemoLeaderboard();
  const existingIdx = entries.findIndex(e => e.userID === user.userID);
  const entry: LeaderboardEntry = {
    userID: user.userID,
    name: user.name,
    points: user.points,
    level: user.level,
    badges: user.badges,
  };
  if (existingIdx >= 0) {
    entries[existingIdx] = entry;
  } else {
    entries.push(entry);
  }
  localStorage.setItem(STORAGE_KEYS.LEADERBOARD, JSON.stringify(entries));
}

function generateDemoLeaderboard(): LeaderboardEntry[] {
  const demoEntries: LeaderboardEntry[] = [
    { userID: 'demo1', name: 'CyberNinja42', points: 2350, level: 6, badges: [{ badgeID: 'vault-breaker', badgeName: 'Vault Breaker', description: '', icon: '' }, { badgeID: 'chat-detective', badgeName: 'Chat Detective', description: '', icon: '' }] },
    { userID: 'demo2', name: 'H4ck3rGirl', points: 1980, level: 5, badges: [{ badgeID: 'web-guardian', badgeName: 'Web Guardian', description: '', icon: '' }] },
    { userID: 'demo3', name: 'SecureByDefault', points: 1650, level: 5, badges: [{ badgeID: 'quiz-champion', badgeName: 'Quiz Champion', description: '', icon: '' }] },
    { userID: 'demo4', name: 'FirewallKid', points: 1200, level: 4, badges: [{ badgeID: 'malware-hunter', badgeName: 'Malware Hunter', description: '', icon: '' }] },
    { userID: 'demo5', name: 'ByteDefender', points: 890, level: 3, badges: [{ badgeID: 'password-master', badgeName: 'Password Master', description: '', icon: '' }] },
    { userID: 'demo6', name: 'PixelShield', points: 720, level: 3, badges: [] },
    { userID: 'demo7', name: 'NetGuardian', points: 540, level: 3, badges: [] },
    { userID: 'demo8', name: 'CyberPunk99', points: 350, level: 2, badges: [{ badgeID: 'first-steps', badgeName: 'First Steps', description: '', icon: '' }] },
  ];
  localStorage.setItem(STORAGE_KEYS.LEADERBOARD, JSON.stringify(demoEntries));
  return demoEntries;
}

// ---- Reports ----

export async function submitReport(report: Omit<Report, 'reportID' | 'date' | 'status'>): Promise<Report> {
  if (isBackendMode() && hasToken()) {
    try {
      return await apiSubmitReport(report.type, report.description);
    } catch (err) {
      console.error('Backend submitReport failed:', err);
    }
  }

  // localStorage fallback
  const fullReport: Report = {
    ...report,
    reportID: `report_${Date.now()}`,
    date: new Date().toISOString(),
    status: 'submitted',
  };
  const saved = localStorage.getItem(STORAGE_KEYS.REPORTS);
  const reports: Report[] = saved ? JSON.parse(saved) : [];
  reports.push(fullReport);
  localStorage.setItem(STORAGE_KEYS.REPORTS, JSON.stringify(reports));
  return fullReport;
}

export async function getReports(): Promise<Report[]> {
  if (isBackendMode() && hasToken()) {
    try {
      return await apiGetReports();
    } catch (err) {
      console.error('Backend getReports failed:', err);
    }
  }

  const saved = localStorage.getItem(STORAGE_KEYS.REPORTS);
  return saved ? JSON.parse(saved) : [];
}

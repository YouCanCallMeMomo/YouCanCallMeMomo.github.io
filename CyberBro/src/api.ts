// ============================================
// SiagaSiber - Frontend API Client
// Communicates with Express.js backend
// Falls back to localStorage when backend is offline
// ============================================

const API_BASE = '/api';

// ---- Token Management ----

function getToken(): string | null {
  return localStorage.getItem('siagasiber_token');
}

function setToken(token: string): void {
  localStorage.setItem('siagasiber_token', token);
}

function removeToken(): void {
  localStorage.removeItem('siagasiber_token');
}

// ---- HTTP Helper ----

async function apiFetch(path: string, options: RequestInit = {}): Promise<any> {
  const token = getToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || `API Error: ${response.status}`);
  }

  return data;
}

// ---- Auth API ----

export async function apiRegister(name: string, email: string, password: string) {
  const data = await apiFetch('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });
  setToken(data.token);
  return data.user;
}

export async function apiLogin(email: string, password: string) {
  const data = await apiFetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  setToken(data.token);
  return data.user;
}

export async function apiGetMe() {
  const data = await apiFetch('/auth/me');
  return data.user;
}

export function apiLogout() {
  removeToken();
}

export function hasToken(): boolean {
  return !!getToken();
}

// ---- User Progress API ----

export async function apiAddPoints(points: number) {
  const data = await apiFetch('/user/points', {
    method: 'POST',
    body: JSON.stringify({ points }),
  });
  return data.user;
}

export async function apiAwardBadge(badgeID: string, badgeName: string, description: string, icon: string) {
  const data = await apiFetch('/user/badge', {
    method: 'POST',
    body: JSON.stringify({ badgeID, badgeName, description, icon }),
  });
  return data.user;
}

export async function apiCompleteModule(moduleID: string) {
  const data = await apiFetch('/user/module', {
    method: 'POST',
    body: JSON.stringify({ moduleID }),
  });
  return data.user;
}

export async function apiCompleteGame(gameID: string) {
  const data = await apiFetch('/user/game', {
    method: 'POST',
    body: JSON.stringify({ gameID }),
  });
  return data.user;
}

export async function apiAddQuizScore(quizID: string, score: number, totalQuestions: number, date: string) {
  const data = await apiFetch('/user/quiz', {
    method: 'POST',
    body: JSON.stringify({ quizID, score, totalQuestions, date }),
  });
  return data.user;
}

// ---- Leaderboard API ----

export async function apiGetLeaderboard() {
  const data = await apiFetch('/leaderboard');
  return data.leaderboard;
}

// ---- Reports API ----

export async function apiSubmitReport(type: string, description: string) {
  const data = await apiFetch('/reports', {
    method: 'POST',
    body: JSON.stringify({ type, description }),
  });
  return data.report;
}

export async function apiGetReports() {
  const data = await apiFetch('/reports');
  return data.reports;
}

// ---- CyberBro AI API ----

export async function apiChatCyberBro(messages: { role: string; content: string }[]) {
  const data = await apiFetch('/cyberbro/chat', {
    method: 'POST',
    body: JSON.stringify({ messages }),
  });
  return data.reply;
}

export async function apiCyberBroStatus(): Promise<boolean> {
  try {
    const data = await apiFetch('/cyberbro/status');
    return data.available;
  } catch {
    return false;
  }
}

// ---- Health Check ----

export async function apiHealthCheck(): Promise<boolean> {
  try {
    await apiFetch('/health');
    return true;
  } catch {
    return false;
  }
}

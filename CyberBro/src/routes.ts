import { createBrowserRouter } from "react-router";
import LandingPage from "./components/LandingPage";
import RegisterPage from "./components/RegisterPage";
import ModulesPage from "./components/ModulesPage";
import LeakedVault from "./components/games/LeakedVault";
import DefacementScanner from "./components/games/DefacementScanner";
import ChatTrap from "./components/games/ChatTrap";
import ForensicInvestigator from "./components/games/ForensicInvestigator";
import SqliScanner from "./components/games/SqliScanner";
import QuizPage from "./components/QuizPage";
import LeaderboardPage from "./components/LeaderboardPage";
import CyberBroPage from "./components/CyberBroPage";
import ReportPage from "./components/ReportPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/modules",
    Component: ModulesPage,
  },
  {
    path: "/games/leaked-vault",
    Component: LeakedVault,
  },
  {
    path: "/games/defacement-scanner",
    Component: DefacementScanner,
  },
  {
    path: "/games/chat-trap",
    Component: ChatTrap,
  },
  {
    path: "/games/forensic-investigator",
    Component: ForensicInvestigator,
  },
  {
    path: "/games/sqli-scanner",
    Component: SqliScanner,
  },
  {
    path: "/quiz",
    Component: QuizPage,
  },
  {
    path: "/leaderboard",
    Component: LeaderboardPage,
  },
  {
    path: "/cyberbro",
    Component: CyberBroPage,
  },
  {
    path: "/report",
    Component: ReportPage,
  },
]);
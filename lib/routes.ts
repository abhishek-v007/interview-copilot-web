export const ROUTES = {
  home: "/",
  login: "/login",
  dashboard: "/dashboard",
  resume: "/resume",
  jobDescription: "/job-description",
  interviewHistory: "/interview-history",
  settings: "/settings",
} as const;

export const PLACEHOLDER_PAGES = [
  { href: ROUTES.login, title: "Login" },
  { href: ROUTES.dashboard, title: "Dashboard" },
  { href: ROUTES.resume, title: "Resume" },
  { href: ROUTES.jobDescription, title: "Job Description" },
  { href: ROUTES.interviewHistory, title: "Interview History" },
  { href: ROUTES.settings, title: "Settings" },
] as const;

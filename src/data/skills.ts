export interface SkillCategory {
  title: string;
  iconKey: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    iconKey: 'Palette',
    skills: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'MUI', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    iconKey: 'Dns',
    skills: ['Node.js', 'Express.js', 'NestJS', 'FastAPI', 'REST APIs', 'GraphQL', 'Socket.IO', 'WebSockets'],
  },
  {
    title: 'Databases',
    iconKey: 'Storage',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'Mongoose', 'Prisma'],
  },
  {
    title: 'Cloud & DevOps',
    iconKey: 'Cloud',
    skills: ['AWS S3', 'CloudFront', 'Docker', 'GitHub Actions', 'CI/CD', 'Vercel', 'Linux'],
  },
  {
    title: 'AI / ML',
    iconKey: 'Psychology',
    skills: ['XGBoost', 'scikit-learn', 'SHAP', 'Optuna', 'Python', 'NumPy', 'pandas'],
  },
  {
    title: 'Mobile & Desktop',
    iconKey: 'Devices',
    skills: ['Kotlin', 'Android SDK', 'C#', '.NET', 'WinForms', 'WPF'],
  },
];

export const SUBJECTS = [
  { id: "sub_1", name: "Physics", questionCount: 342, color: "blue" },
  { id: "sub_2", name: "Chemistry", questionCount: 289, color: "green" },
  { id: "sub_3", name: "Botany", questionCount: 201, color: "emerald" },
  { id: "sub_4", name: "Zoology", questionCount: 198, color: "violet" },
  { id: "sub_5", name: "English", questionCount: 95, color: "amber" }
];

export const RECENT_TESTS = [
  {
    id: "test_1",
    date: "May 8, 2025",
    subject: "Full Test",
    score: 84.2,
    totalMarks: 100,
    correct: 85,
    wrong: 4,
    skipped: 11,
    timeTaken: "1h 50m",
    status: "COMPLETED"
  },
  {
    id: "test_2",
    date: "May 5, 2025",
    subject: "Physics",
    score: 58.0,
    totalMarks: 100,
    correct: 60,
    wrong: 10,
    skipped: 30,
    timeTaken: "1h 42m",
    status: "COMPLETED"
  },
  {
    id: "test_3",
    date: "May 1, 2025",
    subject: "Chemistry",
    score: 72.4,
    totalMarks: 100,
    correct: 74,
    wrong: 8,
    skipped: 18,
    timeTaken: "1h 30m",
    status: "COMPLETED"
  },
  {
    id: "test_4",
    date: "Apr 28, 2025",
    subject: "Botany",
    score: 92.0,
    totalMarks: 100,
    correct: 92,
    wrong: 0,
    skipped: 8,
    timeTaken: "55m",
    status: "COMPLETED"
  },
  {
    id: "test_5",
    date: "Apr 20, 2025",
    subject: "Full Test",
    score: 65.1,
    totalMarks: 100,
    correct: 67,
    wrong: 9,
    skipped: 24,
    timeTaken: "1h 58m",
    status: "COMPLETED"
  }
];

export const DASHBOARD_STATS = {
  totalQuestions: 1125,
  testsTaken: 5,
  averageScore: 68.3,
  subjectsCovered: 5,
  currentStreak: 3,
  bestScore: 84.2,
  rank: 142,
  totalStudents: 4820
};

export const LEADERBOARD_PREVIEW = [
  { rank: 1, name: "Prashant Sharma", score: 98.4, tests: 24, accuracy: "95%" },
  { rank: 2, name: "Anjali Thapa", score: 96.2, tests: 21, accuracy: "92%" },
  { rank: 3, name: "Suman Shrestha", score: 95.8, tests: 19, accuracy: "90%" }
];

export const MOCK_QUESTIONS = [
  {
    id: "q_1",
    questionText: "A mass of 2 kg is attached to a spring of spring constant 50 N/m. The spring is pulled to a distance of 5 cm from its equilibrium position and released. What is the maximum velocity of the mass?",
    options: {
      A: "0.25 m/s",
      B: "0.5 m/s",
      C: "5 m/s",
      D: "2.5 m/s"
    },
    correctAnswer: "A" as const,
    explanation: "v_max = A * w. w = sqrt(k/m) = sqrt(50/2) = 5 rad/s. A = 5 cm = 0.05 m. v_max = 0.05 * 5 = 0.25 m/s.",
    subject: "Physics",
    chapter: "Simple Harmonic Motion",
    difficulty: "MEDIUM" as const,
    year: 2022,
    source: "CEE",
    marks: 1,
    negativeMark: 0.2
  },
  {
    id: "q_2",
    questionText: "If the temperature of a gas is increased from 27°C to 927°C, the root mean square velocity of its molecules becomes:",
    options: {
      A: "Twice",
      B: "Half",
      C: "Four times",
      D: "Remains the same"
    },
    correctAnswer: "A" as const,
    explanation: "v_rms is proportional to sqrt(T). T1 = 300 K, T2 = 1200 K. sqrt(1200 / 300) = sqrt(4) = 2. So velocity becomes twice.",
    subject: "Physics",
    chapter: "Kinetic Theory of Gases",
    difficulty: "EASY" as const,
    year: 2023,
    source: "CEE",
    marks: 1,
    negativeMark: 0.2
  },
  {
    id: "q_3",
    questionText: "Which of the following elements has the highest first ionization energy?",
    options: {
      A: "Nitrogen",
      B: "Oxygen",
      C: "Carbon",
      D: "Boron"
    },
    correctAnswer: "A" as const,
    explanation: "Nitrogen has a half-filled p orbital configuration (2p3), which confers extra stability compared to Oxygen (2p4), making its first ionization energy higher.",
    subject: "Chemistry",
    chapter: "Periodic Table",
    difficulty: "MEDIUM" as const,
    year: 2021,
    source: "CEE",
    marks: 1,
    negativeMark: 0.2
  },
  {
    id: "q_4",
    questionText: "What is the IUPAC name of the compound formed when primary amine reacts with chloroform and alcoholic KOH?",
    options: {
      A: "Alkyl isocyanide",
      B: "Alkyl cyanide",
      C: "Carbylamine",
      D: "Both A and C"
    },
    correctAnswer: "D" as const,
    explanation: "The reaction is the Carbylamine reaction, forming an alkyl isocyanide (also called carbylamine), known for its foul smell.",
    subject: "Chemistry",
    chapter: "Amines",
    difficulty: "HARD" as const,
    year: 2020,
    source: "KU",
    marks: 1,
    negativeMark: 0.2
  },
  {
    id: "q_5",
    questionText: "The type of vascular bundle in a dicot stem is:",
    options: {
      A: "Radial and exarch",
      B: "Conjoint, collateral, and closed",
      C: "Conjoint, collateral, and open",
      D: "Conjoint, bicollateral, and open"
    },
    correctAnswer: "C" as const,
    explanation: "Dicot stems have conjoint, collateral, and open vascular bundles. They are open because cambium is present between xylem and phloem, enabling secondary growth.",
    subject: "Botany",
    chapter: "Plant Anatomy",
    difficulty: "EASY" as const,
    year: 2022,
    source: "CEE",
    marks: 1,
    negativeMark: 0.2
  },
  {
    id: "q_6",
    questionText: "During photosynthesis, the oxygen evolved comes from:",
    options: {
      A: "Carbon dioxide",
      B: "Water",
      C: "Glucose",
      D: "Chlorophyll"
    },
    correctAnswer: "B" as const,
    explanation: "Oxygen is evolved from the photolysis of water during the light-dependent reactions of photosynthesis.",
    subject: "Botany",
    chapter: "Plant Physiology",
    difficulty: "MEDIUM" as const,
    year: 2023,
    source: "IOE",
    marks: 1,
    negativeMark: 0.2
  },
  {
    id: "q_7",
    questionText: "Which of the following pairs of hormones are antagonistic to each other?",
    options: {
      A: "Insulin and Glucagon",
      B: "Epinephrine and Norepinephrine",
      C: "Estrogen and Progesterone",
      D: "Thyroxine and Calcitonin"
    },
    correctAnswer: "A" as const,
    explanation: "Insulin lowers blood glucose levels, whereas Glucagon raises blood glucose levels, making them antagonistic hormones.",
    subject: "Zoology",
    chapter: "Endocrine System",
    difficulty: "EASY" as const,
    year: 2019,
    source: "CEE",
    marks: 1,
    negativeMark: 0.2
  },
  {
    id: "q_8",
    questionText: "The infective stage of Plasmodium falciparum for humans is:",
    options: {
      A: "Merozoite",
      B: "Sporozoite",
      C: "Trophozoite",
      D: "Gametocyte"
    },
    correctAnswer: "B" as const,
    explanation: "Sporozoites are the infective stage of Plasmodium that are transferred to humans through the bite of an infected female Anopheles mosquito.",
    subject: "Zoology",
    chapter: "Human Health and Disease",
    difficulty: "MEDIUM" as const,
    year: 2021,
    source: "CEE",
    marks: 1,
    negativeMark: 0.2
  },
  {
    id: "q_9",
    questionText: "Select the correctly spelled word:",
    options: {
      A: "Accomodation",
      B: "Acommodation",
      C: "Accommodation",
      D: "Accomodacion"
    },
    correctAnswer: "C" as const,
    explanation: "The correct spelling is 'Accommodation', with double 'c' and double 'm'.",
    subject: "English",
    chapter: "Vocabulary / Spelling",
    difficulty: "EASY" as const,
    year: 2022,
    source: "CEE",
    marks: 1,
    negativeMark: 0.2
  },
  {
    id: "q_10",
    questionText: "Choose the correct preposition: 'He is completely absorbed _____ his work.'",
    options: {
      A: "in",
      B: "with",
      C: "at",
      D: "into"
    },
    correctAnswer: "A" as const,
    explanation: "The preposition 'in' is correctly paired with the adjective 'absorbed' when referring to being engaged or involved.",
    subject: "English",
    chapter: "Prepositions",
    difficulty: "MEDIUM" as const,
    year: 2020,
    source: "KU",
    marks: 1,
    negativeMark: 0.2
  }
];

export const MOCK_TEST_CONFIG = {
  testId: "mock_test_001",
  title: "CEE Full Mock Test",
  totalQuestions: 200,
  timeLimit: 180 * 60,
  subjects: ["Physics", "Chemistry", "Botany", "Zoology", "English"],
  negativeMarking: true,
  marksPerCorrect: 1,
  marksPerWrong: -0.25
};

export const MOCK_RESULT = {
  testId: "mock_test_001",
  studentName: "Guest Student",
  completedAt: "May 11, 2025 · 10:42 AM",
  timeTaken: "2h 47m",
  timeInSeconds: 10020,
  totalQuestions: 200,
  correct: 134,
  wrong: 41,
  skipped: 25,
  rawScore: 123.75,
  maxScore: 200,
  percentage: 61.88,
  subjectBreakdown: [
    {
      subject: "Physics",
      total: 50,
      correct: 32,
      wrong: 12,
      skipped: 6,
      score: 29.0,
      maxScore: 50,
      accuracy: 64.0
    },
    {
      subject: "Chemistry",
      total: 50,
      correct: 38,
      wrong: 8,
      skipped: 4,
      score: 36.0,
      maxScore: 50,
      accuracy: 76.0
    },
    {
      subject: "Zoology",
      total: 40,
      correct: 28,
      wrong: 9,
      skipped: 3,
      score: 25.75,
      maxScore: 40,
      accuracy: 70.0
    },
    {
      subject: "Botany",
      total: 40,
      correct: 24,
      wrong: 10,
      skipped: 6,
      score: 21.5,
      maxScore: 40,
      accuracy: 60.0
    },
    {
      subject: "MAT",
      total: 20,
      correct: 12,
      wrong: 2,
      skipped: 6,
      score: 11.5,
      maxScore: 20,
      accuracy: 60.0
    }
  ],
  estimatedRank: 312,
  totalStudents: 4820,
  percentile: 93.5
};

type OptionKey = "A" | "B" | "C" | "D";

export const MOCK_REVIEW_QUESTIONS = [
  {
    id: "rev_1",
    questionNumber: 1,
    subject: "Physics",
    chapter: "Optics",
    questionText: "If the refractive index of water is 4/3 and that of glass is 3/2, the refractive index of glass with respect to water is:",
    options: {
      A: "9/8",
      B: "8/9",
      C: "2",
      D: "1/2"
    },
    correctAnswer: "A" as OptionKey,
    selectedAnswer: "A" as OptionKey,
    isCorrect: true,
    explanation: "Refractive index of glass w.r.t water = (Refractive index of glass) / (Refractive index of water) = (3/2) / (4/3) = 9/8.",
    marksAwarded: 1.0,
    year: 2021,
    difficulty: "EASY" as const
  },
  {
    id: "rev_2",
    questionNumber: 15,
    subject: "Physics",
    chapter: "Thermodynamics",
    questionText: "The efficiency of a Carnot engine working between 27°C and 127°C is:",
    options: {
      A: "25%",
      B: "50%",
      C: "75%",
      D: "100%"
    },
    correctAnswer: "A" as OptionKey,
    selectedAnswer: "B" as OptionKey,
    isCorrect: false,
    explanation: "Temperatures must be in Kelvin. T1 = 127 + 273 = 400 K. T2 = 27 + 273 = 300 K. Efficiency = 1 - (T2/T1) = 1 - (300/400) = 1/4 = 25%. You likely calculated (127-27)/127 incorrectly.",
    marksAwarded: -0.25,
    year: 2023,
    difficulty: "MEDIUM" as const
  },
  {
    id: "rev_3",
    questionNumber: 55,
    subject: "Chemistry",
    chapter: "Electrochemistry",
    questionText: "The standard electrode potential of normal hydrogen electrode is:",
    options: {
      A: "1 V",
      B: "0 V",
      C: "-1 V",
      D: "10 V"
    },
    correctAnswer: "B" as OptionKey,
    selectedAnswer: null,
    isCorrect: null,
    explanation: "By convention, the standard electrode potential of a normal hydrogen electrode (NHE) or standard hydrogen electrode (SHE) is assigned a value of 0.00 V at all temperatures.",
    marksAwarded: 0.0,
    year: 2022,
    difficulty: "EASY" as const
  },
  {
    id: "rev_4",
    questionNumber: 82,
    subject: "Chemistry",
    chapter: "Organic Chemistry",
    questionText: "Which of the following is the most acidic?",
    options: {
      A: "Phenol",
      B: "o-Cresol",
      C: "m-Nitrophenol",
      D: "p-Nitrophenol"
    },
    correctAnswer: "D" as OptionKey,
    selectedAnswer: "D" as OptionKey,
    isCorrect: true,
    explanation: "The -NO2 group is an electron-withdrawing group (EWG). Para-nitrophenol is the most acidic because the phenoxide ion is stabilized by both -I and -M effects of the NO2 group at the para position.",
    marksAwarded: 1.0,
    year: 2020,
    difficulty: "MEDIUM" as const
  },
  {
    id: "rev_5",
    questionNumber: 110,
    subject: "Zoology",
    chapter: "Human Reproduction",
    questionText: "Corpus luteum secretes mainly:",
    options: {
      A: "Estrogen",
      B: "Progesterone",
      C: "Luteinizing Hormone (LH)",
      D: "Follicle Stimulating Hormone (FSH)"
    },
    correctAnswer: "B" as OptionKey,
    selectedAnswer: "A" as OptionKey,
    isCorrect: false,
    explanation: "The corpus luteum primarily secretes progesterone, which is essential for the maintenance of the endometrium during pregnancy. It also secretes small amounts of estrogen.",
    marksAwarded: -0.25,
    year: 2023,
    difficulty: "EASY" as const
  },
  {
    id: "rev_6",
    questionNumber: 145,
    subject: "Botany",
    chapter: "Genetics",
    questionText: "If a DNA molecule contains 20% adenine, what is the percentage of guanine?",
    options: {
      A: "20%",
      B: "30%",
      C: "40%",
      D: "60%"
    },
    correctAnswer: "B" as OptionKey,
    selectedAnswer: "B" as OptionKey,
    isCorrect: true,
    explanation: "According to Chargaff's rule, A = T and G = C. If Adenine (A) is 20%, then Thymine (T) is 20%. Total A+T = 40%. The remaining 60% is G+C. Therefore, Guanine (G) = 60% / 2 = 30%.",
    marksAwarded: 1.0,
    year: 2021,
    difficulty: "MEDIUM" as const
  },
  {
    id: "rev_7",
    questionNumber: 168,
    subject: "Botany",
    chapter: "Plant Physiology",
    questionText: "The primary CO2 acceptor in C4 plants is:",
    options: {
      A: "RuBP",
      B: "PEP",
      C: "PGA",
      D: "OAA"
    },
    correctAnswer: "B" as OptionKey,
    selectedAnswer: "A" as OptionKey,
    isCorrect: false,
    explanation: "In C4 plants, the primary CO2 acceptor is a 3-carbon molecule, Phosphoenolpyruvate (PEP), and the reaction is catalyzed by PEP carboxylase. RuBP is the primary acceptor in C3 plants.",
    marksAwarded: -0.25,
    year: 2019,
    difficulty: "HARD" as const
  },
  {
    id: "rev_8",
    questionNumber: 195,
    subject: "MAT",
    chapter: "Logical Reasoning",
    questionText: "Find the next number in the series: 2, 6, 12, 20, 30, ...",
    options: {
      A: "40",
      B: "42",
      C: "36",
      D: "48"
    },
    correctAnswer: "B" as OptionKey,
    selectedAnswer: null,
    isCorrect: null,
    explanation: "The series follows the pattern of adding consecutive even numbers: +4, +6, +8, +10. The next number to add is 12. So, 30 + 12 = 42. Alternatively, it's 1x2, 2x3, 3x4, 4x5, 5x6, so next is 6x7 = 42.",
    marksAwarded: 0.0,
    year: 2022,
    difficulty: "EASY" as const
  }
];

export const SCORE_HISTORY = [
  {
    id: "hist_1",
    date: "Apr 15, 2025",
    label: "Full Mock #1",
    score: 95.5,
    maxScore: 200,
    percentage: 47.75,
    correct: 104,
    wrong: 34,
    skipped: 62,
    timeTaken: "2h 55m",
    subjectScores: { Physics: 22, Chemistry: 28, Zoology: 20, Botany: 15.5, MAT: 10 }
  },
  {
    id: "hist_2",
    date: "Apr 20, 2025",
    label: "Full Mock #2",
    score: 91.5,
    maxScore: 200,
    percentage: 45.75,
    correct: 100,
    wrong: 34,
    skipped: 66,
    timeTaken: "2h 48m",
    subjectScores: { Physics: 20.5, Chemistry: 25, Zoology: 22, Botany: 14, MAT: 10 }
  },
  {
    id: "hist_3",
    date: "Apr 25, 2025",
    label: "Full Mock #3",
    score: 105.75,
    maxScore: 200,
    percentage: 52.875,
    correct: 115,
    wrong: 37,
    skipped: 48,
    timeTaken: "2h 52m",
    subjectScores: { Physics: 26, Chemistry: 32, Zoology: 24.5, Botany: 16.25, MAT: 7 }
  },
  {
    id: "hist_4",
    date: "May 1, 2025",
    label: "Full Mock #4",
    score: 115.5,
    maxScore: 200,
    percentage: 57.75,
    correct: 125,
    wrong: 38,
    skipped: 37,
    timeTaken: "2h 45m",
    subjectScores: { Physics: 28.5, Chemistry: 35, Zoology: 26, Botany: 16, MAT: 10 }
  },
  {
    id: "hist_5",
    date: "May 5, 2025",
    label: "Full Mock #5",
    score: 143.25,
    maxScore: 200,
    percentage: 71.625,
    correct: 151,
    wrong: 31,
    skipped: 18,
    timeTaken: "2h 35m",
    subjectScores: { Physics: 38, Chemistry: 42.5, Zoology: 32, Botany: 21.75, MAT: 9 }
  },
  {
    id: "hist_6",
    date: "May 8, 2025",
    label: "Full Mock #6",
    score: 121.25,
    maxScore: 200,
    percentage: 60.625,
    correct: 132,
    wrong: 43,
    skipped: 25,
    timeTaken: "2h 50m",
    subjectScores: { Physics: 30.5, Chemistry: 38, Zoology: 28.5, Botany: 15.25, MAT: 9 }
  },
  {
    id: "hist_7",
    date: "May 10, 2025",
    label: "Full Mock #7",
    score: 126.75,
    maxScore: 200,
    percentage: 63.375,
    correct: 137,
    wrong: 41,
    skipped: 22,
    timeTaken: "2h 40m",
    subjectScores: { Physics: 33.5, Chemistry: 39.5, Zoology: 29.5, Botany: 14.25, MAT: 10 }
  },
  {
    id: "hist_8",
    date: "May 12, 2025",
    label: "Full Mock #8",
    score: 131.5,
    maxScore: 200,
    percentage: 65.75,
    correct: 140,
    wrong: 34,
    skipped: 26,
    timeTaken: "2h 42m",
    subjectScores: { Physics: 34, Chemistry: 42.5, Zoology: 31.5, Botany: 14.5, MAT: 9 }
  },
  {
    id: "hist_9",
    date: "May 15, 2025",
    label: "Full Mock #9",
    score: 139.25,
    maxScore: 200,
    percentage: 69.625,
    correct: 146,
    wrong: 27,
    skipped: 27,
    timeTaken: "2h 38m",
    subjectScores: { Physics: 39.5, Chemistry: 43.5, Zoology: 33, Botany: 15.25, MAT: 8 }
  },
  {
    id: "hist_10",
    date: "May 18, 2025",
    label: "Full Mock #10",
    score: 123.75,
    maxScore: 200,
    percentage: 61.875,
    correct: 134,
    wrong: 41,
    skipped: 25,
    timeTaken: "2h 47m",
    subjectScores: { Physics: 29, Chemistry: 36, Zoology: 25.75, Botany: 21.5, MAT: 11.5 }
  }
];

export const ANALYTICS_STATS = {
  totalTestsTaken: 10,
  totalQuestionsAttempted: 1750,
  overallAccuracy: 71.4,
  averageScore: 118.6,
  bestScore: 143.25,
  bestScoreDate: "May 5, 2025",
  worstScore: 91.5,
  averageTimeTaken: "2h 47m",
  currentStreak: 3,
  longestStreak: 7,
  strongestSubject: "Chemistry",
  weakestSubject: "Botany",
  totalMarksLostToNegative: 87.5,
  subjectAverages: {
    Physics:   { avg: 34.2, maxPossible: 50, accuracy: 68.4 },
    Chemistry: { avg: 39.1, maxPossible: 50, accuracy: 78.2 },
    Zoology:   { avg: 28.8, maxPossible: 40, accuracy: 72.0 },
    Botany:    { avg: 22.4, maxPossible: 40, accuracy: 56.0 },
    MAT:       { avg: 13.9, maxPossible: 20, accuracy: 69.5 }
  },
  weakChapters: [
    { subject: "Botany",    chapter: "Plant Hormones", accuracy: 38, attempted: 21 },
    { subject: "Botany",    chapter: "Photosynthesis", accuracy: 44, attempted: 18 },
    { subject: "Physics",   chapter: "Thermodynamics", accuracy: 46, attempted: 24 },
    { subject: "Physics",   chapter: "Electrostatics", accuracy: 51, attempted: 19 },
    { subject: "Chemistry", chapter: "Organic Reactions", accuracy: 53, attempted: 22 }
  ]
};

export const LEADERBOARD = [
  { rank: 1, name: "Sujata Sharma", score: 189.5, testsCount: 15, accuracy: 92.5, streak: 12, badge: "Top 1%" },
  { rank: 2, name: "Bikash Thapa", score: 185.25, testsCount: 18, accuracy: 89.2, streak: 8, badge: "Consistent" },
  { rank: 3, name: "Priya Maharjan", score: 182.0, testsCount: 12, accuracy: 90.1, streak: 5, badge: null },
  { rank: 4, name: "Aarav Shrestha", score: 168.75, testsCount: 22, accuracy: 86.4, streak: 14, badge: "Consistent" },
  { rank: 5, name: "Riya Karki", score: 165.5, testsCount: 9, accuracy: 84.8, streak: 2, badge: null },
  { rank: 6, name: "Dipesh Adhikari", score: 162.25, testsCount: 11, accuracy: 81.5, streak: 4, badge: null },
  { rank: 7, name: "Sneha Pandey", score: 159.0, testsCount: 14, accuracy: 83.0, streak: 6, badge: null },
  { rank: 8, name: "Nitesh Gurung", score: 155.5, testsCount: 10, accuracy: 79.2, streak: 3, badge: null },
  { rank: 9, name: "Kritika Magar", score: 152.75, testsCount: 19, accuracy: 80.5, streak: 9, badge: "Consistent" },
  { rank: 10, name: "Roshan Tamang", score: 151.0, testsCount: 8, accuracy: 78.4, streak: 1, badge: null },
  { rank: 11, name: "Sita Poudel", score: 148.5, testsCount: 16, accuracy: 77.0, streak: 7, badge: null },
  { rank: 12, name: "Hari Basnet", score: 144.25, testsCount: 13, accuracy: 76.5, streak: 2, badge: null },
  { rank: 13, name: "Alina Chhetri", score: 130.0, testsCount: 7, accuracy: 75.1, streak: 0, badge: null },
  { rank: 14, name: "Guest Student", score: 123.75, testsCount: 10, accuracy: 76.6, streak: 3, badge: null },
  { rank: 15, name: "Manoj Khadka", score: 142.0, testsCount: 12, accuracy: 72.8, streak: 1, badge: null },
  { rank: 16, name: "Nisha Gautam", score: 140.5, testsCount: 11, accuracy: 74.0, streak: 5, badge: null },
  { rank: 17, name: "Binod Rai", score: 138.25, testsCount: 20, accuracy: 72.5, streak: 11, badge: "Consistent" },
  { rank: 18, name: "Puja Limbu", score: 135.0, testsCount: 9, accuracy: 70.8, streak: 2, badge: null },
  { rank: 19, name: "Kiran Bista", score: 132.75, testsCount: 14, accuracy: 69.5, streak: 4, badge: null },
  { rank: 20, name: "Rebika Shrestha", score: 130.5, testsCount: 15, accuracy: 68.2, streak: 3, badge: null }
];

export const BOOKMARKED_QUESTIONS = [
  ...MOCK_REVIEW_QUESTIONS,
  {
    id: "rev_9",
    questionNumber: 90,
    subject: "Physics",
    chapter: "Electrostatics",
    questionText: "The electric potential at a point on the equatorial line of an electric dipole is:",
    options: {
      A: "Maximum",
      B: "Zero",
      C: "Minimum",
      D: "Depends on the dipole moment"
    },
    correctAnswer: "B" as OptionKey,
    selectedAnswer: "A" as OptionKey,
    isCorrect: false,
    explanation: "The electric potential is a scalar quantity. On the equatorial line, the distance to the positive and negative charges is the same, so their potentials cancel each other out, making the net potential zero.",
    marksAwarded: -0.25,
    year: 2021,
    difficulty: "EASY" as const
  },
  {
    id: "rev_10",
    questionNumber: 132,
    subject: "Zoology",
    chapter: "Nervous System",
    questionText: "The part of the human brain that controls body temperature is:",
    options: {
      A: "Cerebrum",
      B: "Cerebellum",
      C: "Hypothalamus",
      D: "Medulla Oblongata"
    },
    correctAnswer: "C" as OptionKey,
    selectedAnswer: "D" as OptionKey,
    isCorrect: false,
    explanation: "The hypothalamus, located at the base of the brain, plays a crucial role in regulating body temperature, hunger, thirst, and circadian rhythms.",
    marksAwarded: -0.25,
    year: 2020,
    difficulty: "MEDIUM" as const
  },
  {
    id: "rev_11",
    questionNumber: 150,
    subject: "Botany",
    chapter: "Ecology",
    questionText: "The 10% law for energy transfer in food chains was proposed by:",
    options: {
      A: "Lindeman",
      B: "Tansley",
      C: "Odum",
      D: "Elton"
    },
    correctAnswer: "A" as OptionKey,
    selectedAnswer: "A" as OptionKey,
    isCorrect: true,
    explanation: "Raymond Lindeman proposed the 10% law, which states that only about 10% of the energy from one trophic level is transferred to the next.",
    marksAwarded: 1.0,
    year: 2019,
    difficulty: "MEDIUM" as const
  },
  {
    id: "rev_12",
    questionNumber: 185,
    subject: "MAT",
    chapter: "Figure Matrix",
    questionText: "Which figure completes the matrix?",
    options: {
      A: "Figure A",
      B: "Figure B",
      C: "Figure C",
      D: "Figure D"
    },
    correctAnswer: "C" as OptionKey,
    selectedAnswer: null,
    isCorrect: null,
    explanation: "Based on the pattern in the rows and columns, the number of lines increases by one in each step. Figure C follows this pattern.",
    marksAwarded: 0.0,
    year: 2023,
    difficulty: "HARD" as const
  }
].map((q, i) => ({
  ...q,
  bookmarkedAt: "May 8, 2025",
  testId: "mock_test_001",
  tags: i % 2 === 0 ? ["Important"] : ["Revisit", "Hard"]
}));

export const PRACTICE_SUBJECTS = [
  { id: "sub_1", name: "Physics", questionCount: 842, chapters: 12, color: "blue" },
  { id: "sub_2", name: "Chemistry", questionCount: 796, chapters: 14, color: "green" },
  { id: "sub_3", name: "Zoology", questionCount: 614, chapters: 10, color: "violet" },
  { id: "sub_4", name: "Botany", questionCount: 581, chapters: 11, color: "emerald" },
  { id: "sub_5", name: "MAT", questionCount: 203, chapters: 5, color: "amber" }
];

export const PRACTICE_QUESTION = {
  id: "prac_1",
  questionNumber: 1,
  subject: "Botany",
  chapter: "Genetics",
  questionText: "If a DNA molecule contains 20% adenine, what is the percentage of guanine?",
  options: {
    A: "20%",
    B: "30%",
    C: "40%",
    D: "60%"
  },
  correctAnswer: "B" as OptionKey,
  selectedAnswer: null,
  isCorrect: null,
  explanation: "According to Chargaff's rule, A = T and G = C. If Adenine (A) is 20%, then Thymine (T) is 20%. Total A+T = 40%. The remaining 60% is G+C. Therefore, Guanine (G) = 60% / 2 = 30%.",
  marksAwarded: 0.0,
  year: 2021,
  difficulty: "MEDIUM" as const
};

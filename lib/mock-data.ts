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

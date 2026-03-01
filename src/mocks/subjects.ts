import type { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Programming",
    department: "Computer Science",
    description:
      "Fundamentals of programming with a modern language: variables, control flow, functions, and basic data structures.",
    createdAt: "2024-09-01T00:00:00.000Z",
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    description:
      "Integration techniques, sequences and series, and introduction to multivariable calculus.",
    createdAt: "2024-09-01T00:00:00.000Z",
  },
  {
    id: 3,
    code: "PHYS150",
    name: "Mechanics and Waves",
    department: "Physics",
    description:
      "Classical mechanics, oscillations, wave motion, and an introduction to thermodynamics.",
    createdAt: "2024-09-01T00:00:00.000Z",
  },
];

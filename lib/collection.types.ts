import { Database } from "./database.types";

export type User = Database["public"]["Tables"]["profiles"]["Row"];
export type RolesEnum = Database["public"]["Enums"]["roles_enum"];
export type GradeLevelEnum = Database["public"]["Enums"]["grade_level_enum"];
export type Classroom = Database["public"]["Tables"]["classrooms"]["Row"];
export type ClassroomInsert = Database["public"]["Tables"]["classrooms"]["Insert"];
export type ClassroomWithSubjects = Database["public"]["Tables"]["classrooms"]["Row"] & Database["public"]["Tables"]["subjects"]["Row"];
export type ActivityInsert = Database["public"]["Tables"]["activities"]["Insert"];
export type ActivityType = Database["public"]["Tables"]["activities"]["Row"];
export type ActivityWithTeacher = Database["public"]["Tables"]["activities"]["Row"] & User;
export type Quiz = Database["public"]["Tables"]["quizzes"]["Row"];
export type QuestionWithAnswers = Database["public"]["Tables"]["questions"]["Row"] & {
  question_answers: {
    answers: Database["public"]["Tables"]["answers"]["Row"];
  }[];
};

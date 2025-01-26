export type Rating = "++" | "+" | "I" | "-" | "--";
export type Audience = "Y" | "E" | "M";

export interface ViewConfig {
  showCombinations: boolean;
  showDevelopment: boolean;
  showReviews: boolean;
}

export interface Topic {
  name: string;
  ratings: {
    [key: string]: Rating; // gêneros
  };
  audience: {
    [key in Audience]: Rating;
  };
}

export interface Platform {
  name: string;
  audience: {
    [key in Audience]: Rating;
  };
}

export interface GenreStages {
  stage1: {
    engine: number;
    gameplay: number;
    story: number;
  };
  stage2: {
    dialogues: number;
    level: number;
    ai: number;
  };
  stage3: {
    world: number;
    graphics: number;
    sound: number;
  };
}

export interface GameCombination {
  topic: string;
  genre: string;
  platform: string;
  audienceScore: number;
  genreScore: number;
  totalScore: number;
}

export interface GameReview {
  score: number;
  design: number;
  tech: number;
  bugs: number;
  gameSize: "small" | "medium" | "large" | "aaa";
  isSequel: boolean;
  isMMO: boolean;
  hasNewEngine: boolean;
  trend?: {
    type: "genre" | "topic" | "audience" | "strange";
    value: string;
  };
}

export interface ReviewResult {
  baseScore: number;
  qualityScore: number;
  finalScore: number;
  reviews: number[];
  messages: string[];
}

// Converter string de rating para valor numérico
export function ratingToNumber(rating: Rating): number {
  switch (rating) {
    case "++":
      return 2;
    case "+":
      return 1;
    case "I":
      return 0;
    case "-":
      return -1;
    case "--":
      return -2;
    default:
      return 0;
  }
}

import { GameReview, ReviewResult } from "./types";

const REVIEW_MODIFIERS = {
  MMO: 0.7,
  SEQUEL: 0.8,
  NEW_ENGINE: 1.1,
  SIZE: {
    small: { multiplier1: 2, multiplier2: 1.0 },
    medium: { multiplier1: 2, multiplier2: 1.2 },
    large: { multiplier1: 3, multiplier2: 1.4 },
    aaa: { multiplier1: 6, multiplier2: 1.7 },
  },
  BUGS: {
    0: 1,
    1: 0.95,
    2: 0.9,
    3: 0.8,
    4: 0.7,
    5: 0.6,
  },
};

function calculateBaseScore(review: GameReview): number {
  const { design, tech, gameSize } = review;
  const { multiplier1, multiplier2 } = REVIEW_MODIFIERS.SIZE[gameSize];

  // Base score calculation
  const baseScore = ((design + tech) / multiplier1) * multiplier2;
  return Math.min(Math.max(baseScore, 1), 10);
}

function calculateQualityScore(review: GameReview): number {
  const { bugs, isMMO, isSequel, hasNewEngine } = review;
  let qualityModifier = 1;

  // Apply MMO modifier
  if (isMMO) {
    qualityModifier *= REVIEW_MODIFIERS.MMO;
  }

  // Apply sequel modifier
  if (isSequel) {
    qualityModifier *= REVIEW_MODIFIERS.SEQUEL;
  }

  // Apply new engine modifier
  if (hasNewEngine) {
    qualityModifier *= REVIEW_MODIFIERS.NEW_ENGINE;
  }

  // Apply bugs modifier
  const bugsModifier =
    REVIEW_MODIFIERS.BUGS[
      Math.min(bugs, 5) as keyof typeof REVIEW_MODIFIERS.BUGS
    ];
  qualityModifier *= bugsModifier;

  return qualityModifier;
}

function generateReviewScores(
  baseScore: number,
  qualityModifier: number
): number[] {
  const reviews: number[] = [];

  // Generate 4 review scores with random variation
  for (let i = 0; i < 4; i++) {
    const randomVariation = (Math.random() * 2 - 1) * 0.5; // Random between -0.5 and 0.5
    const reviewScore = baseScore * qualityModifier + randomVariation;
    reviews.push(Math.min(Math.max(Math.round(reviewScore * 10) / 10, 1), 10));
  }

  return reviews;
}

function generateMessages(
  review: GameReview,
  baseScore: number,
  qualityModifier: number
): string[] {
  const messages: string[] = [];

  // Mensagens baseadas na qualidade
  if (qualityModifier < 0.8) {
    messages.push("O jogo tem muitos bugs que afetaram a experiência");
  }

  if (review.bugs > 3) {
    messages.push("Os bugs tornaram o jogo quase injogável");
  }

  // Mensagens baseadas no score base
  if (baseScore >= 9) {
    messages.push("Um jogo excepcional!");
  } else if (baseScore >= 7) {
    messages.push("Um ótimo jogo!");
  } else if (baseScore <= 4) {
    messages.push("O jogo precisa de muito mais trabalho");
  }

  // Mensagens baseadas em características especiais
  if (review.isMMO) {
    messages.push("Um MMO ambicioso, mas com alguns desafios");
  }

  if (review.hasNewEngine) {
    messages.push("A nova engine traz melhorias impressionantes");
  }

  return messages;
}

export function calculateReview(review: GameReview): ReviewResult {
  // Calculate base score
  const baseScore = calculateBaseScore(review);

  // Calculate quality modifier
  const qualityModifier = calculateQualityScore(review);

  // Generate individual review scores
  const reviews = generateReviewScores(baseScore, qualityModifier);

  // Calculate final score (average of reviews)
  const finalScore = Number(
    (reviews.reduce((a, b) => a + b, 0) / reviews.length).toFixed(1)
  );

  // Generate review messages
  const messages = generateMessages(review, baseScore, qualityModifier);

  return {
    baseScore,
    qualityScore: qualityModifier,
    finalScore,
    reviews,
    messages,
  };
}

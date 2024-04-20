export type QuestionAnswers = {
  id: number;
  question: string;
  answers: Answer[];
  alternativeAnswers?: string[];
  nextQuestion?: number;
}

export type Answer = {
  answer: string;
  percentage: number;
}

export type Errors = [boolean, boolean, boolean];

export const datas: QuestionAnswers[] = [
  {
    id: 1,
    question: 'Pourquoi Madeleine et Hugo sont-ils allés à Marseille ?',
    answers: [
      {
        answer: 'Soleil',
        percentage: 21
      },
      {
        answer: 'Cadre de vie plus tranquille (Provence, vie plus calme)',
        percentage: 15
      },
      {
        answer: 'Mer',
        percentage: 15
      },
      {
        answer: 'Corse',
        percentage: 10
      },
      {
        answer: 'Travail',
        percentage: 7
      },
      {
        answer: 'Marre de Paris',
        percentage: 7
      },
      {
        answer: 'Attractivité de Marseille (cosmopolite, The place to be)',
        percentage: 7
      }
    ],
    alternativeAnswers: [
      'Answer 1',
      'Answer 2',
      'Answer 3',
    ],
    nextQuestion: 2
  },
  {
    id: 2,
    question: 'Qu\'est-ce que Madeleine aime chez Hugo ?',
    answers: [
      {
        answer: 'Tout (ou presque)',
        percentage: 17
      },
      {
        answer: 'Rassurant / Fiable / Calme',
        percentage: 14
      },
      {
        answer: 'Element Physique (Yeux, sourire, doigt de pied, moustache)',
        percentage: 12
      },
      {
        answer: 'Gentillesse / Bienveillance',
        percentage: 10
      },
      {
        answer: 'Cuisinier hors pair',
        percentage: 10
      },
      {
        answer: 'Douceur / Tendresse',
        percentage: 10
      },
      {
        answer: 'Leadership / Prestance / Assurance / Entreprenant',
        percentage: 10
      }
    ]
  }
]

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
        answer: 'Vie plus tranquille (Provence…)',
        percentage: 17
      },
      {
        answer: 'Mer',
        percentage: 16
      },
      {
        answer: 'Corse',
        percentage: 11
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
        answer: 'Attractivité de Marseille (The place to be...)',
        percentage: 8
      },
      {
        answer: 'Gastronomie (rosé, pastis et bouillabaisse)',
        percentage: 6
      }
    ],
    alternativeAnswers: [
      'Italie',
      'Activité sportive (randonnée et voile)',
      'Jul',
      'L\'accent'
    ],
    nextQuestion: 2
  },
  {
    id: 2,
    question: 'Qu\'est-ce que Madeleine aime chez Hugo ?',
    answers: [
      {
        answer: 'Tout (ou presque)',
        percentage: 16
      },
      {
        answer: 'Rassurant / Fiable / Calme',
        percentage: 12
      },
      {
        answer: 'Element Physique (Yeux, sourire...)',
        percentage: 14
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
        percentage: 8
      },
      {
        answer: 'Leadership / Prestance / Assurance / Entreprenant',
        percentage: 8
      },
      {
        answer: 'Italien',
        percentage: 6
      }
    ],
    alternativeAnswers: [
      'Humour',
      'Ponctualité',
      'Sérieux',
      'Curiosité'
    ],
    nextQuestion: 3
  },
  {
    id: 3,
    question: 'Qu\'est-ce que Hugo aime chez Madeleine ?',
    answers: [
      {
        answer: 'Tout (et il a intérêt)',
        percentage: 24
      },
      {
        answer: 'Son sourire',
        percentage: 13
      },
      {
        answer: 'Enthousiasme / Spontanéité / Optimisme',
        percentage: 13
      },
      {
        answer: 'Ses yeux',
        percentage: 11
      },
      {
        answer: 'Gentillesse / Bienveillance / Générosité',
        percentage: 9
      },
      {
        answer: 'Ses boucles',
        percentage: 9
      },
      {
        answer: 'Douceur',
        percentage: 7
      },
      {
        answer: 'Humour',
        percentage: 5
      }
    ],
    alternativeAnswers: [
      'Son attention aux autres',
      'Son esprit',
      'Elle a toujours du rosé',
    ],
    nextQuestion: 4
  },
  {
    id: 4,
    question: 'Qu\'est-ce qu\'une "bonne soirée" pour Madeleine et Hugo ?',
    answers: [
      {
        answer: 'À boire !',
        percentage: 35
      },
      {
        answer: 'Avec des amis',
        percentage: 28
      },
      {
        answer: 'Un bon repas',
        percentage: 16
      },
      {
        answer: 'Tranquillité / Cosy',
        percentage: 6
      },
      {
        answer: 'Être tout les deux',
        percentage: 6
      },
      {
        answer: 'Discution jusqu\'au bout de la nuit',
        percentage: 4
      },
      {
        answer: 'Musique',
        percentage: 3
      }
    ],
    alternativeAnswers: [
      'Balade',
      'De la rigolade'
    ],
    nextQuestion: 5
  },
  {
    id: 5,
    question: 'Quelles sont les activités préférées de Madeleine le dimanche ?',
    answers: [
      {
        answer: 'Planche à voile',
        percentage: 19
      },
      {
        answer: 'Se balader (calanques, plage)',
        percentage: 17
      },
      {
        answer: 'Farniente / Grasse matinée',
        percentage: 13
      },
      {
        answer: 'Aller au marché (avec Hugo)',
        percentage: 13
      },
      {
        answer: 'Bon petit déjeuner / Brunch',
        percentage: 9
      },
      {
        answer: 'Voir / Discuter avec ses amis',
        percentage: 7
      },
      {
        answer: 'Café / Bar / Terrasse',
        percentage: 7
      },
      {
        answer: 'Cuisiner',
        percentage: 7
      }
    ],
    alternativeAnswers: [
      'Passer du temps en famille',
      'Faire des mots fléchés',
      'Prendre le train pour Paris'
    ],
    nextQuestion: 6
  },
  {
    id: 6,
    question: 'Quelles sont les activités préférées de Hugo le dimanche ?',
    answers: [
      {
        answer: 'Faire de la voile (catamaran)',
        percentage: 18
      },
      {
        answer: 'Cuisiner',
        percentage: 14
      },
      {
        answer: 'Aller au marché',
        percentage: 11
      },
      {
        answer: 'Boire des coups avec les amis',
        percentage: 9
      },
      {
        answer: 'Se balader',
        percentage: 9
      },
      {
        answer: 'Regarder du sport',
        percentage: 7
      },
      {
        answer: 'Bricolage / Ménage / Repassage',
        percentage: 7
      },
      {
        answer: 'Lire le journal (L\'Équipe)',
        percentage: 7
      }
    ],
    alternativeAnswers: [
      'Farniente',
      'Passer du temps avec Madeleine',
      'Faire de la musique'
    ],
    nextQuestion: 7
  },
  {
    id: 7,
    question: 'Citez un lieu où l\'on peut trouver Madeleine et Hugo.',
    answers: [
      {
        answer: 'Bar / PMU / Café',
        percentage: 21
      },
      {
        answer: 'Marseille',
        percentage: 19
      },
      {
        answer: 'Club Nautique de Marseille / Mer',
        percentage: 17
      },
      {
        answer: 'Corse',
        percentage: 12
      },
      {
        answer: 'Au soleil',
        percentage: 7
      },
      {
        answer: 'Plage',
        percentage: 6
      },
      {
        answer: 'Paris',
        percentage: 6
      },
      {
        answer: 'Touraine',
        percentage: 6
      }
    ],
    alternativeAnswers: [
      'Train',
      'Marché'
    ]
  }

]

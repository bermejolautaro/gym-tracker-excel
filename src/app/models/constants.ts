export const EXCERCISES_NAMES = [
  'hip thrust',
  'peso muerto',
  'sillon cuadricep',
  'bicep curl',
  'pull-ups',
  'shrugs',
  'remo caballo',
  'pulldown v',
  'pulldown over',
  'chin-ups',
  'tricep polea',
  'overhead press',
  'pecho inclinado',
  'pecho plano',
  'bicep martillo',
  'remo olimpico',
  'pulldown under',
  'cruce polea',
  'lateral raises db',
  'sentadilla smith',
  'patada',
  'sentadilla bulgara',
  'remo cerrucho',
  'lateral raises polea',
  'pec fly',
  'shoulder press db',
  'pecho inclinado db',
  'bicep preacher db',
  'espinales',
  'tricep polea barra',
  'abductores',
  'femorales',
  'gemelos',
  'sentadilla',
  'tricep polea soga',
  'sillon cuadricep 1 pierna',
  'chest press',
  'hip thrust polea',
  'skullcrusher',
  'leg press',
  'shrugs db',
  'zancada smith'
] as const;

export const MUSCLE_GROUPS = ['chest', 'back', 'arms', 'shoulders', 'legs', 'calves'] as const;
export type ExcerciseName = (typeof EXCERCISES_NAMES)[number];
export type MuscleGroup = (typeof MUSCLE_GROUPS)[number];

export const MUSCLE_GROUP_PER_EXCERCISE: Record<ExcerciseName, MuscleGroup> = {
  'bicep curl': 'arms',
  'hip thrust': 'legs',
  'peso muerto': 'legs',
  'sillon cuadricep': 'legs',
  'pull-ups': 'back',
  shrugs: 'back',
  'remo caballo': 'back',
  'pulldown v': 'back',
  'pulldown over': 'back',
  'chin-ups': 'back',
  'tricep polea': 'arms',
  'overhead press': 'shoulders',
  'pecho inclinado': 'chest',
  'pecho plano': 'chest',
  'bicep martillo': 'arms',
  'remo olimpico': 'back',
  'pulldown under': 'back',
  'cruce polea': 'chest',
  'lateral raises db': 'shoulders',
  'sentadilla smith': 'legs',
  patada: 'legs',
  'sentadilla bulgara': 'legs',
  'remo cerrucho': 'back',
  'lateral raises polea': 'shoulders',
  'pec fly': 'chest',
  'shoulder press db': 'shoulders',
  'pecho inclinado db': 'chest',
  'bicep preacher db': 'arms',
  espinales: 'back',
  'tricep polea barra': 'arms',
  abductores: 'legs',
  femorales: 'legs',
  gemelos: 'calves',
  sentadilla: 'legs',
  'tricep polea soga': 'arms',
  'sillon cuadricep 1 pierna': 'legs',
  'chest press': 'chest',
  'hip thrust polea': 'legs',
  skullcrusher: 'arms',
  'leg press': 'legs',
  'shrugs db': 'back',
  "zancada smith": 'legs'
} as const;

export const DATE_FORMATS = ['DD-MM-YYYY', 'D-MM-YYYY', 'D-M-YYYY'] as const;

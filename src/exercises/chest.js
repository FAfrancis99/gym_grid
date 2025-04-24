// chest.js — Full Chest Exercise List
const chest = [
    {
      name: 'Assisted Dip',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      type: 'Compound',
      link: 'https://www.strengthlog.com/assisted-dips/',
      image: ''
    },
    {
      name: 'Band-Assisted Bench Press',
      muscleGroup: 'Chest',
      difficulty: 'Intermediate',
      type: 'Compound',
      link: 'https://www.strengthlog.com/band-assisted-bench-press/',
      image: ''
    },
    {
      name: 'Bar Dip',
      muscleGroup: 'Chest',
      difficulty: 'Intermediate',
      type: 'Compound',
      link: 'https://www.strengthlog.com/bar-dip/',
      image: ''
    },
    {
      name: 'Bench Press',
      muscleGroup: 'Chest',
      difficulty: 'Intermediate',
      type: 'Compound',
      link: 'https://www.youtube.com/watch?v=gRVjAtPip0Y',
      image: ''
    },
    {
      name: 'Bench Press Against Band',
      muscleGroup: 'Chest',
      difficulty: 'Advanced',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Board Press',
      muscleGroup: 'Chest',
      difficulty: 'Advanced',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Cable Chest Press',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Close-Grip Bench Press',
      muscleGroup: 'Chest',
      difficulty: 'Intermediate',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Close-Grip Feet-Up Bench Press',
      muscleGroup: 'Chest',
      difficulty: 'Intermediate',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Decline Bench Press',
      muscleGroup: 'Chest',
      difficulty: 'Intermediate',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Decline Push-Up',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      type: 'Bodyweight',
      link: '',
      image: ''
    },
    {
      name: 'Dumbbell Chest Fly',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      type: 'Isolation',
      link: '',
      image: ''
    },
    {
      name: 'Dumbbell Chest Press',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Dumbbell Decline Chest Press',
      muscleGroup: 'Chest',
      difficulty: 'Intermediate',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Dumbbell Floor Press',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Dumbbell Pullover',
      muscleGroup: 'Chest',
      difficulty: 'Intermediate',
      type: 'Isolation',
      link: '',
      image: ''
    },
    {
      name: 'Feet-Up Bench Press',
      muscleGroup: 'Chest',
      difficulty: 'Intermediate',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Floor Press',
      muscleGroup: 'Chest',
      difficulty: 'Intermediate',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Incline Bench Press',
      muscleGroup: 'Chest',
      difficulty: 'Intermediate',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Incline Dumbbell Press',
      muscleGroup: 'Chest',
      difficulty: 'Intermediate',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Incline Push-Up',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      type: 'Bodyweight',
      link: '',
      image: ''
    },
    {
      name: 'Kettlebell Floor Press',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Kneeling Incline Push-Up',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      type: 'Bodyweight',
      link: '',
      image: ''
    },
    {
      name: 'Kneeling Push-Up',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      type: 'Bodyweight',
      link: '',
      image: ''
    },
    {
      name: 'Machine Chest Fly',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      type: 'Isolation',
      link: '',
      image: ''
    },
    {
      name: 'Machine Chest Press',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Pec Deck',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      type: 'Isolation',
      link: '',
      image: ''
    },
    {
      name: 'Pin Bench Press',
      muscleGroup: 'Chest',
      difficulty: 'Advanced',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Push-Up',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      type: 'Bodyweight',
      link: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
      image: 'https://www.bodybuilding.com/images/2021/august/push-up-header-960x540.jpg'
    },
    {
      name: 'Push-Up Against Wall',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      type: 'Bodyweight',
      link: '',
      image: ''
    },
    {
      name: 'Push-Ups With Feet in Rings',
      muscleGroup: 'Chest',
      difficulty: 'Intermediate',
      type: 'Bodyweight',
      link: '',
      image: ''
    },
    {
      name: 'Resistance Band Chest Fly',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      type: 'Isolation',
      link: '',
      image: ''
    },
    {
      name: 'Ring Dip',
      muscleGroup: 'Chest',
      difficulty: 'Advanced',
      type: 'Bodyweight',
      link: '',
      image: ''
    },
    {
      name: 'Smith Machine Bench Press',
      muscleGroup: 'Chest',
      difficulty: 'Intermediate',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Smith Machine Incline Bench Press',
      muscleGroup: 'Chest',
      difficulty: 'Intermediate',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Smith Machine Reverse Grip Bench Press',
      muscleGroup: 'Chest',
      difficulty: 'Intermediate',
      type: 'Compound',
      link: '',
      image: ''
    },
    {
      name: 'Standing Cable Chest Fly',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      type: 'Isolation',
      link: '',
      image: ''
    },
    {
      name: 'Standing Resistance Band Chest Fly',
      muscleGroup: 'Chest',
      difficulty: 'Beginner',
      type: 'Isolation',
      link: '',
      image: ''
    }
  ];
  
  export default chest;
// Arrays of inspiring content
const qualities = ['patience', 'courage', 'perseverance', 'humility', 'faith'];
const actions = [
  'opens invisible doors',
  'makes you stronger',
  'guides you through doubt',
  'lights your path',
  'grows your soul'
];
const advices = [
  'Believe in your journey.',
  'Don’t give up now.',
  'Take a deep breath.',
  'You are exactly where you need to be.',
  'Every challenge has meaning.'
];

// Function to choose a random item from an array
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to generate an inspiring message
function generateInspiringMessage() {
  const quality = getRandomItem(qualities);
  const action = getRandomItem(actions);
  const advice = getRandomItem(advices);

  console.log(`✨ With ${quality}, you ${action}. ${advice}`);
}

// Run the message generator
generateInspiringMessage();

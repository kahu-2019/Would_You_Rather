
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 1, question: 'help a cripple and be late for an job interview or nail your job interview?', goodCount: 0, badCount: 0, goodAnswer: 'help', badAnswer: 'job interview'},
        {id: 2, question: 'be in a chokehold by Arpo for a minute or build test on behalf of every member of your team?', goodCount: 0, badCount: 0, goodAnswer: 'tests', badAnswer: 'Arpo'},
        {id: 3, question: 'do a lightning talk with no preparation or endure a day without Ranjit?', goodCount: 0, badCount: 0, goodAnswer: 'lightning talk', badAnswer: 'Ranjit'},
        {id: 4, question: 'only eat lentils for the rest of your life or never hear James say howdy again?', goodCount: 0, badCount: 0, goodAnswer: 'lentils', badAnswer: 'howdy'},
        {id: 5, question: 'bet on Robbie or Kelly in a bar fight?', goodCount: 0, badCount: 0, goodAnswer: 'Kelly', badAnswer: 'Robbie'},
        {id: 6, question: 'sit through a 30 minute mindfulness session or sit through a 2 hour lecture with no breaks', goodCount: 0, badCount: 0, goodAnswer: 'mindfulness', badAnswer: 'lecture'},
        {id: 7, question: 'go on a trip with Karl to Thailand or trip out on peyote with the cohort', goodCount: 0, badCount: 0, goodAnswer: 'Karl', badAnswer: 'peyote'},
        {id: 8, question: 'have coffee flavoured chicken or chicken flavoured coffee', goodCount: 0, badCount: 0, goodAnswer: 'chicken', badAnswer: 'coffee'},
        {id: 9, question: 'drink water from a camel hump or drink your own piss', goodCount: 0, badCount: 0, goodAnswer: 'camel hump', badAnswer: 'piss'},
        {id: 10, question: "have George's appetite or James' thirst", goodCount: 0, badCount: 0, goodAnswer: 'James', badAnswer: 'George'},
      ]);
    });
};

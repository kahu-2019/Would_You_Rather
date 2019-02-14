
exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', table => {
      table.increments('id').primary()
      table.string('question')
      table.integer('goodCount')
      table.integer('badCount')
      table.string('goodAnswer')
      table.string('badAnswer')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions')
};

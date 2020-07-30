
exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
        table.increments("id").primary();
        table.string("name", 100).notNullable();
        table.string("email", 150).notNullable().unique();
        table.string("password", 150).notNullable();
    })
};

exports.down = function(knex) {
  
};

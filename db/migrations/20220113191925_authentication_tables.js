
exports.up = (knex) => knex.schema.createTable('token_auth', (table) => {
    table.increments('id');
    table.string('ccms_id', 100).notNullable();
    table.string('nt_login', 100).notNullable();
    table.string('access_token', 1000).notNullable();
    table.string('refresh_token', 1000).notNullable(); 
    table.datetime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.datetime('expire_at').notNullable();
    table.boolean('status').notNullable().defaultTo(true);
})

exports.down = (knex) => knex.schema
    .dropTable('token_auth');

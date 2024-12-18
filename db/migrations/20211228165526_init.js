exports.up = (knex) => knex.schema.createTable('category_list', (table) => {
  table.uuid('category_id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
  table.string('category_name', 100).notNullable();
  table.boolean('status').notNullable().defaultTo(true);
}).createTable('links_table', (table) => {
  table.uuid('link_id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
  table.uuid('category_ref').references('category_id').inTable('category_list').notNullable()
    .onDelete('CASCADE')
    .index();
  table.uuid('client_ref').notNullable();
  table.uuid('company_ref').notNullable();
  table.string('link_desc');
  table.string('platform_name').notNullable();
  table.datetime('created_at').notNullable().defaultTo(knex.raw('now()'));
  table.datetime('updated_at').notNullable().defaultTo(knex.raw('now()'));
  table.datetime('delete_at').notNullable().defaultTo(knex.raw('now()'));
  table.boolean('status').notNullable().defaultTo(true);
});

exports.down = (knex) => knex.schema
  .dropTable('category_list')
  .dropTable('links_table');

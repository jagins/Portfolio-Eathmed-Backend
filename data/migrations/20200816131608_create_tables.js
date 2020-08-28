exports.up = function(knex) {
  return knex.schema
    .createTable('companies', table => 
    {
        table.increments();
        table.string('company_name');

    })
    
    .createTable('products', table => 
    {
        table.increments();
        table.string('product_name');
        table.float('price');
        table.string('product_type');
        table.float('thca');
        table.float('cbd');
        table.float('size');
        table.string('strain_type');
        table.text('image');
        table.text('description');
        table.integer('company_id')
            .references('id')
            .inTable('companies')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('products')
    .dropTableIfExists('companies');
};

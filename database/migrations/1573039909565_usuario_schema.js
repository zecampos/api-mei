'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments()
      table.string('data_situacao', 254)
      table.string('tipo', 254)
      table.string('nome', 254)
      table.string('telefone', 254)
      table.string('email', 254)
      table.string('situacao', 254)
      table.string('municipio', 254)
      table.string('fantasia', 254)
      table.string('cnpj', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('usuarios')
  }
}

module.exports = UsuarioSchema

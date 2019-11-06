'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SolicitacaoSchema extends Schema {
  up () {
    this.create('solicitacaos', (table) => {
      table.increments()
      table.string('email', 254)
      table.string('nome', 254)
      table.string('telefone', 254)
      table.string('cpf', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('solicitacaos')
  }
}

module.exports = SolicitacaoSchema

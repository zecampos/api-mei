'use strict'

const Solicitacao = use("App/Models/Solicitacao");
const SendEmail = use('App/Services/SendEmail')
class SolicitacaoController {

  async index ({ request, response, view }) {

    try{
      const solicitacao = await Solicitacao.all()

      return response.status(200).send(solicitacao)
    }catch(e){
      return  response.status(500).send({ msg: 'Erro ao listar' })
    }
  }

  async store ({ request, response }) {
    try{
      const data = request.all()
      const sol = await Solicitacao.create({...data})
      let s = sol.toJSON()
      await SendEmail(s.nome, s.cpf,s.telefone, s.email)
      return response.status(200).send(s)
    }catch(e){
      console.log(e)
      return  response.status(500).send({ msg: 'Erro ao cadastrar' })
    }
  }


  async show ({ params, request, response, view }) {
  }


  async edit ({ params, request, response, view }) {
  }


  async update ({ params, request, response }) {
  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = SolicitacaoController

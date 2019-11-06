'use strict'
const Usuario = use("App/Models/Usuario")
class UsuarioController {

  async index ({ request, response, view }) {
    try{
      const n = await Usuario.all()
      return response.status(200).send(n)
    }catch(e){
      return  response.status(500).send({ msg: 'Erro' })
    }
  }



  async store ({ request, response }) {
    try{
      const data = request.all()
      const n = await Usuario.create({
        ...data
      })
      return response.status(200).send(n)
    }catch(e){
      return  response.status(500).send({ msg: 'Erro' })
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

module.exports = UsuarioController

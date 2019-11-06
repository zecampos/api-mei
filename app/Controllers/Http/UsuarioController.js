'use strict'
const Usuario = use("App/Models/Usuario")
const Database = use('Database')

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
      let find = await Usuario.findBy({'cnpj': data.cnpj})
      if (find){
        return response.status(200).send(find)
      }else {
        let novo = await Usuario.create({...data})
        return response.status(200).send(novo)
      }

    }catch(e){
      return  response.status(500).send({msf: e})
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

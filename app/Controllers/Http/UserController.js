'use strict'
const User = use('App/Models/User')
class UserController {
  async create ({ request, response }) {
    try{
      const data = request.only(["username", "email", "password"]);
      const user = await User.create(data);

      return response.status(201).send(user);

    }catch(e){

      return response.status(501).send({msg: e});
    }

  }
}

module.exports = UserController

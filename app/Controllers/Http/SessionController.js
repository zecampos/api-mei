'use strict'
const User = use("App/Models/User");
class SessionController {
  async store({ request, response, auth }) {
    try{
      const { email, password } = request.all();
      const token = await auth.attempt(email, password);
      let user = await User.findBy("email", email);
      user.toJSON();

      return response.status(201).send( { token, user });
    }catch(e){
      return response.status(501).send( { msg: 'error' });
    }

  }
}

module.exports = SessionController

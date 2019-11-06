

const axios = use('axios')

 const send = async (nome, cpf, telefone, email)=> {
  try{
    let to = 'joseguilhermesantoscampos@gmail.com';
    let subject = ` Nova Solicitação de Abertura de Mei - ${nome}`;
    let text = ` Nome: ${nome}, CPF: ${cpf}, E-mail : ${email}, Telefone: ${telefone}`;
    let send = await axios.post(
      `https://api.sendgrid.com/api/mail.send.json?api_user=zecampos2015&api_key=jose212121&to=${to}&subject=${subject}&text=${text}&from=appmei@appmei.com`,
    );

    return send
  }catch(e){
    return e
  }
};

module.exports = send

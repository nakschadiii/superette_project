module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
      nom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      mot_de_passe: {
        type: Sequelize.STRING
      }
    });
  
    return Client;
};

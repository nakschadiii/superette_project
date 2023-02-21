module.exports = (sequelize, Sequelize) => {
    const Produit = sequelize.define("produit", {
      titre: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      prix: {
        type: Sequelize.FLOAT
      },
      quantite: {
        type: Sequelize.INTEGER
      }
    });
  
    return Produit;
};
  
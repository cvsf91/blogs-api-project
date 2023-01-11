module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('categories', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('categories');
  },
};

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', 
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        autoIncrement: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      }
    },
    {
      timestamps: false,
      tableName: 'categories',
    }
  );

  Category.associate = (models) => {
    Category.hasMany(models.PostCategory,
      { foreignKey: 'postId', as: 'posts_categories', onDelete: 'CASCADE', onUpdate: 'CASCADE', hooks: true });
  }

  return Category;
};
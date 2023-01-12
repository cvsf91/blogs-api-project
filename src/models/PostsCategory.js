module.exports = (sequelize, Datatypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {},
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });
  PostsCategory.associate = (models) => {
    PostsCategory.belongsTo(models.Category,
      { foreignKey: 'postId', as: 'categories' });
  }
  return PostsCategory;
};
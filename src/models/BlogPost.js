module.exports = (sequelize, _DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {});
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'users' });
  };
  return BlogPost;
} 
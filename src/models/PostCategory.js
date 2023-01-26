module.exports = (sequelize, Datatypes) => {
  const PostCategory = sequelize.define('PostCategory',
  {
    postId: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      field: 'post_id',
    },
    categoryId: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      field: 'category_id',
    },
  },
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category,
      {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        hooks: true,
      });
    models.Category.belongsToMany(models.BlogPost,
      {
        as: 'blog_posts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        hooks: true,
      });
  };

  return PostCategory;
};
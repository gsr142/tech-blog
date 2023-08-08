const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Author = require('./Author');
const Comment = require('./Comment')
class Post extends Model { }

Post.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        author_id: {
            type: DataTypes.INTEGER,
            references: { model: Author, key: 'id'}
        },
        comment_id: {
            type: DataTypes.INTEGER,
            references: {model: Comment, key: 'id'}
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }

);

module.exports = Post;
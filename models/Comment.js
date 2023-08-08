const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Author = require('./Author');
const Post = require('./Post')


class Comment extends Model { }

Comment.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        author_id: {
            type: DataTypes.INTEGER,
            references: { model: Author, key: 'id'}
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {model: Post, key: 'id'}
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }

);

module.exports = Comment;
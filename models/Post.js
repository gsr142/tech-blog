const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Comment = require('./Comment');
const User = require('./User');

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
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: { model: User, key: 'id'}
        },
        comment_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
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
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Post = require('./Post');
const Comment = require('./Comment');


class Author extends Model { }

Author.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        post_id: {
            type: DataTypes.INTEGER,
            references: { model: Post, key: 'id' }
            
        },
        comment_id: {
            type: DataTypes.INTEGER,
            references: { model: Comment, key: 'id' }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName:  'author'
    }

);

module.exports = Author;
'use strict';
module.exports = (sequelize, DataTypes) => {
	var wordCount = sequelize.define('word_counter',{
		id:{
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true
		},
		word:{
			type: DataTypes.STRING
		},
		counter:{
			type:DataTypes.INTEGER
		}
		});

	return wordCount;
}
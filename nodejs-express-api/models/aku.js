
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class Aku extends BaseModel {
	static init() {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				fullname: { type:Sequelize.STRING   },
				username: { type:Sequelize.STRING   },
				password: { type:Sequelize.STRING   },
				email: { type:Sequelize.STRING   },
				photo: { type:Sequelize.STRING   },
				role: { type:Sequelize.STRING   }
			}, 
			{ 
				sequelize,
				
				tableName: "aku",
				modelName: "aku",
			}
		);
	}
	
	static listFields() {
		return [
			'id', 
			'fullname', 
			'username', 
			'email', 
			'photo', 
			'role'
		];
	}

	static exportListFields() {
		return [
			'id', 
			'fullname', 
			'username', 
			'email', 
			'photo', 
			'role'
		];
	}

	static viewFields() {
		return [
			'id', 
			'fullname', 
			'username', 
			'email', 
			'role'
		];
	}

	static accounteditFields() {
		return [
			'id', 
			'fullname', 
			'username', 
			'photo', 
			'role'
		];
	}

	static accountviewFields() {
		return [
			'id', 
			'fullname', 
			'username', 
			'email', 
			'role'
		];
	}

	static editFields() {
		return [
			'id', 
			'fullname', 
			'username', 
			'photo', 
			'role'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("id LIKE :search"), 
			Sequelize.literal("fullname LIKE :search"), 
			Sequelize.literal("username LIKE :search"), 
			Sequelize.literal("email LIKE :search"), 
			Sequelize.literal("photo LIKE :search"), 
			Sequelize.literal("role LIKE :search"),
		];
	}

	
	
}
Aku.init();
export default Aku;

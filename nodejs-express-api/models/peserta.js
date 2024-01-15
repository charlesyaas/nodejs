
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class Peserta extends BaseModel {
	static init() {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				jenjang: { type:Sequelize.STRING   },
				tahun_lulus: { type:Sequelize.STRING   },
				nama_peserta: { type:Sequelize.STRING   },
				tempat_lahir: { type:Sequelize.STRING   },
				tanggal_lahir: { type:Sequelize.STRING   },
				orangtua: { type:Sequelize.STRING   },
				nopes_un: { type:Sequelize.STRING   },
				no_ijazah: { type:Sequelize.STRING   },
				npsn: { type:Sequelize.STRING   },
				nama_sekolah: { type:Sequelize.STRING   }
			}, 
			{ 
				sequelize,
				
				tableName: "peserta",
				modelName: "peserta",
			}
		);
	}
	
	static listFields() {
		return [
			'id', 
			'jenjang', 
			'tahun_lulus', 
			'nama_peserta', 
			'tempat_lahir', 
			'tanggal_lahir', 
			'orangtua', 
			'nopes_un', 
			'no_ijazah', 
			'npsn', 
			'nama_sekolah'
		];
	}

	static exportListFields() {
		return [
			'id', 
			'jenjang', 
			'tahun_lulus', 
			'nama_peserta', 
			'tempat_lahir', 
			'tanggal_lahir', 
			'orangtua', 
			'nopes_un', 
			'no_ijazah', 
			'npsn', 
			'nama_sekolah'
		];
	}

	static viewFields() {
		return [
			'id', 
			'jenjang', 
			'tahun_lulus', 
			'nama_peserta', 
			'tempat_lahir', 
			'tanggal_lahir', 
			'orangtua', 
			'nopes_un', 
			'no_ijazah', 
			'npsn', 
			'nama_sekolah'
		];
	}

	static exportViewFields() {
		return [
			'id', 
			'jenjang', 
			'tahun_lulus', 
			'nama_peserta', 
			'tempat_lahir', 
			'tanggal_lahir', 
			'orangtua', 
			'nopes_un', 
			'no_ijazah', 
			'npsn', 
			'nama_sekolah'
		];
	}

	static editFields() {
		return [
			'jenjang', 
			'tahun_lulus', 
			'nama_peserta', 
			'tempat_lahir', 
			'tanggal_lahir', 
			'orangtua', 
			'nopes_un', 
			'no_ijazah', 
			'npsn', 
			'nama_sekolah', 
			'id'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("id LIKE :search"), 
			Sequelize.literal("jenjang LIKE :search"), 
			Sequelize.literal("tahun_lulus LIKE :search"), 
			Sequelize.literal("nama_peserta LIKE :search"), 
			Sequelize.literal("tempat_lahir LIKE :search"), 
			Sequelize.literal("tanggal_lahir LIKE :search"), 
			Sequelize.literal("orangtua LIKE :search"), 
			Sequelize.literal("nopes_un LIKE :search"), 
			Sequelize.literal("no_ijazah LIKE :search"), 
			Sequelize.literal("npsn LIKE :search"), 
			Sequelize.literal("nama_sekolah LIKE :search"),
		];
	}

	
	
}
Peserta.init();
export default Peserta;

import { Router } from 'express';
import DB from '../models/db.js';


const router = Router();


 /**
 * Route to check if field value already exist in a Aku table
 * @GET /components_data/aku_username_exist/{fieldvalue}
 */
router.get('/aku_username_exist/:fieldvalue', async (req, res) => {
	try{
		let val = req.params.fieldvalue
		let count = await DB.Aku.count({ where:{ 'username': val } });
		if(count > 0){
			return res.ok("true");
		}
		return res.ok("false");
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to check if field value already exist in a Aku table
 * @GET /components_data/aku_email_exist/{fieldvalue}
 */
router.get('/aku_email_exist/:fieldvalue', async (req, res) => {
	try{
		let val = req.params.fieldvalue
		let count = await DB.Aku.count({ where:{ 'email': val } });
		if(count > 0){
			return res.ok("true");
		}
		return res.ok("false");
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get barchart_lulusansd records
 * @GET /components_data/barchart_lulusansd
 */
router.get('/barchart_lulusansd',  async (req, res) => {
	let chartData = { labels:[], datasets:[] };
	try{
		let sqltext = `SELECT  COUNT(peserta.id) AS count_of_id, peserta.tahun_lulus FROM peserta WHERE  (peserta.jenjang  LIKE '%SD%' ) AND (peserta.tahun_lulus  >=YEAR(NOW()) - 5 ) GROUP BY peserta.tahun_lulus` ;
		
		let records = await DB.rawQueryList(sqltext);
		chartData['labels'] = records.map(function(v){ return v.tahun_lulus });
		let dataset1 = {
			data: records.map(function(v){ return parseFloat(v.count_of_id) }),
			label: "Jenjang SD",
			backgroundColor: "rgba(255 , 0 , 0, 0.5)", 
			borderColor: "rgba(0 , 0 , 0, 0.5)", 
			borderWidth: "1",
		};
		chartData.datasets.push(dataset1);
		return res.ok(chartData) ;
	}
	catch(err) {
		return res.serverError(err);
	}
});


 /**
 * Route to get barchart_lulusanpaketa records
 * @GET /components_data/barchart_lulusanpaketa
 */
router.get('/barchart_lulusanpaketa',  async (req, res) => {
	let chartData = { labels:[], datasets:[] };
	try{
		let sqltext = `SELECT  COUNT(peserta.id) AS count_of_id, peserta.tahun_lulus FROM peserta WHERE  (peserta.jenjang  LIKE '%PAKETA%' ) AND (peserta.tahun_lulus  >=YEAR(NOW()) - 5 ) GROUP BY peserta.tahun_lulus` ;
		
		let records = await DB.rawQueryList(sqltext);
		chartData['labels'] = records.map(function(v){ return v.tahun_lulus });
		let dataset1 = {
			data: records.map(function(v){ return parseFloat(v.count_of_id) }),
			label: "Jenjang PAKET-A",
			backgroundColor: "rgba(255 , 128 , 192, 0.5)", 
			borderColor: "rgba(0 , 0 , 0, 0.5)", 
			borderWidth: "1",
		};
		chartData.datasets.push(dataset1);
		return res.ok(chartData) ;
	}
	catch(err) {
		return res.serverError(err);
	}
});


 /**
 * Route to get barchart_lulusansmp records
 * @GET /components_data/barchart_lulusansmp
 */
router.get('/barchart_lulusansmp',  async (req, res) => {
	let chartData = { labels:[], datasets:[] };
	try{
		let sqltext = `SELECT  COUNT(peserta.id) AS count_of_id, peserta.tahun_lulus FROM peserta WHERE  (peserta.jenjang  LIKE '%SMP%' ) AND (peserta.tahun_lulus  >=YEAR(NOW()) - 5 ) GROUP BY peserta.tahun_lulus` ;
		
		let records = await DB.rawQueryList(sqltext);
		chartData['labels'] = records.map(function(v){ return v.tahun_lulus });
		let dataset1 = {
			data: records.map(function(v){ return parseFloat(v.count_of_id) }),
			label: "Jenjang SMP",
			backgroundColor: "rgba(0 , 128 , 255, 0.5)", 
			borderColor: "rgba(0 , 0 , 0, 0.5)", 
			borderWidth: "1",
		};
		chartData.datasets.push(dataset1);
		return res.ok(chartData) ;
	}
	catch(err) {
		return res.serverError(err);
	}
});


 /**
 * Route to get barchart_lulusanpaketb records
 * @GET /components_data/barchart_lulusanpaketb
 */
router.get('/barchart_lulusanpaketb',  async (req, res) => {
	let chartData = { labels:[], datasets:[] };
	try{
		let sqltext = `SELECT  COUNT(peserta.id) AS count_of_id, peserta.tahun_lulus FROM peserta WHERE  (peserta.jenjang  LIKE '%PAKETB%' ) AND (peserta.tahun_lulus  >=YEAR(NOW()) - 5 ) GROUP BY peserta.tahun_lulus` ;
		
		let records = await DB.rawQueryList(sqltext);
		chartData['labels'] = records.map(function(v){ return v.tahun_lulus });
		let dataset1 = {
			data: records.map(function(v){ return parseFloat(v.count_of_id) }),
			label: "Jenjang PAKET-B",
			backgroundColor: "rgba(128 , 255 , 255, 0.5)", 
			borderColor: "rgba(0 , 0 , 0, 0.5)", 
			borderWidth: "1",
		};
		chartData.datasets.push(dataset1);
		return res.ok(chartData) ;
	}
	catch(err) {
		return res.serverError(err);
	}
});


 /**
 * Route to get barchart_lulusansma records
 * @GET /components_data/barchart_lulusansma
 */
router.get('/barchart_lulusansma',  async (req, res) => {
	let chartData = { labels:[], datasets:[] };
	try{
		let sqltext = `SELECT  COUNT(peserta.id) AS count_of_id, peserta.tahun_lulus FROM peserta WHERE  (peserta.jenjang  LIKE '%SMA%' ) AND (peserta.tahun_lulus  >=YEAR(NOW()) - 5 ) GROUP BY peserta.tahun_lulus` ;
		
		let records = await DB.rawQueryList(sqltext);
		chartData['labels'] = records.map(function(v){ return v.tahun_lulus });
		let dataset1 = {
			data: records.map(function(v){ return parseFloat(v.count_of_id) }),
			label: "Jenjang SMA",
			backgroundColor: "rgba(192 , 192 , 192, 0.5)", 
			borderColor: "rgba(0 , 0 , 0, 0.5)", 
			borderWidth: "1",
		};
		chartData.datasets.push(dataset1);
		return res.ok(chartData) ;
	}
	catch(err) {
		return res.serverError(err);
	}
});


 /**
 * Route to get barchart_lulusansmk records
 * @GET /components_data/barchart_lulusansmk
 */
router.get('/barchart_lulusansmk',  async (req, res) => {
	let chartData = { labels:[], datasets:[] };
	try{
		let sqltext = `SELECT  COUNT(peserta.id) AS count_of_id, peserta.tahun_lulus FROM peserta WHERE  (peserta.jenjang  LIKE '%SMK%' ) AND (peserta.tahun_lulus  >=YEAR(NOW()) - 5 ) GROUP BY peserta.tahun_lulus` ;
		
		let records = await DB.rawQueryList(sqltext);
		chartData['labels'] = records.map(function(v){ return v.tahun_lulus });
		let dataset1 = {
			data: records.map(function(v){ return parseFloat(v.count_of_id) }),
			label: "Jenjang SMK",
			backgroundColor: "rgba(255 , 128 , 0, 0.5)", 
			borderColor: "rgba(0 , 0 , 0, 0.5)", 
			borderWidth: "1",
		};
		chartData.datasets.push(dataset1);
		return res.ok(chartData) ;
	}
	catch(err) {
		return res.serverError(err);
	}
});


 /**
 * Route to get barchart_lulusanpaketc records
 * @GET /components_data/barchart_lulusanpaketc
 */
router.get('/barchart_lulusanpaketc',  async (req, res) => {
	let chartData = { labels:[], datasets:[] };
	try{
		let sqltext = `SELECT  COUNT(peserta.id) AS count_of_id, peserta.tahun_lulus FROM peserta WHERE  (peserta.jenjang  LIKE '%PAKETC%' ) AND (peserta.tahun_lulus  >=YEAR(NOW()) - 5 ) GROUP BY peserta.tahun_lulus` ;
		
		let records = await DB.rawQueryList(sqltext);
		chartData['labels'] = records.map(function(v){ return v.tahun_lulus });
		let dataset1 = {
			data: records.map(function(v){ return parseFloat(v.count_of_id) }),
			label: "Jenjang PAKET-C",
			backgroundColor: "rgba(0 , 128 , 128, 0.5)", 
			borderColor: "rgba(0 , 0 , 0, 0.5)", 
			borderWidth: "1",
		};
		chartData.datasets.push(dataset1);
		return res.ok(chartData) ;
	}
	catch(err) {
		return res.serverError(err);
	}
});
export default router;

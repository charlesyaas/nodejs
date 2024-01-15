import { Router } from 'express';
import csv from 'fast-csv';
import { body } from 'express-validator';
import { fileUploadMiddleware } from '../helpers/upload_middleware.js';
import validateFormData from '../helpers/validate_form.js';
import DB from '../models/db.js';
import exportListPage from '../exports/peserta_list.js';
import exportViewPage from '../exports/peserta_view.js';


const router = Router();




/**
 * Route to list peserta records
 * @GET /peserta/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req, res) => {  
	try{
		const query = {};
		let queryFilters = [];
		let where = {};
		let replacements = {};
		let fieldName = req.params.fieldname;
		let fieldValue = req.params.fieldvalue;
		
		if (fieldName){
			queryFilters.push(DB.filterBy(fieldName, fieldValue));
		}
		let search = req.query.search;
		if(search){
			let searchFields = DB.Peserta.searchFields();
			where[DB.op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		if(queryFilters.length){
			where[DB.op.and] = queryFilters;
		}
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = DB.getOrderBy(req, 'id', 'desc');
		if(req.query.export){
			query.attributes = DB.Peserta.exportListFields();
			let records = await DB.Peserta.findAll(query);
			return exportListPage(records, req, res)
		}
		query.attributes = DB.Peserta.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 10;
		let result = await DB.Peserta.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to import Peserta records
 * support multi import of csv data files
 * csv file must contain table header on the first line.
 * @GET /peserta/importdata
 */
router.post('/importdata', fileUploadMiddleware('import_data'), async (req, res, next) => {
	if(req.files){	// files uploaded
		var uploadedPaths = req.files.map(function(v) {
			return v.path;
		});
		if(uploadedPaths.length){
			uploadedPaths.forEach(function (fpath){
				let records = [];
				csv.fromPath(fpath, {headers: true, ignoreEmpty: true}).on("data", function(data){
					if(data){
						records.push(data);
					}
				}).on("end", async() => {
					try{
						let affectedRows = await DB.Peserta.bulkCreate(records);
						let numRows = affectedRows.length || 0;
						return res.ok(`${numRows} Records Imported`);
					}
					catch(err){
						return res.serverError(err);
					}
				});
			});
		}
	}
	else{
		return res.badRequest("Error uploading file")
	}
});


/**
 * Route to view Peserta record
 * @GET /peserta/view/{recid}
 */
router.get('/view/:recid', async (req, res) => {
	try{
		const recid = req.params.recid || null;
		const query = {}
		const where = {}
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		if(req.query.export){
			query.attributes = DB.Peserta.exportViewFields();
			let records = await DB.Peserta.findAll(query);
			return exportViewPage(records, req, res)
		}
		query.attributes = DB.Peserta.viewFields();
		let record = await DB.Peserta.findOne(query);
		if(!record){
			return res.notFound();
		}
		return res.ok(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to insert Peserta record
 * @POST /peserta/add
 */
router.post('/add/', 
	[
		body('jenjang').optional({nullable: true, checkFalsy: true}),
		body('tahun_lulus').optional({nullable: true, checkFalsy: true}),
		body('nama_peserta').optional({nullable: true, checkFalsy: true}),
		body('tempat_lahir').optional({nullable: true, checkFalsy: true}),
		body('tanggal_lahir').optional({nullable: true, checkFalsy: true}),
		body('orangtua').optional({nullable: true, checkFalsy: true}),
		body('nopes_un').optional({nullable: true, checkFalsy: true}),
		body('no_ijazah').optional({nullable: true, checkFalsy: true}),
		body('npsn').optional({nullable: true, checkFalsy: true}),
		body('nama_sekolah').optional({nullable: true, checkFalsy: true}),
	], validateFormData
, async function (req, res) {
	try{
		let modeldata = req.getValidFormData();
		
		//save Peserta record
		let record = await DB.Peserta.create(modeldata);
		//await record.reload(); //reload the record from database
		const recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Peserta record for edit
 * @GET /peserta/edit/{recid}
 */
router.get('/edit/:recid', async (req, res) => {
	try{
		const recid = req.params.recid;
		const query = {};
		const where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Peserta.editFields();
		let record = await DB.Peserta.findOne(query);
		if(!record){
			return res.notFound();
		}
		return res.ok(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to update  Peserta record
 * @POST /peserta/edit/{recid}
 */
router.post('/edit/:recid', 
	[
		body('jenjang').optional({nullable: true, checkFalsy: true}),
		body('tahun_lulus').optional({nullable: true, checkFalsy: true}),
		body('nama_peserta').optional({nullable: true, checkFalsy: true}),
		body('tempat_lahir').optional({nullable: true, checkFalsy: true}),
		body('tanggal_lahir').optional({nullable: true, checkFalsy: true}),
		body('orangtua').optional({nullable: true, checkFalsy: true}),
		body('nopes_un').optional({nullable: true, checkFalsy: true}),
		body('no_ijazah').optional({nullable: true, checkFalsy: true}),
		body('npsn').optional({nullable: true, checkFalsy: true}),
		body('nama_sekolah').optional({nullable: true, checkFalsy: true}),
	], validateFormData
, async (req, res) => {
	try{
		const recid = req.params.recid;
		let modeldata = req.getValidFormData({ includeOptionals: true });
		const query = {};
		const where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Peserta.editFields();
		let record = await DB.Peserta.findOne(query);
		if(!record){
			return res.notFound();
		}
		await DB.Peserta.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Peserta record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @GET /peserta/delete/{recid}
 */
router.get('/delete/:recid', async (req, res) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = {};
		const where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		let records = await DB.Peserta.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await DB.Peserta.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
export default router;

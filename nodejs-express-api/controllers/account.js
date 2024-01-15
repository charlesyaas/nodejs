import { Router } from 'express';
import { body } from 'express-validator';
import uploader from '../helpers/uploader.js';
import validateFormData from '../helpers/validate_form.js';
import DB from '../models/db.js';
const router = Router();
/**
 * Route to view user account record
 * @GET /account
 */
router.get(['/','/index'], async (req, res) => {
	try{
		let recid = req.user.id;
		let query = {};
		let where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Aku.accountviewFields();
		let record = await DB.Aku.findOne(query);
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
 * Route to get  Aku record for edit
 * @GET /aku/edit/{recid}
 */
router.get(['/edit'], async (req, res) => {
	try{
		const recid = req.user.id;
		const query = {};
		const where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Aku.accounteditFields();
		let record = await DB.Aku.findOne(query);
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
 * Route to update  Aku record
 * @POST /aku/edit/{recid}
 */
router.post(['/edit'], 
	[
		body('fullname').optional({nullable: true, checkFalsy: true}),
		body('username').optional({nullable: true, checkFalsy: true}),
		body('photo').optional({nullable: true, checkFalsy: true}),
		body('role').optional({nullable: true, checkFalsy: true}),
	], validateFormData
, async (req, res) => {
	try{
		const recid = req.user.id;
		let modeldata = req.getValidFormData({ includeOptionals: true });
        // move uploaded file from temp directory to destination directory
		if(modeldata.photo !== undefined) {
			const fileInfo = uploader.moveUploadedFiles(modeldata.photo, 'photo');
			modeldata.photo = fileInfo.filepath;
		}
		const query = {};
		const where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = DB.Aku.accounteditFields();
		let record = await DB.Aku.findOne(query);
		if(!record){
			return res.notFound();
		}
		await DB.Aku.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});
router.get('/currentuserdata', async function (req, res)
{
	const user = req.user;
    return res.ok(user);
});
export default router;

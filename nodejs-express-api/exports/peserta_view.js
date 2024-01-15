
import excel from 'exceljs';
import ejs from 'ejs';
import utils from '../helpers/utils.js';
import config from '../config.js';
async function exportViewPage(records, req, res) {
	try{
		let format = req.query.export.toLowerCase();
		let columns =  [
				{ header: "Id", key: "id" },
				{ header: "Jenjang", key: "jenjang" },
				{ header: "Tahun Lulus", key: "tahun_lulus" },
				{ header: "Nama Peserta", key: "nama_peserta" },
				{ header: "Tempat Lahir", key: "tempat_lahir" },
				{ header: "Tanggal Lahir", key: "tanggal_lahir" },
				{ header: "Orangtua", key: "orangtua" },
				{ header: "Nopes Un", key: "nopes_un" },
				{ header: "No Ijazah", key: "no_ijazah" },
				{ header: "Npsn", key: "npsn" },
				{ header: "Nama Sekolah", key: "nama_sekolah" }
		]
		let filename = utils.dateNow() + "pesertaview-report";
		if(format == "excel"){
			let workbook = new excel.Workbook();
			let worksheet = workbook.addWorksheet("Peserta Details");
			worksheet.columns = columns;
			worksheet.addRows(records);
			res.setHeader("Content-Disposition", `attachment; filename=${filename}.xlsx`);
			return workbook.xlsx.write(res).then(function () {
				res.status(200).end();
			})
		}
		else if(format == "csv"){
			let workbook = new excel.Workbook();
			let worksheet = workbook.addWorksheet("Peserta Details");
			worksheet.columns = columns;
			worksheet.addRows(records);

			// set all columns to autowidth
			utils.excelAutoWidth(worksheet);

			const headerRow = worksheet.getRow(1);
			headerRow.fill = { type: 'pattern', pattern:'solid', fgColor:{ argb:'f5b914' } }
			//headerRow.font = { name: 'Arial', size: 12 }


			res.setHeader("Content-Disposition", `attachment; filename=${filename}.csv`);
			return workbook.csv.write(res).then(function () {
				res.status(200).end();
			})
		}
		else if(format === "pdf" || format === "print"){
			let page = "pesertaview.ejs";
			let record = records[0];
			let html = await ejs.renderFile("views/layouts/report.ejs", { record, page, config, utils });

			if (format == "pdf") {
				const pdfConfig = {
					margin: { top: '0', right: '0', bottom: '0', left: '0' },
					printBackground: true,
					format: 'A4',
					//landscape: true,
				}
				return res.generatePdf(html, filename, pdfConfig, 'screen');
			}
			else {
				return res.ok(html);
			}
		}
	}
	catch(err){
		return res.serverError(err);
	}
}
export default exportViewPage

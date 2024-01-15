import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Title } from 'components/Title';
import useApp from 'hooks/useApp';

import useAddPage from 'hooks/useAddPage';
const PesertaAddPage = (props) => {
		const app = useApp();
	
	//form validation rules
	const validationSchema = yup.object().shape({
		jenjang: yup.string().nullable().label("Jenjang"),
		tahun_lulus: yup.string().nullable().label("Tahun Lulus"),
		nama_peserta: yup.string().nullable().label("Nama Peserta"),
		tempat_lahir: yup.string().nullable().label("Tempat Lahir"),
		tanggal_lahir: yup.string().nullable().label("Tanggal Lahir"),
		orangtua: yup.string().nullable().label("Orangtua"),
		nopes_un: yup.string().nullable().label("Nopes Un"),
		no_ijazah: yup.string().nullable().label("No Ijazah"),
		npsn: yup.string().nullable().label("Npsn"),
		nama_sekolah: yup.string().nullable().label("Nama Sekolah")
	});
	
	//form default values
	const formDefaultValues = {
		jenjang: "NULL", 
		tahun_lulus: "NULL", 
		nama_peserta: "NULL", 
		tempat_lahir: "NULL", 
		tanggal_lahir: "NULL", 
		orangtua: "NULL", 
		nopes_un: "NULL", 
		no_ijazah: "NULL", 
		npsn: "NULL", 
		nama_sekolah: "NULL", 
	}
	
	//page hook where logics resides
	const pageController =  useAddPage({ props, formDefaultValues, afterSubmit });
	
	// destructure and grab what the page needs
	const { formData, resetForm, handleSubmit, submitForm, pageReady, loading, saving, inputClassName } = pageController;
	
	//event raised after form submit
	function afterSubmit(response){
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		resetForm();
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect) {
			app.navigate(`/peserta`);
		}
	}
	
	// page loading form data from api
	if(loading){
		return (
			<div className="p-3 text-center">
				<ProgressSpinner style={{width:'50px', height:'50px'}} />
			</div>
		);
	}
	
	//page has loaded any required data and ready to render
	if(pageReady){
		return (
<main id="PesertaAddPage" className="main-page">
    { (props.showHeader) && 
    <section className="page-section mb-3" >
        <div className="container">
            <div className="grid justify-content-between align-items-center">
                { !props.isSubPage && 
                <div className="col-fixed " >
                    <Button onClick={() => app.navigate(-1)} label=""  className="p-button p-button-text " icon="pi pi-arrow-left"  />
                </div>
                }
                <div className="col " >
                    <Title title="Add New Peserta"   titleClass="text-2xl text-primary font-bold" subTitleClass="text-500"      separator={false} />
                </div>
            </div>
        </div>
    </section>
    }
    <section className="page-section " >
        <div className="container">
            <div className="grid ">
                <div className="md:col-9 sm:col-12 comp-grid" >
                    <div >
                        <Formik initialValues={formData} validationSchema={validationSchema} onSubmit={(values, actions) =>submitForm(values)}>
                            {(formik) => 
                            <>
                            <Form className={`${!props.isSubPage ? 'card  ' : ''}`}>
                                <div className="grid">
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                Jenjang 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="jenjang"  onChange={formik.handleChange}  value={formik.values.jenjang}   label="Jenjang" type="text" placeholder="Enter Jenjang"        className={inputClassName(formik?.errors?.jenjang)} />
                                                <ErrorMessage name="jenjang" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                Tahun Lulus 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="tahun_lulus"  onChange={formik.handleChange}  value={formik.values.tahun_lulus}   label="Tahun Lulus" type="text" placeholder="Enter Tahun Lulus"        className={inputClassName(formik?.errors?.tahun_lulus)} />
                                                <ErrorMessage name="tahun_lulus" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                Nama Peserta 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="nama_peserta"  onChange={formik.handleChange}  value={formik.values.nama_peserta}   label="Nama Peserta" type="text" placeholder="Enter Nama Peserta"        className={inputClassName(formik?.errors?.nama_peserta)} />
                                                <ErrorMessage name="nama_peserta" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                Tempat Lahir 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="tempat_lahir"  onChange={formik.handleChange}  value={formik.values.tempat_lahir}   label="Tempat Lahir" type="text" placeholder="Enter Tempat Lahir"        className={inputClassName(formik?.errors?.tempat_lahir)} />
                                                <ErrorMessage name="tempat_lahir" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                Tanggal Lahir 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="tanggal_lahir"  onChange={formik.handleChange}  value={formik.values.tanggal_lahir}   label="Tanggal Lahir" type="text" placeholder="Enter Tanggal Lahir"        className={inputClassName(formik?.errors?.tanggal_lahir)} />
                                                <ErrorMessage name="tanggal_lahir" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                Orangtua 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="orangtua"  onChange={formik.handleChange}  value={formik.values.orangtua}   label="Orangtua" type="text" placeholder="Enter Orangtua"        className={inputClassName(formik?.errors?.orangtua)} />
                                                <ErrorMessage name="orangtua" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                Nopes Un 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="nopes_un"  onChange={formik.handleChange}  value={formik.values.nopes_un}   label="Nopes Un" type="text" placeholder="Enter Nopes Un"        className={inputClassName(formik?.errors?.nopes_un)} />
                                                <ErrorMessage name="nopes_un" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                No Ijazah 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="no_ijazah"  onChange={formik.handleChange}  value={formik.values.no_ijazah}   label="No Ijazah" type="text" placeholder="Enter No Ijazah"        className={inputClassName(formik?.errors?.no_ijazah)} />
                                                <ErrorMessage name="no_ijazah" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                Npsn 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="npsn"  onChange={formik.handleChange}  value={formik.values.npsn}   label="Npsn" type="text" placeholder="Enter Npsn"        className={inputClassName(formik?.errors?.npsn)} />
                                                <ErrorMessage name="npsn" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                Nama Sekolah 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="nama_sekolah"  onChange={formik.handleChange}  value={formik.values.nama_sekolah}   label="Nama Sekolah" type="text" placeholder="Enter Nama Sekolah"        className={inputClassName(formik?.errors?.nama_sekolah)} />
                                                <ErrorMessage name="nama_sekolah" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                { props.showFooter && 
                                <div className="text-center my-3">
                                    <Button onClick={(e) => handleSubmit(e, formik)} className="p-button-primary" type="submit" label="Submit" icon="pi pi-send" loading={saving} />
                                </div>
                                }
                            </Form>
                            </>
                            }
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
		);
	}
}

//page props and default values
PesertaAddPage.defaultProps = {
	primaryKey: 'id',
	pageName: 'peserta',
	apiPath: 'peserta/add',
	routeName: 'pesertaadd',
	submitButtonLabel: "Submit",
	formValidationError: "Form is invalid",
	formValidationMsg: "Please complete the form",
	msgTitle: "Create Record",
	msgAfterSave: "Record added successfully",
	msgBeforeSave: "",
	showHeader: true,
	showFooter: true,
	redirect: true,
	isSubPage: false
}
export default PesertaAddPage;

import { useState } from 'react';
import { Chart } from 'primereact/chart';
import { DataSource } from 'components/DataSource';
import { Title } from 'components/Title';

export default function HomePage() {
	
	const [pageReady, setPageReady] = useState(true);
	return (
		<main id="HomePage" className="main-page">
<section className="page-section q-pa-md" >
    <div className="container-fluid">
        <div className="grid ">
            <div className="col comp-grid" >
                <Title title="Home"   titleClass="text-lg font-bold text-primary" subTitleClass="text-500"      separator={false} />
            </div>
        </div>
    </div>
</section>
<section className="page-section mb-3" >
    <div className="container-fluid">
        <div className="grid ">
            <div className="col-12 md:col-6 comp-grid" >
                <div className="card  s">
                    <div className="q-pa-md">
                        <div className="font-bold text-lg">Lulusan SD</div>
                        <div className="text-500"></div>
                        <hr />
                        <div className="row q-col-gutter-sm">
                            <div className="col">
                                <DataSource   apiPath="components_data/barchart_lulusansd"  >
                                    {
                                    ({ response }) => 
                                    <>
                                    <Chart data={response} type="bar" options={{
                                    scales: {
                                    y: {
                                    title: {
                                    display: true,
                                    text: ""
                                    }
                                    },
                                    x: {
                                    title: {
                                    display: true,
                                    text: ""
                                    }
                                    }
                                    }
                                    }
                                    }  />
                                    </>
                                    }
                                </DataSource>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-6 comp-grid" >
                <div className="card  s">
                    <div className="q-pa-md">
                        <div className="font-bold text-lg">Lulusan PAKET-A</div>
                        <div className="text-500"></div>
                        <hr />
                        <div className="row q-col-gutter-sm">
                            <div className="col">
                                <DataSource   apiPath="components_data/barchart_lulusanpaketa"  >
                                    {
                                    ({ response }) => 
                                    <>
                                    <Chart data={response} type="bar" options={{
                                    scales: {
                                    y: {
                                    title: {
                                    display: true,
                                    text: ""
                                    }
                                    },
                                    x: {
                                    title: {
                                    display: true,
                                    text: ""
                                    }
                                    }
                                    }
                                    }
                                    }  />
                                    </>
                                    }
                                </DataSource>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-6 comp-grid" >
                <div className="card  s">
                    <div className="q-pa-md">
                        <div className="font-bold text-lg">Lulusan SMP</div>
                        <div className="text-500"></div>
                        <hr />
                        <div className="row q-col-gutter-sm">
                            <div className="col">
                                <DataSource   apiPath="components_data/barchart_lulusansmp"  >
                                    {
                                    ({ response }) => 
                                    <>
                                    <Chart data={response} type="bar" options={{
                                    scales: {
                                    y: {
                                    title: {
                                    display: true,
                                    text: ""
                                    }
                                    },
                                    x: {
                                    title: {
                                    display: true,
                                    text: ""
                                    }
                                    }
                                    }
                                    }
                                    }  />
                                    </>
                                    }
                                </DataSource>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-6 comp-grid" >
                <div className="card  s">
                    <div className="q-pa-md">
                        <div className="font-bold text-lg">Lulusan PAKET-B</div>
                        <div className="text-500"></div>
                        <hr />
                        <div className="row q-col-gutter-sm">
                            <div className="col">
                                <DataSource   apiPath="components_data/barchart_lulusanpaketb"  >
                                    {
                                    ({ response }) => 
                                    <>
                                    <Chart data={response} type="bar" options={{
                                    scales: {
                                    y: {
                                    title: {
                                    display: true,
                                    text: ""
                                    }
                                    },
                                    x: {
                                    title: {
                                    display: true,
                                    text: ""
                                    }
                                    }
                                    }
                                    }
                                    }  />
                                    </>
                                    }
                                </DataSource>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-4 comp-grid" >
                <div className="card  s">
                    <div className="q-pa-md">
                        <div className="font-bold text-lg">Lulusan SMA</div>
                        <div className="text-500"></div>
                        <hr />
                        <div className="row q-col-gutter-sm">
                            <div className="col">
                                <DataSource   apiPath="components_data/barchart_lulusansma"  >
                                    {
                                    ({ response }) => 
                                    <>
                                    <Chart data={response} type="bar" options={{
                                    scales: {
                                    y: {
                                    title: {
                                    display: true,
                                    text: ""
                                    }
                                    },
                                    x: {
                                    title: {
                                    display: true,
                                    text: ""
                                    }
                                    }
                                    }
                                    }
                                    }  />
                                    </>
                                    }
                                </DataSource>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-4 comp-grid" >
                <div className="card  s">
                    <div className="q-pa-md">
                        <div className="font-bold text-lg">Lulusan SMK</div>
                        <div className="text-500"></div>
                        <hr />
                        <div className="row q-col-gutter-sm">
                            <div className="col">
                                <DataSource   apiPath="components_data/barchart_lulusansmk"  >
                                    {
                                    ({ response }) => 
                                    <>
                                    <Chart data={response} type="bar" options={{
                                    scales: {
                                    y: {
                                    title: {
                                    display: true,
                                    text: ""
                                    }
                                    },
                                    x: {
                                    title: {
                                    display: true,
                                    text: ""
                                    }
                                    }
                                    }
                                    }
                                    }  />
                                    </>
                                    }
                                </DataSource>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-4 comp-grid" >
                <div className="card  s">
                    <div className="q-pa-md">
                        <div className="font-bold text-lg">Lulusan PAKET-C</div>
                        <div className="text-500"></div>
                        <hr />
                        <div className="row q-col-gutter-sm">
                            <div className="col">
                                <DataSource   apiPath="components_data/barchart_lulusanpaketc"  >
                                    {
                                    ({ response }) => 
                                    <>
                                    <Chart data={response} type="bar" options={{
                                    scales: {
                                    y: {
                                    title: {
                                    display: true,
                                    text: ""
                                    }
                                    },
                                    x: {
                                    title: {
                                    display: true,
                                    text: ""
                                    }
                                    }
                                    }
                                    }
                                    }  />
                                    </>
                                    }
                                </DataSource>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
		</main>
	);
}

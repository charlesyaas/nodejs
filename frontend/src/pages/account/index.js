import { lazy, Suspense } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ImageViewer } from 'components/ImageViewer';
import { TabMenu } from 'primereact/tabmenu';
import useApp from 'hooks/useApp';
import useAuth from 'hooks/useAuth';

import PageLoading from 'components/PageLoading';
const AccountViewPage = lazy(() => import('./Accountview'));
const AccountEditPage = lazy(() => import('./Accountedit'));
export default function Account(props) {
		const auth = useAuth();
	const app = useApp();
	const location = useLocation();
	let pageIndex = 0;
	const pathName = window.location.pathname || '';
	const pageName = pathName.split('/')[2] || '';
	if(pageName === 'edit'){
		pageIndex = 1;
	}
	else if(pageName === 'changepassword'){
		pageIndex = 2;
	}
	const [activeIndex, setActiveIndex] = useState(pageIndex);
	const accountMenuItems = [
		{
			label: "Account Detail", 
			icon: 'pi pi-fw pi-user', 
			command: () => app.navigate('/account')
		},
		{
			label:  "Edit Account", 
			icon: 'pi pi-fw pi-user-edit', 
			command: () => app.navigate('/account/edit')
		},
	];
	return (
		<section className="page-section " >
			<div className="container" style={{minHeight:'100px'}}>
				<div className="surface-200 card  p-0 mb-4">
	<div className="p-4 mb-4">
		<div className="grid align-items-center">
			<div className="col-fixed" style={{width:'120x'}}>
				<ImageViewer className="border-round" style={{maxWidth: '100%', maxHeight: '100px'}} width="auto" height="auto" imageSize="medium" src={auth.userPhoto} />
			</div>
			<div className="col">
				<div className="text-2xl capitalize font-bold text-primary"> { auth.userName } </div>
				<div className="text-500"> { auth.userEmail } </div>
			</div>
		</div>
	</div>
				</div>
				<div className="card p-0 ">
					<TabMenu model={accountMenuItems} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
					<div className="p-3">
						<Suspense fallback={<PageLoading />}>
							<Outlet />
							<Routes>
																<Route path="/" element={<AccountViewPage isSubPage />} />
								<Route path="/edit" element={<AccountEditPage isSubPage />} />
							</Routes>
						</Suspense>
					</div>
				</div>
			</div>
		</section>
	);
}

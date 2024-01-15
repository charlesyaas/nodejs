import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export default function AccountBlocked() {
    
    return (<div className="grid justify-content-center">
        <div className="col-12 md:col-5">
            <div className="card my-4 text-center">
                <Avatar className="mb-3 bg-green-700 text-green-100" icon="pi pi-check-circle" size="large" />
                <div className="text-2xl font-bold text-700">
                    Your password has been changed successfully
                </div>
                <hr />
                <Link to="/">
                    <Button className="p-button-text" label="Click here to login" />
                </Link>
            </div>
        </div>
    </div>);
}

import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";


export function Modal()
{

    const [address, setAddress] = useState([]);
    const [phone, setPhone] = useState([]);
    const params = useParams();

    useEffect(()=>{
        axios({
            method:'get',
            url:`https://jsonplaceholder.typicode.com/users/${params.id}`
        })
        .then(res => {
            setAddress(res.data.address);
            setPhone(res.data);
        })
    },[params.id])
    
    return(
        <div className="container-fluid">
            <button className="btn btn-dark" data-bs-target="#address" data-bs-toggle="modal" style={{marginRight:"2000px"}}>Click</button><div className="bi bi-hand-index-thumb-fill  mt-2" style={{marginRight:'1000px'}}>Click here to open the modal</div>
            <Link to="/" className="btn btn-primary mt-4"style={{marginRight:"2000px"}}>Home</Link><div className="bi bi-hand-index-thumb-fill mt-2" style={{marginRight:"1000px"}}>Click here to go back to home</div>
            <div className="modal fade" align ="center" id="address">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="text-primary">Employee Details - {phone.username}</h2>
                            <button to="/" className="btn-close btn btn-primary" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <dl className="row">
                                <dt>Address</dt>
                                <hr/>
                                <dt className="col-4">Street : </dt>
                                <dd className="col-8">{address.street}</dd>
                                <dt className="col-4">City : </dt>
                                <dd className="col-8">{address.city}</dd>
                                <dt className="col-4">ZipCode : </dt>
                                <dd className="col-8">{address.zipcode}</dd><hr/>
                                <dt className="col-4">Phone : </dt>
                                <dd className="col-8">{phone.phone}</dd>
                                <dt className="col-4">Website : </dt>
                                <dd className="col-8">{phone.website}</dd>
                            </dl><hr/>                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
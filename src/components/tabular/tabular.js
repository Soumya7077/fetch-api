import axios from "axios";
import { useEffect, useState } from "react"
import {  Link } from "react-router-dom";


export function FetchData() {

    const [details, setDetails] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [searchData, setSearchData] = useState('');
    

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users'
        }).then(res => {
            setDetails(res.data);
            setFilterData(res.data);
        })
    }, []);

        

    function HandleSearchChange(e){
        const search = e.target.value;        
        
        if(search.length > 0){
            const query = filterData.filter((item) => item.name.toLowerCase().includes(search));
            setDetails(query);
        }else{
            setDetails(filterData);
        }
        setSearchData(search);
    }


    return (
        <div className="container-fluid">
            
            <div className="mb-2 p-2 w-50">
            <label className="form-label">Search</label>
                <input type="text" value={searchData} onChange={HandleSearchChange} placeholder="Search Name..." className="form-control" />
            </div>
            <table className="table table-hover m-2 p-2" border="1">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        details.map((detail) => (
                            <tr key={detail.id}>
                                <td>{detail.id}</td>
                                <td>{detail.name}</td>
                                <td>{detail.username}</td>
                                <td>{detail.email}</td>
                                <td><Link to={'/' + detail.id}  className="bi bi-eye btn btn-warning"  ></Link></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>          
        </div>
    )
}
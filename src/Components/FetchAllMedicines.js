import { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

function FetchAllMedicines(){
    const[medicines,setMedicines] = useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:8080/medicine/allMedicines").then(resp=>setMedicines(resp.data))
    },[])

    return (
        <div className='container'>
            <h2>Medicine List</h2>
            <div className='table-responsive'>
                <table className='table  table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>medicine id</th>
                            <th>medicine name</th>
                            <th> medicine cost</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    {
                        medicines.map(med =>
                            <tbody>
                                <tr key={med.medicineId}>
                                    <td>{med.medicineId}</td>
                                    <td>{med.medicineName}</td>
                                    <td>{med.medicineCost}</td>
                                    <td><Link to={`/medicine/details/${med.medicineId}`}>View</Link></td>
                                    <td><Link to={`/medicine/update/${med.medicineId}`}>Update</Link></td>
                                    <td><Link to={`/medicine/delete/${med.medicineId}`}>Remove</Link></td>
                                </tr>
                            </tbody>

                        )
                    }
                </table>
            </div>
        </div>
    )
}

export default FetchAllMedicines;
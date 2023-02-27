import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

function FetchMedById() {
    const [medicine, setMedicine] = useState(null);
    const { medid } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8080/medicine/getmedicinebyid/' + medid)
        .then(resp => setMedicine(resp.data))
    }, [])
    return (
        <div>
            {
                medicine != null &&
                <div>
                    <h3>Medicine Detail</h3>
                    <p>MedicineID: {medicine.medicineId}</p>
                    <p>MedicineName: {medicine.medicineName}</p>
                    <p>MedicineCost: {medicine.medicineCost}</p>
                    <p>CompanyName: {medicine.companyName}</p>
                    <p>ManufactureDate: {medicine.manufactureDate}</p>
                    <p>ExpiryDate: {medicine.expiryDate}</p>
                    
                    <div>
                       <button className='btn btn-primary'> <Link to='/medicine/allMedicines' style={{color:'white'}}>Go back</Link> </button>
                    </div>
                </div>
            }
        </div>

    )
}


export default FetchMedById;
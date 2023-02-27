import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

function DeleteMedicine(){
    const[medicine,setMedicine] = useState(null);
    const {medid} = useParams();
    const nav = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/medicine/getmedicinebyid/' + medid)
        .then(resp => setMedicine(resp.data))
    }, [medid])

    const deleteButton=()=>{
        axios.delete("http://localhost:8080/medicine/deleteMedicine/"+medid)
        .then(resp=>{
            alert("Medicine Deleted Successfully");
            nav(-1);
        })
    }

    return(
        <div>
            {
                medicine!==null &&
                <div>
                    <h3>Medicine Details</h3>
                    <p>MedicineID: {medicine.medicineId}</p>
                    <p>MedicineName: {medicine.medicineName}</p>
                    <p>MedicineCost: {medicine.medicineCost}</p>
                    <p>CompanyName: {medicine.companyName}</p>
                    <p>ManufactureDate: {medicine.manufactureDate}</p>
                    <p>ExpiryDate: {medicine.expiryDate}</p>
                    <span>
                    <button onClick={deleteButton} className='btn btn-danger'>Remove</button>
                    &emsp;
                    <button onClick={()=> nav(-1)} className='btn btn-light'>Cancel</button>
                    </span>
                </div>

            }

        </div>
    )
}

export default DeleteMedicine;
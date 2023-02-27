import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios';
function UpdateMedicine() {
    const [mid, setMId] = useState("");
    const [mname, setMName] = useState("");
    const [mcost, setMCost] = useState("");
    const [cname, setMCompanyName] = useState("");
    const [mfd, setMMFD] = useState("");
    const [expd, setMEXPD] = useState("");
    const [stk, setMStock] = useState("");
    const [rate, setMRating] = useState("");
    const [mdet, setMDetails] = useState("");
    const [mtype, setMType] = useState("");
    const [ingrdt, setMIngredients] = useState("");
    const [quant, setMQuantity] = useState("");

    const { medid } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/medicine/getmedicinebyid/' + medid)
            .then(resp => {
                setMId(resp.data.medicineId);
                setMName(resp.data.medicineName);
                setMCost(resp.data.medicineCost);
                setMCompanyName(resp.data.companyName);
                setMMFD(resp.data.manufactureDate);
                setMEXPD(resp.data.expiryDate);
                setMStock(resp.data.stock);
                setMRating({rate:resp.data.rating});
            });
    }, [medid])


    const updateButton = () => {
        const payload = {
            medicineId:mid,
            medicineName:mname,
            medicineCost:mcost,
            companyName:cname,
            manufactureDate:mfd,
            expiryDate:expd,
            stock:stk,
            rating:rate,
            description: {

                detail:mdet,
                medicineType:mtype,
                ingredient:ingrdt,
                quantity:quant
            }
        }
        axios.put("http://localhost:80updateMedicine", payload).then(resp => {
            alert("Medicine updated");
            nav(-1);
        });
    }


    return (
        <div className="container">
            <div className="form-group">
                <label>Medicine Id</label>
                <input type='text' name='mid' value={mid} className='form-control' disabled />
            </div>
            <div className='form-group'>
                <label>Medicine Name</label>
                <input type='text' name='mname' value={mname} placeholder='entname'
                   onChange={event => setMName(event.target.value)}
                    className='form-control' />
            </div>
            <div className='form-group'>
                <label>Medicine Cost</label>
                <input type='number' name='mcost' value={mcost} placeholder='entcost'
                    onChange={event => setMCost(event.target.value)}
                    className='form-control' />
            </div>
            <div className='form-group'>
                <label>Company Name</label>
                <input type='text' name='cname' value={cname} placeholder='enter company name'
                    onChange={event => setMCompanyName(event.target.value)}
                    className='form-control' />
            </div>
            <div className='form-group'>
                <label>Manufacture Date</label>
                <input type='date' name='mfd' value={mfd}
                    onChange={event => setMMFD(event.target.value)}
                    className='form-control' />
            </div>
            <div className='form-group'>
                <label>Expiry Date</label>
                <input type='date' name='expd' value={expd}
                    onChange={event => setMEXPD(event.target.value)}
                    className='form-control' />
            </div>
            <div className='form-group'>.
                <label>Stock</label>
                <input type='number' name='stk' value={stk} placeholder='enter the value of stock'
                    onChange={event => setMStock(event.target.value)}
                    className='form-ntrol' />
            </div>
            <div className='form-group'>
                <label>Rating</label>
                <input type='number' name='rate' value={rate} placeholder='enter rating'
                    onChange={event => setMRating(event.target.value)}
                    className='form-control' />
            </div>
            <div className='form-group'>
                <label>Medicine Details</label>
                <input type='text' name='mdet' value={mdet} placeholder='enter the details of the medicine'
                    onChange={event => setMDetails(event.target.value)}
                    className='form-control' />
            </div>
            <div className='form-group'>
                <label>Medicine Type </label>
                <input type='text' name='mtype' value={mtype} placeholder='enter the type of the medicine'
                    onChange={event => setMType(event.target.value)}
                    className='form-control' />
            </div>
            <div className='form-group'>
                <label>Ingredients</label>
                <input type='text' name='ingrdt' value={ingrdt} placeholder='enter ingredients'
                   onChange={event => setMIngredients(event.target.value)}
                    className='form-control' />
            </div>
            <div className='form-group'>
                <label>Quantity (in gms)</label>
                <input type='text' name='quant' value={quant} placeholder='enter quantity'
                    onChange={event => setMQuantity(event.target.value)}
                    className='form-control' />
            </div>
            <button onClick={updateButton} class="btn btn-primary form-control">Update details</button>
        </div>
    )
}

export default UpdateMedicine;
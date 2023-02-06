import React, {useState} from 'react';
import axios from 'axios';
import {Outlet, Link} from "react-router-dom";
import FormInput from './FormInput';
import Table from './Table'

const Product = () =>{
    const [tableData, setTableData] = useState([])
    const [formInputData, setformInputData] = useState(
        {
        ProductCode:'',
        ProductName:'',
        Brand:'',
        ProductPrice:'',
        ProductStatus:''
       }
    );
    
    const handleChange=(evnt)=>{  
        const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
       setformInputData(newInput)
    }
     
    const handleSubmit= (evnt) =>{
        evnt.preventDefault();
        const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
        if(checkEmptyInput)
        {
         const newData = (data)=>([...data, formInputData])
         setTableData(newData);
         const emptyInput= {ProductCode:'', ProductName:'', Brand:'', ProductPrice:'', ProductStatus:''}
         setformInputData(emptyInput)
        }
    }  
    return(
        <React.Fragment>
        <div className="container">
        <div className="row">
            <div className="col-sm-8">
            <FormInput handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>
            <Table tableData={tableData}/>
            </div>
            <div className="col-sm-4">
            </div>
        </div>
       </div>
        </React.Fragment>
    );
} 

export default Product;
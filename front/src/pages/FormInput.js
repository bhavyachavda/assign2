function FormInput({handleChange, formInputData, handleSubmit}){
    return(
        <div className="form-row row">
          <div className="col">
            <input type="text" onChange={handleChange} value={formInputData.ProductCode} name="ProductCode" className="form-control"  placeholder="ProductCode" />
          </div>
          <div className="col">
            <input type="email" onChange={handleChange} value={formInputData.ProductName} name="ProductName" className="form-control" placeholder="ProductName" />
          </div>
          <div className="col">
            <input type="text" onChange={handleChange} value={formInputData.Brand} name="Brand" className="form-control" placeholder="Brand" />
          </div>
          <div className="col">
            <input type="email" onChange={handleChange} value={formInputData.ProductPrice} name="ProductPrice" className="form-control" placeholder="ProductPrice" />
          </div>
          <div className="col">
            <input type="text" onChange={handleChange} value={formInputData.ProductStatus} name="ProductStatus" className="form-control" placeholder="ProductStatus" />
          </div>
          <div className="col">
            <input type="submit" onClick={handleSubmit} className="btn btn-primary" />
          </div>
        </div>
     
      
    )
    }
    export default FormInput;
function Table({tableData}){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>ProductCode</th>
                    <th>ProductName</th>
                    <th>Brand</th>
                    <th>ProductPrice</th>
                    <th>ProductStatus</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.ProductCode}</td>
                            <td>{data.ProductName}</td>
                            <td>{data.Brand}</td>
                            <td>{data.ProductPrice}</td>
                            <td>{data.ProductStatus}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
export default Table;
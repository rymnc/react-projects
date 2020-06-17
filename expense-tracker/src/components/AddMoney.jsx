import React from "react";

const AddMoney = () => {

    const handleClick = (event) =>{
        event.preventDefault()

    }

  return (
    <div className="container justify-content-center">
      <div className="card border-info">
        <div className="card-header text-info text-center">
          <h5>Add Entry</h5>
        </div>
        <div className="card-body">
          <div className="form-group mx-3 my-3">
              <input type="text" name="Thing" id="1" className="form-control my-3" placeholder='Entry'/>
              <input type="number" name="Value" id="2" placeholder='Amount' className='form-control my-3'/>
              <button className="btn btn-info" onClick={handleClick}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMoney;

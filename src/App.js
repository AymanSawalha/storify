import React, { useState, useEffect } from 'react';
import './App.css';
import AddCompany from './components/AddCompany';
import AddTableRow from './components/AddTableRow';
import TableHead from './components/TableHead';
function App() {

  return (
    <div id="card">
      <div className="row"id="card">
        <div className="col-lg-6 mb-4"id="card">
          <div className="card shadow mb-4"id="card">
            <div className="card-header py-3"id="card">
              <h6 className="m-0 font-weight-bold ">Companies</h6>
              <AddCompany/>
            </div>
            <div className="card-body"id="card">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

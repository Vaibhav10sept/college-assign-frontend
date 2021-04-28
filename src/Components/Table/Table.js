import React from 'react'
import '../Table/table.css'

function Table() {
    return (
        <div className="table_container">
            <h1>Colleges are <span>200</span>of <span>1000</span></h1>

<table class="responstable">
  
  <tr>
    <th>Sno</th>
    <th data-th="Driver details"><span>College Name</span></th>
    <th>Courses</th>
    <th>Founding year</th>
    <th>Students</th>
  </tr>
  
  <tr>
    <td><input type="radio"/></td>
    <td>Steve</td>
    <td>Foo</td>
    <td>01/01/1978</td>
    <td>Policyholder</td>
  </tr>
  
  <tr>
    <td><input type="radio"/></td>
    <td>Steffie</td>
    <td>Foo</td>
    <td>01/01/1978</td>
    <td>Spouse</td>
  </tr>
  
  <tr>
    <td><input type="radio"/></td>
    <td>Stan</td>
    <td>Foo</td>
    <td>01/01/1994</td>
    <td>Son</td>
  </tr>
  
  <tr>
    <td><input type="radio"/></td>
    <td>Stella</td>
    <td>Foo</td>
    <td>01/01/1992</td>
    <td>Daughter</td>
  </tr>
  
</table>
        </div>
    )
}

export default Table

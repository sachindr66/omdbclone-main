import React from 'react'
import "./omdb.css/Parameter.css"

const Parameeter = () => {
  return (
    <div className='allchildparent'>
      <h1>Parameters</h1>
      <div className='tabels'>
      <table border={1} >
        <thead>
          <tr>
            <th>Parameeter</th>
            <th>Reqider</th>
            <th>Valid Options</th>
            <th>Default Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>i</td>
            <td><p className='chip'>Optional*</p></td>
            <td></td>
            <td>empty</td>
            <td>A valid IMDb ID (e.g. tt1285016)</td>
          </tr>
          <tr>
            <td>i</td>
            <td><p className='chip'>Optional*</p></td>
            <td></td>
            <td>empty</td>
            <td>Movie title to search for.</td>
          </tr>
          <tr>
            <td>type</td>
            <td><p className='chip1'>No</p></td>
            <td>movie, series, episode</td>
            <td>empty</td>
            <td>Type of result to return.</td>
          </tr>
          <tr>
            <td>y</td>
            <td><p className='chip1'>No</p></td>
            <td></td>
            <td>empty</td>
            <td>Year of release.</td>
          </tr>
          <tr>
            <td>plot</td>
            <td><p className='chip1'>No</p></td>
            <td>short, full</td>
            <td>short</td>
            <td>Return short or full plot.</td>
          </tr>
          <tr>
            <td>r</td>
            <td><p className='chip1'>No</p></td>
            <td>json, xml</td>
            <td>	json</td>
            <td>The data type to return.</td>
          </tr>
          <tr>
            <td>callback</td>
            <td><p className='chip1'>No</p></td>
            <td></td>
            <td>empty</td>
            <td>JSONP callback name.</td>
          </tr>
          <tr>
            <td>v</td>
            <td><p className='chip1'>No</p></td>
            <td></td>
            <td>1</td>
            <td>API version (reserved for future use).</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className='tabels'>
      <table border={1} >
        <thead>
          <tr>
            <th>Parameeter</th>
            <th>Reqider</th>
            <th>Valid Options</th>
            <th>Default Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>s</td>
            <td><p className='chip'>Optional*</p></td>
            <td></td>
            <td>&lt;empty&gt;</td>
            <td>Movie title to search for.</td>
          </tr>
          <tr>
            <td>type</td>
            <td><p className='chip1'>No*</p></td>
            <td>movie, series, episode</td>
            <td>&lt;empty&gt;</td>
            <td>Type of result to return.</td>
          </tr>
          <tr>
            <td>y</td>
            <td><p className='chip1'>No</p></td>
            <td></td>
            <td>&lt;empty&gt;</td>
            <td>Year of release.</td>
          </tr>
          <tr>
            <td>r</td>
            <td><p className='chip1'>No</p></td>
            <td>json, xml</td>
            <td>json</td>
            <td>The data type to return.</td>
          </tr>
          <tr>
            <td>page <p className='chip2'>New!</p></td>
            <td><p className='chip1'>No</p></td>
            <td>1-100</td>
            <td>1</td>
            <td>Page number to return.</td>
          </tr>
       
          <tr>
            <td>callback</td>
            <td><p className='chip1'>No</p></td>
            <td></td>
            <td>&lt;empty&gt;</td>
            <td>JSONP callback name.</td>
          </tr>
          <tr>
            <td>v</td>
            <td><p className='chip1'>No</p></td>
            <td></td>
            <td>1</td>
            <td>API version (reserved for future use).</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Parameeter
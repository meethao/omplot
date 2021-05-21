import './Datapage.css';
import search from './search_logo.svg';
import React, { useEffect, useState } from 'react'
import { API } from 'aws-amplify';
import { getCar, listCarsTest } from '../../graphql/queries';
import { createCar, deleteCar } from '../../graphql/mutations'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { useTable } from 'react-table'

// import makeData from './makeData'

function Datapage() {

  const [carData, setCarData] = useState([]);
  const [ titles, setTitles] = useState(['weight', 'accel', 'type', 'createdAt', 'updatedAt', 'id', 'year']);
  const [searchValue, setSearchValue] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [uploadData, setUploadData] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [deleteValue, setDeleteValue] = useState('');


  useEffect(() => {
    fetchData()
  }, [titles]);

  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
    // console.log(selectedFile);
		setIsSelected(true);
	};

  const handleSubmission = async function(){

    if (isSelected) {
      const reader = new FileReader();
      reader.readAsText(selectedFile);

      reader.onload = async function() {
        console.log(reader.result);
        var obj = await JSON.parse(reader.result);
        setUploadData(obj);
        console.log(obj);
        addDataFromFile();
      };
    }
	};

  async function addDataFromFile() {
    console.log("Attempting to add data");

    var obj;

    if (isSelected) {
      const reader = new FileReader();
      reader.readAsText(selectedFile);

      reader.onload = async function() {
        console.log(reader.result);
        obj = await JSON.parse(reader.result);

        obj.forEach(async function(data) {
          try {
            console.log("Calling API")
            await API.graphql({ query: createCar, variables: { input: data }});
            console.log("Added " + data);
          } catch (error) {
            console.log("Error adding to database: " + error);
            alert("Error adding to database: " + error);
          }
        });
        alert("Uploading data... please refresh the page in a few moments to see changes");

      };
    }

    setIsSelected(false);
  }

  async function fetchData() {
    console.log("Fetching data:");
    const apiData = await API.graphql({ query: listCarsTest(titles) });
    var dataEntries = apiData.data.listCars.items;
    await dataEntries.sort((a,b) => {
      return a.id - b.id;
    });
    await console.log('carData: ', dataEntries);
    setCarData(dataEntries);
  }

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    console.log('value: ', value)
    const tempArr = value.split('+');
    console.log('tempArr', tempArr)
  }

  const handleDelete = (e) => {
    setDeleteValue(e.target.value);
  }

  const handleDeleteEntry = async function(){
    console.log("Delete value updated: " + deleteValue);
    const toDelete = {
      id: deleteValue
    };
    const deletedItem = await API.graphql({ query: deleteCar, variables: { input: toDelete }});
    console.log("To delete: " + deletedItem);
  }

  const handleCheck = (title) => {
    console.log('clicked')
    const temp = [...titles];
    switch(title) {
      case 'name':
        let nameindex = titles.indexOf('name');
        if (nameindex === -1) {
          // add it
          temp.push('name');
          setTitles(temp);
        } else {
          // remove it
          temp.splice(nameindex, 1);
          setTitles(temp);
        }
        break;
      case 'weight':
        let weightindex = titles.indexOf('weight');
        if (weightindex === -1) {
          // add it
          temp.push('weight');
          setTitles(temp);
        } else {
          // remove it
          temp.splice(weightindex, 1);
          setTitles(temp);
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className="datapage">
      <div className="input-div">
        <input type="file" name="file" onChange={changeHandler} />
        <button onClick={handleSubmission}>Submit</button>
      </div>
      <div className="input-div">
        <input value={deleteValue} onChange={handleDelete} type="text" ></input>
        <button onClick={handleDeleteEntry}>Delete Entry by ID</button>
      </div>
      <div className="box_title">
        <div className="box_h1">Data Overview</div>
        <button className="box_h2" onClick={fetchData}>List Data</button>
          <input value={searchValue} onChange={handleSearch} type="text" ></input>
          <div>
        <button onClick={() => handleCheck('name')}>Name</button>
        <button onClick={() => handleCheck('weight')}>Weight</button>
      </div>
      </div>
      <div className='data-container'> 
        <table className="data">
          <tbody>
            <tr>
              {
                titles.map(title => <th>{title}</th>)
              }
            </tr>
            {carData.map((item) => 
              {
                return (<tr>
                  {titles.map(title =><td>{item[`${title}`]}</td>)}
                </tr>)
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Datapage;

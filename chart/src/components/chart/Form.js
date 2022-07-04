import Chart from './chart';
import React,{Fragment, useState} from 'react';


function Form() {
    const initialState = {
        dailyData: [
          {
            activity: "",
            timeSpent: 0,
          },
        ],
        chartLabels: [],
        chartData: [],
        chartColot: [],
      };
   const [state,setState] = useState(initialState);
   const onChange = (e, index) => {
    let { name, value } = e.target;

    let updatedState = [...state.dailyData];

    updatedState[index][name] = value;

    setState((previousState) => {
      return {
        ...previousState,
        dailyData: [...updatedState],
      };
    });

  };
  const addNew=(e)=>{
    let extraActivity = [
        ...state.dailyData,
        {
          activity: "",
          timeSpent: 0,
        },
      ];
  
      setState((previousState) => {
        return {
          ...previousState,
          dailyData: [...extraActivity],
        };
      });
  }
const onSubmitHandler=(e)=>{
    e.preventDefault();
    let chartLabel= state.dailyData.map((data)=>{
        return data.activity
    }).filter((e)=>e);
    let chartData = state.dailyData.map((data) => {
        return parseInt(data.timeSpent);
    }).filter((e)=>e);
    setState((prevState)=>{
        return {
            ...prevState,
            chartLabels:chartLabel,
            chartData:chartData
        }
    })
}
  return (
    <div>
         <h2>Display the charts using react -chart js</h2>  
      {
        state.dailyData.map((data,index)=>{
            return <Fragment key={index}>
                 <div className="row">
              <div className="col">
                <label>ACTIVITY:</label>
                <input
                  type="text"
                  name="activity"
                  value={data.activity}
                  className="form-control"
                  onChange={(e) => onChange(e, index)}
                  placeholder="Activity"
                />
              </div>
              <div className="col">
                <label>TIMES SPENT :</label>
                <input
                  type="number"
                  name="timeSpent"
                  value={data.timeSpent}
                  className="form-control"
                  onChange={(e) => onChange(e, index)}
                  placeholder="Time Spent"
                />
              </div>
            </div>
            <br />
            <button type='button' name='addnew' onClick={addNew} className='btn btn-outline-success'>Add Activity</button>
            <button type='submit' name='addnew' onSubmit={onSubmitHandler} className='btn btn-outline-success'>Submit</button>
            </Fragment>
        })
      }

{state.chartData.length && state.chartLabels.length ? (
        <Chart {...state} />
      ) : null} 
    </div>
  )
}

export default Form
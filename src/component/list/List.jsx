import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";
import { useState } from "react";

const List = ({ rows, timestamp, currency,setSelectedOrderDetails ,setTimeStamp}) => {


  const [index,setIndex]=useState('')

  const newObject = rows.map((obj) => {
    const matchingObject = timestamp.find((item) => item["&id"] === obj["&id"]);
    return { ...obj, ...matchingObject };
  });

  try{
    
  }catch{

  }

  try{
    const a=(newObject[(index)].executionDetails)
    setSelectedOrderDetails(a)
    const b=(newObject[(index)].timestamps)
    setTimeStamp(b)
  }catch(e){
    console.log(e)
  }
  

  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody onClick={(e)=>setIndex(e.target.parentNode.sectionRowIndex)}>
        {[...newObject].map((row, i) => (
          <ListRow key={i} >
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>
            <ListRowCell>
              {row.bestExecutionData.orderVolume[currency]}
            </ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;

import React from "react";
import {useContext} from 'react';
import {Context} from "../../Context";
import MySelectRoom from "./MySelectRoom";



function RoomsFilter() {

    const {currentRoomQuant, setCurrentRoomQuant} = useContext(Context);

    const setRo = (currentRoomQuant) => {
  
        console.log(currentRoomQuant);
       setCurrentRoomQuant(currentRoomQuant)
      }
return (

    <MySelectRoom 
    value={currentRoomQuant}
    onChange={setRo}

    defaultValue= '1'
    options={[
    {value: '1', name:'1'},
    {value: '2', name:'2'},
    {value: '3', name:'3'},
    {value: '4', name:'4'},
    {value: '5', name:'5+'},
  
  ]} />


)



}
export default RoomsFilter;
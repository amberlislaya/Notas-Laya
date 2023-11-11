import React, {useState} from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import './sidebar.css'


const Sidebar = (props) => {


    const colors = ["#F03E79", "#4AE30C", "#E8E40B", "#DF0717", "#0ECABF", "#CF7C82", "#6C0ECA"];
    const [listOpen, setListOpen] = useState(false);


  return (

<div className='sideb'>
<AiOutlinePlusCircle className='icon' alt="Ai" onClick={() => setListOpen(!listOpen)}/>
<ul className={`sidebar-list ${listOpen?"sidebar-list_active" :""}`}>
{colors.map((item, index) => ( 
    <li key={index} className='sidebar_list_item'
     style={{ backgroundColor: item}}
     onClick={()=>props.addNote(item)}
/>
))}

</ul>

</div>
)
}

export default Sidebar
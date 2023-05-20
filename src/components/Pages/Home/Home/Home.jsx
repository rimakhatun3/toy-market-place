import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Banner from '../Banner/Banner';
import Gallerry from '../Gallerry/Gallerry';
import Category from '../Category/Category';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
const Home = () => {
const [activetab,setActiveTab] =useState('Baby Dolls')
const [categories ,setCategories] = useState([])


useEffect(()=>{
    fetch(`https://toy-marketplace-server-one.vercel.app/alltoys/${activetab}`)
    .then(res=>res.json())
    .then(data=>setCategories(data))
},[activetab])
// console.log(categories)
const handleTabs = (tabName)=>{
    setActiveTab(tabName)
    }

    return (
        <div>
<Banner></Banner>
<Gallerry></Gallerry>




<div className='text-center my-8'>
<div onClick={()=>handleTabs('Baby Dolls')} className={`btn btn-success${activetab=='Baby Dolls'?'bg-[#E6C3AC]':''}`}>Baby Dolls</div>
<div onClick={()=>handleTabs('Barbie Dolls')} className={`btn btn-success ${activetab=='Barbie Dolls'?'bg-[#E6C3AC]':''}`}>Barbie Dolls</div>
<div onClick={()=>handleTabs('American Girls')} className={`btn  btn-success${activetab=='American Girls'?'bg-[#E6C3AC]':''}`}>American Girls</div>

</div>

<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
{
   categories?.map(category=><Category key={category._id} category={category}></Category>)
}
</div>


       
        </div>
    );
};

export default Home;
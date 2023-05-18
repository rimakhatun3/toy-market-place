import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Gallerry from '../Gallerry/Gallerry';
import Category from '../Category/Category';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
const Home = () => {
const [activetab,setActiveTab] =useState('Baby Dolls')
const [categories ,setCategories] = useState([])


useEffect(()=>{
    fetch(`http://localhost:5000/alltoys/${activetab}`)
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


<div>
<div onClick={()=>handleTabs('Baby Dolls')} className={`tab tab-lg${activetab=='Baby Dolls'?'bg-red-600':''}`}>Baby Dolls</div>
<div onClick={()=>handleTabs('Barbie Dolls')} className={`tab tab-lg${activetab=='Barbie Dolls'?'bg-red-600':''}`}>Barbie Dolls</div>
<div onClick={()=>handleTabs('American Girls')} className={`tab tab-lg${activetab=='American Girls'?'bg-red-600':''}`}>American Girls</div>

</div>

<div className='grid grid-cols-2 gap-4'>
{
   categories?.map(category=><Category key={category._id} category={category}></Category>)
}
</div>


             {/* <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
    <div className='grid grid-cols-2'>
        <div className='card'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptas accusamus quisquam, et veritatis ut? Nihil pariatur id iste itaque enim. Dolorem, illo officiis natus repellendus quod aliquid perferendis est?
        </div>
        <div className='card'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptas accusamus quisquam, et veritatis ut? Nihil pariatur id iste itaque enim. Dolorem, illo officiis natus repellendus quod aliquid perferendis est?
        </div>
    </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-2'>
        <div className='card'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptas accusamus quisquam, et veritatis ut? Nihil pariatur id iste itaque enim. Dolorem, illo officiis natus repellendus quod aliquid perferendis est?
        </div>
        <div className='card'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptas accusamus quisquam, et veritatis ut? Nihil pariatur id iste itaque enim. Dolorem, illo officiis natus repellendus quod aliquid perferendis est?
        </div>
    </div>
    </TabPanel>
  </Tabs> */}
        </div>
    );
};

export default Home;
import React from 'react';
import banner1 from '../../../../assets/images/banner1.webp'
import banner2 from '../../../../assets/images/banner2.webp'
import banner3 from '../../../../assets/images/banner3.webp'
import banner from '../../../../assets/images/banner.avif'
import {  FaArrowRight} from 'react-icons/fa';
const Banner = () => {
    
    return (
        <div>
           <div className="carousel h-[500px] w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src={banner1} className="w-full opacity-25" />

    <div className='absolute   w-1/2 top-24 left-24 px-4 py-4 bg-gradient-to-r from-[#EE9CA7] to-[#FFDDE1]  '>
        <div >
        <h1 className='text-3xl font-extrabold mb-2 text-center'>Explore Our Toys Collection</h1>
        <p>this is an adorable baby doll designed to bring joy and
          imagination to little ones. With her [soft vinyl/silicone/cloth]
          body and [realistic/soft/cuddly] features, she provides a lifelike and
          huggable play experience. its comes with a variety of
          accessories that enhance the nurturing play, including [specific
          accessories]. Whether it's dressing her up, feeding her, or cuddling
          her close, this toy will be a beloved companion for endless hours
          of imaginative play..</p>
        </div>
       
        </div>
        <div className='absolute top-1/3 right-20 flex'>
          <input placeholder='search here' className='border p-2 me-2 px-4 rounded-lg' type="text" /> 
        <button className='btn bg-[#AEE6AC]'> Lets Explore <FaArrowRight className='ml-3'/> </button>
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-1/2  bottom-8">
      <a href="#slide4" className="btn btn-circle me-5 bg-[#AEE6AC]">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-[#AEE6AC]">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2} className="w-full opacity-25" />
    <div className='absolute w-1/2 top-24 left-28 px-4 py-4 bg-gradient-to-r from-[#EE9CA7] to-[#FFDDE1]   '>
    <h1 className='text-3xl font-extrabold mb-2 text-center'>Explore Our Toys Collection</h1>
        <p>this is an adorable baby doll designed to bring joy and
          imagination to little ones. With her [soft vinyl/silicone/cloth]
          body and [realistic/soft/cuddly] features, she provides a lifelike and
          huggable play experience. its comes with a variety of
          accessories that enhance the nurturing play, including [specific
          accessories]. Whether it's dressing her up, feeding her, or cuddling
          her close, this toy will be a beloved companion for endless hours
          of imaginative play..</p>
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-1/2  bottom-8">
      <a href="#slide1" className="btn btn-circle me-5 bg-[#AEE6AC]">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-[#AEE6AC]">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner3} className="w-full opacity-25" />
    <div className='absolute w-1/2 top-24 left-28 px-4 py-4 bg-gradient-to-r from-[#EE9CA7] to-[#FFDDE1]   '>
    <h1 className='text-3xl font-extrabold mb-2 text-center'>Explore Our Toys Collection</h1>
        <p>this is an adorable baby doll designed to bring joy and
          imagination to little ones. With her [soft vinyl/silicone/cloth]
          body and [realistic/soft/cuddly] features, she provides a lifelike and
          huggable play experience. its comes with a variety of
          accessories that enhance the nurturing play, including [specific
          accessories]. Whether it's dressing her up, feeding her, or cuddling
          her close, this toy will be a beloved companion for endless hours
          of imaginative play..</p>
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-1/2  bottom-8">
      <a href="#slide2" className="btn btn-circle bg-[#AEE6AC] me-5">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-[#AEE6AC]">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={banner} className="w-full opacity-25" />
    <div className='absolute w-1/2 top-24 left-28 px-4 py-4 bg-gradient-to-r from-[#EE9CA7] to-[#FFDDE1]   '>
    <h1 className='text-3xl font-extrabold mb-2 text-center'>Explore Our Toys Collection</h1>
        <p>this is an adorable baby doll designed to bring joy and
          imagination to little ones. With her [soft vinyl/silicone/cloth]
          body and [realistic/soft/cuddly] features, she provides a lifelike and
          huggable play experience. its comes with a variety of
          accessories that enhance the nurturing play, including [specific
          accessories]. Whether it's dressing her up, feeding her, or cuddling
          her close, this toy will be a beloved companion for endless hours
          of imaginative play...</p>
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-1/2   bottom-8">
      <a href="#slide3" className="btn btn-circle me-5 bg-[#AEE6AC]">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-[#AEE6AC]">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
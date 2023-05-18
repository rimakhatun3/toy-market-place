import React from 'react';
import banner1 from '../../../../assets/images/banner1.webp'
import banner2 from '../../../../assets/images/banner2.webp'
import banner3 from '../../../../assets/images/banner3.webp'
import banner from '../../../../assets/images/banner.avif'
const Banner = () => {
    
    return (
        <div>
           <div className="carousel h-[500px] w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner1} className="w-full" />

    <div className='absolute  top-24 left-20 right-20 px-4 py-4 bg-[#eacda3]  '>
        <h1 className='text-3xl font-extrabold mb-2'>Lorem ipsum dolor sit amet c</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing <br/>elit. Harum quas corporis, quam ex,  assumenda similique accusantium explicabo <br/>ratione distinctio voluptas qui officia optio. Temporibus id distinctio, impedit non ab veritatis.</p>
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2} className="w-full" />
    <div className='absolute top-24 left-20 right-20 px-4 py-4 bg-[#eacda3]  '>
        <h1 className='text-3xl font-extrabold mb-2'>Lorem ipsum dolor sit amet c</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing <br/>elit. Harum quas corporis, quam ex,  assumenda similique accusantium explicabo <br/>ratione distinctio voluptas qui officia optio. Temporibus id distinctio, impedit non ab veritatis.</p>
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner3} className="w-full" />
    <div className='absolute top-24 left-20 right-20 px-4 py-4 bg-[#eacda3]  '>
        <h1 className='text-3xl font-extrabold mb-2'>Lorem ipsum dolor sit amet c</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing <br/>elit. Harum quas corporis, quam ex,  assumenda similique accusantium explicabo <br/>ratione distinctio voluptas qui officia optio. Temporibus id distinctio, impedit non ab veritatis.</p>
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={banner} className="w-full" />
    <div className='absolute top-24 left-20 right-20 px-4 py-4 bg-[#eacda3]  '>
        <h1 className='text-3xl font-extrabold mb-2'>Lorem ipsum dolor sit amet c</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing <br/>elit. Harum quas corporis, quam ex,  assumenda similique accusantium explicabo <br/>ratione distinctio voluptas qui officia optio. Temporibus id distinctio, impedit non ab veritatis.</p>
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
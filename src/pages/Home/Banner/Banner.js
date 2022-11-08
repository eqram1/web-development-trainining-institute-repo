import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} alt="" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <p>Pls join this training web develoment course & build your bright future.We are committed to you for your next journey wih our sincerity.We wish your good luck & your bright future.</p>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} alt="" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <p>Pls join this training web develoment course & build your bright future.We are committed to you for your next journey wih our sincerity.We wish your good luck & your bright future.</p>            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} alt="" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <p>Pls join this training web develoment course & build your bright future.We are committed to you for your next journey wih our sincerity.We wish your good luck & your bright future.</p>
            </div>

        </div>
    );
};

export default Banner;
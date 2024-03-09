import React from 'react';
import "./Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';

function Sidenav() {
  return (
    <div className='sidenav'>
        <img className = "side__navlogo"
            src ="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
            alt ="instagram_logo"
        />
    
        <div className="sidenav__button">
            <button className='side__nav__buttons'>
                <HomeIcon/>
                <span>Home</span>

            </button>

            <button className='side__nav__buttons'>
                <SearchIcon/>
                <span>Search</span>

            </button>

            <button className='side__nav__buttons'>
                <ExploreIcon/>
                <span>Explore</span>

            </button>

            <button className='side__nav__buttons'>
                <SlideshowIcon/>
                <span>Slideshow</span>

            </button>

            <button className='side__nav__buttons'>
                <ChatIcon/>
                <span>Chat</span>

            </button>

            <button className='side__nav__buttons'>
                <FavoriteBorderIcon/>
                <span>Favorites</span>

            </button>

            <button className='side__nav__buttons'>
                <AddCircleIcon/>
                <span>AddCircle</span>

            </button>

        </div>
        <div className='sidenav__more'>
            <button className='side__nav__buttons'>
                <MenuIcon />
                <span>More</span>
            </button>
        </div>
    </div> 
  );
}

export default Sidenav
import React from 'react';
import HeaderComponent from '../header/header_container';
import CarouselComponent from './carousels/carousel_component';
import NavbarComponent from './../navbar/navbar_container'




class HomeComponent extends  React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchAllGenres();
    }
   
    
    render() {
        
        if (this.props.genres.length < 4) return null;


        return(
            
            
            <div className='home-outer-wrap' >
                
              <NavbarComponent/>
    
                <HeaderComponent />


                <div className="browse-genre-rows">
                    {this.props.genres.map((genre) => (
                   
                    <div className="browse-row" key={genre.id}>

                        <h2 className="row-title" >{genre.genre_name}</h2>
                        <CarouselComponent  myList = {this.props.currentUser.myListMovieIds} genreMovies={genre.genreMovies} />

                    </div>
                    ))}
                </div>


            </div>
        )
    }
}

export default HomeComponent;

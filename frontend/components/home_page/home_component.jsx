import React from 'react';
import { Link } from 'react-router-dom';
import MovieComponent from './movie_component';
import HeaderComponent from './header_component';




class HomeComponent extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarBackground: 'nav-transparent'
        };

        this.makeNavbarFading =this.makeNavbarFading.bind(this);
    }
    
    componentDidMount() {
        //condition logic for hitting db
        this.props.fetchAllMovies();
        document.addEventListener('scroll', this.makeNavbarFading);

    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.makeNavbarFading);
    }

    renderAllMovies() {
        // return(
        //     <ul>
        //     {this.props.movies.map((movie, i) => (
        //         <li key={`movie-${i}`}>
        //              {movie.title}
        //         </li>
        //     ))}
        //     </ul>
        // );

        return(
            <ul className="all-movies-row">
            {this.props.movies.map((movie, i) => (
                <li key={`movie-${i}`}>
                     <MovieComponent movie={movie}/>
                </li>
            ))}
            </ul>
        );

    }

    renderHeaderMovie() {
        return(
            <HeaderComponent movie = {this.props.movies[0]} />
        )
    }


    makeNavbarFading() {
            if (window.scrollY > 10  && this.state.navbarBackground !== 'nav-black') {
                this.setState({navbarBackground: 'nav-black'})
            } else if (window.scrollY === 0) {
                this.setState({navbarBackground: 'nav-transparent'})
            }
    }
   
    
    
    
    render() {
        
        if (this.props.movies.length === 0) return null;

        return(
            
            

            <div className='home-outer-wrap' >

                
                <div className={`home-navbar ${this.state.navbarBackground}`}>


                    <div className="home-navbar-contents">

                        {/* <nav className="home-header-left-nav"> */}
                            <Link to="/browse" className="home-header-home-link">
                                <img className="home-header-logo" src={window.logoImage} alt="Chillflix"/>
                            </Link>  
                            {/* <div className="my-list">My List</div> */}
                        {/* </nav> */}

                        {/* <nav className="home-header-right-nav"> */}

                            {/* <div className="search-menu-wrapper">
                                <i className="icon-search">O</i>
                                <input type="text" className="search-box"/>
                            </div> */}

                            <nav className="home-profile-menu-wrapper">
                                <div className="profile-img-wrap">
                                    <img className="profile-img" src={window.profileImage} alt="ProfileImg"/>
                                </div>
                                <div className="hover-profile-menu">
                                    
                                    <div className="profile-menu-arrow-up"><i className="fas fa-caret-up"></i></div>
                                    <div className="home-nav-little-menu-wrap">
                                        <div className="logout-button" onClick={() => this.props.logout()}>Log Out</div>
                                    </div>
                                </div>
                            </nav>
                            

                        {/* </nav> */}
                    </div>
                </div>


                <div>{this.renderHeaderMovie()}</div>

                
                <div className="all-movies">
                    {this.renderAllMovies()}
                </div>





                
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>
                <h1>DUMMY</h1>



            </div>
        )
    }
}

export default HomeComponent;
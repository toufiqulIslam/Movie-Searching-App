import React,{Component} from 'react';
import './App.css';
import { Navbar,Nav,Container,NavbarBrand,CardGroup,Card,Form,FormControl,Button } from 'react-bootstrap';

class Home extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        movies:[],
        series:[],
        search:[],
        year:[],
        favourites:[],
        searchText:"",
        searched:"none",
        error:""
    };

    this.getAllMovies();
    this.getAllSeries();
    this.getAllFavourites();
    this.getThisYear();
  }

  getAllMovies = (event) => {
      
  let apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=273d56b6&s=action&plot=full&type=movie';

  fetch(apiUrl)
      .then(res => res.json())
      .then(
            (result) => {
                if(result != null)
                {
                  //console.log(result.Search);
                  this.setState({movies: result.Search});
                  this.forceUpdate();
                }
                
            },
            (error) => {
                this.setState({error})
            }
            )
    }

    getThisYear = (event) => {
      
    let apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=273d56b6&s=title&plot=full&year=2021';
    
    fetch(apiUrl)
        .then(res => res.json())
        .then(
                (result) => {
                    if(result != null)
                    {
                    //console.log(result.Search);
                    this.setState({year: result.Search});
                    this.forceUpdate();
                    }
                    
                },
                (error) => {
                    this.setState({error})
                }
                )
        }

  getAllSeries = (event) => {
      
    let apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=273d56b6&s=title&plot=full&type=series';
  
    fetch(apiUrl)
        .then(res => res.json())
        .then(
              (result) => {
                  if(result != null)
                  {
                    //console.log(result.Search);
                    this.setState({series: result.Search});
                    this.forceUpdate();
                  }
                  
              },
              (error) => {
                  this.setState({error})
              }
              )
    }

    getAllFavourites = (event) => {
      
        let apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=273d56b6&s=choice&plot=full';
      
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                  (result) => {
                      if(result != null)
                      {
                        //console.log(result.Search);
                        this.setState({favourites: result.Search});
                        this.forceUpdate();
                      }
                      
                  },
                  (error) => {
                      this.setState({error})
                  }
                  )
        }

    handleSearch = (event) => {
      event.preventDefault();
    
      let apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=273d56b6&plot=full&s='+this.state.searchText;
    
      fetch(apiUrl)
          .then(res => res.json())
          .then(
                (result) => {
                    
                    if(result != null && result.Search != undefined)
                    {
                        this.setState({
                            search: result.Search,
                            searched: 'block'
                        });
                        this.forceUpdate();
                    }
                    else
                    {
                        this.setState({
                            search: [],
                            searched: 'none'
                        });
                        this.forceUpdate();
                    }
                    
                },
                (error) => {
                    this.setState({error})
                }
                )
      }

  handleInputChange = (event) =>{
      event.preventDefault();

      this.state.searchText = event.target.value;
      this.forceUpdate();
  }

  handleHover = (details) =>{
    //alert(details.Title);
  }

  render() {
    return (
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">SHOWTIME</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#recommend">Movies</Nav.Link>
            <Nav.Link href="#favourites">Favourites</Nav.Link>
          </Nav>
          <span class="font-weight-normal text-primary center" style={{"text-align": 'center'}}>Edward colin</span>&nbsp;&nbsp;
          <Form inline onSubmit={this.handleSearch}>
            <FormControl onChange={this.handleInputChange} value={this.state.searchText} type="text" placeholder="Search" className="mr-sm-2" />
            <Button type="submit" variant="outline-primary">Search</Button>
          </Form>
        </Navbar>

        <br/>

        <div id="search">
        <h4 style={{"display": this.state.searched }}>Your Search {">"} </h4>
        <CardGroup>
        {this.state.search.map((details, id) => (
          <Card onMouseEnter={() => this.handleHover(details)} style={{width:"15rem", height:"4rem"}}>
            <Card.Img variant="top" src={details.Poster} />
          </Card>
        ))}
        </CardGroup>
        </div>

        <div id="movies">
            <h4>Movies {">"} </h4>
            <CardGroup>
            {this.state.movies.map((details, id) => (
            <Card onMouseEnter={() => this.handleHover(details)} style={{width:"15rem", height:"4rem"}}>
                <Card.Img variant="top" src={details.Poster} />
            </Card>
            ))}
            </CardGroup>
        </div>

        <div id="shows">
            <h4>TV Shows {">"} </h4>
            <CardGroup>
            {this.state.series.map((details, id) => (
            <Card onMouseEnter={() => this.handleHover(details)} style={{width:"15rem", height:"4rem"}}>
                <Card.Img variant="top" src={details.Poster} />
            </Card>
            ))}
            </CardGroup>
        </div>

        <div id="recommend">
            <h4>Recommended {">"} </h4>
            <CardGroup>
            {this.state.movies.map((details, id) => (
            <Card onMouseEnter={() => this.handleHover(details)}>
                <Card.Img variant="top" src={details.Poster} />
            </Card>
            ))}
            </CardGroup>
        </div>

        <div id="year">
            <h4>Released in 2021 {">"} </h4>
            <CardGroup>
            {this.state.year.map((details, id) => (
            <Card onMouseEnter={() => this.handleHover(details)}>
                <Card.Img variant="top" src={details.Poster} />
            </Card>
            ))}
            </CardGroup>
        </div>

        <div id="favourites">
            <h4>Favourites {">"} </h4>
            <CardGroup>
            {this.state.favourites.map((details, id) => (
            <Card onMouseEnter={() => this.handleHover(details)}>
                <Card.Img variant="top" src={details.Poster} />
            </Card>
            ))}
            </CardGroup>
        </div>

        <div className="fixed-bottom" style={{overflow: "overlay", position:"sticky"}}>  
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavbarBrand>
                      <div className="col-md-12 row">
                        <span className="col-md-5">Audio Description</span>
                        <span className="col-md-4">Help Center</span>
                        <span className="col-md-3">Media Center</span>
                      </div>
                      <div className="col-md-12 row">
                        <span className="col-md-5">Jobs</span>
                        <span className="col-md-4">Terms of use</span>
                        <span className="col-md-3">Privacy</span>
                      </div>
                    </NavbarBrand>
                </Container>
            </Navbar>
        </div>
      </>
    );
  }
}

export default Home;

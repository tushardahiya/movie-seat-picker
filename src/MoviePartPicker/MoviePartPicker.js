import { React , Component } from "react";
import './MoviePartPicker.css';

class MoviePartPicker extends Component {

    state = {
        seats: {
            a1:'', a2:'', a3:'occupied', a4:'occupied', a5:'', a6:'', a7:'', a8:'',
            b1:'', b2:'', b3:'', b4:'', b5:'', b6:'occupied', b7:'occupied', b8:'',
            c1:'', c2:'', c3:'', c4:'', c5:'', c6:'', c7:'', c8:'',
            d1:'occupied', d2:'occupied', d3:'', d4:'', d5:'', d6:'', d7:'', d8:'',
            e1:'', e2:'', e3:'', e4:'', e5:'occupied', e6:'', e7:'', e8:'',
            f1:'', f2:'', f3:'', f4:'', f5:'', f6:'occupied', f7:'occupied', f8:'occupied',
        },
        moviePrices: {
            avengers: 100,
            lifeofpie:80,
            djangounchained:70,
            midnightinparis:90
        },
        selectedSeats:0,
        selectedMovie:'avengers',
        totalPrice:0,
        ticketPrice:100,
    }

    componentDidMount() {
        const userData =JSON.parse(localStorage.getItem('data'));
        if(localStorage.getItem('data')) {
            this.setState({...userData});
        }
    }



    componentWillUpdate (nextProps , nextState ) {
        if(this.state !==nextState) {
            localStorage.setItem('data' , JSON.stringify(nextState));
        }
        
    }


    onMovieSelectHandler = (e) => {
        const updatedSelectedMovie = e.target.value;
        const updatedTicketPrice = this.state.moviePrices[updatedSelectedMovie];
        const updatedTotalPrice = this.state.selectedSeats * updatedTicketPrice;
        this.setState({
                selectedMovie : updatedSelectedMovie ,
                ticketPrice : updatedTicketPrice ,
                totalPrice : updatedTotalPrice
        } , () => {console.log(this.state)});
    }

    onClickHandler = (e , seatName) => {

        let updatedSelectedSeats = this.state.selectedSeats;
        if (this.state.seats[seatName] !== 'occupied') {
            this.state.seats[seatName] === '' ? updatedSelectedSeats++ : updatedSelectedSeats--;
        }

        const updatedTotalPrice = updatedSelectedSeats * this.state.ticketPrice;
        const updatedSeats = {
            ...this.state.seats
        };
        if(updatedSeats[seatName]==='occupied') {
            return ;
        }
        updatedSeats[seatName] = this.state.seats[seatName] === 'selected' ? '':'selected';
        this.setState({
                seats:updatedSeats,
                selectedSeats:updatedSelectedSeats,
                totalPrice : updatedTotalPrice
        });
    }


    render(){
        return (
            
            <div className="body">
                <div className="movie-container">
                    <label>Pick A Movie : </label>
                    <select defaultValue={Object.keys(this.state.moviePrices)[0]} onChange={this.onMovieSelectHandler} id="movie">
                        <option value={Object.keys(this.state.moviePrices)[0]}>Avengers: Endgame :({this.state.moviePrices.avengers}{'\u20B9'})</option>
                        <option value={Object.keys(this.state.moviePrices)[1]}>Life of Pie :({this.state.moviePrices.lifeofpie}{'\u20B9'})</option>
                        <option value={Object.keys(this.state.moviePrices)[2]}>Django Unchained :({this.state.moviePrices.djangounchained}{'\u20B9'})</option>
                        <option value={Object.keys(this.state.moviePrices)[3]}>Midnight in Paris :({this.state.moviePrices.midnightinparis}{'\u20B9'})</option>
                    </select>
                </div>

                <ul className="showcase">
                    <li>
                        <div className="seat"></div>
                        <small>N/A</small>
                    </li>
                    <li>
                        <div className="seat selected"></div>
                        <small>Selected</small>
                    </li>
                    <li>
                        <div className="seat occupied"></div>
                        <small>Occupied</small>
                    </li>
                </ul>

                <div className="container">
                    <div className="screen"></div>
                    <div className="row">
                        <div className={"seat " + (this.state.seats.a1)} onClick={(e) => this.onClickHandler(e , 'a1')}></div>
                        <div className={"seat " + (this.state.seats.a2)} onClick={(e) => this.onClickHandler(e , 'a2')}></div>
                        <div className={"seat " + (this.state.seats.a3)} onClick={(e) => this.onClickHandler(e , 'a3')}></div>
                        <div className={"seat " + (this.state.seats.a4)} onClick={(e) => this.onClickHandler(e , 'a4')}></div>
                        <div className={"seat " + (this.state.seats.a5)} onClick={(e) => this.onClickHandler(e , 'a5')}></div>
                        <div className={"seat " + (this.state.seats.a6)} onClick={(e) => this.onClickHandler(e , 'a6')}></div>
                        <div className={"seat " + (this.state.seats.a7)} onClick={(e) => this.onClickHandler(e , 'a7')}></div>
                        <div className={"seat " + (this.state.seats.a8)} onClick={(e) => this.onClickHandler(e , 'a8')}></div>
                    </div>

                    <div className="row">
                        <div className={"seat " + (this.state.seats.b1)} onClick={(e) => this.onClickHandler(e , 'b1')}></div>
                        <div className={"seat " + (this.state.seats.b2)} onClick={(e) => this.onClickHandler(e , 'b2')}></div>
                        <div className={"seat " + (this.state.seats.b3)} onClick={(e) => this.onClickHandler(e , 'b3')}></div>
                        <div className={"seat " + (this.state.seats.b4)} onClick={(e) => this.onClickHandler(e , 'b4')}></div>
                        <div className={"seat " + (this.state.seats.b5)} onClick={(e) => this.onClickHandler(e , 'b5')}></div>
                        <div className={"seat " + (this.state.seats.b6)} onClick={(e) => this.onClickHandler(e , 'b6')}></div>
                        <div className={"seat " + (this.state.seats.b7)} onClick={(e) => this.onClickHandler(e , 'b7')}></div>
                        <div className={"seat " + (this.state.seats.b8)} onClick={(e) => this.onClickHandler(e , 'b8')}></div>
                    </div>

                    <div className="row">
                        <div className={"seat " + (this.state.seats.c1)} onClick={(e) => this.onClickHandler(e , 'c1')}></div>
                        <div className={"seat " + (this.state.seats.c2)} onClick={(e) => this.onClickHandler(e , 'c2')}></div>
                        <div className={"seat " + (this.state.seats.c3)} onClick={(e) => this.onClickHandler(e , 'c3')}></div>
                        <div className={"seat " + (this.state.seats.c4)} onClick={(e) => this.onClickHandler(e , 'c4')}></div>
                        <div className={"seat " + (this.state.seats.c5)} onClick={(e) => this.onClickHandler(e , 'c5')}></div>
                        <div className={"seat " + (this.state.seats.c6)} onClick={(e) => this.onClickHandler(e , 'c6')}></div>
                        <div className={"seat " + (this.state.seats.c7)} onClick={(e) => this.onClickHandler(e , 'c7')}></div>
                        <div className={"seat " + (this.state.seats.c8)} onClick={(e) => this.onClickHandler(e , 'c8')}></div>
                    </div>

                    <div className="row">
                        <div className={"seat " + (this.state.seats.d1)} onClick={(e) => this.onClickHandler(e , 'd1')}></div>
                        <div className={"seat " + (this.state.seats.d2)} onClick={(e) => this.onClickHandler(e , 'd2')}></div>
                        <div className={"seat " + (this.state.seats.d3)} onClick={(e) => this.onClickHandler(e , 'd3')}></div>
                        <div className={"seat " + (this.state.seats.d4)} onClick={(e) => this.onClickHandler(e , 'd4')}></div>
                        <div className={"seat " + (this.state.seats.d5)} onClick={(e) => this.onClickHandler(e , 'd5')}></div>
                        <div className={"seat " + (this.state.seats.d6)} onClick={(e) => this.onClickHandler(e , 'd6')}></div>
                        <div className={"seat " + (this.state.seats.d7)} onClick={(e) => this.onClickHandler(e , 'd7')}></div>
                        <div className={"seat " + (this.state.seats.d8)} onClick={(e) => this.onClickHandler(e , 'd8')}></div>
                    </div>

                    <div className="row">
                        <div className={"seat " + (this.state.seats.e1)} onClick={(e) => this.onClickHandler(e , 'e1')}></div>
                        <div className={"seat " + (this.state.seats.e2)} onClick={(e) => this.onClickHandler(e , 'e2')}></div>
                        <div className={"seat " + (this.state.seats.e3)} onClick={(e) => this.onClickHandler(e , 'e3')}></div>
                        <div className={"seat " + (this.state.seats.e4)} onClick={(e) => this.onClickHandler(e , 'e4')}></div>
                        <div className={"seat " + (this.state.seats.e5)} onClick={(e) => this.onClickHandler(e , 'e5')}></div>
                        <div className={"seat " + (this.state.seats.e6)} onClick={(e) => this.onClickHandler(e , 'e6')}></div>
                        <div className={"seat " + (this.state.seats.e7)} onClick={(e) => this.onClickHandler(e , 'e7')}></div>
                        <div className={"seat " + (this.state.seats.e8)} onClick={(e) => this.onClickHandler(e , 'e8')}></div>
                    </div>

                    <div className="row">
                        <div className={"seat " + (this.state.seats.f1)} onClick={(e) => this.onClickHandler(e , 'f1')}></div>
                        <div className={"seat " + (this.state.seats.f2)} onClick={(e) => this.onClickHandler(e , 'f2')}></div>
                        <div className={"seat " + (this.state.seats.f3)} onClick={(e) => this.onClickHandler(e , 'f3')}></div>
                        <div className={"seat " + (this.state.seats.f4)} onClick={(e) => this.onClickHandler(e , 'f4')}></div>
                        <div className={"seat " + (this.state.seats.f5)} onClick={(e) => this.onClickHandler(e , 'f5')}></div>
                        <div className={"seat " + (this.state.seats.f6)} onClick={(e) => this.onClickHandler(e , 'f6')}></div>
                        <div className={"seat " + (this.state.seats.f7)} onClick={(e) => this.onClickHandler(e , 'f7')}></div>
                        <div className={"seat " + (this.state.seats.f8)} onClick={(e) => this.onClickHandler(e , 'f8')}></div>
                    </div>
                </div>

                <p className="text">You have selected 
                    <span>{this.state.selectedSeats}</span>
                    Seats for the price of
                    <span>{this.state.totalPrice}</span>
                    {'\u20B9'}
                 </p>
            </div>
        )
    }
}

export default MoviePartPicker;
import { React , Component } from "react";
import './MoviePartPicker.css';

class MoviePartPicker extends Component {

    state = {
        prices: {
            avengers: 100,
            lifeofpie:80,
            djangounchained:70,
            midnightinparis:90
        },
        selectedSeat:0,
        totalPrice:0,
    }

    render(){
        return (
            
            <div className="body">
                <div className="movie-container">
                    <label>Pick A Movie : </label>
                    <select id="movie">
                        <option value={this.state.prices.avengers}>Avengers: Endgame :({this.state.prices.avengers}{'\u20B9'})</option>
                        <option value={this.state.prices.lifeofpie}>Life of Pie :({this.state.prices.lifeofpie}{'\u20B9'})</option>
                        <option value={this.state.prices.djangounchained}>Django Unchained :({this.state.prices.djangounchained}{'\u20B9'})</option>
                        <option value={this.state.prices.midnightinparis}>Midnight in Paris :({this.state.prices.midnightinparis}{'\u20B9'})</option>
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
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat occupied"></div>
                        <div className="seat occupied"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>

                    <div className="row">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat occupied"></div>
                        <div className="seat occupied"></div>
                    </div>

                    <div className="row">
                        <div className="seat"></div>
                        <div className="seat occupied"></div>
                        <div className="seat occupied"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>

                    <div className="row">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat occupied"></div>
                        <div className="seat occupied"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>

                    <div className="row">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                    </div>

                    <div className="row">
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat"></div>
                        <div className="seat occupied"></div>
                        <div className="seat occupied"></div>
                        <div className="seat occupied"></div>
                    </div>
                </div>

                <p className="text">You have selected <span>{this.state.selectedSeat}</span>Seats for the price of<span>{this.state.totalPrice}</span> {'\u20B9'}</p>
            </div>
            
        );
    }
}

export default MoviePartPicker;
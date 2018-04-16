import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Scoreboard from './components/Scoreboard/Scoreboard.jsx';
import Tiles from './components/Tiles/Tiles.jsx';
import Footer from './components/Footer/Footer.jsx';
import logos from './logos.json';



class App extends Component {

    //state objects
    state = {
        topScore: 0,
        currentScore: 0,
        logos: logos,
        unClickedLogos: logos,
        message: 'Click on a Company Logo to start.'

    }

//Shuffle function
// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array

 shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}


    clickTile = id =>{
        const matchTile = this.state.unClickedLogos.find(i =>i.id === id);

        if (matchTile === undefined) {
            this.setState({
                topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
                currentScore: 0,
                logos: logos,
                unClickedLogos: logos,
                message: 'Logo Already Clicked Try Again.'

            })
        }else{
            const updatedLogos = this.state.unClickedLogos.filter(i => i.id !==id);

            this.setState({
                currentScore: this.state.currentScore + 1,
                logos:logos,
                unClickedLogos: updatedLogos,
                message: 'Keep going!'
            })
        }

        this.shuffle(logos);
    }




    render() {
        return (
            <div className="App mainBG">
                <Header />
                <Scoreboard 
                    message={this.state.message}
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                    />
                <div className='container gameBoard'>
                {
                    this.state.logos.map(logo => (
                        <Tiles 
                        key={logo.id}
                        id={logo.id}
                        name={logo.name}
                        image={logo.image}
                        clickTile={this.clickTile}
                        currentScore={this.state.currentScore}
                    />
                 ))
                }
                
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;

import { Button } from '@mui/material';
import { LinearGradient } from 'expo-linear-gradient'


function clickAlert() {
    alert("you clicked the other button!");
  }

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <div className="App">
                <h1> Hello World :D</h1>
                <Button style={} variant="outlined" onClick={() => {alert('you clicked me!');}}>
                    click me
                </Button>
            </div>
            <div>
                <Button variant="contained" onClick={clickAlert}>
                    click me too!
                </Button>
            </div>
        </>
    );
}
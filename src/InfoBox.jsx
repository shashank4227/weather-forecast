import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import CardMedia from '@mui/material/CardMedia';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function InfoBox({ info }) {

    let rainy = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";
    let sunny = "https://png.pngtree.com/thumb_back/fh260/background/20230930/pngtree-immersive-3d-depiction-of-sunny-weather-with-clouds-image_13534870.png";
    let cold = "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/09/cold_weather_GettyImages107191741_Header-1024x575.jpg";
    
    return (
        <div className='card-container'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
        sx={{ height: 140 }}
                    image={info.humidity > 80 ? rainy : info.temp > 15 ? sunny : cold}
                    
        title="green iguana"
      />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center"}}>
                        {info.city}
                        {info.humidity>80 ? <ThunderstormIcon/> :info.temp > 15 ?  <WbSunnyIcon/> :<AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} style={{textAlign:"center"}}>
                        Temperature: {info.temp} <br />
                        Pressure: {info.pressure} <br />
                        Humidity: {info.humidity} <br />
                        Sea Level: {info.sea_level} <br />
                        Maximum Temperature: {info.temp_max} <br />
                        Minimum Temperature: {info.temp_min} <br />
                        The weather can be describes as {info.description} and it feels like {info.feels_like}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

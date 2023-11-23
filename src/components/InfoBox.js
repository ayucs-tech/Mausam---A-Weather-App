import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudDoneIcon from '@mui/icons-material/CloudDone';

const InfoBox = ({ info }) => {
  return !info.city ?
    <div className='flex justify-center'>
      <Card className='mt-2' sx={{ width: 330 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span>Explore current weather data of more than 200,000 cities.</span>
          </Typography>
        </CardContent>
      </Card>
    </div>

    : (
      <div className='flex justify-center'>
        <Card className='mt-2' sx={{ width: 330 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.temp > 29 ? "https://www.treehugger.com/thmb/9611hEAjKc9A2ixG5JRIzdv4GxU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__07__palm_trees_hot_sun-f8e20b86425b492f9d777d92db46db49.jpg" : info.temp < 23 ? "https://images.unsplash.com/photo-1608905978123-558c415998e8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <span>{info.city.charAt(0).toUpperCase() + info.city.slice(1)} -</span>
              <span>&nbsp;{info.countryName}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span>The weather can be describes as <b>{info.weather}</b> and feels like <b>{info.feelsLike}&deg;C &nbsp;</b> {info.temp > 29 ? <WbSunnyIcon/> : info.temp < 23 ? <AcUnitIcon/> : info.humidity>80 ? <ThunderstormIcon/> : <CloudDoneIcon/>}</span>
              <br /> <br />
              <span>Temperature: {info.temp}&deg;C <DeviceThermostatIcon/></span>
              <br />
              <span>Min: {info.tempMin}&deg;C</span>
              <br />
              <span>Max: {info.tempMax}&deg;C</span>
              <br /> <br />
              <span>Humidity: {info.humidity} <AirIcon/></span>
              <br />

            </Typography>
          </CardContent>
        </Card>
      </div>
    )
}
export default InfoBox
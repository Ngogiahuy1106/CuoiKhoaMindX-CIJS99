import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewCars from './components/NewCars';
import UsedCars from './components/UsedCars';
import Compare from './components/Compare';
import Sell from './components/Sell';
import Article from './components/Article';
import Signin from './components/Signin';  
import Register from './components/Register'; 
import Navbar from './Navbar';
import Home from './components/Home'; 
import Footer from './components/Footer/Footer';
import CarDetail from './components/CarDetails';


const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam nam eu nulla a. Vestibulum aliquet facilisi interdum nibh blandit. Leo amet ultricies cum cras sit sed curabitur ultrices faucibus. Ultrices pellentesque ultricies semper leo maecenas. Amet, et sagittis consectetur at euismod iaculis. Id non velit auctor praesent a amet risus facilisis. Lobortis nisl placerat orci, eu nisl ornare. Eu vitae pellentesque rhoncus eros vivamus est purus enim dui. Leo ac pharetra massa tristique. Libero aliquam pellentesque laoreet dui pulvinar facilisis. Id lectus mauris senectus sodales porta malesuada tincidunt et. Quam dui nulla venenatis suscipit nulla lectus volutpat, augue purus. Sed condimentum parturient maecenas viverra pulvinar leo augue nunc.';

const carData = [
    {
      Name: 'Tesla Model 3 Standard Range Plus',
      Price: '$56,690',
      FirstPrice: '',
      City: 'Florida',
      Country: 'USA',
      Image: 'Tesla Model 3.png',
      Type: 'Electric',
      Year: '2020', 
      Seat: '5',
      State: 'New',
      DriveType: 'Rear-wheel Drive',
      ExteriorColor: 'Red',
      Brand: 'Tesla',
      Model: 'Model 3',
      BodyType: 'Sedan',
      Mileage: 'N/A',
      Transmission: 'Automatic',
      Power: '283 hp',
      BatteryCapacity: '50 kWh',
      ChargeSpeed: '150 kW',
      ChargePort: 'Type 2',
      ChargeTime: '30 mins',
      Dimensions: {
          Length: '184.8 in',
          Width: '72.8 in',
          Height: '56.8 in',
          CargoVolume: '15 cu ft'
      },
      Description: description
    },
    {
      Name: 'Ford F-250 Super Duty',
      Price: '$82,098',
      FirstPrice: '$83,500',
      City: 'Milan',
      Country: 'Italy',
      Image: 'Ford F-250.png',
      Type: 'Diesel',
      Year: '2021', 
      Seat: '5',
      State: 'New',
      DriveType: 'Four-wheel Drive',
      ExteriorColor: 'Blue',
      Brand: 'Ford',
      Model: 'F-250',
      BodyType: 'Truck',
      Mileage: 'N/A',
      Transmission: 'Automatic',
      Power: '475 hp',
      BatteryCapacity: 'N/A',
      ChargeSpeed: 'N/A',
      ChargePort: 'N/A',
      ChargeTime: 'N/A',
      Dimensions: {
          Length: '250.2 in',
          Width: '79.9 in',
          Height: '81.5 in',
          CargoVolume: 'N/A'
      },
      Description: description
    },
    {
      Name: 'Honda Pilot Touring 7-Passenger',
      Price: '$43,735',
      FirstPrice: '',
      City: 'Caracas',
      Country: 'Venezuela',
      Image: 'Honda Pilot Touring.png',
      Type: 'Gasoline',
      Year: '2021', 
      Seat: '7',
      State: 'New',
      DriveType: 'All-wheel Drive',
      ExteriorColor: 'Black',
      Brand: 'Honda',
      Model: 'Pilot',
      BodyType: 'SUV',
      Mileage: 'N/A',
      Transmission: 'Automatic',
      Power: '280 hp',
      BatteryCapacity: 'N/A',
      ChargeSpeed: 'N/A',
      ChargePort: 'N/A',
      ChargeTime: 'N/A',
      Dimensions: {
          Length: '196.5 in',
          Width: '78.6 in',
          Height: '69.8 in',
          CargoVolume: '16.5 cu ft'
      },
      Description: description
    },
    {
      Name: 'Chevrolet Equinox LS',
      Price: '$17,978',
      FirstPrice: '',
      City: 'Madrid',
      Country: 'Spain',
      Image: 'Chevrolet Equinox LS.png',
      Type: 'Gasoline',
      Year: '2017', 
      Seat: '5',
      State: 'New',
      DriveType: 'Front-wheel Drive',
      ExteriorColor: 'Silver',
      Brand: 'Chevrolet',
      Model: 'Equinox',
      BodyType: 'SUV',
      Mileage: 'N/A',
      Transmission: 'Automatic',
      Power: '170 hp',
      BatteryCapacity: 'N/A',
      ChargeSpeed: 'N/A',
      ChargePort: 'N/A',
      ChargeTime: 'N/A',
      Dimensions: {
          Length: '183.1 in',
          Width: '72.5 in',
          Height: '65.4 in',
          CargoVolume: '29.9 cu ft'
      },
      Description: description
    },
    {
      Name: 'Kia Sorento S',
      Price: '$29,791',
      FirstPrice: '',
      City: 'Bangkok',
      Country: 'Thailand',
      Image: 'Kia Sorento S.png',
      Type: 'Gasoline',
      Year: '2021', 
      Seat: '7',
      State: 'New',
      DriveType: 'Front-wheel Drive',
      ExteriorColor: 'White',
      Brand: 'Kia',
      Model: 'Sorento',
      BodyType: 'SUV',
      Mileage: 'N/A',
      Transmission: 'Automatic',
      Power: '191 hp',
      BatteryCapacity: 'N/A',
      ChargeSpeed: 'N/A',
      ChargePort: 'N/A',
      ChargeTime: 'N/A',
      Dimensions: {
          Length: '189 in',
          Width: '74 in',
          Height: '66.7 in',
          CargoVolume: '12.6 cu ft'
      },
      Description: description
    },
    {
      Name: 'MINI Clubman Cooper S',
      Price: '$35,850',
      FirstPrice: '',
      City: 'Jakarta',
      Country: 'Indonesia',
      Image: 'MINI Clubman Cooper S.png',
      Type: 'Gasoline',
      Year: '2022', 
      Seat: '5',
      State: 'New',
      DriveType: 'Front-wheel Drive',
      ExteriorColor: 'Green',
      Brand: 'MINI',
      Model: 'Clubman',
      BodyType: 'Hatchback',
      Mileage: 'N/A',
      Transmission: 'Automatic',
      Power: '189 hp',
      BatteryCapacity: 'N/A',
      ChargeSpeed: 'N/A',
      ChargePort: 'N/A',
      ChargeTime: 'N/A',
      Dimensions: {
          Length: '168.3 in',
          Width: '71.7 in',
          Height: '56.7 in',
          CargoVolume: '17.5 cu ft'
      },
      Description: description
    },
    {
      Name: 'Jeep Wrangler Unlimited Islander',
      Price: '$50,370',
      FirstPrice: '',
      City: 'San Antonio',
      Country: 'USA',
      Image: 'Jeep Wrangler Unlimited Islander.png',
      Type: 'Hybrid',
      Year: '2021', 
      Seat: '5',
      State: 'Used',
      DriveType: 'Four-wheel Drive',
      ExteriorColor: 'Orange',
      Brand: 'Jeep',
      Model: 'Wrangler',
      BodyType: 'SUV',
      Mileage: 'N/A',
      Transmission: 'Automatic',
      Power: '270 hp',
      BatteryCapacity: 'N/A',
      ChargeSpeed: 'N/A',
      ChargePort: 'N/A',
      ChargeTime: 'N/A',
      Dimensions: {
          Length: '189.8 in',
          Width: '73.7 in',
          Height: '73.6 in',
          CargoVolume: '31.7 cu ft'
      },
      Description: description
    },
    {
      Name: 'Audi e-tron Premium',
      Price: '$72,655',
      FirstPrice: '',
      City: 'Suwon',
      Country: 'South Korea',
      Image: 'Audi e-tron Premium.png',
      Type: 'Electric',
      Year: '2021', 
      Seat: '5',
      State: 'Used',
      DriveType: 'All-wheel Drive',
      ExteriorColor: 'Gray',
      Brand: 'Audi',
      Model: 'e-tron',
      BodyType: 'SUV',
      Mileage: 'N/A',
      Transmission: 'Automatic',
      Power: '355 hp',
      BatteryCapacity: '95 kWh',
      ChargeSpeed: '150 kW',
      ChargePort: 'Type 2',
      ChargeTime: '30 mins',
      Dimensions: {
          Length: '193.8 in',
          Width: '76.3 in',
          Height: '64.0 in',
          CargoVolume: '28.5 cu ft'
      },
      Description: description
    },
    {
      Name: 'Land Rover Range Rover Velar R-Dynamic S',
      Price: '$75,790',
      FirstPrice: '',
      City: 'Jeddah',
      Country: 'Saudi Arabia',
      Image: 'Land Rover Range Rover Velar R-Dynamic S.png',
      Type: 'Gasoline',
      Year: '2021', 
      Seat: '5',
      State: 'Used',
      DriveType: 'All-wheel Drive',
      ExteriorColor: 'Black',
      Brand: 'Land Rover',
      Model: 'Range Rover Velar',
      BodyType: 'SUV',
      Mileage: 'N/A',
      Transmission: 'Automatic',
      Power: '247 hp',
      BatteryCapacity: 'N/A',
      ChargeSpeed: 'N/A',
      ChargePort: 'N/A',
      ChargeTime: 'N/A',
      Dimensions: {
          Length: '192.1 in',
          Width: '75.2 in',
          Height: '64.0 in',
          CargoVolume: '34.4 cu ft'
      },
      Description: description
    },
    {
      Name: 'Toyota Mirai',
      Price: '$71,415',
      FirstPrice: '',
      City: 'Kobe',
      Country: 'Japan',
      Image: 'Toyota Mirai.png',
      Type: 'Electric',
      Year: '2021', 
      Seat: '5',
      State: 'Used',
      DriveType: 'Rear-wheel Drive',
      ExteriorColor: 'Blue',
      Brand: 'Toyota',
      Model: 'Mirai',
      BodyType: 'Sedan',
      Mileage: 'N/A',
      Transmission: 'Automatic',
      Power: '182 hp',
      BatteryCapacity: 'N/A',
      ChargeSpeed: 'N/A',
      ChargePort: 'Hydrogen',
      ChargeTime: 'N/A',
      Dimensions: {
          Length: '192.5 in',
          Width: '73.2 in',
          Height: '58.1 in',
          CargoVolume: '11.0 cu ft'
      },
      Description: description
    }
];

  

const NotFound = () => <h2>404 - Page Not Found</h2>;
const App = () => {
  return (
    <ErrorBoundary>
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/new-cars" element={<NewCars carData={carData} />} />
            <Route path="/used-cars" element={<UsedCars carData={carData} />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/article" element={<Article />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Register />} /> 
            <Route path="/car-detail/:carId" element={<CarDetail carData={carData} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </Router>
</ErrorBoundary>
  );
};

export default App;

class ErrorBoundary extends React.Component {
  constructor(props) {
      super(props);
      this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
      return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
      console.error("Error occurred:", error, errorInfo);
  }

  render() {
      if (this.state.hasError) {
          return <h1>Something went wrong.</h1>;
      }
      return this.props.children; 
  }
}


//<FontAwesomeIcon icon="fa-solid fa-car" />
//<FontAwesomeIcon icon="fa-solid fa-car-rear" />
//<FontAwesomeIcon icon="fa-solid fa-tag" />
//<FontAwesomeIcon icon="fa-brands fa-facebook" />
//<FontAwesomeIcon icon="fa-brands fa-instagram" />
//<FontAwesomeIcon icon="fa-brands fa-youtube" />
//<FontAwesomeIcon icon="fa-solid fa-calendar-days" />
//<FontAwesomeIcon icon="fa-solid fa-dharmachakra" />
//<FontAwesomeIcon icon="fa-solid fa-gas-pump" />
//<FontAwesomeIcon icon="fa-solid fa-user-group" />
//<FontAwesomeIcon icon="fa-solid fa-location-dot" />
//<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
//<FontAwesomeIcon icon="fa-solid fa-chevron-down" />
//<FontAwesomeIcon icon="fa-solid fa-globe" />
//<FontAwesomeIcon icon="fa-solid fa-user-large" />
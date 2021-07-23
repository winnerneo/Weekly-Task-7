import logo from './logo.svg';
import './App.css';
import Usercard from './Usercard';
import UserCard2 from './UserCard2';

function App() {
  const user = [ 
    {
      name: 'Elon musk',
      location: 'Las Vegas',
      foodType: 'Everything',
      age: 28,
      likes: 'Coding into the wee hours of the morning',
      twitterUsername: 'Elon Musk',
      avatar:
        'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    },
    {
      name: 'Chris Morgan',
      location: 'Florida',
      foodType: 'Chiken and Chips',
      age: 45,
      likes: 'Swimming and Reading',
      twitterUsername: 'Morgan45',
      avatar:
        'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    
    }
    ]
  
  
  
  return (
    <div className="App">
     <Usercard myUser = {user}/>
     <UserCard2 myUser = {user}/>
        
      

    </div>
  );
}

export default App;

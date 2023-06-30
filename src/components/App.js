  import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
function Nav() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXtqEFUiTQsP8rK9NoBzPtZXry61plDph3P-c44OWh5kG8iE&s" alt="App Logo" />
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <img className='one' src='https://st.redbus.in/web/images/layout/rb_vertical.svg'/>
            {/* <a href="#" className="navbar-link">Bus Tickets</a> */}
            <span class="navbar-link">Bus Tickets</span>
          </li>
          
          <li className="navbar-item">
            <img src='https://st.redbus.in/web/images/layout/ryde_vertical.svg'></img>
            <a href="sec" className="navbar-link">Cab Rental</a>
          </li>
          <li className="navbar-item">
            <img src='https://st.redbus.in/web/images/layout/rail_vertical.svg'></img>
            <a href="#" className="navbar-link">Train Tickets</a>
          </li>
          <li className="navbar-em ">
            <a href="#" className="navbar-link">Help</a>
          </li>
          <li className="navbar-item ">
            <a href="#" className="navbar-link">Account</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function BookBus({ fetchData }) {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

  const handleSearch = () => {
    fetchData(source, destination);
  };

  return (
    <section>
      <div className="search">
        <label className="from" htmlFor="From">FROM :</label>
        <input className="from" type="text" id="From" placeholder="source" value={source} onChange={(e) => setSource(e.target.value)} />
      </div>
      <div className="search">
        <label className="from" htmlFor="To">TO :</label>
        <input className="from" type="text" id="To" placeholder="destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
      </div>
      {/* <div className="search-date">
        <label className="from" htmlFor="Date">DATE :</label>
        <input className="from" type="text" id="Date" placeholder="date" />
      </div> */}
      <div className="search-btn">
        <button type="submit" className="button-17" onClick={handleSearch}>Search Bus</button>
      </div>
      
    </section>
  );
}
 

export const App = () => {
  const [busData, setBusData] = useState(null);

  const fetchData = async (source, destination) => {
    try {
      const response = await fetch(`https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${source}&destination=${destination}`);
      const data = await response.json();
      setBusData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <main>
      <div className="container">
       
    </div>
    <div className='back'></div>
      <section>
        <Nav />
      </section>
      <section>
        <BookBus fetchData={fetchData} />
      </section>
      <section>
        {busData && busData.length > 0 ? (
          <div  >
            <h2 className='h2'>Available Buses:</h2>
            <ul>
              {busData.map((bus) => (

<div className="maindiv">
<li key={bus.id} className="busItem">
  <h3 className="busId">Bus ID: {bus.id}</h3>
  <p>Bus Name: {bus.busName}</p>
  <p>Ticket Price: {bus.ticketPrice}</p>
  <p>Date: {bus.date}</p>
  <p>Arrival Time: {bus.arrivalTime}</p>
  <p>Departure Time: {bus.departureTime}</p>
  <p>Source: {bus.source}</p>
  <p>Destination: {bus.destination}</p>
  
</li>
</div>
              ))}
            </ul>
          </div>
        ) : (
          <p> </p>
        )}
      </section>
      <div class="AboutUs__Heading-w9osof-3 jwIjiQ"> NOW, <b>GET MORE THAN JUST BUS</b> TICKETS WITH REDBUS!</div>
      <img src="https://s3.rdbuz.com/web/images/homeV2/AboutUs/rydePop.svg" width="670px" height="401px" alt="lobImage" class="AboutUs__ImgLob-w9osof-15 bxaEww"></img>
       
        <footer>
          {/* <div className='footer'>
          <img  className='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8K8ugUe5Vgke0C_fezHcmUn3ZZHkLzOFigA&usqp=CAU'/>

        </div> */}
        
       <div width="" keypoints="Quick access,Superior live tracking" class="AppInstallSection__AppInstallContainer-sc-11kc14c-0 fAiJnC">
        <div class="AppInstallSection__Heading-sc-11kc14c-1 jxWMcT">ENJOY THE APP!</div>
        <div class="AppInstallSection__AppInstallWrapper-sc-11kc14c-2 gSrgud"><div class="AppInstallSection__AppInfoSection-sc-11kc14c-3 NUOXW"><div class="AppInstallSection__KeyFeatureSection-sc-11kc14c-5 hFfuGP"><div class="AppInstallSection__KeyPointsContainer-sc-11kc14c-10 hLlVDH"><img src="https://s3.rdbuz.com/web/images/homeV2/appinstall/tick.svg" alt="tick" class="AppInstallSection__TickImg-sc-11kc14c-11 cwbbAV"/><text class="AppInstallSection__KeyPoints-sc-11kc14c-6 bIaADj">Quick access</text></div><div class="AppInstallSection__KeyPointsContainer-sc-11kc14c-10 hLlVDH"><img src="https://s3.rdbuz.com/web/images/homeV2/appinstall/tick.svg" alt="tick" class="AppInstallSection__TickImg-sc-11kc14c-11 cwbbAV"/><text class="AppInstallSection__KeyPoints-sc-11kc14c-6 bIaADj">Superior live tracking</text></div></div><div class="AppInstallSection__RateSection-sc-11kc14c-13 edFbrh"><div class="AppInstallSection__RatingSection-sc-11kc14c-7 iCQNyJ"><text class="AppInstallSection__RatingText-sc-11kc14c-8 dDTXkS"><label>4.5</label><i class="AppInstallSection__StarIcon-sc-11kc14c-12 iVRoGq icon icon-appinstallstar"></i></text><text class="AppInstallSection__DownloadsText-sc-11kc14c-9 gXIehj">50M+ downloads</text><div class="AppInstallSection__StoreName-sc-11kc14c-15 hbygOL">Play Store</div></div><div class="AppInstallSection__Line-sc-11kc14c-14 iGrYiA"></div><div class="AppInstallSection__RatingSection-sc-11kc14c-7 iCQNyJ"><text class="AppInstallSection__RatingText-sc-11kc14c-8 dDTXkS"><label>4.6</label><i class="AppInstallSection__StarIcon-sc-11kc14c-12 iVRoGq icon icon-appinstallstar"></i></text><text class="AppInstallSection__DownloadsText-sc-11kc14c-9 gXIehj">50M+ downloads</text><div class="AppInstallSection__StoreName-sc-11kc14c-15 hbygOL">App Store</div></div></div></div><div class="AppInstallSection__AppInstallRightContainer-sc-11kc14c-4 cdJJWu"><div class="GetLinkSection__GetLinkSectionWrapper-vkgk9v-0 dWDPzs"><text class="GetLinkSection__GetLinkHead-vkgk9v-2 iduTQd">Get Download link on</text><div class="GetLinkSection__GetLinkInputButtonWrapper-vkgk9v-8 FLLBX"><div class="GetLinkSection__GetLinkSectionContainer-vkgk9v-1 gYLGNT"><div id="phoneCode" class="GetLinkSection__PhoneCode-vkgk9v-4 kjvxWu"><text class="GetLinkSection__CountryCodeText-vkgk9v-5 eMjNSA">+91</text><i class="GetLinkSection__ArrowImg-vkgk9v-6 dopfvM icon icon-arrowDown"></i></div><div width="10.8rem" height="46px" label="WhatsApp number" maxlength="10" class="InputContainer-sc-1dty259-0 cSwImR"><input class="input" type="text" autocomplete="off" maxlength="10" value=""/><label>WhatsApp number</label></div></div><button class="GetLinkSection__GetLinkButton-vkgk9v-3 bfkEbL">Get Link</button></div><div class="GetLinkSection__ErrorMessage-vkgk9v-7 eYtBUE"></div></div><div class="QrCodeAndPlaystoreSection__QrSectionWrapper-sc-1xehksy-0 iNEqhX"><div class="QrCodeAndPlaystoreSection__QrContainer-sc-1xehksy-1 eoedlF"><text class="QrCodeAndPlaystoreSection__DownLoadText-sc-1xehksy-2 bTqpAa">Scan to download</text><img src="https://s1.rdbuz.com/web/images/homeV2/qrCode.svg" alt="QrCodeImg" class="QrCodeAndPlaystoreSection__QrImg-sc-1xehksy-3 bGbiZT"/></div><div class="QrCodeAndPlaystoreSection__DownloadLinkSection-sc-1xehksy-4 eYNFNU"><text class="QrCodeAndPlaystoreSection__DownLoadText-sc-1xehksy-2 bTqpAa">Download the App on</text><div class="QrCodeAndPlaystoreSection__DownloadImgConatiner-sc-1xehksy-6 gcJXJQ"><img src="https://s2.rdbuz.com/web/images/homeV2/appinstall/playStore.svg" alt="playstore" height="42px" width="145px" class="QrCodeAndPlaystoreSection__PlayStoreImg-sc-1xehksy-5 jNnyJy"/><img src="https://s3.rdbuz.com/web/images/homeV2/appinstall/appStore.svg" alt="AppStoreImg" height="46px" width="147px" class="QrCodeAndPlaystoreSection__PlayStoreImg-sc-1xehksy-5 bjjyQY"/></div></div></div></div></div></div>
          <div className="footer-container">
        <div className="footer-info">
          <h4>About Us</h4>
          <p>Bus Service Company provides reliable and affordable transportation solutions.</p>
        </div>
        <div id='sec' className="footer-info">
          <h4 >Contact Us</h4>
          <p>Email: info@busservice.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
        <div className="footer-info">
          <h4>Follow Us</h4>
          <div className="social-media-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bus Service Company. All rights reserved.</p>
      </div>
         
        </footer>

      
    </main>
  );
  
};

export default App;;

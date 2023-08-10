 import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
function Nav() {
  return (
    
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXtqEFUiTQsP8rK9NoBzPtZXry61plDph3P-c44OWh5kG8iE&s" alt="App Logo" />
        </div>
        <div >
        <ul className="navbar-menu">
          <li className="navbar-item">
            <img className='one' src='https://st.redbus.in/web/images/layout/rb_vertical.svg'/>
            {/* <a href="#" className="navbar-link">Bus Tickets</a> */}
            <a href='#' class="navbar-link">Bus Tickets</a>
          </li>
          
          <li className="navbar-item">
            <img src='https://st.redbus.in/web/images/layout/ryde_vertical.svg'></img>
            <a href="#" className="navbar-link">Cab Rental</a>
          </li>
          <li className="navbar-item">
            <img src='https://st.redbus.in/web/images/layout/rail_vertical.svg'></img>
            <a href="#" className="navbar-link">Train Tickets</a>
          </li>
          <li className="navbar-em ">
            <a href="#" className="navbar-link">Help</a>
          </li>
          <li className="navbar-item ">
            <a href="#" className="navbar-link" >
              
            <label htmlFor='account'>Account</label>   
                 <select name='account' className='options'> 
<option className='selectt' value="cancel Ticket">Cancel Ticket</option>
  <option className='selectt' value="Change Travel Date">Change Travel Date</option>
  <option className='selectt' value="Show My Ticket">Show My Ticket</option>
  <option className='selectt' value="Email/SMS">Email/SMS</option>
  <hr></hr>
  <option className='selectt' value="Login/Sign Up">Login/Sign Up</option>

</select>
            </a>
        

          </li>
        </ul>
        </div>
      </nav>
    
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
     <div className='search1'>
     <div className="search">
        <label className="from" htmlFor="From">FROM</label>
        <input className="from1" type="text" id="From" placeholder="source" value={source} onChange={(e) => setSource(e.target.value)} />
      </div>
      
      <div className="search">
        <label className="from" htmlFor="To">TO</label>
        <input className="from1" type="text" id="To" placeholder="destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
      </div>
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
function Enjoy(){
  return(
    <>
    
      <div className='enjoy'>
        <div className='jxWMcT'>ENJOY THE APP!</div>
        <div className='gSrgud'>
        <div className='NUOXW'>
          <div className='hFfuGP'>
          <div className='hLlVDH'>
            <img className='cwbbAV' src='https://s3.rdbuz.com/web/images/homeV2/appinstall/tick.svg'></img>
            <text className='bIaADj'>Quick access</text>
          </div>
          <div className='hLlVDH'>
            <img className='cwbbAV' src='https://s3.rdbuz.com/web/images/homeV2/appinstall/tick.svg'></img>
            <text className='bIaADj'>Superior live tracking</text>
          </div>
          </div>
          <div className='edFbrh'>
            <div className='iCQNyJ'>
              <text className='dDTXkS'>4.5 ★</text>
              <text className='gXIehj'>50M+ Downloads</text>
              <div className='hbygOL'>Play Store</div>
            </div>
            <div className='iGrYiA'></div>
            <div className='iCQNyJ'>
              <text className='dDTXkS'>4.6 ★</text>
              <text className='gXIehj'>50M+ downloads</text>
              <div className='hbygOL'>App Store</div>
            </div>

          </div>
         
          
          
        </div>
        <div className='cdJJWu'>
          <div className='dWDPzs'>
            <text className='iduTQd'>Get Download link on</text>
          </div>
          <div className='FLLBX'>
            <div className='gYLGNT'>
              <div className='kjvxWu'>
                <text className='eMjNSA'>+91</text>
                {/* <i class="GetLinkSection__ArrowImg-vkgk9v-6 dopfvM icon icon-arrowDown"></i> */}
              </div>
              <div className='cSwImR' width="10.8rem" height="46px" label="WhatsApp number">
                <input placeholder='WhatsApp number' className='input'  type='text' ></input>
                <label>WhatsApp number</label>
              </div>

            </div>
            <button class=" bfkEbL">Get Link</button>
        
          </div>
          <div className='iNEqhX'>
            <div className='eoedlF'>
            <text class=" bTqpAa">Scan to download</text>
            <img src="https://s1.rdbuz.com/web/images/homeV2/qrCode.svg" alt="QrCodeImg" class=" bGbiZT"></img>
            </div>
            <div className='eoedlF'>
              <text className='bTqpAa' >Download the App on</text>
              <div className='gcJXJQ'>
              <img src="https://s2.rdbuz.com/web/images/homeV2/appinstall/playStore.svg" alt="playstore" height="42px" width="145px" class="jNnyJy"></img>
              <img src="https://s3.rdbuz.com/web/images/homeV2/appinstall/appStore.svg" alt="AppStoreImg" height="46px" width="147px" class=" bjjyQY"></img>

              </div>
            </div>

          </div>
        </div>

     
        </div>
       
       </div>
     
    
    </>
  )
}
function Primo(){
  return(
    <>
     <div className='leOglo'>
      <div className='lbyBJD'>
      <img src="https://s1.rdbuz.com/web/images/homeV2/primoSection/primoTopBanner.svg" alt="PrimoBanner"></img>
      </div>
      <div className='cCVFlH'>
      <div className='hBpcMq'>
        <div className='fqnYyG'>
        <img src="https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg1.svg" alt="PrimoImg"></img>
        </div>
        <div className=" cYQSQV"><text className=" hlKOyy">1 of 5 buses qualify</text><text className="dPbtuK">Primo’s strict safety qualification ensures a safer travel for you</text></div>


        
      </div>

      
      <div className='hBpcMq'>
        <div className='fqnYyG'>
        <img src="https://s3.rdbuz.com/web/images/homeV2/primoSection/primoSubImg2.svg" alt="PrimoImg"></img>
        </div>
        <div className=" cYQSQV"><text className='hlKOyy'>Preferred by 90%</text><text className="dPbtuK">90% of travellers re-book Primo buses for its punctuality and comfort</text></div>
      </div>

{/* div 3 */}
      <div className='hBpcMq'>
        <div className='fqnYyG'>
        <img src="https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg3.svg" alt="PrimoImg"></img>
        </div>
        <div className=" cYQSQV"><text className='hlKOyy'>9 Lac+ monthly travellers</text><text className="dPbtuK">In 2022, 9 Lac+ people traveled with Primo every month</text></div>
      </div>


      </div>
     </div>
     
    </>
  )
}
function Partner(){
  return(
    <>
    <div className='iUUZuv'>
      <h2 className='ifwTFq'>PARTNERD WITH</h2>
      <div className='fZRtgJ'>25 RTC'S
      <a href="https://www.redbus.in/online-booking/rtc-directory" className="crqghW">View All</a>
      </div>
      <div className='hcwFYS'>
      <a href="https://www.redbus.in/online-booking/apsrtc" className="dJVBwd"><img src="https://st.redbus.in/buslogos/country/ind/logo_group/10283.png" alt="APSRTC_logo" class="bIroSE"/><text class="kuzaPC">APSRTC</text></a>
      <a href="https://www.redbus.in/online-booking/tsrtc" class="RtcPartneredWith__RtcLogoContainer-sc-1fxl38k-5 dJVBwd"><img src="https://st.redbus.in/Images/carousel/TSRTC.png" alt="TSRTC_logo" class="RtcPartneredWith__RtcLogoImg-sc-1fxl38k-6 bIroSE"/><text class="RtcPartneredWith__RtcText-sc-1fxl38k-7 kuzaPC">TSRTC</text></a>
      <a href="https://www.redbus.in/online-booking/tsrtc" class="RtcPartneredWith__RtcLogoContainer-sc-1fxl38k-5 dJVBwd"><img src="https://st.redbus.in/Images/carousel/TSRTC.png" alt="TSRTC_logo" class="RtcPartneredWith__RtcLogoImg-sc-1fxl38k-6 bIroSE"/><text class="RtcPartneredWith__RtcText-sc-1fxl38k-7 kuzaPC">TSRTC</text></a>
      <a href="https://www.redbus.in/online-booking/msrtc" class="RtcPartneredWith__RtcLogoContainer-sc-1fxl38k-5 dJVBwd"><img src="https://st.redbus.in/buslogos/country/ind/logo_group/10823.png" alt="MSRTC_logo" class="RtcPartneredWith__RtcLogoImg-sc-1fxl38k-6 bIroSE"/><text class="RtcPartneredWith__RtcText-sc-1fxl38k-7 kuzaPC">MSRTC</text></a>
      <a href="https://www.redbus.in/online-booking/ksrtc-kerala" class="RtcPartneredWith__RtcLogoContainer-sc-1fxl38k-5 dJVBwd"><img src="https://s3.rdbuz.com/web/images/homeV2/rtc/KERALA-RTC.svg" alt="Kerala RTC_logo" class="bIroSE"/><text class="kuzaPC">Kerala RTC</text></a>
      <a href="https://www.redbus.in/online-booking/south-bengal-state-transport-corporation-sbstc" class="dJVBwd"><img src="https://st.redbus.in/buslogos/country/ind/logo_group/16426.png" alt="SBSTC_logo" class="bIroSE"/><text class="kuzaPC">SBSTC</text></a>
      <a href="https://www.redbus.in/online-booking/rsrtc" class="dJVBwd"><img src="https://s3.rdbuz.com/web/images/homeV2/rtc/RSRTC.svg" alt="RSRTC_logo" class="bIroSE"/><text class="kuzaPC">RSRTC</text></a>
      <a href="https://www.redbus.in/online-booking/upsrtc" class="dJVBwd"><img src="https://s3.rdbuz.com/web/images/homeV2/rtc/UPSRTC.svg" alt="UPSRTC_logo" class="bIroSE"/><text class="kuzaPC">UPSRTC</text></a>
      </div>
    </div>
    </>
  )
}
function PrivateBus(){
  return(
    <>
    <div className='bLGySv'>
    <h2 className="gGNpaZ">200 Private Bus Operators<a href="https://www.redbus.in/travels/operators-directory" class="dmxFif">View All</a></h2>
    <div className='hakCBk'>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">SRS Travels</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">Parveen Travels</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">Kallada Travels</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">KPN Travels</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">Orange Travels</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">Evacay Bus</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">SRS Travels</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">Rajdhani Travels</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">VRL travels</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">Chartered Speed</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">SRM Travels</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">Bengal Tigers</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">Infant Jesus</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">Patel Travels</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">JBT Travels</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">Shabtdi Travels</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">Eagle Travels</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">Kanker Roadways</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">komitla</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">Sri Krishna</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">hamsafar</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">Mahasagar travels</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">Sharma Travels</a>
      </div>
    <div className="hyRAbX">
      <a href="https://www.redbus.in/travels/srs-travels-srs" class="dDDOpR">Sharma Travels</a>
      </div>
    </div>
    </div>
    </>
  )
}
function Footer(){
  return(
    <>
   <footer>
   <div className='rb_footer'>
      <ul className='footer_top_seo_content'>
      <li class="footer_seo_section" id="top_rtc_seo">
                        <h3 class="footer_seo_title">Top RTCs</h3>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/apsrtc" id="top_rtc_seo_apsrtc" target="_blank">APSRTC</a>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/gsrtc" id="top_rtc_seo_gsrtc" target="_blank">GSRTC</a>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/msrtc" id="top_rtc_seo_msrtc" target="_blank">MSRTC</a>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/tnstc" id="top_rtc_seo_tnstc" target="_blank">TNSTC</a>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/rtc-directory" id="top_rtc_seo_view_all" target="_blank">View All</a>
                    </li>
      </ul>
      <div class="horizontal_seperator"></div>
      <ul className='footer_top_seo_content'>
      <li class="footer_seo_section" id="top_rtc_seo">
                        <h3 class="footer_seo_title">Other</h3>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/apsrtc" id="top_rtc_seo_apsrtc" target="_blank">TSRTC</a>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/gsrtc" id="top_rtc_seo_gsrtc" target="_blank">SBSTC</a>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/msrtc" id="top_rtc_seo_msrtc" target="_blank">RSRTC</a>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/tnstc" id="top_rtc_seo_tnstc" target="_blank">KERALA RTC</a>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/rtc-directory" id="top_rtc_seo_view_all" target="_blank">View All</a>
                    </li>
      </ul>
      <div class="horizontal_seperator"></div>
      <ul className='footer_top_seo_content'>
      <li class="footer_seo_section" id="top_rtc_seo">
                        <h3 class="footer_seo_title">Top Bus Routes</h3>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/apsrtc" id="top_rtc_seo_apsrtc" target="_blank">Hyderabad to Bangalore Bus</a>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/gsrtc" id="top_rtc_seo_gsrtc" target="_blank">Pune to Bangalore Bus</a>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/msrtc" id="top_rtc_seo_msrtc" target="_blank">Bangalore to Chennai Bus</a>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/tnstc" id="top_rtc_seo_tnstc" target="_blank">Mumbai to Bangalore Bus</a>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/rtc-directory" id="top_rtc_seo_view_all" target="_blank">View All</a>
                    </li>
      </ul>
      <div class="horizontal_seperator"></div>
      <ul className='footer_top_seo_content'>
      <li class="footer_seo_section" id="top_rtc_seo">
                        <h3 class="footer_seo_title">Top Cities</h3>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/apsrtc" id="top_rtc_seo_apsrtc" target="_blank">Hyderabad Bus Tickets</a>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/gsrtc" id="top_rtc_seo_gsrtc" target="_blank">Bangalore Bus Tickets</a>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/msrtc" id="top_rtc_seo_msrtc" target="_blank">Chennai Bus Tickets</a>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/tnstc" id="top_rtc_seo_tnstc" target="_blank">Pune Bus Tickets</a>
                                <a class="footer_seo_link footer_link_new" href="http://www.redbus.in/online-booking/rtc-directory" id="top_rtc_seo_view_all" target="_blank">View All</a>
                    </li>
      </ul>
      <div class="horizontal_seperator"></div>
 
   
      
    </div>
  <div className='rb_footer'>
  <div class="horizontal_seperator"></div>
    <ul className='footer_links'>
    <li class="footer_link_section main_footer_item">
            <div class="footer_main_logos">
                <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="redBus" class="rb_footer_logo"/>
            </div>
            <span class="footer_text">redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website, iOS and Android mobile apps for all major routes.</span>
        </li>

    </ul>
    <li class="footer_link_section" id="about_redbus_title_footer">
                    <h3 class="footer_link_section_title">About redBus</h3>
                            <a class="footer_link_section_item footer_link_new" href="http://www.redbus.in/info/aboutus" id="about_us_footer" target="_blank">
                                About us
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="/info/Investors" id="investor_relations_footer" target="_blank">
                                Investor Relations
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="http://www.redbus.in/info/contactus" id="contact_us_footer" target="_blank">
                                Contact us
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="https://m.redbus.in/" id="mobile_version_footer" target="_blank">
                                Mobile version
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="http://www.redbus.in/info/mobile" id="redbus_on_bus_footer" target="_blank">
                                redBus on mobile
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="http://www.redbus.in/sitemap.html" id="sitemap_footer" target="_blank">
                                Sitemap
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="http://www.redbus.in/info/offerTerms" id="offers_footer" target="_blank">
                                Offers
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="http://www.redbus.in/careers" id="careers_footer" target="_blank">
                                Careers
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="http://www.redbus.in/values" id="values_footer" target="_blank">
                                Values
                            </a>
                </li>
                <div class="horizontal_seperator"></div>
                <li class="footer_link_section" id="global_sites_title_footer">
                    <h3 class="footer_link_section_title">Global Sites</h3>
                            <a class="footer_link_section_item footer_link_new" href="https://www.redbus.in/" id="India_site_footer" target="_blank">
                                India
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="https://www.redbus.sg/" id="singapore_site_footer" target="_blank">
                                Singapore
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="https://www.redbus.my/" id="malaysia_site_footer" target="_blank">
                                Malaysia
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="https://www.redbus.id/" id="indonesia_site_footer" target="_blank">
                                Indonesia
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="https://www.redbus.pe/" id="peru_site_footer" target="_blank">
                                Peru
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="https://www.redbus.co/" id="colombia_site_footer" target="_blank">
                                Colombia
                            </a>
                </li>
                <div class="horizontal_seperator"></div>
                <li class="footer_link_section" id="our_partners_title_footer">
                    <h3 class="footer_link_section_title">Our Partners</h3>
                            <a class="footer_link_section_item footer_link_new" href="https://www.goibibo.com/bus/" id="goibibo_bus_footer" target="_blank">
                                Goibibo Bus
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="https://www.goibibo.com/hotels/" id="goibibo_hotels_footer" target="_blank">
                                Goibibo Hotels
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="https://www.makemytrip.com/bus-tickets/" id="makemytrip_bus_footer" target="_blank">
                                Makemytrip Bus
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="https://www.makemytrip.com/hotels/" id="makemytrip_hotels_footer" target="_blank">
                                Makemytrip Hotels
                            </a>
                </li>
                <div class="horizontal_seperator"></div>
                <li class="footer_link_section" id="info_title_footer">
                    <h3 class="footer_link_section_title">Info</h3>
                            <a class="footer_link_section_item footer_link_new" href="http://www.redbus.in/info/termscondition" id="terms_n_conditions_footer" target="_blank">
                                T&amp;C
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="http://www.redbus.in/info/privacypolicy" id="privacy_policy_footer" target="_blank">
                                Privacy policy
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="http://www.redbus.in/info/faq" id="faq_footer" target="_blank">
                                FAQ
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="https://blog.redbus.in" id="blog_footer" target="_blank">
                                Blog
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="https://onboardvendor.redbus.in/" id="bus_operator_registration_footer" target="_blank">
                                Bus operator registration
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="https://in3.seatseller.travel/" id="agent_registration_footer" target="_blank">
                                Agent registration
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="https://www.acko.com/" id="insurance_partner_footer" target="_blank">
                                Insurance partner
                            </a>
                            <a class="footer_link_section_item footer_link_new" href="/info/useragreement" id="user_agreement_footer" target="_blank">
                                User agreement
                            </a>
                </li>
  </div>
  <div class="copyright_social_section">
        <span class="footer_copyright_text">Ⓒ 2023 Redbus India Pvt Ltd. All rights reserved</span>
            <div class="social_section">
                        <a class="social_icon_item footer_link_new" id="redbus_facebook" href="https://www.facebook.com/redbus.in/" target="_blank">
                                <img src="https://st.redbus.in/web/images/layout/social_facebook_new.svg" class="social_img" alt="redbus_facebook"/>
                        </a>
                        <a class="social_icon_item footer_link_new" id="redbus_linkedin" href="https://in.linkedin.com/company/redbus_2/" target="_blank">
                                <img src="https://st.redbus.in/web/images/layout/social_linkedin_new.svg" class="social_img" alt="redbus_linkedin"/>
                        </a>
                        <a class="social_icon_item footer_link_new" id="redbus_twitter" href="https://twitter.com/redBus_in/" target="_blank">
                                <img src="https://st.redbus.in/web/images/layout/social_twitter_new.svg" class="social_img" alt="redbus_twitter"/>
                        </a>
                        <a class="social_icon_item footer_link_new" id="redbus_instagram" href="https://www.instagram.com/accounts/login/?next=/redbusindia/" target="_blank">
                                <img src="https://st.redbus.in/web/images/layout/social_instagram_new.svg" class="social_img" alt="redbus_instagram"/>
                        </a>
            </div>
    </div>
   </footer>
    </>
  )
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
  function GlobalPresense(){
    return(
      <>
      <div className='eHkZYY'>
      <h2 className="jCFmhX">Global Presence</h2>
      <div className='cGGFCy'>
      <div class="gyXQev"><img src="https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Colombia.svg" alt="Colombia" class="iwHoIV"/><div class="dOHGsi">Colombia</div>
      </div>
      <div class="gyXQev"><img src="https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/India.svg" alt="Colombia" class="iwHoIV"/><div class="dOHGsi">India</div>
      </div>
      <div class="gyXQev"><img src="https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Indonesia.svg" alt="Colombia" class="iwHoIV"/><div class="dOHGsi">Indonesia</div>
      </div>
      <div class="gyXQev"><img src="https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Malaysia.svg" alt="Colombia" class="iwHoIV"/><div class="dOHGsi">Malaysia</div>
      </div>
      <div class="gyXQev"><img src="https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/peru.svg" alt="Colombia" class="iwHoIV"/><div class="dOHGsi">Peru</div>
      </div>
      <div class="gyXQev"><img src="https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Singapore.svg" alt="Colombia" class="iwHoIV"/><div class="dOHGsi">Singapore</div>
      </div>
      </div>
   
      </div>
      </>
    )

  }


  return (
    <main>
      <div className="container">
       
    </div>
    {/* <div className='back'></div> */}
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
  <h4 className="busId">Bus ID: {bus.id}</h4>
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
      <div className='visa'>
        <a className='visaa' href='#'>
          <img className='visaaa' src='https://platforms.makemytrip.com/contents/c1dc43ea-ba71-4a6a-b3c9-239834c98dc1' alt='visa logo'></img>
        </a>
      </div>
      <div className='xyz'>
      <div class="AboutUs__Heading-w9osof-3 jwIjiQ"> NOW, <b>GET MORE THAN JUST BUS</b> TICKETS WITH REDBUS!
      <div>
        <img className='abcc' src='https://s2.rdbuz.com/web/images/homeV2/AboutUs/ryde.svg'></img>
        <h1 className='abcc'>Car/Bus Rental</h1>
        </div> 
        <hr></hr>
        <div className='abc'>
          <p>Rent Cabs, Tempo Travellers & Buses with best drivers</p>
        
        <div className='rental'>
        <img src='https://s3.rdbuz.com/web/images/homeV2/AboutUs/ryde_car.svg' className='kZHffz'></img>
          <span className='outstation' >Outstation</span>
         
          
          <br></br>
          <img src='https://s1.rdbuz.com/web/images/homeV2/AboutUs/ryde_car_hourly.svg'
          className='kZHffz'></img>
          <span className='outstation' >Hourly Rental</span>
          
           <br></br>
          
          <img src='https://s2.rdbuz.com/web/images/homeV2/AboutUs/ryde_airport_transport.svg' className='kZHffz'></img>
          <span className='outstation'>Airport Transfers</span>
          <button className='busRent' type='submit'>Book Cab/Bus Rental ➡</button>
          
        </div>
          
         
        </div>
      </div>
      <div className='diSHFQ'>
        
        <div className='ezqKx'>


        </div>
      </div>
      
      <div>
      <img src="https://s3.rdbuz.com/web/images/homeV2/AboutUs/rydePop.svg" width="670px" height="401px" alt="lobImage" className="AboutUs__ImgLob-w9osof-15 bxaEww"></img>
      </div>
      
      </div>
      <section>
        <Enjoy />
      </section>
      <section>
      <Primo />
      </section>

       <section>
        <Partner />
       </section>
       <section>
        <PrivateBus />
       </section>
       <GlobalPresense />
       <section>
        <Footer />
       </section>
       
      
    </main>
  );
  
};

export default App;

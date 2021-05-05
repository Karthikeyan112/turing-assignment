import './App.css';
import iconBriefcase from './assets/icon-briefcase.svg';
import JobCard from './components/JobCard';

function App() {
  const featuredCompanies = [
    'GrandParade',
    'Seargin',
    'DEX Ventures',
    'NBC',
    'SVT SP Zoo',
    'DG Tech',
    'PickSaaS',
    'BlackRose',
    'FrontKom'
  ]
  return (
    <div className="App">
      <header className='header'>
        <div className='background-img'></div>
        <div className='header-container'>
          <h3 className='heading'>Juniors make IT work.</h3>
          <p className='desc'>Hire and invest in highly skilled juniors now.</p>
          <button className='offer-btn'>Post Offer Now</button>
        </div>
      </header>
      <div className='jobOffers'>
        <h3 className='jobOffer_heading'>
          <span>Newest Job Offers</span>
          <span className='view-all'>View all job offers ➜</span>
        </h3>
        <div className='header-container'>
      </div>
      <div className='list-container'>
        <JobCard
          role='Junior Java Developer' 
          postedTime='2 hours ago'
          company='PickSaaS'
          location='Wrclaw, Polska'
          description='I am currently looking for a Java Developer. Project for Public Sector Location: Wrocław (during the pandemic remote work)'
          rate='$ up to PLN 550 net / MD B2B'
        />
        <JobCard
          role='Junior Project Manager' 
          postedTime='3 hours ago'
          company='Frontkom'
          location='Lublin, Polska'
          description='Join us in the Lublin office to build innovative long-term projects. Exciting international clients and partners and a work environment focused on learning and growth awaits you!'
        />
        <JobCard
          role='Junior Project Manager' 
          postedTime='1 day ago'
          company='Frontkom'
          location='Lublin, Polska'
          description='I am currently looking for a Java Developer. Project for Public Sector Location: Wrocław (during the pandemic remote work)'
          rate='$ up to PLN 550 net / MD B2B'
        />
      </div>
    </div>
    <div className='jobOffers'>
      <h3 className='jobOffer_heading'>Featured Companies</h3>
      <div className='company-container'>
        {featuredCompanies.map(compay => (
          <div className='comapany-item'>
            <div className='img-container'>
              <img src={iconBriefcase} alt='company logo' />
            </div>
            <div className='company-name'>{compay}</div>
          </div>
        ))}
        {/* <div className='comapany-item'>
          <div className='img-container'>
            <img src={iconBriefcase} alt='company logo' />
          </div>
          <div className='company-name'>GrandParade</div>
        </div>
        <div className='comapany-item'>
          <div className='img-container'>
            <img src={iconBriefcase} alt='company logo' />
          </div>
          <div className='company-name'>GrandParade</div>
        </div> */}
      </div>
    </div>
  </div>
  );
}

export default App;

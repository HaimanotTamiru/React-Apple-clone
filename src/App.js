

import Header from './Header';
import './commonResource/css/bootstrap.css';
import './commonResource/css/styles.css';
import Footer from './Footer'
import Alert from './Alert';
import IpadProSection from './IpadProSection';
import MacBookSection from './MacBookSection';
import IphoneProSection from './IphoneProSection';
import IphoneLeftRight from './IphoneLeftRight';
import TvLeftRight from './TvLeftRight';
import AppleCardLeftRight from './AppleCardLeftRight';

function App() {
  return (
    <div className="App">
      <Header />
      <Alert />
      <IpadProSection />
      <MacBookSection />
      <IphoneProSection />
      <IphoneLeftRight />
      <TvLeftRight />
      <AppleCardLeftRight/>
      <Footer/>
    </div>
  );
}

export default App;

import Header from './components/Header'
import TextEntry from './components/TextEntry'
import naImage from './images/northAmerica.png'

/*
 * This is a project for an application in which the user may input
 * a country code, and after submitting that information the page will then
 * show a list of the countries needed to travel through in order to get to that
 * country from the United States.
 * 
 * Created by Daren Malaythong
 * malay012@umn.edu
 * 4 March 2021
 */
function App() {

  return (
    <div>
      <div className="container">
        <Header />
        <TextEntry />
      </div>
      <div className="container-right">
        <img className="naImage" src={naImage}></img>
      </div>
    </div>
  );
}

export default App;

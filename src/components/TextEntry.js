import {useState} from 'react'

const TextEntry = (props) => {
    //these declare "state" variables for things that change within the UI
    const [country, setCountry] = useState('')
    const [travelList, setTravelList] = useState('')
    

    //define a "dictionary" to hold the correct inputs and their respective paths
    const countryList = {
        "CAN":["USA", "CAN"],
        "USA":["USA"],
        "MEX":["USA", "MEX"],
        "BLZ":["USA", "MEX", "BLZ"],
        "GTM":["USA", "MEX", "GTM"],
        "SLV":["USA", "MEX", "GTM", "SLV"],
        "HND":["USA", "MEX", "GTM", "HND"],
        "NIC":["USA", "MEX", "GTM", "HND", "NIC"],
        "CRI":["USA", "MEX", "GTM", "HND", "NIC", "CRI"],
        "PAN":["USA", "MEX", "GTM", "HND", "NIC", "CRI", "PAN"],
    }

    //function for text submission event
    const onSubmit = (e) => {
        e.preventDefault()//prevents page from reloading after submission
        /*if the user input is not in the "dictionary", reset the travelList and alert the user.
          else, set the travelList to the corresponding list of country codes.*/
        if(!countryList[country]) {
            setTravelList('')
            if(countryList[country.toUpperCase()]) {
                alert("'" + country + "' is not a valid country code. Did you mean " + country.toUpperCase() + "?")
            } else {
                alert("Please enter a valid country code.")
            }
        } else {
            var outputStr = '';
            for(var i = 0 ; i < countryList[country].length; i++) {
                outputStr += countryList[country][i] + "\n"
            }
            setTravelList(outputStr)
           
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <label> Enter Country Code: </label>
            <input className="textBox" type="text" placeholder="example: CAN" required value={country} onChange={(e) => setCountry(e.target.value)}/>
            <input className="submitButton buttonHover" type="submit" value="Submit" />
            <p className='travelList' style={{whiteSpace: 'pre-wrap'}}>{travelList}</p>
        </form>
    )
}

export default TextEntry

import React, {useState, useEffect} from "react"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {

    
  const [users, setUsers] = useState([])

  const fetchData = () => {
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '17adb86414msh62ef1a99c4f074ap14f21ajsn6db15dcaa42e',
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        }
    };
    
    fetch('https://sportscore1.p.rapidapi.com/sports/1/teams?page=1', options)
    .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setUsers(data.data);
      })
  
  }

  useEffect(() => {
    fetchData()
  }, [])


    return (
        <div className="homepage">
            <main>
                <div className="productlist">
                    {users && users.map((userObj, index)  => (
                        <div className="product" key={userObj.id}>
                               <h2>Day: {userObj.id } </h2>
                        {<img src={`${userObj.logo}`} width="200" height="100" />}
                        </div>
                    ))}
                </div>
                </main>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage
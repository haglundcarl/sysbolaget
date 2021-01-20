import './App.css';
import Amplify, { API, graphqlOperation } from 'aws-amplify/';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';
import {listBeers} from './graphql/queries';
import {updateBeer} from './graphql/mutations';
import { useEffect, useState } from 'react';
import {Paper, IconButton} from '@material-ui/core'
import GradeIcon from '@material-ui/icons/Grade';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DescriptionIcon from '@material-ui/icons/Description';

Amplify.configure(awsconfig)

function App() {

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = async () => {
    try{
      const beerData = await API.graphql(graphqlOperation(listBeers));
      const beerList = beerData.data.listBeers.items;
      console.log('beer list', beerList);
      setBeers(beerList);
    } catch (error) {
      console.log('error on fetching beer', error);
    }
  }

  const addLike = async (idx) => {
    try {
      const beer = beers[idx];
      beer.like = beer.like +1;
      delete beer.createdAt;
      delete beer.updatedAt;

      const beerData = await API.graphql(graphqlOperation(updateBeer, {input: beer}))
      const beerList = [...beers];
      beerList[idx] = beerData.data.updateBeer;
      setBeers(beerList);
    } catch (error) {
      console.log('error on adding like to beer', error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2>
          Sysbolaget 4.0
        </h2>
      </header>
      <div className="beerList">
        {beers.map((beer, idx) => {
          return (
            <Paper variant="outlined" elevation={2} key={`beer${idx}`}>
              <div className="beerCard">
                <div>
                  <IconButton aria-label="like" onClick={() => addLike(idx)}>
                    <FavoriteIcon />
                  </IconButton>
                  {beer.like}
                </div>

                <div className="beerTitle">{beer.title}</div>

                <div className="beerDescription">{beer.description}</div>
              </div>
            </Paper>
          )
        })}
      </div>
    </div>
  );
}

export default withAuthenticator( App );

import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'

const Draughts = () => {
  const [data,setData]=useState([])
  const getMoviesFromApi = () => {
    return fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        return setData(json.movies)
        // setData(response.json)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(data)

  useEffect(() => {
    getMoviesFromApi()
  }, [])
  
  return (
    <View>

    {
      data.map((d,i)=>{
        return <View>
         <Text> {d.title}</Text>
        </View>
      })
    }
    </View>
  )
}

export default Draughts
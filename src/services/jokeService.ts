import axios from 'axios'

export async function getJokes() {
  const res = await axios.get('https://official-joke-api.appspot.com/jokes/ten')
  return res.data
}

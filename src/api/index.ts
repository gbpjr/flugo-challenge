const fetchData = async (query: string) => {
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${query}`)
  const data = await response.json()

  return data
}

export default fetchData
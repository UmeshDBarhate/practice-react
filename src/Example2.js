import React from 'react'
import {
    useQuery
  } from '@tanstack/react-query'

function Example2() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://jsonplaceholder.typicode.com/todos').then(
            (res) => res.json(),
          ),
      })
      console.log(data)
    
      if (isLoading) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message
  return (

    <div>
      <ul>
        {data.map(item=>(
            <li key={item.id}> {item.title}</li>
        ))}
      </ul>
     
    </div>
  )
}

export default Example2
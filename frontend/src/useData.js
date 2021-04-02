import { useState, useEffect } from 'react'
import { client } from './client'

export const statusName = {
  loading: 'loading',
  ready: 'ready',
  error: 'error',
}

export const useData = (key, ...clientArgs) => {
  const [ status, setStatus ] = useState(statusName.loading)
  const [ data, setData ] = useState(null)
  useEffect(() => {
    client.fetch(...clientArgs).then(data => {
      setData(data)
      setStatus(statusName.ready)
    })
    .catch(err => {
      setData(err)
      setStatus(statusName.error)
    })
  }, [key])

  return { status, data }
}
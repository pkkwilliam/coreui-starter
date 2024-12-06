import { useEffect, useState } from 'react'

const useUser = (userId: string) => {
  const [user, setUser] = useState<string>('')

  const fetchUser = async () => {
    setUser(`${userId}, update -- 1`)
  }

  useEffect(() => {
    fetchUser()
  }, [userId])

  return { fetchUser, user }
}

export default useUser

import { useEffect } from 'react';
import { checkAuth } from '../../services/auth';
export default function MePage() {
  useEffect(() => {
    checkAuth()
  },[])
    return <div style={{margin:'auto',width:200}}>Token is valid</div>
}
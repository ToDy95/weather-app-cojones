import React, { useRef, useState } from 'react';
import { Building2, Moon, Sun, Wind } from 'lucide-react';
import Spinner from './components/Spinner';
import { toast } from 'react-toastify'
import { convertTime } from './utils/utils';
import Card from './components/Card';
import { getData } from './utils/utils';
export default function App() {
  const ref = useRef();
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const handlerClick = async () => {
    setLoading(true)
    toast.info("Searching ...")
    getData(`${process.env.REACT_APP_BASE_URL}${ref.current}&appid=${process.env.REACT_APP_API_KEY
      }&units=metric`).then(res => setData(res)).then(() => {
        setLoading(false)
        toast.success("Success...")
      }).catch((error) => {
        toast.error(error.message)
        setTimeout(() => {
          window.location.reload()
        }, 2000);
      })
  }
  return (
    <div className='w-screen h-screen bg-sky flex flex-col py-10 items-center justify-center'>
      <div className='flex gap-4'>
        <div className='relative'>
          <input type='search' placeholder='Type any city ...' className='rounded-lg pl-6 bg-blue-500 placeholder-blue-950 w-96 h-10 focus-visible:outline-none'
            onChange={e => (ref.current = e.target.value)}

          />
          <Building2 className='absolute top-2 w-4 left-1' />
        </div>
        <button className='px-4 border border-gray-700 rounded-lg bg-gray-400 flex items-center' onClick={handlerClick}>{
          loading ? <Spinner width={20} height={20} /> : "Search"
        }</button>
      </div>
      {Object.keys(data).length > 0 && <Card data={data} />
      }
    </div>
  )
}

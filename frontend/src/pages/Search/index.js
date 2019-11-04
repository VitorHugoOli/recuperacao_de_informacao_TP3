import React, {useState} from 'react';
import api from '../../services/api'


import search from '../../assets/search.png';

export default function Search({history}){
    const [termo, setTermo] = useState('');

    async function handleSubmit(){
<<<<<<< HEAD
        const result = await api.get('/search/belo')

        console.log(result.data)
=======
<<<<<<< HEAD
        
        const response = await api.get('/search', { headers: {termo}})
        console.log(response)
=======

        const result = await axios.post('http://127.0.0.1:8000/search',{"teste":"teste"})

        console.log(result)
>>>>>>> e4fa6927fac2494d73c269ad025d2172cc909696
>>>>>>> e4f31e4c110f473048b68f088d8b20c1399761bb

        history.push('/results');
    }

    async function goToNewUp(){
        history.push('/newupload');
    }
    return (
        <>
        
        <div className="search">
          <input 
            type="text" 
            id="searchtext" 
            placeholder="Faça sua busca aqui"
            value={termo}
            onChange={event => setTermo(event.target.value)}
          />
          <button type="submit" className="search" onClick={handleSubmit}>
             <img src={search} alt="Search City"/>
          </button>
        </div>

        <div className="upload">
            <button type="button" onClick={goToNewUp}>
                Fazer Upload
            </button>
        </div>
        
        </>
    );
}
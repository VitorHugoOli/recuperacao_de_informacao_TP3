import React, {useState} from 'react';
import api from '../../services/api'


import search from '../../assets/search.png';

export default function Search({history}){
    const [termo, setTermo] = useState('');

    async function handleSubmit(){
        console.log("A");
        const termoAux = [{
            "search": {termo}
        }]
        const result = await api.get('/search', (req, res) => {
            res.json(termoAux)
          });
        console.log(result)

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
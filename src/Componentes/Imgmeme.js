import React, {useState} from 'react';

const Imgmeme = ()=>{
    
    const [texto, setTexto] = useState() ;

    const textomeme = (e) => {
        setTexto(e.target.value);

    }
    
    return(
        <div>
            <h1 className='mt-5 mb-3 text-light'>Edita tu propio meme</h1>

            <h2 className='mt-2 mb-3'>Escribi tu frase</h2>
            <input onChange={textomeme} className='form-control w-25' type='text' placeholder='Pone tu frase' name='meme'/>

            <h2 className='mt-2 mb-3'>Escribi tu frase</h2>



        </div>
    );
}

export default Imgmeme;
<<<<<<< HEAD
import React, {useState} from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const initialValue = {
    title: '',
    image: '',
    price: 0,
    url: '',
};



function Cadastrar(){
    //
    const [values, setValues] = useState(initialValue);

    //
    const navigate = useNavigate();

    // 
    function onSubmit(evento){
        evento.preventDefault(); // não executa o comportamento default do form

        const url = '/Games';

        api.post(url, values)
            .then( () =>{
                navigate('/');
            })
    }

    //
    function onChange(ev){
        const {name, value } = ev.target
        // console.log({name, value});

        setValues({ ...values, [name]:value})
        // console.log(values);
    }

    return(
        <>
            <h1>Cadastre um Novo Jogo</h1>
            <form onSubmit={onSubmit}>
                <div className={styles.gamesFormGroup}>
                    <label htmlFor="title">Nome do Jogo</label>
                    <input type="text" id="title" name="title" onChange={onChange}/>
                </div>
                <div className={styles.gamesFormGroup}>
                    <label htmlFor="url">Url do Jogo</label>
                    <input type="text" id="url" name="url" onChange={onChange}/>
                </div>
                <div className={styles.gamesFormGroup}>
                    <label htmlFor="image">Url/Image</label>
                    <input type="text" id="image" name="image" onChange={onChange}/>
                </div>
                <div className={styles.gamesFormGroup}>
                    <label htmlFor="price">Preço</label>
                    <input type="text" id="price" name="price" onChange={onChange}/>
                </div>
                <button type="submit">Salvar Jogo</button>
            </form>            
        </>
    )
=======
import './style.module.css'
import styles from './style.module.css'

function Cadastrar() {
    const CadastrarLivro = (e) => {
        e.preventDefault()
    }
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <h1>Cadastrar Jogo</h1>
                <form onSubmit={CadastrarLivro}>
                    <label htmlFor="nome">
                        Nome do Jogo:
                        <input type="text" name="nome" />
                    </label>
                    <label htmlFor="image">
                        Url da Imagem:
                        <input type="text" name="image" />
                    </label>
                    <label htmlFor="url">
                        Url do Jogo:
                        <input type="text" name="url" />
                    </label>
                    <label htmlFor="price">
                        Preço:
                        <input type="text" name="price" />
                    </label>
                    <div className={styles.wrap}>
                        <button className={styles.button}>Cadastrar Jogo</button>
                    </div>
                </form>
            </div>
        </div>
    );
>>>>>>> ebf72c8c9466bd20e254d77abde39528732c1ad6
}

export default Cadastrar;
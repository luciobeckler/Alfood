import React, { useState } from 'react';
import { useEffect } from 'react';
import type IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';
import axios from 'axios';

const ListaRestaurantes = () => {
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

    useEffect(() => {
        // get restaurantes
        axios
            .get('http://0.0.0.0:8000/api/v1/restaurantes/')
            .then((response) => {
                setRestaurantes(response.data.results);
                console.log(restaurantes);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section className={style.ListaRestaurantes}>
            <h1>
                Os restaurantes mais <em>bacanas</em>!
            </h1>
            {restaurantes?.map((item) => (
                <Restaurante restaurante={item} key={item.id} />
            ))}
        </section>
    );
};

export default ListaRestaurantes;

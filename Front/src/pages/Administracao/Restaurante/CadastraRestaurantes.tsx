import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { error } from 'console';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPaginacao } from '../../../interfaces/IPaginacao';
import IRestaurante from '../../../interfaces/IRestaurante';

export default function CadastraRestaurantes() {
    const { id } = useParams();

    const [nomeRestaurante, setNomeRestaurante] = useState('');

    useEffect(() => {
        if (id) {
            axios
                .get('http://0.0.0.0:8000/api/v2/restaurantes/')
                .then((response) => {
                    response.data.map((restaurante: IRestaurante) => {
                        if (restaurante.id == parseInt(id))
                            setNomeRestaurante(restaurante.nome);
                    });
                });
        }
    });

    async function aoSubmeterFORM(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (id) {
        } else {
            try {
                await axios.post('http://0.0.0.0:8000/api/v2/restaurantes/', {
                    nome: nomeRestaurante,
                });
                setNomeRestaurante('');
                alert('Restaurante cadastrado com sucesso');
            } catch (error) {
                console.log(error);
            }
        }
    }

    /* Edita o restaurante do ID */
    if (id) {
        return (
            <form onSubmit={aoSubmeterFORM}>
                <TextField
                    value={nomeRestaurante}
                    onChange={(event) => {
                        setNomeRestaurante(event.target.value);
                    }}
                    id='standard-basic'
                    label='Standard'
                    variant='standard'
                />
                <Button type='submit' variant='outlined'>
                    Outlined
                </Button>
            </form>
        );
    } else {
        /* Cadastra um novo restaurante */
        return (
            <form onSubmit={aoSubmeterFORM}>
                <TextField
                    value={nomeRestaurante}
                    onChange={(event) => {
                        setNomeRestaurante(event.target.value);
                    }}
                    id='standard-basic'
                    label='Novo restaurante'
                    variant='standard'
                />
                <Button type='submit' variant='outlined'>
                    Outlined
                </Button>
            </form>
        );
    }
}

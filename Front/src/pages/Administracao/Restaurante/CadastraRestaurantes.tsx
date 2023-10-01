import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { error } from 'console';
import React, { useState } from 'react';

export default function CadastraRestaurantes() {
    const [nomeRestaurante, setNomeRestaurante] = useState('');

    async function aoSubmeterFORM(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(nomeRestaurante);
        try {
            const response = await axios.post(
                'http://0.0.0.0:8000/api/v2/restaurantes/',
                { nome: nomeRestaurante }
            );
            setNomeRestaurante('');
        } catch (error) {
            console.log(error);
        }
    }

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
}

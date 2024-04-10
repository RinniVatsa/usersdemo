import React, { useEffect, useState } from 'react'
import data from './data'
import './App.css'

function FormData() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')

    function saveData() {
        console.log(name, email, mobile)
        let data = { name, email, mobile }
        fetch('http://localhost:3000/data', {
            method: 'POST',
            header: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((result) => {
            console.log('result')
        })
    }
    return ( <
        div className = "App" >
        <
        div className = "max-w-md mx-auto" > < /div>{' '} <
        input type = "text"
        placeholder = "name"
        value = { name }
        onChange = {
            (e) => {
                setName(e.target.value)
            }
        }
        />{' '} <
        br / > < br / >
        <
        input type = "text"
        name = "email"
        placeholder = "email"
        value = { email }
        onChange = {
            (e) => {
                setEmail(e.target.value)
            }
        }
        />{' '} <
        br / > < br / >
        <
        input type = "text"
        name = "mobile"
        placeholder = "mobile"
        pla value = { mobile }
        onChange = {
            (e) => {
                setMobile(e.target.value)
            }
        }
        />{' '} <
        br / > < br / >
        <
        button type = "button"
        onClick = { saveData } > { ' ' }
        Save New User { ' ' } <
        /button>{' '} <
        /div>
    )
}
export default FormData
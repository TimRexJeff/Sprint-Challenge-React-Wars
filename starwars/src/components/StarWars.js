import React from "react"
import './StarWars.scss'
import { Card, Image } from 'semantic-ui-react'

function CharCard(props) {
    console.log(props)
    return (
        <Card className="char-card">
            <Image src={props.url}/>
            <h2>{props.name}</h2>
            <Card.Content>
                <div>{props.birth_year}</div>
                <Card.Description className="content">
                    {props.homeworld}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default CharCard
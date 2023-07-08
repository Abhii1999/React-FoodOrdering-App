import React from 'react'
import classes from './Meals.module.css'
import Card from '../UI/Card'

const dish = [
    {
        id : 1,
        name :'Shruti',
        description :'bff',
        price : 20
    },
    {
        id : 2,
        name :'Abhishek',
        description :'bff',
        price : 2000
    },
]

const Meals = () => {
  return (
    <div className={classes.container}>
        <Card dish={dish}></Card>
    </div>
  )
}

export default Meals
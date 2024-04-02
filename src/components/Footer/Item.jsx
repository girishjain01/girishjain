import React from 'react'

const Item = ({Links,title}) => {
  return (
    <ul>
<<<<<<< HEAD
        <h2 className='mb1 font-semibold'>{title}</h2>
    {
        Links.map((Link)=>(
            <li key={Link.name}>
                <a className='text-gray-400 hover:text-teal-400 duration-300 text-sm- cursor-pointer text-4xl' href={Link.link}>{Link.name}</a>
=======
        <h1 className='mb1 font-semibold'>{title}</h1>
    {
        Links.map((Link)=>(
            <li key={Link.name}>
                <a className='text-gray-400 hover:text-teal-400 duration-300 text-sm- cursor-pointer' href={Link.link}>{Link.name}</a>
>>>>>>> c60fca01c9bc1ff1078bb5b84581ee8c9ec7da6d
            </li>
        ))
    }


    </ul>
)
}

<<<<<<< HEAD
export default Item;
=======
export default Item
>>>>>>> c60fca01c9bc1ff1078bb5b84581ee8c9ec7da6d

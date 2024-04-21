import React from 'react'

const Item = ({Links,title}) => {
  return (
    <ul>
        <h2 className='mb1 font-semibold'>{title}</h2>
    {
        Links.map((Link)=>(
            <li key={Link.name}>
                <a className='text-gray-400 hover:text-teal-400 duration-300 text-sm- cursor-pointer text-4xl' href={Link.link}>{Link.name}</a>
            </li>
        ))
    }


    </ul>
)
}

export default Item;

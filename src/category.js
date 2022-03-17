import React from 'react'

export default function Category({category, filterItems}) {
    return (
        <>
        {
            category.map((value, index)=>{
                return(
                    <button onClick={()=>filterItems(value)} key={index}>{value}</button>
                )
            })
        }
        </>
       
    )
}

import React from 'react'
interface Props {
    onClick: () => void,
    text: string
}
export default function Dugme(props: Props) {
    return (
        <td className=' fluid text-center' onClick={props.onClick}>
            <button className='btn fluid'>{props.text}</button>
        </td>
    )
}

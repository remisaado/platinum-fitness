import React from 'react';

const FormComponent = () => {
    return (
    <ul className='form-component'>
        <li>
            <label> One
                <input
                    type="radio"
                    name="One"/>
            </label>
        </li>
        <li>
            <label> Two
                <input
                    type="radio"
                    name="Two"/>
            </label>
        </li>
        <li>
            <label> Three
                <input
                    type="radio"
                    name="Three"/>
            </label>
        </li>
        <li>
            <label> Four
                <input
                    type="radio"
                    name="Four"/>
            </label>
        </li>
    </ul>
  );
}



export {FormComponent};
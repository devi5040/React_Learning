import React from 'react'
import { useFormStatus } from 'react-dom';// It should not be used in same component as formactionstate component it should be used in any nested component
function Submit() {
    const { pending } = useFormStatus();
    return (
        <p className="actions">
            <button type="submit" disabled={ pending }>{ pending ? 'Submitting...' : 'Submit' }</button>
        </p>
    )
}

export default Submit

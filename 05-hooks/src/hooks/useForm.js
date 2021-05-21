import { useState } from "react"


const useForm = (initialState = {}) => {
    const [values, setstate] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setstate({
            ...values,
            [target.name]: target.value
        })
    }

    return[ values, handleInputChange ];

}


export default useForm;

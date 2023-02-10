
import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setformValidation] = useState({});

    useEffect(() => {
        createValidators();
    }, [ formState ])

    useEffect( () =>{
        setFormState( initialForm );
    }, [initialForm] )


    const isFormValid = useMemo(() => {
        return Object.keys(formValidation).every( key => formValidation[key] === null );
    } , [formValidation])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }
    

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        const formCheckedValues={};

        for ( const formField of Object.keys( formValidations ) ){
            const [ fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setformValidation( formCheckedValues );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



const WorkoutForm = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useWorkoutsContext();
    const MySwal = withReactContent(Swal);


    const { register: registerWorkout, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            title: "",
            load: "",
            reps: "",
        },
    });

    const onSubmit = async (formData) => { 

        const response = await fetch('http://localhost:4000/api/workouts', {
          method: 'POST',
          headers: {"Content-Type": "application/json" },
          body: JSON.stringify(formData)
        })
        const data = await response.json();
        if (!response.ok) {
            setError(data.error)
            MySwal.fire({
                icon: "error",
                title: "Error!",
                text: data.error
            });
        }

        if (response.ok) {
            setError(null)
            console.log('new workout added:', data)
            dispatch({type: 'CREATE_WORKOUT', payload: data })
            reset();
            MySwal.fire({
                icon: "success",
                title: "Created!",
                text:'Workout has been Created.',
                showConfirmButton: false,
                timer: 2000
            });
        }

    }

    return (
        <>
            <form className="create" onSubmit={handleSubmit(onSubmit)}> 
                <h5>Add a New Workout</h5>

                <label>Exercise Title:</label>
                <input 
                    type="text" 
                    {...registerWorkout('title', {required: 'Title is required'})} 
                />
                {errors.title && <p className="error">{errors.title.message}</p>}


                <label>Load (in kg):</label>
                <input 
                    type="number" 
                    {...registerWorkout('load', {required: 'Load is required'})} 

                />
                {errors.load && <p className="error">{errors.load.message}</p>}


                <label>Number of Reps:</label>
                <input 
                    type="number" 
                    {...registerWorkout('reps', {required: 'Reps is required'})} 
                />
                {errors.reps && <p className="error">{errors.reps.message}</p>}


                <button>Add Workout</button>
                {error && <div className="error">{error}</div>}

            </form>
        </>
    )
}

export default WorkoutForm;
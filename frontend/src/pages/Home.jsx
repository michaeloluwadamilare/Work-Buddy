import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";



const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext();
    useEffect(() => {
        const fetchWorkout = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/workouts');
                if (!response.ok) {
                    throw new Error('Failed to fetch workouts');
                }
                const data = await response.json();
                dispatch({type: 'GET_WORKOUTS', payload: data })

            } catch (error) {
                console.log(error);
            }
        }
        fetchWorkout();
    }, [])
    return (
        <>
            <div className="home">
                <div className="workouts">
                    { workouts && workouts.map( workout => (
                        <WorkoutDetails key={workout._id} workout={workout} />
                    ))}
                </div>
                <WorkoutForm />
            </div>
        </>
    )

}

export default Home;
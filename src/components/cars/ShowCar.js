import { 
    useState,
    useEffect, 
} from 'react'

import { 
    useParams,
    useNavigate 
} from 'react-router-dom'
// useParams will allow us to see our parameters
// useNavigate will allow us to navigate to a specific page

import { 
    Container,
    Card 
} from 'react-bootstrap'

import LoadingScreen from '../shared/LoadingScreen'
import { getOneCar } from '../../api/cars'
import messages from '../shared/AutoDismissAlert/messages'

// We need to get the car's id from the parameters
// Then we need to make a request to the api
// Then we need to display the results in this component

const ShowCar = (props) => {
    const [car, setCar] = useState(null)

    const { id } = useParams()
    const navigate = useNavigate()
    // useNavigate returns a function
    // we can call that function to redirect the user wherever we want to

    const { msgAlert } = props
    // destructuring to get the id value from our route parameters

    useEffect(() => {
        getOneCar(id)
            .then(res => setCar(res.data.car))
            .catch(err => {                   
                msgAlert({
                    heading: 'Error getting car',
                    message: messages.getCarsFailure,
                    variant: 'danger'
                })
                navigate('/')
                //navigate back to the home page if there's an error fetching
            })
    }, [])

    if (!car) {
        return <LoadingScreen />
    }

    return (
        <Container className="fluid">
            <Card>
                <Card.Header>{ car.fullTitle }</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div><small>name: { car.name }</small></div>
                        <div><small>make: { car.make }</small></div>
                        <div><small>model: { car.model }</small></div>
                        <div><small>Year: { car.year }</small></div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ShowCar
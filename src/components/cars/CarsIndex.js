import { 
    useState, 
    useEffect 
} from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import LoadingScreen from '../shared/LoadingScreen'
import { getAllCars } from '../../api/cars'
import messages from '../shared/AutoDismissAlert/messages'

// CarsIndex should make a request to the api
// To get all cars
// Then display them when it gets them

// style for our card container
const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const CarsIndex = (props) => {
    const [cars, setCars] = useState(null)
    const [error, setError] = useState(false)

    const { msgAlert } = props

    console.log('Props in CarsIndex', props)

    useEffect(() => {
        console.log(props)
        getAllCars()
            .then(res => setCars(res.data.cars))
            .catch(err => {
                msgAlert({
                    heading: 'Error Getting Cars',
                    message: messages.getCarsFailure,
                    variant: 'danger',
                })
                setError(true)
            })
    }, [])

    if (error) {
        return <p>Error!</p>
    }

    // If Cars haven't been loaded yet, show a loading message
    if (!cars) {
        return <LoadingScreen />
    } else if (cars.length === 0) {
        return <p>No cars yet. Better add some.</p>
    }

    const carCards = cars.map(car => (
        <Card style={{ width: '30%', margin: 5}} key={ car.id }>
            <Card.Header>{ car.fullTitle }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={`/cars/${car.id}`}>View { car.name }</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        <div style={ cardContainerStyle }>
            { carCards }
        </div>
    )
}

export default CarsIndex
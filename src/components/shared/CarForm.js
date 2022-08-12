import { 
    Form,
    Button, 
    Container
} from 'react-bootstrap'

const CarForm = (props) => {
    const { car, handleChange, heading, handleSubmit } = props

    return (
        <Container>
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                    placeholder="What is your car's name?"
                    name="name"
                    id="name"
                    value={ car.name }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="make">Make</Form.Label>
                <Form.Control
                    placeholder="What s the make?"
                    name="make"
                    id="make"
                    value={ car.type }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="model">Model</Form.Label>
                <Form.Control
                    placeholder="What is the model?"
                    name="model"
                    id="model"
                    value={ car.type }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="year">Year</Form.Label>
                <Form.Control
                    placeholder="What year was the car produced?"
                    type="number"
                    name="year"
                    id="year"
                    value={ car.year }
                    onChange={ handleChange }
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default CarForm
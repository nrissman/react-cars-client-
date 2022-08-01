import { 
    Form,
    Button, 
} from 'react-bootstrap'

const CarForm = (props) => {
    const { car, handleChange } = props

    return (
        <Form>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
                placeholder="What is your car's name?"
                name="name"
                id="name"
                value={ car.name }
                onChange={ handleChange }
            />
            <Form.Label htmlFor="type">Type</Form.Label>
            <Form.Control
                placeholder="What kind of car is this?"
                name="type"
                id="type"
                value={ car.type }
                onChange={ handleChange }
            />
            <Form.Label htmlFor="age">Age</Form.Label>
            <Form.Control
                placeholder="How old is your car?"
                type="number"
                name="age"
                id="age"
                value={ car.age }
                onChange={ handleChange }
            />
            <Form.Check
                label="Is this car adoptable?"
                name="adoptable"
                defaultChecked={ car.adoptable  }
                onChange={ handleChange }
            />
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default CarForm
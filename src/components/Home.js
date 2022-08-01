import CarsIndex from './cars/CarsIndex'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const { msgAlert } = props

	return (
		<>
			<h2>See the Cars</h2>
			<CarsIndex msgAlert={ msgAlert } />
		</>
	)
}

export default Home
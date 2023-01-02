import Jumbotron from './Jumbotron'
import About from './about'
import Footer from './footer'

export default function Page() {
    return (
        <>
            <Jumbotron />
            <div className="w-11/12 md:w-8/12 mx-auto">
                <About />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

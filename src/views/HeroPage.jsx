// Assets
import PDF from '../assets/Marquez-cv.pdf'
import myPhoto from '../assets/personal.jpg'

const HeroPage = () => {

    return (
        <section className="text-gray-600 body-font pt-16 max-w-full h-screen flex md:py-24" id="hero">
            <div className="container mx-auto flex px-5 pb-8 pt-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg: md: flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi there! I'm Jose Eduardo
                    <br />
                    </h1>
                    <p className="mb-8 leading-relaxed">I am on a journey to become a great web developer, with the top tools in the industry, constantly updating and practicing hard to achieve it</p>
                    <div className="flex justify-center">
                        <a href={PDF} download="Marquez, Jose - CV.pdf">
                            <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Download CV</button>
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="w-full h-full flex justify-center align-center">
                        <img className="object-cover object-center rounded" alt="hero" src={myPhoto} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroPage;
const Skills = () => {
    return(
        <section className="text-gray-600 body-font max-w-full">

            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 uppercase">S k i l l s</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">These are the technical skills I have for web development.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex">
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="text-yellow-500 mb-5 flex-shrink-0">
                            <i className="fab fa-react bg-yellow-100 rounded-full p-3.5 "></i>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Front end</h2>
                            <p className="leading-relaxed text-base">
                                - Fundamental of web development HTML, CSS and JS.
                            </p>
                            <p className="leading-relaxed text-base">
                                - React with hooks, router, countext and Redux.
                            </p>
                            <p className="leading-relaxed text-base md:mb-4">
                                - Tailwind and bootstrap for layout.
                            </p>
                            <a className="mt-3 text-yellow-500 inline-flex items-center">
                                Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2 align-baseline" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="text-yellow-500 mb-5 flex-shrink-0">
                            <i class="fab fa-node bg-yellow-100 rounded-full px-2 py-4 text-6xl"></i>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Back end</h2>
                            <p className="leading-relaxed text-base">
                                - Restful API's with Node.js (Python comming soon).
                            </p>
                            <p className="leading-relaxed text-base">
                                - Http petitions.
                            </p>
                            <p className="leading-relaxed text-base">
                                - Express for framework.
                            </p>
                            <p className="leading-relaxed text-base md:mb-4">
                                - Database conection.
                            </p> 
                            <a className="mt-3 text-yellow-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="text-yellow-500 mb-5 flex-shrink-0">
                            <i class="fas fa-database bg-yellow-100 py-4 px-5 rounded-full text-6xl"></i>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Database</h2>
                            <p className="leading-relaxed text-base">
                                - PostgresSQL
                            </p>
                            <p className="leading-relaxed text-base">
                                - MongoDB
                            </p>
                            <p className="leading-relaxed text-base">
                                - SQL commands
                            </p>
                            <a className="mt-3 text-yellow-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills;
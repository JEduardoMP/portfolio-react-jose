

const Portfolio = () => {
    return(
        <section>
            <h2 className="text-4xl">Portfolio</h2>
        
            <p className="font-light py-2 mb-10">In this section I will leave you a link to my projects in GitHub, and some deploys on Netlify</p>
            
            <figure className="mb-8">
                <a href="/about"><img src="#" alt="To-Do List" className="w-full h-24 border border-radius-3"/></a>
                <figcaption className="font-light">To-Do List making with React Context and Reducer</figcaption>
            </figure>

            <figure className="mb-8">
                <a href="/portfolio"><img src="#" alt="Weather condition" className="w-full h-24 border border-radius-3"/></a>
                <figcaption className="font-light">Weather conditions and diferents countries data</figcaption>
            </figure>

        </section>
    )
}

export default Portfolio;
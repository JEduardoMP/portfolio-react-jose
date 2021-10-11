

const Portfolio = () => {
    return(
        <section>
            <h2 className="text-4xl">Portfolio</h2>
        
            <p className="font-light py-2 mb-6">In this section I will leave you a link to my projects in GitHub, and some deploys on Netlify.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quidem optio consequatur unde, minima eveniet cupiditate odit. Ipsa natus ab reiciendis a, quos ipsam repellendus exercitationem inventore assumenda ad. Labore.</p>

            <a href="https://www.github.com/JEduardoMP"><i class="fab fa-github"></i></a>
            
            <figure className="mb-8 border p-px rounded">
                <a href="https://todolistjose.netlify.app/"><img src="https://todolistjose.netlify.app/" alt="To-Do List" className="w-full h-24 border rounded"/></a>
                <a href="https://todolistjose.netlify.app/"><figcaption className="font-light">To-Do List made with React Context and Reducer</figcaption></a>
            </figure>

            <figure className="mb-8 border p-px rounded">
                <a href="/portfolio"><img src="#" alt="Weather condition" className="w-full h-24 border rounded"/></a>
                <a href="https://todolistjose.netlify.app/"><figcaption className="font-light">Weather conditions and diferents countries data</figcaption></a>
            </figure>

            <figure className="mb-8 border p-px rounded">
                <a href="https://ecommerce-jose.netlify.app/"><img src="https://ecommerce-jose.netlify.app/" alt="E-commerce" className="w-full h-24 border rounded"/></a>
                <a href=" https://ecommerce-jose.netlify.app/"><figcaption className="font-light">E-commerce</figcaption></a>
            </figure>

        </section>
    )
}

export default Portfolio;
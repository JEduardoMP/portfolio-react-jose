import ToDoListImg from "../assets/todolist.jpg"
import ecommerceImg from "../assets/ecommercer.jpg"
const Portfolio = () => {
    return(
        <section>
            <h2 className="text-4xl">Portfolio</h2>
        
            <p className="font-light py-2 mb-4">In this section I will leave you a link to my projects in GitHub, and some deploys on Netlify.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quidem optio consequatur unde, minima eveniet cupiditate odit. Ipsa natus ab reiciendis a, quos ipsam repellendus exercitationem inventore assumenda ad. Labore.</p>

            <a href="https://www.github.com/JEduardoMP"><i class="fab fa-github"></i></a>
            
            <figure className="mb-8 p-px rounded-xl">
                <div className="w-full h-24 overflow-hidden shadow-inner">
                    <a href="https://todolistjose.netlify.app/"><img src={ToDoListImg} alt="To-Do List" className="w-full h-screen rounded-xl"/></a>
                </div>
                <a href="https://todolistjose.netlify.app/"><figcaption className="font-normal pl-0.5 border-2 rounded-b-xl">To-Do List made with React Context and Reducer</figcaption></a>
            </figure>

            <figure className="mb-8 p-px rounded-xl">
                <div className="w-full h-24 overflow-hidden">
                    <a href="/portfolio"><img src="#" alt="Weather condition" className="w-full h-auto rounded-xl"/></a>
                </div>
                <a href="https://countriesandweather-api.netlify.app/"><figcaption className="font-normal pl-0.5 border-2 rounded-b-xl">Weather conditions and diferents countries data</figcaption></a>
            </figure>

            <figure className="mb-8 p-px rounded-xl">
                <div className="w-full h-24 overflow-hidden shadow-inner">
                    <a href="https://ecommerce-jose.netlify.app/"><img src={ecommerceImg} alt="E-commerce" className="w-full h-screen rounded-xl"/></a>
                </div>
                <a href=" https://ecommerce-jose.netlify.app/"><figcaption className="font-normal pl-0.5 border-2 rounded-b-xl">E-commerce UI</figcaption></a>
            </figure>

            <footer>
                <p className="font-light text-xs">* Some pages could on develop or edition</p>
                <p className="font-light text-xs">* All proyects are made with React</p>
            </footer>
            <br />

        </section>
    )
}

export default Portfolio;
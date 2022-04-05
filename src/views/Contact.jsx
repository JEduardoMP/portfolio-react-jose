import { useEffect, useRef } from "react";

// Custom hooks
import { observer } from "../hooks/observer";


const Contact = () => {

    const contactRef = useRef();

    useEffect(() => {
        observer.observe(contactRef.current)
    })

    return(
        <section ref={contactRef} className="text-gray-600 body-font relative px-5 w-full pb-24 card" id="contact-section">

            <div class="container pb-16 px-5 mx-auto text-center">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 uppercase">C o n t a c t</h1>
                <div class="flex mt-6 justify-center">
                    <div class="w-16 h-1 rounded-full bg-yellow-500 inline-flex">
                    </div>
                </div>
            </div>

            <div className="container mx-auto flex sm:flex-nowrap flex-wrap">
                
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe className="absolute inset-0" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60711.799522073394!2d-92.95398006995023!3d18.002567016712185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1637351342709!5m2!1ses-419!2smx" width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">Villahermosa, Tabasco. Mexico</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a className="text-yellow-500 leading-relaxed">eduardomarque2009@gmail.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">+52 993-205-5880</p>
                        </div>
                    </div>
                </div>

                <div className="bg-primary lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Me!</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Please, share with me any doubt or question you may have.</p>
                    <form name="contact" method="POST" netlify>
                        <div className="relative mb-4">
                            <label for="boxName" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="boxName" name="boxName" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
                        </div>
                        <div className="relative mb-4">
                            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <input type="hidden" name="form-name" value="contact" />
                        <button onClick="submit" className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Send</button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact;

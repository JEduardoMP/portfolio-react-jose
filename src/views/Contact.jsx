

const Contact = () => {
    return(
        <section className="text-center w-full">
            <h2 className="text-4xl lg:text-left">Contact me!</h2>
            <p className="font-light py-2 mb-10 lg:text-left">If you’d like to chat about a project or any work, please let me know.</p>

            <form action="" className="flex justify-center aling-center flex-col md:grid md:grid-cols-2 md:gap-3 lg:grid-cols-3">
                <div className="w-full flex flex-col text-center mb-8 lg:text-left">
                    <label htmlFor="">Name <span className="text-red font-bold w-full">*</span></label>
                    <input type="text" name="name" id=""  className="p-2 text-center lg:text-left" required/>
                </div>

                <div className="w-full flex flex-col text-center mb-8 lg:text-left">
                        <label htmlFor="">Email <span className="text-red font-bold">*</span></label>
                        <input type="email" name="email" id=""  className="p-2 text-center lg:text-left" required/>
                </div>

                <div className="w-full flex flex-col text-center mb-8 lg:text-left">
                    <label htmlFor="">Subject <span className="text-red font-bold">*</span></label>
                    <input type="text" name="Subject" id=""  className="p-2 text-center lg:text-left" required/>
                </div>

                <div className="w-full flex flex-col text-center md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-4 lg:text-left">
                    <label htmlFor="">Message <span className="text-red font-bold">*</span></label>
                    <textarea type="text" name="message" id=""  className="p-8"/>
                </div>
                <input type="submit" name="Submit" id="" className="mb-8 p-4 bg-gold hover:bg-yellow md:col-start-1 col-end-3 lg:col-start-3 lg:col-end-4 lg:w-5/6 lg:flex-row-reverse "/>
            </form>
        </section>
    )
}

export default Contact;
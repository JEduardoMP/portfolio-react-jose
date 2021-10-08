

const Contact = () => {
    return(
        <section>
            <h2 className="text-4xl">Contact me!</h2>
            <p className="font-light py-2 mb-10">If you’d like to chat about a project or any work, please let me know.</p>

            <form action="">
                <div className="display-block w-2/4">
                <label htmlFor="">Name <span className="text-red font-bold">*</span></label>
                <input type="text" name="" id="" />
                </div>

                <div className="display-block w-2/4">
                <label htmlFor="">Email <span className="text-red font-bold">*</span></label>
                <input type="email" name="" id="" />
                </div>

                <div className="display-block w-2/4">
                <label htmlFor="">Subject <span className="text-red font-bold">*</span></label>
                <input type="text" name="Subject" id="" />
                </div>

                <div className="display-block w-2/4">
                <label htmlFor="">Message <span className="text-red font-bold">*</span></label>
                <input type="text" name="" id="" />
                </div>
            </form>
        </section>
    )
}

export default Contact;
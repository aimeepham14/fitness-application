import Logo from "@/assets/Logo.png"

const Footer= () => {
  return <footer className="bg-primary-100 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <img alt='logo' src={Logo} />
            <p className="my-5">
                This statement is for anyone who thinks this is a real company. This is just for a personal project.
            </p>
            <p>© Evogym All Rights Reserved.</p>
        </div>
        {/* <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Add a description here.</p>
            <p className="my-5">Add a description here.</p>
            <p>Add a description here.</p>
        </div> */}
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">San Francisco, CA</p>
            <p>(123)-456-7890</p>
        </div>
    </div>
  </footer>
}

export default Footer; 
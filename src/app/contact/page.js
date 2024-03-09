import Image from "next/image"

const ContactUs = () => {
    return (
        <div className='w-full h-[100vh] flex flex-col'>
            <div>
                <p className='mt-40 p-8'>If you have any queries please feel free to contact us, we would be delited to help you.</p>
            </div>
            <div className='p-8 flex justify-around'>
                <div>
                    <Image src={'/image/professional.png'}
                        height={250}
                        width={250}></Image>
                </div>
                <div>
                    <div>
                        <p>Phone.</p>
                    </div>
                    <div>
                        <p>Email</p>
                    </div>
                    <div>
                        <p>Rahul Chawk, Katras, Dhanbad, Jharkhand - 828113</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs

import Service from "@/components/Service";

function services({ services }) {

    return (<>
        <div style={{
            // linear gradient from #adc178 to #adc179
            backgroundImage: "linear-gradient(90deg, #adc178 0%, #adc179 100%)",
        }}>

            <div className="container">
                <h1 className="py-4 text-light">Explore our services!</h1>
                {services.map((service) => (
                    <div key={service.id}>
                        <Service service={service} />
                    </div>
                ))}
            </div>
            <div className='py-5'></div>
            <div className='py-5'></div>
        </div>
    </>);
}

export async function getStaticProps() {
    const services = [
        {
            id: 1,
            title: "Freshly Packaged with Care",
            description: "All orders are ready made fresh and tightly sealed, so you don't have to worry about any messes and most importantly contamination. "
        },
        {
            id: 2,
            title: "Super Fast Delivery",
            description: "Whether it maybe a date night, family gathering, or just you, you're in safe hands knowing we offer guaranteed next day delivery."
        },
        {
            id: 3,
            title: "Options upon Options",
            description: "We offer a wide variety of cuisines for all types of Foodies. The only limitation is your cravings."
        },
        // {
        //     id: 4,
        //     title: "Boarding",
        //     description: "When you need to leave town, our pet boarding service provides a safe and comfortable environment for your pets to stay. We offer spacious accommodations, plenty of playtime, and personalized attention to ensure your pets are happy and healthy while you're away."
        // },
        // {
        //     id: 5,
        //     title: "Training",
        //     description: " If you're looking to teach your pet new skills or overcome behavioral issues, our professional training services can help. We offer a variety of training programs for dogs of all ages and breeds, including obedience training, potty training, and specialized training for therapy animals or service dogs."
        // }
    ];

    return {
        props: {
            services,
        }
    }
}

export default services;
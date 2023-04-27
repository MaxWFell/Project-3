import Service from "@/components/Service";

function services({ services }) {

    return (<>
        <div style={{
            // linear gradient from #0073ff to #00c4ff
            backgroundImage: "linear-gradient(90deg, #0073ff 0%, #00c4ff 100%)",
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
            title: "Freshly Packaged with care",
            description: "All purchases are packaged and sealed to protect from messes but most importantly to keep away from microgranisms."
        },
        {
            id: 2,
            title: "Fast Delivery",
            description: "Guaranteed next day delivery so you don't have to wait plus no need for preparations."
        },
        {
            id: 3,
            title: "Options upon Options",
            description: "We offer a great variety of cuisines. You're only limited by your cravings."
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
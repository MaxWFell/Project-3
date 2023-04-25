import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Team from '@/components/Team'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    const router = useRouter();

    const members = [
        {
            name: 'Max Fell',
            role: 'Backend',
            imagePath: '/images/M.png'
        },
        {
            name: 'Rose Black',
            role: 'Backend',
            imagePath: '/images/R.png'
        },
        {
            name: 'Frankie Sanchez',
            role: 'Frontend',
            imagePath: '/images/M.png'
        },
        {
            name: 'Badawi Shahata',
            role: 'Frontend',
            imagePath: '/images/Z.png'
        }
    ]

    return (
        <>
            <Head>
                <title>Top Foodies - Home</title>
                <meta name="description" content="Get personalized suggestions that your pets will love" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{
                backgroundColor: "#000000",
            }}>
                <div className='container'>
                    <div className='py-5 text-center text-light'>
                        <p className='display-4 font-weight-bold'>Giving you new experiences, one plate at a time!</p>
                        <p className='lead'>
                            Whether its a diet, cheat night or a date night we got something for everyone.
                        </p>
                        <button className='btn btn-primary btn-lg' onClick={() => router.push('/products')}>Shop Now</button>
                    </div>
                </div>
            </div>
            <div>
                <div className='container py-5'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <img src='/images/cat-eating.jpg' className='img-fluid' />
                        </div>
                        <div className='col-md-6'>
                            <h4 className='font-weight-bold'>Everything comes fresh and packaged with care</h4>
                            <p className='lead'>With guaranteed next day shipping you can save yourself a grocery trip</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                backgroundColor: "#000000",
            }} className='py-5'>
            </div>
            <div style={{
                // linear gradient from #0073ff to #00c4ff
                backgroundImage: "linear-gradient(90deg, #0073ff 0%, #00c4ff 100%)",
            }}>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <img src='/images/macaroni_and_cheese.png' width="400px" hspace="10px" vspace="10px" className='img-fluid rounded-sm mt-n3' />
                        </div>
                        <div className='col-md-6 text-light'>
                            <h4 className='font-weight-bold'>Sign up for Additional Savings!</h4>
                            <p className='lead'>Create a profile that meet your needs:</p>
                            <ul>
                                <li>Save your orders for next time</li>
                                <li>Offer suggestions on what you might like</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                backgroundImage: "linear-gradient(90deg, #0073ff 0%, #00c4ff 100%)",
            }} className='py-5'>
            </div>
            <div>
                <div className='container py-4'>
                    <Team members={members} />
                </div>
            </div>
            <div className='py-5'></div>
            <div className='py-5'></div>
        </>
    )
}

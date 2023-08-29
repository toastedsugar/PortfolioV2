import Image from 'next/image'
import OhNo from '@/public/oh-no-joseph-joestar.gif'

type ErrorProps = {
    errorMsg: String,
}

export default function Error({errorMsg}: ErrorProps) {
    return (
        <div>
            <p className="text-4xl font-raleway font-light pl-4 mb-4">
                {errorMsg}
            </p>
            <Image
                className='rounded-xl'
                src={OhNo}
                width={700}
                height={700}
                alt='Oh, No!'
            />
        </div>
    )
}
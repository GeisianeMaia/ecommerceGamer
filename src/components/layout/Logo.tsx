import Image from 'next/image';
import Link from 'next/link'

export default function Logo(){
  return  (<Link href="/">
    <div className='flex flex-col mt-2'>
    <Image 
          src="https://www.oderco.com.br/media/logo/stores/1/oderco-logo.png" 
          alt="Logo da Oderco" 
          width={150} 
          height={50} 
          className="h-auto" 
        />
    </div>
  </Link>)
  
}
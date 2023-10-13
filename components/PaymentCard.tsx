import React from 'react'

interface PaymentCardProps {
  title: string,
  desc: string,
  aos?: string
}
const PaymentCard = ({title, desc, aos}: PaymentCardProps) => {
  return (
    <div data-aos={aos} data-aos-duration="2000" className='md:p-3 w-full md:w-72 text-primary-black-color'>
      <h1 className='font-extrabold text-4xl'>{title}</h1>
      <p className='text-md'>{desc}</p>
    </div>
  )
}

export default PaymentCard
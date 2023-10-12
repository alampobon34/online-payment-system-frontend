import React from 'react'

interface PaymentCardProps {
  title: string,
  desc: string,
}
const PaymentCard = ({title, desc}: PaymentCardProps) => {
  return (
    <div className='md:p-3 w-full md:w-72 text-primary-black-color'>
      <h1 className='font-extrabold text-4xl'>{title}</h1>
      <p className='text-md'>{desc}</p>
    </div>
  )
}

export default PaymentCard
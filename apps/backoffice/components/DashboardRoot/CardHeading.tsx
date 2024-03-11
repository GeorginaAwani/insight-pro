const CardHeading = ({ title, text }: { title: string; text: string }) => {
  return (
    <div>
      <h1 className="text-lg font-semibold leading-6">{title}</h1>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">{text}</p>
    </div>
  )
}

export default CardHeading

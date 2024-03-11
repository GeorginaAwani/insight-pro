const SecondaryModalHeading = ({
  title,
  text
}: {
  title: string
  text: string
}) => {
  return (
    <header className="mb-5">
      <h1 className="text-2xl font-medium">{title}</h1>
      <p>{text}</p>
    </header>
  )
}

export default SecondaryModalHeading

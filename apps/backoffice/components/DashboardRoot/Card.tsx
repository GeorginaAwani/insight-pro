const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="card bg-white p-7 border rounded-xl drop-shadow-sm">
      {children}
    </section>
  )
}

export default Card

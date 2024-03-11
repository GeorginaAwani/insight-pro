import Image, { StaticImageData } from "next/image"

const GradientSection = ({
  children,
  title,
  text,
  icons,
  className = "",
  ...props
}: {
  children: React.ReactNode
  title: string
  text: string
  icons: StaticImageData[]
  className?: string
  props?: React.HTMLAttributes<"section">
}) => {
  return (
    <section
      className={`p-7 rounded-2xl bg-gradient-to-b from-sky-50 flex justify-center items-center border-2 border-dashed border-indigo-400/25 ${className}`}
      {...props}>
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex items-center">
          {icons.map((icon, i) => {
            return (
              <div
                className={`z-${
                  i * 10
                } rounded-lg bg-white p-2 flex justify-center items-center shadow-xl m-[-5px] border border-gray-100`}>
                <Image
                  src={icon.src}
                  width={40}
                  height={40}
                  alt="Icon"
                  className="aspect-square"></Image>
              </div>
            )
          })}
        </div>
        <div className="my-5 font-sm">
          <h1 className="font-medium mb-1 text-gray-600">{title}</h1>
          <p className="text-gray-500">{text}</p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}

export default GradientSection

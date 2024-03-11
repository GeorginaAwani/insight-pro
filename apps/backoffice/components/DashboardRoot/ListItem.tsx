const ListItem: React.FC<
  {
    children: React.ReactNode
    clickable?: boolean
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, clickable = false, ...restProps }) => {
  return (
    <li className="peer peer-hover:border-transparent">
      {clickable ? (
        <button
          className="active:bg-neutral-100 active:outline active:outline-2 active:outline-brand-100 active:outline-offset-2 active:text-neutral-600 bg-transparent cursor-pointer disabled:bg-transparent disabled:border-none disabled:outline-none disabled:shadow-none disabled:text-neutral-400 flex focus-visible:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-100 focus-visible:outline-offset-2 focus-visible:text-neutral-600 group hover:bg-neutral-50 hover:shadow-[0_1px_2px_0_rgba(0,0,0,0.0.5)] hover:text-neutral-600 items-center justify-between min-w-[95px] pl-0 py-5 pe-2 rounded-xl shadow-[0_1px_2px_0_rgba(0,0,0,0.0.5)] text-left w-full ease duration-500"
          {...restProps}>
          {children}
        </button>
      ) : (
        <div className="flex justify-between items-center pl-0 py-5 pe-2 hover:bg-neutral-50 hover:shadow-[0_1px_2px_0_rgba(0,0,0,0.0.5)] ease-out duration-500 hover:rounded-xl group peer hover:border-transparent peer-hover:border-transparent transition-all pe-2">
          {children}
        </div>
      )}
    </li>
  )
}

export default ListItem

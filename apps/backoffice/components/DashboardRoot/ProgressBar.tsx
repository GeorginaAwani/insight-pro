const ProgressBar = ({ value }: { value: number }) => {
  return (
    <div className="relative w-full bg-gray-100 h-2 rounded-full">
      <div
        className="absolute top-0 left-0 h-full bg-brand-600 rounded-full"
        style={{ width: `${value}%` }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
      />
    </div>
  )
}

export default ProgressBar

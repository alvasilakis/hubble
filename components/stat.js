export default function Stat({ color, number, text }) {
  return (
		<div className={`single-stat relative flex items-center p-6 bg-main-bg-color border rounded-md border-white-transparent overflow-hidden before:transition before:content-[""] before:block before:absolute before:rounded-full before:bg-${color} before:blur-[50px] before:opacity-50 before:w-[200px] before:h-[200px]  before:left-[-100px]`}>
			<span className={`text-[48px] pr-6 mr-6 border-r border-[${color}] z-10`}>{number}</span>
			<span className='text-lg z-10'>{text}</span>
		</div>
  )
}

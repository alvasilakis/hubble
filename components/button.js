import Link from 'next/link';

export default function Button({src, text, style}) {
  return (
		<Link href={src}>
			<a className={`btn btn-${style}`}><span>{text}</span></a>
		</Link>
  )
}

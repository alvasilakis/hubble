import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/button';

export default function Navbar() {
  return (
		<div className="header sticky top-0 bg-main-bg-color z-20">
			<div className="header-main max-w-wide-container mx-auto grid grid-cols-[auto_1fr_auto] items-center h-[100px]">
				<Link href="/" >
					<a className='header-logo'>
						<Image src="/logo.svg" alt="Hubble Logo" width="118" height="27"/>
					</a>
				</Link>
				<nav className='header-menu flex justify-center'>
					<ul className='flex'>
						<li>
							<Link href="/platform">
								<a>Platform</a>
							</Link>
						</li>
						<li>
							<Link href="/solution">
								<a>Solution</a>
							</Link>
						</li>
						<li>
							<Link href="/resources">
								<a>Resources</a>
							</Link>
						</li>
						<li>
							<Link href="/company">
								<a>Company</a>
							</Link>
						</li>
					</ul>
				</nav>
				<Button
					text="Get started"
					src="/posts/first-post"
					style="primary"
				/>
			</div>
		</div>
  )
}

import Link from 'next/link';
import Image from 'next/image';


export default function Footer() {
  return (
		<footer className='max-w-container mx-auto mt-[120px]'>
			<div className="footer-main grid grid-cols-[auto_1fr] gap-40">
				<div className="footer-main-contact">
					<Link href="/" >
						<a className='footer-logo block'>
							<Image src="/logo.svg" alt="Hubble Logo" width="118" height="27"/>
						</a>
					</Link>
					<Link href="mailto:info@hubble.net" >
						<a className='footer-logo mt-[10px] block'>
							info@hubble.net
						</a>
					</Link>
					<div className='footer-social mt-[30px] flex'>
						<Link href="https://www.linkedin.com" >
							<a target="_blank">
								<Image src="/icons/linkedin.svg" alt="Linkedin" width="16" height="16"/>
							</a>
						</Link>
						<Link href="https://www.facebook.com" >
							<a target="_blank">
								<Image src="/icons/facebook.svg" alt="Facebook" width="16" height="16"/>
							</a>
						</Link>
						<Link href="https://www.twitter.com" >
							<a target="_blank">
								<Image src="/icons/twitter.svg" alt="Twitter" width="16" height="16"/>
							</a>
						</Link>
					</div>
				</div>
				<div className="footer-main-menus flex justify-between">
					<nav className="single-footer-menu">
						<h4>Hubble</h4>
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>
								<Link href="/why">
									<a>Why Hubble</a>
								</Link>
							</li>
							<li>
								<Link href="/platform">
									<a>Platform</a>
								</Link>
							</li>
							<li>
								<Link href="/security">
									<a>Security</a>
								</Link>
							</li>
						</ul>
					</nav>
					<nav className="single-footer-menu">
						<h4>Solutions</h4>
						<div className='grid grid-cols-2 gap-[100px]'>
							<ul>
								<li>
									<Link href="/vulnerability-management">
										<a>Vulnerability Management</a>
									</Link>
								</li>
								<li>
									<Link href="/security-operations">
										<a>Security Operations</a>
									</Link>
								</li>
								<li>
									<Link href="/data=governance">
										<a>Data Governance</a>
									</Link>
								</li>
								<li>
									<Link href="/it-blind-spots">
										<a>IT Blind Spots</a>
									</Link>
								</li>
								<li>
									<Link href="/business-continuity">
										<a>Business Continuity</a>
									</Link>
								</li>
							</ul>
							<ul>
								<li>
									<Link href="/cisos">
										<a>For CISOs</a>
									</Link>
								</li>
								<li>
									<Link href="/cios">
										<a>For CIOs</a>
									</Link>
								</li>
								<li>
									<Link href="/security-operations">
										<a>For Security Operators</a>
									</Link>
								</li>
								<li>
									<Link href="/it-operations">
										<a>For IT Operators</a>
									</Link>
								</li>
							</ul>
						</div>
					</nav>
					<nav className="single-footer-menu">
						<h4>Resources</h4>
						<ul>
							<li>
								<Link href="/customer-stories">
									<a>Customer Stories</a>
								</Link>
							</li>
							<li>
								<Link href="/articles">
									<a>Articles</a>
								</Link>
							</li>
							<li>
								<Link href="/press">
									<a>Press</a>
								</Link>
							</li>
							<li>
								<Link href="/guides">
									<a>Guides</a>
								</Link>
							</li>
						</ul>
					</nav>
					<nav className="single-footer-menu">
						<h4>Company</h4>
						<ul>
							<li>
								<Link href="/about">
									<a>About</a>
								</Link>
							</li>
							<li>
								<Link href="/careers">
									<a>Careers</a>
								</Link>
							</li>
							<li>
								<Link href="/contact">
									<a>Contact</a>
								</Link>
							</li>
							<li>
								<Link href="/security">
									<a>Security</a>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className="footer-newsletter grid grid-cols-2 gap-[50px] items-center py-[100px] border-b border-white-transparent">
				<h3 className='text-[28px] tracking-[.1rem]'>
					Get the latest updates. <br />Subscribe for our newsletter
				</h3>
				<form className='grid grid-cols-[1fr_auto] border p-[5px] rounded-md border-white-transparent'>
					<input className='bg-transparent focus:outline-none focus-visible:ring-0 p-[5px]' type="email" id="email" name="email" placeholder='Enter your email' />
					<button className='btn btn-primary' type="submit">Subscribe</button>
				</form>
			</div>
			<div className="footer-copyrights grid grid-cols-[1fr_auto] py-[50px] items-center">
				<nav className='copyright-menu text-sm'>
					<ul className='flex'>
						<li>
							<Link href="/privacy">
								<a>Privacy Policy</a>
							</Link>
						</li>
						<li>
							<Link href="/cookies">
								<a>Cookie Policy</a>
							</Link>
						</li>
						<li>
							<Link href="/terms">
								<a>Terms & Conditions</a>
							</Link>
						</li>
					</ul>
				</nav>
				<span className='text-sm text-light-blue opacity-70'>© Hubble 2022 All right reserved</span>
			</div>
		</footer>
  )
}

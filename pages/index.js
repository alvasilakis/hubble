import {motion} from 'framer-motion'
import Link from 'next/link';
import Image from 'next/image'
import Button from '../components/button'
import Layout from '../components/layout'
import Carousel from '../components/carousel'
import Tabs from '../components/tabs'
import Tab from '../components/tab'

export default function Home() {
  return (
		<Layout>
			<div className='hero-row max-w-container mx-auto grid grid-cols-2 leading-none items-center'>
				<motion.div
					className='hero-content'
					initial={{
						opacity: 0,
						translateY: 50,
						delay: 0.5,
						transition: { duration: 2 }
					}}
					whileInView={{
						opacity: 1,
						translateY: 0
					}}
					viewport={{ once: true }}
				>
					<h1 className='text-[60px] tracking-[.01rem] mb-[30px]'>Asset intelligence at the speed of business</h1>
					<p className='text-[22px] leading-snug'>Built for enterprise teams, Hubble’s Technology Intelligence Platform helps you construct a clear map of your technology asset domain and drive digital transformation.</p>
					<div className='flex mt-10'>
						<Button
							text="Get started"
							src="/posts/first-post"
							style="primary wide mr-[20px]"
						/>
						<Button
							text="Why Hubble?"
							src="/posts/first-post"
							style="secondary"
						/>
					</div>
				</motion.div>
				<div className='h-full w-[50vw] relative min-h-[600px]'>
					<Image className='object-right' src="/images/hero.svg" alt="hero" layout='fill' objectFit='contain'/>
				</div>
			</div>

			<div className='role-row max-w-container mx-auto grid grid-cols-4 gap-6'>
				<Link href="/ciso">
					<motion.a
						initial={{
							opacity: 0,
							translateY: -30,
						}}
						whileInView={{
							opacity: 1,
							translateY: 0,
						}}
						viewport={{ once: true }}
						className='single-role relative p-8 block mb-{10px} bg-main-bg-color border rounded-md border-white-transparent overflow-hidden before:transition  before:content-[""] before:block before:absolute before:rounded-full before:bg-role-gradient before:blur-[50px] before:opacity-0 before:w-[275px] before:h-[275px] before:top-[-100px] before:left-[150px] before:hover:opacity-50 after:content-arrow after:block after:absolute after:top-8 after:right-8 after:opacity-0 after:transition after:hover:opacity-100'
					>
						<Image src="/icons/ciso.svg" alt="CISO" width="48" height="48" />
						<h4 className='text-xl mb-4'>I’m a CISO</h4>
						<span className='leading-snug tracking-snug'>Report confidently on the state of your assets and data.</span>
					</motion.a>
				</Link>
				<Link href="/cio">
					<motion.a
						initial={{
							opacity: 0,
							translateY: -30,
						}}
						whileInView={{
							opacity: 1,
							translateY: 0,
						}}
						viewport={{ once: true }}
						className='single-role relative p-8 block mb-{10px} bg-main-bg-color border rounded-md border-white-transparent overflow-hidden before:transition  before:content-[""] before:block before:absolute before:rounded-full before:bg-role-gradient before:blur-[50px] before:opacity-0 before:w-[275px] before:h-[275px] before:top-[-100px] before:left-[150px] before:hover:opacity-50 after:content-arrow after:block after:absolute after:top-8 after:right-8 after:opacity-0 after:transition after:hover:opacity-100'
					>
						<Image src="/icons/cio.svg" alt="CIO" width="48" height="48" />
						<h4 className='text-xl mb-4'>I’m a CIO</h4>
						<span className='leading-snug tracking-snug'>Understand, quantify, and mitigate underlying risk.</span>
					</motion.a>
				</Link>
				<Link href="/security-operator">
					<motion.a
						initial={{
							opacity: 0,
							translateY: -30,
						}}
						whileInView={{
							opacity: 1,
							translateY: 0,
						}}
						viewport={{ once: true }}
						className='single-role relative p-8 block mb-{10px} bg-main-bg-color border rounded-md border-white-transparent overflow-hidden before:transition  before:content-[""] before:block before:absolute before:rounded-full before:bg-role-gradient before:blur-[50px] before:opacity-0 before:w-[275px] before:h-[275px] before:top-[-100px] before:left-[150px] before:hover:opacity-50 after:content-arrow after:block after:absolute after:top-8 after:right-8 after:opacity-0 after:transition after:hover:opacity-100'
					>
						<Image src="/icons/security-operator.svg" alt="Security Operator" width="48" height="48" />
						<h4 className='text-xl mb-4'>I’m a Security Operator</h4>
						<span className='leading-snug tracking-snug'>Get answers to questions for every investigation.</span>
					</motion.a>
				</Link>
				<Link href="/it-operator">
					<motion.a
						initial={{
							opacity: 0,
							translateY: -30,
						}}
						whileInView={{
							opacity: 1,
							translateY: 0,
						}}
						viewport={{ once: true }}
						className='single-role relative p-8 block mb-{10px} bg-main-bg-color border rounded-md border-white-transparent overflow-hidden before:transition  before:content-[""] before:block before:absolute before:rounded-full before:bg-role-gradient before:blur-[50px] before:opacity-0 before:w-[275px] before:h-[275px] before:top-[-100px] before:left-[150px] before:hover:opacity-50 after:content-arrow after:block after:absolute after:top-8 after:right-8 after:opacity-0 after:transition after:hover:opacity-100'
					>
						<Image src="/icons/it.svg" alt="IT Operator" width="48" height="48" />
						<h4 className='text-xl mb-4'>I’m an IT Operator</h4>
						<span className='leading-snug tracking-snug'>Understand the entire landscape of your assets.</span>
					</motion.a>
				</Link>
			</div>

			<div className='trusted-row max-w-container mx-auto mt-[88px]'>
				<h2 className='text-3xl block text-center mb-[48px]'>Trusted by pioneering enterprise players</h2>
				<Carousel  images={['codelify','marketly','startup']}/>
			</div>

			<div className='organization-row max-w-container mx-auto grid grid-cols-2 pt-[160px] pb-[80px] items-center '>
				<motion.div
					initial={{
						opacity: 0,
						translateX: -100,
					}}
					whileInView={{
						opacity: 1,
						translateX: 0,
					}}
					viewport={{ once: true }}
				 	className='organization-content pr-[100px]'
				>
					<h3 className='text-5xl tracking-[.01em]'>
						We help organizations make sense of infinity
					</h3>
					<p className='text-[20px] my-[30px]'>Built by experts, for everyone — Hubble guarantees rapid time-to-value for teams across your enterprise, providing a telescopic view of everything.</p>
						<Button
							text="Why Hubble?"
							src="/why"
							style="arrow-primary"
						/>
				</motion.div>
				<Image src="/images/why-huble.png" alt="why hubble" width="588" height="588" />
			</div>

			<div className='stats-row max-w-container mx-auto grid grid-cols-3 gap-6'>
				<motion.div
					initial={{
						opacity: 0,
						translateX: -200,
					}}
					whileInView={{
						opacity: 1,
						translateX: 0,
					}}
					className={'single-stat relative flex items-center p-6 bg-main-bg-color border rounded-md border-white-transparent overflow-hidden before:transition before:content-[""] before:block before:absolute before:rounded-full before:bg-[#3AFCFC] before:blur-[50px] before:opacity-50 before:w-[200px] before:h-[200px]  before:left-[-100px]'}
				>
					<span className={'text-[48px] pr-6 mr-6 border-r border-[#3AFCFC] z-10'}>74</span>
					<span className='text-lg z-10'>Magna lectus cursus neque, enim</span>
				</motion.div>
				<motion.div
					initial={{
						opacity: 0,
						translateX: -200,
					}}
					whileInView={{
						opacity: 1,
						translateX: 0,
					}}
					className={'single-stat relative flex items-center p-6 bg-main-bg-color border rounded-md border-white-transparent overflow-hidden before:transition before:content-[""] before:block before:absolute before:rounded-full before:bg-[#D1FF5F] before:blur-[50px] before:opacity-50 before:w-[200px] before:h-[200px]  before:left-[-100px]'}
				>
					<span className={'text-[48px] pr-6 mr-6 border-r border-[#D1FF5F] z-10'}>500+</span>
					<span className='text-lg z-10'>Magna lectus cursus neque, enim</span>
				</motion.div>
				<motion.div
					initial={{
						opacity: 0,
						translateX: -200,
					}}
					whileInView={{
						opacity: 1,
						translateX: 0,
					}}
					className={'single-stat relative flex items-center p-6 bg-main-bg-color border rounded-md border-white-transparent overflow-hidden before:transition before:content-[""] before:block before:absolute before:rounded-full before:bg-[#0091FF] before:blur-[50px] before:opacity-50 before:w-[200px] before:h-[200px]  before:left-[-100px]'}>
					<span className={'text-[48px] pr-6 mr-6 border-r border-[#0091FF] z-10'}>74</span>
					<span className='text-lg z-10'>Magna lectus cursus neque, enim</span>
				</motion.div>
			</div>

			<div className='benefit-row max-w-container mx-auto py-[160px]'>
				<h2 className='text-5xl block text-center max-w-[800px] mx-auto mb-20'>Build a single source of truth and drive transformation</h2>
				<div className='benefit-list grid gap-10'>
				<motion.div
					initial={{
						opacity: 0,
						translateY: 200,
						delay: 0.5,
						transition: { duration: 2 }
					}}
					whileInView={{
						opacity: 1,
						translateY: 0
					}}
					viewport={{ once: true }}
					className='single-benefit grid grid-cols-2 items-center border rounded-2xl border-white-transparent'
				>
						<div className='relative h-[480px]'>
							<Image src="/images/see.png" alt="hero" layout='fill' objectFit='cover' />
						</div>

						<div className='benefit-content max-w-[480px] mx-auto'>
							<div className='flex items-center'>
								<img className='mr-3' src="/icons/see.svg" alt="see"/>
								<span className='text-red text-sm uppercase tracking-[.15rem] flex'>see</span>
							</div>

							<h3 className='text-[32px] leading-none tracking-[.01rem] mt-[10px] mb-[20px]'>Eliminate risk</h3>
							<p className=''>We provide visibility into your organization's environment. Giving you knowledge you don’t currently have — a single source of truth to eliminate risk.</p>
						</div>
					</motion.div>
					<motion.div
						initial={{
							opacity: 0,
							translateY: 200,
							delay: 0.5,
							transition: { duration: 2 }
						}}
						whileInView={{
							opacity: 1,
							translateY: 0
						}}
						viewport={{ once: true }}
						className='single-benefit grid grid-cols-2 items-center border rounded-2xl border-white-transparent'
					>
						<div className='relative h-[480px]'>
							<Image src="/images/understand.png" alt="hero" layout='fill' objectFit='cover' />
						</div>

						<div className='benefit-content max-w-[480px] mx-auto'>
							<div className='flex items-center'>
								<img className='mr-3' src="/icons/understand.svg" alt="Understand"/>
								<span className='text-pink text-sm uppercase tracking-[.15rem]'>Understand</span>
							</div>
							<h3 className='text-[32px] leading-none tracking-[.01rem] mt-[10px] mb-[20px]'>Gain context</h3>
							<p className=''>Unlike other asset management tools, we bring context to existing data — providing the insights needed for a resilient business.</p>
						</div>
					</motion.div>
					<motion.div
						initial={{
							opacity: 0,
							translateY: 200,
							delay: 0.5,
							transition: { duration: 2 }
						}}
						whileInView={{
							opacity: 1,
							translateY: 0
						}}
						viewport={{ once: true }}
						className='single-benefit grid grid-cols-2 items-center border rounded-2xl border-white-transparent'
					>
						<div className='relative h-[480px]'>
							<Image src="/images/enable.png" alt="hero" layout='fill' objectFit='cover' />
						</div>

						<div className='benefit-content max-w-[480px] mx-auto'>
							<div className='flex items-center'>
								<img className='mr-3' src="/icons/enable.svg" alt="Enable"/>
								<span className='text-blue text-sm uppercase tracking-[.15rem]'>Enable</span>
							</div>
							<h3 className='text-[32px] leading-none tracking-[.01rem] mt-[10px] mb-[20px]'>Unlock value</h3>
							<p className=''>Turn insights into action. Unlock value and drive digital transformation across your business with asset intelligence workflows.</p>
						</div>
					</motion.div>
				</div>
			</div>

			<div className='platform-row relative pt-[100px] bg-main-purple'>
				<div className='layer absolute top-0 left-0 h-full w-full z-0'>
					<img className='absolute top-0 left-0' src='/icons/layer-pink.svg'/>
					<img className='absolute top-0 right-0' src='/icons/layer-blue.svg'/>
					<img className='absolute bottom-0 left-10 ' src='/icons/planet.png'/>
					<div className='absolute top-0 left-0 bg-black-gradient h-full w-full z-0'></div>
				</div>
				<div className='platform-content text-center block relative'>
					<h2 className='text-5xl'>The Technology Intelligence Platform</h2>
					<p className='text-[20px] max-w-[650px] my-[20px] mx-auto'>Hubble is the world's first Technology Intelligence Platform that helps you see things more clearly than ever before.</p>
					<Button
						text="Explore out platform"
						src="/platform"
						style="arrow-secondary"
					/>
				</div>
				<img className='mx-auto mt-20' src="/images/platform.svg" alt="An SVG of an eye" />
			</div>

			<div className='customize-row max-w-container mx-auto  my-[160px]'>
				<h2 className='text-5xl text-center mb-20'>Customize to your use case</h2>
				<Tabs>
					<Tab title="Vulnerability Management">
						<div className='grid grid-cols-2'>
							<div className='tab-inner-content p-[100px]'>
								<h3 className='text-[32px] tracking-[.01em]'>
									Vulnerability Management
								</h3>
								<p className='text-[20px] my-[30px]'>Asset visibility from Hubble can be easily integrated with leading vulnerability management platforms to continuously improve scan coverage and performance.</p>
								<Button
									text="Why Hubble?"
									src="/why"
									style="arrow-primary"
								/>
							</div>
							<div className='relative h-[480px]'>
								<Image src="/images/VM.png" alt="hero" layout='fill' objectFit='cover' />
							</div>
						</div>
					</Tab>
					<Tab title="Security Operations">
						<div className='grid grid-cols-2'>
							<div className='tab-inner-content p-[100px]'>
								<h3 className='text-[32px] tracking-[.01em]'>
									Security Operations
								</h3>
								<p className='text-[20px] my-[30px]'>Asset visibility from Hubble can be easily integrated with leading vulnerability management platforms to continuously improve scan coverage and performance.</p>
								<Button
									text="Why Hubble?"
									src="/why"
									style="arrow-primary"
								/>
							</div>
							<div className='relative h-[480px]'>
								<Image src="/images/VM.png" alt="hero" layout='fill' objectFit='cover' />
							</div>
						</div>
					</Tab>
					<Tab title="Data Governance">
						<div className='grid grid-cols-2'>
							<div className='tab-inner-content p-[100px]'>
								<h3 className='text-[32px] tracking-[.01em]'>
									Data Governance
								</h3>
								<p className='text-[20px] my-[30px]'>Asset visibility from Hubble can be easily integrated with leading vulnerability management platforms to continuously improve scan coverage and performance.</p>
								<Button
									text="Why Hubble?"
									src="/why"
									style="arrow-primary"
								/>
							</div>
							<div className='relative h-[480px]'>
								<Image src="/images/VM.png" alt="hero" layout='fill' objectFit='cover' />
							</div>
						</div>
					</Tab>
					<Tab title="IT Blind Spots">
						<div className='grid grid-cols-2'>
							<div className='tab-inner-content p-[100px]'>
								<h3 className='text-[32px] tracking-[.01em]'>
									IT Blind Spots
								</h3>
								<p className='text-[20px] my-[30px]'>Asset visibility from Hubble can be easily integrated with leading vulnerability management platforms to continuously improve scan coverage and performance.</p>
								<Button
									text="Why Hubble?"
									src="/why"
									style="arrow-primary"
								/>
							</div>
							<div className='relative h-[480px]'>
								<Image src="/images/VM.png" alt="hero" layout='fill' objectFit='cover' />
							</div>
						</div>
					</Tab>
				</Tabs>
			</div>

			<div className='call-to-action-row relative max-w-wide-container mx-auto  overflow-hidden rounded-2xl'>
				<div className='layer absolute top-0 left-0 h-full w-full z-0'>
				<img className='absolute top-0 right-0' src='/icons/cta-layer-purple.svg'/>
				<img className='absolute bottom-0 right-0' src='/icons/cta-layer-pink.svg'/>
				<img className='absolute top-0 left-0' src='/icons/cta-layer-blue.svg'/>
				</div>
				<div className='call-to-action-content text-center py-[100px] max-w-[550px] mx-auto relative'>
					<h3 className='text-5xl mb-12'>Bring complete visibility to your digital assets</h3>
					<Button
						text="Get started"
						src="/posts/first-post"
						style="primary mr-[20px]"
					/>
				</div>
			</div>
		</Layout>
  )
}

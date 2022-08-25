import React, { useState } from 'react';

export default function Tabs({children}) {
	const [currentTab, setCurrentTab] = useState('0')

	const handleTabClick = (e) => {
		setCurrentTab(e.target.id);
	}

  return (
		<div className='tabs-wrap grid'>
			<div className='tab-header border rounded-md border-white-transparent p-1.5 flex w-auto mx-auto translate-y-2/4 z-10 bg-main-bg-color'>
				{children.map((tab, i) =>
					<button className='single-header-tab' key={i} id={i} disabled={currentTab === `${i}`} onClick={(handleTabClick)}>{tab.props.title}</button>
				)}
			</div>
			<div className='tab-body border rounded-2xl border-white-transparent '>
				{children.map((tab, i) =>
					<div key={i}>
						{currentTab === `${i}` && <div>{tab}</div>}
					</div>
				)}
			</div>
		</div>
  )
}

import React from 'react';
import Navbar from '../components/navbar';
import HeadingSection from '../components/sections/heading_section';
import MobileSection from '../components/sections/mobile_section';
import WebSection from '../components/sections/web_section';
import DesktopSection from '../components/sections/desktop_section';
import SEO from '../components/seo';

export default function index() {
	return (
		<SEO>
			<div className='px-16 py-5'>
				<Navbar />
				<HeadingSection />
				<MobileSection />
				<WebSection />
				<DesktopSection />
			</div>
		</SEO>
	);
}

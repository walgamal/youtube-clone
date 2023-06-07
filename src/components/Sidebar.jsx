import React from 'react'
import SidebarButton from './SidebarComponents/SidebarButton'
import Divider from './SidebarComponents/Divider'
import SectionTitle from './SidebarComponents/SectionTitle'
import SidebarNote from './SidebarComponents/SidebarNote'
import SignIn from './HeaderComponents/SignIn'
import FooterButton from './SidebarComponents/FooterButton'

function Sidebar() {
  return (
    <div className='sidebar-container'>
      <SidebarButton buttonText="Home"/>
      <SidebarButton buttonText="Shorts"/>
      <SidebarButton buttonText="Subscriptions" />
      <Divider />
      <SidebarButton buttonText="Library" />
      <SidebarButton buttonText="History" />
      <Divider />
      <div className='sidebar-notes-container'>
        <SidebarNote note="Sign in to like videos, comments, and subscribe." />
        <SignIn isDots={false}/>
      </div>
      <Divider />
      <SectionTitle titleText="Explore" />
      <SidebarButton buttonText="Trending" />
      <SidebarButton buttonText="Shopping" />
      <SidebarButton buttonText="Music" />
      <SidebarButton buttonText="Movies & TV" />
      <SidebarButton buttonText="Live" />
      <SidebarButton buttonText="Gaming" />
      <SidebarButton buttonText="News" />
      <SidebarButton buttonText="Sports" />
      <SidebarButton buttonText="Learning" />
      <SidebarButton buttonText="Fashion & Beauty" />
      <SidebarButton buttonText="Podcasts" />
      <Divider />
      <SidebarButton buttonText="Browse channels" />
      <Divider />
      <SectionTitle titleText="More from YouTube" />
      <SidebarButton buttonText="YouTube Premium" />
      <SidebarButton buttonText="YouTube Music" />
      <SidebarButton buttonText="YouTube Kids" />
      <SidebarButton buttonText="YouTube TV" />
      <Divider />
      <SidebarButton buttonText="Settings" />
      <SidebarButton buttonText="Report history" />
      <SidebarButton buttonText="Help" />
      <SidebarButton buttonText="Send feedback" />
      <Divider />
      <div className='sidebar-footer'>
        <div className='sidebar-footer-top'>
          <FooterButton text='About'/>
          <FooterButton text='Press'/>
          <FooterButton text='Copyright'/>
          <FooterButton text='Contact us'/>
          <FooterButton text='Creators'/>
          <FooterButton text='Advertise'/>
          <FooterButton text='Developers'/>
        </div>
        <div className='sidebar-footer-bottom'>
        <FooterButton text='Terms'/>
        <FooterButton text='Privacy'/>
        <FooterButton text='Policy & Safety'/>
        <FooterButton text='How YouTube works'/>
        <FooterButton text='Test new features'/>
        <FooterButton text='NFL Sunday Ticket'/>
        </div>
        <div className='sidebar-footer-copyright'>
          <p>© 2023 Google LLC</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
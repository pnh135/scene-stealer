import React from 'react'
import MainHeader from '../components/MainHeader'
import { MainPageAside, MainPageContent, MainPageMain } from './MainPage'
import SideBar from '../components/SideBar'
import MainFooter from '../components/MainFooter'
import ActionButton from '../components/ActionButton'

const SettingPage = () => {
  return (
    <div>
        <MainHeader />
        <MainPageContent>
          <MainPageAside>
            <SideBar />
          </MainPageAside>
          <MainPageMain>
            <ActionButton/>
            <p>아이디 변경</p>
            <p>비밀번호 변경</p>
            <p>이메일 변경</p>
          </MainPageMain>
        </MainPageContent>
        <MainFooter />
    </div>
  )
}

export default SettingPage
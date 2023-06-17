import React, { FormEvent, useState, createContext } from 'react'
import './PrimaryFrameStyle.scss'
import { PopupDialog } from './Popup/PopupDialog'
import {ComponentsContainerFrame} from './ComponentsContainerFrame'

type PrimaryFrameProps = {}

export const SubscribeButtonIsInActiveContext:React.Context<boolean> = createContext<boolean>(false)
export const SubmitActionContext:React.Context<(()=>void)|undefined> = createContext<(()=>void)|undefined>(undefined)

export const PrimaryFrame = (props: PrimaryFrameProps) => {
	const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
	const [currentEmail, setCurrentEmail] = useState<string>('foo@temp.com')

	const formSubmit = (e:FormEvent) => {
		e.preventDefault()
		setIsPopupOpen((preVal) => !preVal)
	}

	const dismissDialog = () => {
		setIsPopupOpen(false)
	}

	const setEmailAddress = (e:string) => {
		setCurrentEmail(e)
	}

	const blurClassName = (isPopupOpen === true) ? 'primary_frame  blur-it' : 'primary_frame'

	return (
		<SubscribeButtonIsInActiveContext.Provider value={isPopupOpen}>
		<SubmitActionContext.Provider value={dismissDialog}>
			<div className={blurClassName}>
				<ComponentsContainerFrame isImageDisplay={false} onSubmitCB={formSubmit} onSetEmailCB={setEmailAddress}/>
				<ComponentsContainerFrame isImageDisplay={true} />
			</div>

			{isPopupOpen && <PopupDialog usrEmail={currentEmail} />}
		</SubmitActionContext.Provider>
		</SubscribeButtonIsInActiveContext.Provider>
  )
}
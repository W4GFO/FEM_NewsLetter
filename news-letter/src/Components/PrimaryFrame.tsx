import React, { FormEvent, useState, createContext } from 'react'
import './PrimaryFrameStyle.scss'
import { PopupDialog } from './Popup/PopupDialog'
import {ComponentsContainerFrame} from './ComponentsContainerFrame'

type PrimaryFrameProps = {}

export const SubmitActionContext:React.Context<(()=>void)|undefined> = createContext<(()=>void)|undefined>(undefined)

export const PrimaryFrame = (props: PrimaryFrameProps) => {
	const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)

	const formSubmit = (e:FormEvent) => {
		e.preventDefault()
		setIsPopupOpen(!isPopupOpen)
	}

	const dismissDialog = () => {
		setIsPopupOpen(false)
	}

  return (
	<SubmitActionContext.Provider value={dismissDialog}>
   	<div className='primary_frame'>
	   	{isPopupOpen && <PopupDialog />}

      	<ComponentsContainerFrame isImageDisplay={false} onSubmitCB={formSubmit} />
      	<ComponentsContainerFrame isImageDisplay={true} />
    	</div>
	</SubmitActionContext.Provider>
  )
}
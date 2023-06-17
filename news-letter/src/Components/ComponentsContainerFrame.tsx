import { FormEvent } from 'react'

import './ComponentsContainerFrameStyle.scss'

import { MarketingImageFrame } from './MarketingImageFrame'
import { MarketingMaterialFrame } from './MarketingMaterialFrame'

type ComponentsContainerFrameProps = {
	isImageDisplay:Boolean
	onSetEmailCB?:(s:string) => void
	onSubmitCB?:(e:FormEvent) => void
}

export const ComponentsContainerFrame = ({isImageDisplay, onSubmitCB, onSetEmailCB}: ComponentsContainerFrameProps) => {
	let frame = (isImageDisplay === true) ? 
											<MarketingImageFrame /> : 
											<MarketingMaterialFrame onSubmitCB={onSubmitCB!} onSetEmailCB={onSetEmailCB!} />

	let orderClassName:string = (isImageDisplay === true) ? 'component-frame flex-order' : 'component-frame'

	return (
		<div className={orderClassName}>
			{frame}
		</div>
	)
}
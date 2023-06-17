import { FormEvent } from 'react'

import './ComponentsContainerFrameStyle.scss'

import { MarketingImageFrame } from './MarketingImageFrame'
import { MarketingMaterialFrame } from './MarketingMaterialFrame'

type ComponentsContainerFrameProps = {
	isImageDisplay:Boolean
	onSubmitCB?:(e:FormEvent) => void
}

export const ComponentsContainerFrame = ({isImageDisplay, onSubmitCB}: ComponentsContainerFrameProps) => {
	let frame = (isImageDisplay === true) ? <MarketingImageFrame/> : <MarketingMaterialFrame onSubmitCB={onSubmitCB!} />
	let orderClassName:string = (isImageDisplay === true) ? 'component-frame flex-order' : 'component-frame'

	return (
		<div className={orderClassName}>
			{frame}
		</div>
	)
}
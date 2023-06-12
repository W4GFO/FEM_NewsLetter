import './ComponentsContainerFrameStyle.scss'

import { MarketingImageFrame } from './MarketingImageFrame'
import { MarketingMaterialFrame } from './MarketingMaterialFrame'

type ComponentsContainerFrameProps = {
	isImageDisplay:Boolean
}

export const ComponentsContainerFrame = ({isImageDisplay}: ComponentsContainerFrameProps) => {

	var frame = (isImageDisplay === true) ? <MarketingImageFrame/> : <MarketingMaterialFrame />

	return (
		<div className='component-frame'>
			{frame}
		</div>
	)
}
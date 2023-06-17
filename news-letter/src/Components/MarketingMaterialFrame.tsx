import { FormEvent } from 'react'

import './MarketingMaterialFrameStyle.scss'
import {CheckElement} from './CheckElement'

type MarketingMaterialProps = {
	onSubmitCB:(e:FormEvent) => void
}

export const MarketingMaterialFrame = ({onSubmitCB}: MarketingMaterialProps) => {

	return (
		<div className='marketing_material_text'>
			<p className='title-text'>Stay Updated!</p>
			<p className='marketing_message'>Join 60,000+ product managers receiving monthly updates on:</p>

			<CheckElement displayText="Product discovery and building what matters"/>
			<CheckElement displayText="Measuring to ensure updates are a success"/>
			<CheckElement displayText="And much more!"/>

			<form onSubmit={onSubmitCB}>
				<label htmlFor="email-entry">Email Address:</label>
				<input id="email-entry" type="email" placeholder="example@company.com" />
				<button type="submit">Subscribe to monthly newsletter</button>
			</form>
		</div>
	)
}
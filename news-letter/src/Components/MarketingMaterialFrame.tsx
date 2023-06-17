import { useState, useContext, ChangeEvent, FormEvent } from 'react'

import './MarketingMaterialFrameStyle.scss'
import {CheckElement} from './CheckElement'
import {SubscribeButtonIsInActiveContext} from './PrimaryFrame'

type MarketingMaterialProps = {
	onSetEmailCB:(s:string) => void
	onSubmitCB:(e:FormEvent) => void
}

export const MarketingMaterialFrame = ({onSubmitCB, onSetEmailCB}: MarketingMaterialProps) => {

	const [isValidEmail, setIsValidEmail] = useState<boolean>(true)
	const iSubscribeInActiveCtx = useContext<boolean>(SubscribeButtonIsInActiveContext)

	const noActionClass = (iSubscribeInActiveCtx === true) ? 'no-action-tag' : ''

	const localFormSubmit = (e:FormEvent) => {
		e.preventDefault()

		onSubmitCB(e)
	}

	const updatedEmailTextInput = (e:ChangeEvent<HTMLInputElement>) => {
		setIsValidEmail(e.target.validity.valid)
		onSetEmailCB(e.target.value)
	}

	return (
		<div className='marketing_material_text'>
			<p className='title-text'>Stay Updated!</p>
			<p className='marketing_message'>Join 60,000+ product managers receiving monthly updates on:</p>

			<CheckElement displayText="Product discovery and building what matters"/>
			<CheckElement displayText="Measuring to ensure updates are a success"/>
			<CheckElement displayText="And much more!"/>

			<form onSubmit={localFormSubmit}>
				<div className='emailInfoContainer'>
					<label className='emailinfo-flex-item' htmlFor="email-entry">Email Address:</label>
					{
						(isValidEmail === false) ? <label className='emailinfo-flex-item'>Valid email required</label> : null
					}
				</div>

				<input id="email-entry" type="email" placeholder="example@company.com" onChange={updatedEmailTextInput} required/>
				<button className={noActionClass} disabled={iSubscribeInActiveCtx} type="submit">Subscribe to monthly newsletter</button>
			</form>
		</div>
	)
}
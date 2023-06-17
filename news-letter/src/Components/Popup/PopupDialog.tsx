import './PopupDialogStyle.scss'
import ChkMrk from '../../Images/icon-success.svg'
import { useContext } from 'react'
import {SubmitActionContext} from '../PrimaryFrame'

type PopupProps = {
	usrEmail:string
}

export const PopupDialog = ({usrEmail}: PopupProps) => {
	var displayState:(()=>void)|undefined = useContext<(()=>void)|undefined>(SubmitActionContext)

	const dismissDialog = () => {
		if(displayState !== undefined){
			displayState()
		}
	}

	const strEmail = (usrEmail !== undefined) ? usrEmail! : "example@foo.com"

	return (
		<div className='popup'>
			<div className='popup-inner-frame'>
				<img src={ChkMrk} alt="Success Indicator" />
				<p>Thanks for subscribing!</p>
				<p>A confirmation email has been sent to <strong>{strEmail}</strong>. Please open it and click the button inside to confirm your subscription.</p>

				<button onClick={dismissDialog}>Dismiss Message</button>
			</div>
		</div>
	)
}
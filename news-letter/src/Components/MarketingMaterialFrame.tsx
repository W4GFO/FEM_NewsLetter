import './MarketingMaterialFrameStyle.scss'
import {CheckElement} from './CheckElement'

type MarketingMaterialProps = {}

export const MarketingMaterialFrame = (props: MarketingMaterialProps) => {
	return (
		<div className='marketing_material_text'>
			<h1>Stay Updated!</h1>
			<p className='marketing_message'>Join 60,000+ product managers receiving monthly updates on:</p>

			<CheckElement displayText="Product discovery and building what matters"/>
			<CheckElement displayText="Measuring to ensure updates are a success"/>
			<CheckElement displayText="And much more!"/>

			<form>
				<label htmlFor="email">Email Address:</label>
				<input type="email" placeholder="example@company.com" />
				<button type="submit">Subscribe to monthly newsletter</button>
			</form>
		</div>
	)
}
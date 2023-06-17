import './CheckElementStyle.scss'
import check from '../Images/icon-list.svg'

type CheckElementProps = {
	displayText:String
}

export const CheckElement = ({displayText}: CheckElementProps) => {
	return (
		<div className='check_status_element'>
			<img className='chk_img_elmt' src={check} alt='check mark'></img>
			<p className='chk_txt_elmt'>{displayText}</p>
		</div>
	)
}
import './MarketingImageFrameStyle.scss'
import desktopimg from '../Images/maindesktop.svg'

type MarketingFrameProps = {}

export const MarketingImageFrame = (props: MarketingFrameProps) => {
  return (
    <div className='marketing_image_frame'>
      <img src={desktopimg} alt='marketing desktop'/>    
    </div>
  )
}
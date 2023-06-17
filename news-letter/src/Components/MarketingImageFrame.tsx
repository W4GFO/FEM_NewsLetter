import './MarketingImageFrameStyle.scss'
import mobileimg from '../Images/mainmobile.svg'
import desktopimg from '../Images/maindesktop.svg'

type MarketingFrameProps = {}

export const MarketingImageFrame = (props: MarketingFrameProps) => {
  return (
    <div className='marketing_image_frame'>
      <picture>
        <source media='(max-width:574px)' srcSet={mobileimg} />
        <img src={desktopimg} alt='marketing desktop' />
      </picture>
    </div>
  )
}
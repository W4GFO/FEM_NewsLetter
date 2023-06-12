import './PrimaryFrameStyle.scss'
import {ComponentsContainerFrame} from './ComponentsContainerFrame'

type PrimaryFrameProps = {}

export const PrimaryFrame = (props: PrimaryFrameProps) => {
  return (
    <div className='primary_frame'>
      <ComponentsContainerFrame isImageDisplay={false} />
      <ComponentsContainerFrame isImageDisplay={true} />
    </div>
  )
}
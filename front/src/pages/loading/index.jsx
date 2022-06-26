import { H2, ALL }  from '../../../style/general'
import { LOADing, ProgressBar  } from './style'


export function Loading() {
  return(
    <ALL>
      <LOADing>
        <H2>Uploading...</H2>
        <ProgressBar max="100" value="50"/>
      </LOADing>
    </ALL>
  )
}
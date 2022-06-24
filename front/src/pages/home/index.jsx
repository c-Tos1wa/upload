import figure from '../../assets/image.svg'
import { Card, Choose, UPLoad } from './style'
import * as styles from '../../../style/general'


export function Upload() {
  return(
    <styles.ALL>
      <UPLoad>
        <styles.H2>Upload your image</styles.H2>

        <styles.P>File should be Jpeg, Png....</styles.P>

        <Card>
          <img src={figure} alt="figura de duas montanhas em meio a nuvens na frente de um circulo azul" />

          <styles.Span>Drag &amp; Drop your images here</styles.Span>
        </Card>

        <styles.P>Or</styles.P>

        <Choose>Choose a file</Choose>
      
      </UPLoad>
    </styles.ALL>
  )
}
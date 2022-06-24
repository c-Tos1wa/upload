// import checkCircle from "../../assets/check_circle.svg";

import * as styled from "../../../style/general";

import { BoxCopy, BoxLink, ButtonCopy, Central, UploadPhoto } from "./style";

export function Photo() {
  return (
    <styled.ALL>
      <Central>
        <styled.H2>Uploaded Successfully!</styled.H2>
        <UploadPhoto
          src="https://www.maxmilhas.com.br/blog/wp-content/uploads/2018/03/acess%C3%B3rios-para-viagem-770x450.jpg"
          alt=""
        />
        <BoxCopy>
          <BoxLink>
            https://images.yourdomain.com/photo-1496950866446-325...
          </BoxLink>
          <ButtonCopy>Copy Link</ButtonCopy>
        </BoxCopy>
      </Central>
    </styled.ALL>
  );
}

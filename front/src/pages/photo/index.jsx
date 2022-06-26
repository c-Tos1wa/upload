import * as styled from "../../../style/general";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { BoxCopy, BoxLink, ButtonCopy, Central, UploadPhoto } from "./style";
import { useState } from "react";

export function Photo() {
  const [link, setLink] = useState("")

  const handleChange = (e) => {
    setLink(e.target.value)  
  }

  const handleCopy = async() => {
    await navigator.clipboard.writeText(link);
    
    alert("The link has been copied!")
  }
  return (
    <styled.ALL>
      <Central>
        <FontAwesomeIcon icon={faCircleCheck} fontSize="35px" color="#219653" />
        <styled.H2>Uploaded Successfully!</styled.H2>
        <UploadPhoto
          src="https://www.maxmilhas.com.br/blog/wp-content/uploads/2018/03/acess%C3%B3rios-para-viagem-770x450.jpg"
          alt=""
        />
        <BoxCopy>
          <BoxLink
            value="https://images.yourdomain.com/photo-1496950866446-325..."
            onChange={handleChange}
          />

          <ButtonCopy
            onClick={handleCopy}
          >Copy Link</ButtonCopy>
        </BoxCopy>
      </Central>
    </styled.ALL>
  );
}

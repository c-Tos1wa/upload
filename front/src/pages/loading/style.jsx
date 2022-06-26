import styled from 'styled-components'

export const LOADing = styled.div`
  width: 400px;
  height: 143.6px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`

export const ProgressBar = styled.progress`

  ::-webkit-progress-bar{
    background-color: #F2F2F2;
    height: 6px;
    width: 341px;
    border-radius: 8px;
  }

  ::-webkit-progress-value{
    background: #2F80ED;
    border-radius: 8px;
    height: 6px;
  }

  //for mozilla firefox
    background-color: #F2F2F2;
    color: #2F80ED;
    border-radius: 8px;
    height: 6px;


`
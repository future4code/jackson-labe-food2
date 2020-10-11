import styled from 'styled-components'

export const ProfileData = styled.div`
  width: 22.5rem;
  /* padding: 1rem; */
  >span {
    margin: 1rem 0 0.5rem;
  }
  > p {
    width: 20rem;
    margin: 0;
    
  }
  > img {
    float: right;
    margin-right: 1rem
  }
`
export const Address = styled.div`
  width: 100%;
  padding: 1rem 0 0 1rem;
  height: 4.75rem;
  background-color: #eeeeee;
  > span {
    color: #b8b8b8;
  }
  > img {
    margin-right: 2rem;
    float: right;
  }
  > p {
    margin: 0.5rem 0 0 0;
  }
`
export const HistoryTitle = styled.div`
  width: 90%;
  margin: 1rem auto;
  padding-bottom: 0.5rem;
  border-bottom: 0.063rem solid black;
`
export const Status = styled.p`
  text-align: center;
`
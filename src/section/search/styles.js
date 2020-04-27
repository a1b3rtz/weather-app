import styled from 'styled-components'

export const SearchWrapper = styled.div`
  height: 700px;
  width: 550px;
  border-radius: 10px 0 0 10px;
  float: left;
`

export const FormWrapper = styled.div`
  width:340px;
  margin: 250px auto;
`

export const Input = styled.input.attrs({
  placeholder: 'city'
})`
  font-size: 17px;
  height: 40px;
  width: 300px;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 0 50px 0 20px;
  border: none;
  box-shadow: 5px 5px 100px rgba(0, 0, 255, 0.3);
  :focus {
    border: none;
    outline: none;
  }
`

export const SubmitButton = styled.button`
  margin-left: -30px;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  border: none;
  box-sizing: border-box;
  box-shadow: 5px 5px 50px rgba(0, 0, 255, 0.1);
  transition: all 0.3s ease-in-out;
  background-color: #04FCCC;
  cursor: pointer;
  :hover {
    background-color: #20D3AC;
  }
  :active {
    background-color: #0D9D7C;
    transition: all 0s ease-in-out;
  }
  :focus {
    border: 1px solid #0D9D7C;
    outline: none;
  }
`

export const ChangeLocation = styled.button`
  width: 150px;
  height: 50px;
  margin: 50px 80px;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 25px;
  outline: none;
  box-shadow: 5px 5px 50px rgba(0, 0, 255, 0.1);
  background-color: #04FCCC;
  cursor: pointer;
  :hover {
    background-color: #20D3AC;
  }
  :active {
    background-color: #0D9D7C;
    transition: all 0s ease-in-out;
  }
  :focus {
    border: 1px solid #0D9D7C;
    outline: none;
  }
`
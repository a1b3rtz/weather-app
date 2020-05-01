import styled from 'styled-components'

export const DisplayWrapper = styled.div`
  height: 700px;
  width: 650px;
  float: right;
  border-radius: 0 10px 10px 0;
  background: url(https://source.unsplash.com/random/1200x900?sky) center center / cover no-repeat;
  background-color: rgba(43, 36, 77, 0.5);
`

export const Title = styled.h1`
  font-size: 35px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  margin-top: 60px;
  :after {
    content: '____';
    display: block;
  }
`

export const Date = styled.div`
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  margin-top: 30px;
`

export const WeatherIcon = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-top: 60px;
`

export const Data = styled.div`
  font-size: 30px;
  color: #ffffff;
  text-align: center;
  margin-top: 30px;
  &.detail {
    font-size: 20px;
  }
`
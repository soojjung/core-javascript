import styled from "styled-components";
import { DatePicker, Select, Button, InputNumber } from "antd";

export const Wrapper = styled.div``;

export const BackgroundDiv = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(images/camping_car.png);
  background-repeat: no-repeat;
  background-size: contain;
  width: 840px;
  min-width: 840px;
`;

export const Box = styled.div`
  width: 440px;

  padding: 0 28px;
  margin-top: 28px;
  margin-bottom: 480px;

  background: rgb(255 255 255 / 60%);
  border-radius: 35px;
`;

export const Title = styled.h1`
  color: #703ca0;
  text-align: center;
  font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
    sans-serif;
`;

export const Section = styled.section``;

export const Heading3 = styled.h3``;

export const Div = styled.div``;

export const StyledSelect = styled(Select)`
  width: 160px;

  &:nth-of-type(1) {
    margin: 0 12px 0 0;
  }

  &:not(:nth-of-type(1)) {
    margin: 0 0 0 12px;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 180px;
  margin: 0 12px 0 0;
`;

export const StyledInputNumber = styled(InputNumber)`
  width: 60px;
  margin: 0;

  &:not(:nth-of-type(1)) {
    margin: 0 0 0 12px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledButton = styled(Button)``;

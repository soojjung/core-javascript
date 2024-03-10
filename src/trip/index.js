import React from "react";
import dayjs from "dayjs";
import { ArrowRightOutlined } from "@ant-design/icons";
import { COUNTRY_OPTIONS } from "./constants";
import {
  BackgroundDiv,
  Wrapper,
  Title,
  Section,
  Heading3,
  Div,
  ButtonWrapper,
  StyledSelect,
  StyledDatePicker,
  StyledInputNumber,
  StyledButton,
} from "./style";

// 현지 도착 시간 계산법
// 1. 출발지의 출발시간을 도착 나라의 시간대로 환산
// 2. 거기서 비행시간을 더한다.

const onChangeDate = (date, dateString) => {
  console.log(date, dateString);
};

const Trip = () => {
  const onChangeCountry = (value) => {};
  const onChangeTime = (time, timeString) => {
    console.log(time, timeString);
  };

  return (
    <BackgroundDiv>
      <Wrapper>
        <Title>Travel Plan</Title>

        <Section>
          <Heading3>Step1. 여행국가 선택하기</Heading3>
          <StyledSelect options={COUNTRY_OPTIONS} onChange={onChangeCountry} />
          <ArrowRightOutlined />
          <StyledSelect options={COUNTRY_OPTIONS} onChange={onChangeCountry} />
        </Section>

        <Section>
          <Heading3>Step2. 출발 날짜와 시간 선택하기</Heading3>
          <Div>
            출국 날짜 :{" "}
            <StyledDatePicker
              onChange={onChangeDate}
              style={{}}
              showTime
              format={"yyyy-mm-dd HH:mm"}
            />
          </Div>
        </Section>

        <Section>
          <Heading3>Step3. 비행 시간 입력하기</Heading3>
          <StyledInputNumber
            min={0}
            max={50}
            defaultValue={3}
            onChange={onChangeTime}
            name="hour"
          />
          시간
          <StyledInputNumber
            min={0}
            max={50}
            defaultValue={3}
            onChange={onChangeTime}
            name="minute"
          />
          분
        </Section>

        <ButtonWrapper>
          <StyledButton type="primary">계산하기</StyledButton>
        </ButtonWrapper>

        <Section>
          <Heading3>예상 현지 도착 시각: </Heading3>
        </Section>
      </Wrapper>
    </BackgroundDiv>
  );
};

export default Trip;

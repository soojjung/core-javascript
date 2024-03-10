import React, { useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
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

dayjs.extend(utc);
dayjs.extend(timezone);

const format = "YYYY-MM-DD HH:mm";

// 현지 도착 시간 계산법
// 1. 출발지의 출발시간에 비행시간을 더한다. (출발 국가 기준 도착 날짜 및 시간)
// 2. 도착 날짜를 해당 국가의 시간대로 환산

const Trip = () => {
  const [departureCountry, setDepartureCountry] = useState(
    COUNTRY_OPTIONS[0].value
  );
  const [arrivalCountry, setArrivalCountry] = useState("");
  const [departureDate, setDepartureDate] = useState(""); // 출국 날짜
  const [arrivalDate, setArrivalDate] = useState(""); // 도착 날짜 (출발 국가 기준)
  const [localArrivaleDate, setLocalArrivaleDate] = useState(""); // 도착 날짜 (현지 시간대)

  const onChangeDepartureCountry = (value) => {
    setDepartureCountry(value);
  };

  const onChangeArrivalCountry = (value) => {
    setArrivalCountry(value);
  };

  const onChangeDate = (date, dateString) => {
    const departureTz = COUNTRY_OPTIONS.find(
      (item) => item.value === departureCountry
    ).tz;
    setDepartureDate(date?.tz(departureTz).format(format));
  };

  const onChangeHour = (time) => {
    if (!dayjs(departureDate).isValid()) {
      return;
    }
    setArrivalDate(
      dayjs(departureDate).add(parseInt(time), "hour").format(format)
    );
  };

  const onChangeMinute = (time) => {
    if (!dayjs(departureDate).isValid()) {
      return;
    }
    setArrivalDate(
      dayjs(departureDate).add(parseInt(time), "minute").format(format)
    );
  };

  const isButtonDisabled = () => {
    let isDisabled = true;
    if (!!departureDate && !!arrivalDate) {
      isDisabled = false;
    }
    return isDisabled;
  };

  const onClickButton = (e) => {
    const arrivalTz = COUNTRY_OPTIONS.find(
      (item) => item.value === arrivalCountry
    )?.tz;

    setLocalArrivaleDate(dayjs(arrivalDate).tz(arrivalTz).format(format));
  };

  return (
    <BackgroundDiv>
      <Wrapper>
        <Title>Travel Plan</Title>

        <Section>
          <Heading3>Step1. 여행국가 선택하기</Heading3>
          <StyledSelect
            options={COUNTRY_OPTIONS}
            onChange={onChangeDepartureCountry}
            value={departureCountry}
          />
          <ArrowRightOutlined />
          <StyledSelect
            options={COUNTRY_OPTIONS}
            onChange={onChangeArrivalCountry}
            value={arrivalCountry}
          />
        </Section>

        <Section>
          <Heading3>Step2. 출발 날짜와 시간 선택하기</Heading3>
          <Div>
            출국 날짜 :{" "}
            <StyledDatePicker
              onChange={onChangeDate}
              showTime
              format={format}
            />
          </Div>
        </Section>

        <Section>
          <Heading3>Step3. 비행 시간 입력하기</Heading3>
          <StyledInputNumber
            min={0}
            defaultValue={0}
            onChange={onChangeHour}
            name="hour"
            disabled={!departureDate}
          />
          시간
          <StyledInputNumber
            min={0}
            max={59}
            defaultValue={0}
            onChange={onChangeMinute}
            name="minute"
            disabled={!departureDate}
          />
          분
        </Section>

        <ButtonWrapper>
          <StyledButton
            type="primary"
            disabled={isButtonDisabled()}
            onClick={onClickButton}
          >
            계산하기
          </StyledButton>
        </ButtonWrapper>

        <Section>
          <Heading3>예상 현지 도착 시각: {localArrivaleDate}</Heading3>
        </Section>
      </Wrapper>
    </BackgroundDiv>
  );
};

export default Trip;

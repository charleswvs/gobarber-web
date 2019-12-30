import React, { useState, useMemo, useEffect } from 'react';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import { utcToZonedTime } from 'date-fns-tz';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isEqual,
  isBefore,
  parseISO,
  setMilliseconds,
} from 'date-fns';
import api from '~/services/api';

import { Container, Time } from './styles';

// TODO: make range inside the API
const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(() => format(date, 'MMMM d'), [date]);

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date },
      });

      // console.tron.log(response);

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const filteredData = range.map(hour => {
        const checkDate = setMilliseconds(
          setSeconds(setMinutes(setHours(date, hour), 0), 0),
          0
        );
        const comparableDate = utcToZonedTime(checkDate, timezone);

        // console.tron.log(response.data.appointments);
        return {
          time: `${hour}:00h`,
          past: isBefore(comparableDate, new Date()),
          appointment: response.data.appointments.find(
            a => isEqual(parseISO(a.date), comparableDate) && !a.cancelled_at
          ),
        };
      });
      console.tron.log(filteredData);
      setSchedule(filteredData);
    }

    loadSchedule();
  }, [date]); // eslint-disable-line
  function handlePrevDay() {
    setDate(subDays(date, 1));
  }
  function handleNextDay() {
    setDate(addDays(date, 1));
  }
  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Open period'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}

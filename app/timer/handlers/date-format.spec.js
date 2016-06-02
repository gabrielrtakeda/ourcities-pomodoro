import expect                 from 'expect'
import * as TimeConstants     from './../constants/time'
import * as DateFormatHandler from './date-format'

describe('app/timer/handlers/date-format', () => {
  describe('mmss', () => {
    it('should return a string with format `25:00`', () => {
      const timestamp = 25 * TimeConstants.MINUTE
      expect(DateFormatHandler.mmss(timestamp)).toEqual('25:00')
    })
    it('should return a string with format `25:00` passing String parameter', () => {
      const timestamp = 25 * TimeConstants.MINUTE
      expect(DateFormatHandler.mmss(String(timestamp))).toEqual('25:00')
    })
    it('should return a string with format `00:00` passing empty string parameter', () => {
      const timestamp = 25 * TimeConstants.MINUTE
      expect(DateFormatHandler.mmss('')).toEqual('00:00')
    })
  })

  describe('pad', () => {
    it('should return a string with format `00001`', () => {
      const beforeValue = 1
      expect(
        DateFormatHandler.pad(beforeValue, 5)
      ).toEqual('00001')
    })
    it('should return a string with format `09`', () => {
      const beforeValue = 9
      expect(
        DateFormatHandler.pad(beforeValue)
      ).toEqual('09')
    })
    it('should return a string with format `199`', () => {
      const beforeValue = 199
      expect(
        DateFormatHandler.pad(beforeValue)
      ).toEqual('199')
    })
    it('should return a string with format ----199`', () => {
      const beforeValue = 199
      expect(
        DateFormatHandler.pad(beforeValue, 7, '-')
      ).toEqual('----199')
    })
  })
})

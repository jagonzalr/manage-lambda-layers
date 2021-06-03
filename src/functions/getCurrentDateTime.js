import moment from 'moment'

export const handler = async event => {
  const currentDateTime = moment().format('LLLL')
  
  return {
    statusCode: 200,
    body: JSON.stringify({ currentDateTime }),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Cache-Control': 'no-cache; no-store',
      'Content-Type': 'application/json',
      'Content-Security-Policy': 'default-src self',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'DENY'
    }
  }
}

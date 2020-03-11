import React from 'react'

export const Edit = props => (
  <svg
    width='18'
    height='19'
    viewBox='0 0 18 19'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2 0.392578C0.89 0.392578 0 1.28258 0 2.39258V16.3926C0 16.923 0.210714 17.4317 0.585786 17.8068C0.960859 18.1819 1.46957 18.3926 2 18.3926H16C16.5304 18.3926 17.0391 18.1819 17.4142 17.8068C17.7893 17.4317 18 16.923 18 16.3926V9.39258H16V16.3926H2V2.39258H9V0.392578H2ZM14.78 1.39258C14.6 1.3941 14.4278 1.46587 14.3 1.59258L13.08 2.80258L15.58 5.30258L16.8 4.09258C17.06 3.83258 17.06 3.39258 16.8 3.14258L15.25 1.59258C15.12 1.46258 14.95 1.39258 14.78 1.39258ZM12.37 3.51258L5 10.8926V13.3926H7.5L14.87 6.01258L12.37 3.51258Z'
      fill={props.color ? props.color : '#517E92'}
    />
  </svg>
)

export const Address = props => (
  <svg
    width='24'
    height='20'
    viewBox='0 0 24 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0 19.6426V8.64258L7.5 3.64258L15 8.64258V19.6426H10V12.6426H5V19.6426H0ZM24 0.642578V19.6426H17V7.57258L16 6.91258V4.64258H14V5.57258L10 2.91258V0.642578H24ZM21 12.6426H19V14.6426H21V12.6426ZM21 8.64258H19V10.6426H21V8.64258ZM21 4.64258H19V6.64258H21V4.64258Z'
      fill={props.color ? props.color : '#517E92'}
    />
  </svg>
)

export const Email = props => (
  <svg
    width='21'
    height='17'
    viewBox='0 0 21 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M18.2016 4.4043L10.2016 9.4043L2.2016 4.4043V2.4043L10.2016 7.4043L18.2016 2.4043V4.4043ZM18.2016 0.404297H2.2016C1.0916 0.404297 0.201599 1.2943 0.201599 2.4043V14.4043C0.201599 14.9347 0.412313 15.4434 0.787385 15.8185C1.16246 16.1936 1.67117 16.4043 2.2016 16.4043H18.2016C18.732 16.4043 19.2407 16.1936 19.6158 15.8185C19.9909 15.4434 20.2016 14.9347 20.2016 14.4043V2.4043C20.2016 1.87386 19.9909 1.36516 19.6158 0.990083C19.2407 0.61501 18.732 0.404297 18.2016 0.404297Z'
      fill={props.color ? props.color : '#517E92'}
    />
  </svg>
)

export const Phone = props => (
  <svg
    width='14'
    height='23'
    viewBox='0 0 14 23'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 18.4043H2V4.4043H12V18.4043ZM12 0.404297H2C0.89 0.404297 0 1.2943 0 2.4043V20.4043C0 20.9347 0.210714 21.4434 0.585786 21.8185C0.960859 22.1936 1.46957 22.4043 2 22.4043H12C12.5304 22.4043 13.0391 22.1936 13.4142 21.8185C13.7893 21.4434 14 20.9347 14 20.4043V2.4043C14 1.87386 13.7893 1.36516 13.4142 0.990083C13.0391 0.615011 12.5304 0.404297 12 0.404297Z'
      fill={props.color ? props.color : '#517E92'}
    />
  </svg>
)

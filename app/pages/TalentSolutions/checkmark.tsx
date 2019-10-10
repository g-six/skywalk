import * as React from 'react'

export const Checkmark: React.FunctionComponent = () => (
  <i className="checkmark is-circle has-background-primary">
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.115385 4.96406C0.0576923 4.85156 0 4.73906 0 4.62656C0 4.51406 0.0576923 4.40156 0.115385 4.28906L0.75 3.67031C0.923077 3.50156 1.21154 3.50156 1.38462 3.67031L1.44231 3.72656L4.03846 6.42656C4.15385 6.53906 4.26923 6.53906 4.38462 6.42656L10.5 0.126562H10.5577C10.7308 -0.0421875 11.0192 -0.0421875 11.1923 0.126562L11.8269 0.745312C12 0.914062 12 1.19531 11.8269 1.36406L4.5 8.90156C4.38462 8.95781 4.26923 9.01406 4.15385 9.01406C4.03846 9.01406 3.92308 8.95781 3.80769 8.90156L0.230769 5.07656L0.115385 4.96406Z" />
    </svg>
  </i>
)

export default Checkmark

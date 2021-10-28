import React from 'react'
import styles from '../src/styles/Home.module.css'
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <React.Fragment>
      <div style={{ padding: '10px' }}>
        <div className={styles.container}></div>
      </div>
    </React.Fragment>
  )
}

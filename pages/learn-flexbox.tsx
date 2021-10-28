import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded'
import WifiIcon from '@material-ui/icons/Wifi'
import React from 'react'
import styles from '../src/styles/Home.module.css'
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <React.Fragment>
      <div style={{ padding: '10px' }}>
        <div className={styles.container}></div>
        <div className={styles.cardList}>
          <div className={styles.cardItem}>
            <img
              src="https://images.unsplash.com/photo-1542332213-31f87348057f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              alt="hinh-card"
              className={styles.cardImage}
            ></img>
            <div className={styles.cardContent}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>
                  2020 World Champs Gaming Warzone
                </h3>
                <div className={styles.cardUser}>
                  <img
                    src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    alt="hinh-avatar"
                    className={styles.cardUserAvatar}
                  />
                  <div className={styles.cardUserInfo}>
                    <div className={styles.cardUserTop}>
                      <h4 className={styles.cardUserName}>Trung Đức</h4>
                      <CheckCircleRoundedIcon
                        style={{ color: 'green' }}
                      ></CheckCircleRoundedIcon>
                    </div>
                    <div className={styles.cardUserGame}>Call of Duty</div>
                  </div>
                </div>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.cardLive}>
                  <WifiIcon></WifiIcon>
                  <span>Live</span>
                </div>
                <div className={styles.cardWatching}>4.2k watching</div>
              </div>
            </div>
          </div>
          <div className={styles.cardItem}>
            <img
              src="https://images.unsplash.com/photo-1542332213-31f87348057f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              alt="hinh-card"
              className={styles.cardImage}
            ></img>
            <div className={styles.cardContent}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>
                  2020 World Champs Gaming Warzone 2020 World Champs Gaming Warzone
                  2020 World Champs Gaming Warzone
                </h3>
                <div className={styles.cardUser}>
                  <img
                    src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    alt="hinh-avatar"
                    className={styles.cardUserAvatar}
                  />
                  <div className={styles.cardUserInfo}>
                    <div className={styles.cardUserTop}>
                      <h4 className={styles.cardUserName}>Trung Đức</h4>
                      <CheckCircleRoundedIcon
                        style={{ color: 'green' }}
                      ></CheckCircleRoundedIcon>
                    </div>
                    <div className={styles.cardUserGame}>Call of Duty</div>
                  </div>
                </div>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.cardLive}>
                  <WifiIcon></WifiIcon>
                  <span>Live</span>
                </div>
                <div className={styles.cardWatching}>4.2k watching</div>
              </div>
            </div>
          </div>
          <div className={styles.cardItem}>
            <img
              src="https://images.unsplash.com/photo-1542332213-31f87348057f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              alt="hinh-card"
              className={styles.cardImage}
            ></img>
            <div className={styles.cardContent}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>
                  2020 World Champs Gaming Warzone
                </h3>
                <div className={styles.cardUser}>
                  <img
                    src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    alt="hinh-avatar"
                    className={styles.cardUserAvatar}
                  />
                  <div className={styles.cardUserInfo}>
                    <div className={styles.cardUserTop}>
                      <h4 className={styles.cardUserName}>Trung Đức</h4>
                      <CheckCircleRoundedIcon
                        style={{ color: 'green' }}
                      ></CheckCircleRoundedIcon>
                    </div>
                    <div className={styles.cardUserGame}>Call of Duty</div>
                  </div>
                </div>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.cardLive}>
                  <WifiIcon></WifiIcon>
                  <span>Live</span>
                </div>
                <div className={styles.cardWatching}>4.2k watching</div>
              </div>
            </div>
          </div>
          <div className={styles.cardItem}>
            <img
              src="https://images.unsplash.com/photo-1542332213-31f87348057f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              alt="hinh-card"
              className={styles.cardImage}
            ></img>
            <div className={styles.cardContent}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>
                  2020 World Champs Gaming Warzone
                </h3>
                <div className={styles.cardUser}>
                  <img
                    src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    alt="hinh-avatar"
                    className={styles.cardUserAvatar}
                  />
                  <div className={styles.cardUserInfo}>
                    <div className={styles.cardUserTop}>
                      <h4 className={styles.cardUserName}>Trung Đức</h4>
                      <CheckCircleRoundedIcon
                        style={{ color: 'green' }}
                      ></CheckCircleRoundedIcon>
                    </div>
                    <div className={styles.cardUserGame}>Call of Duty</div>
                  </div>
                </div>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.cardLive}>
                  <WifiIcon></WifiIcon>
                  <span>Live</span>
                </div>
                <div className={styles.cardWatching}>4.2k watching</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

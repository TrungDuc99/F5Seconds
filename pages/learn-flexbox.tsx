import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded'
import WifiIcon from '@material-ui/icons/Wifi'
import React from 'react'
import styles from '../src/styles/Home.module.css'
export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <React.Fragment>
      <div style={{ padding: '10px' }}>
        <div className={styles.cardList}>
          <div className="card-item">
            <img
              src="https://images.unsplash.com/photo-1542332213-31f87348057f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              alt="hinh-card"
              className="card-image"
            ></img>
            <div className="card-content">
              <div className="card-top">
                <h3 className="card-title">2020 World Champs Gaming Warzone</h3>
                <div className="card-user">
                  <img
                    src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    alt="hinh-avatar"
                    className="card-user-avatar"
                  />
                  <div className="card-user-info">
                    <div className="card-user-top">
                      <h4 className="card-user-name">Trung Đức</h4>
                      <CheckCircleRoundedIcon
                        style={{ color: 'green' }}
                      ></CheckCircleRoundedIcon>
                    </div>
                    <div className="card-user-game">Call of Duty</div>
                  </div>
                </div>
              </div>
              <div className="card-bottom">
                <div className="card-live">
                  <WifiIcon></WifiIcon>
                  <span>Live</span>
                </div>
                <div className="card-watching">4.2k watching</div>
              </div>
            </div>
          </div>
          <div className="card-item">
            <img
              src="https://images.unsplash.com/photo-1542332213-31f87348057f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              alt="hinh-card"
              className="card-image"
            ></img>
            <div className="card-content">
              <div className="card-top">
                <h3 className="card-title">2020 World Champs Gaming Warzone</h3>
                <div className="card-user">
                  <img
                    src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    alt="hinh-avatar"
                    className="card-user-avatar"
                  />
                  <div className="card-user-info">
                    <div className="card-user-top">
                      <h4 className="card-user-name">Trung Đức</h4>
                      <CheckCircleRoundedIcon
                        style={{ color: 'green' }}
                      ></CheckCircleRoundedIcon>
                    </div>
                    <div className="card-user-game">Call of Duty</div>
                  </div>
                </div>
              </div>
              <div className="card-bottom">
                <div className="card-live">
                  <WifiIcon></WifiIcon>
                  <span>Live</span>
                </div>
                <div className="card-watching">4.2k watching</div>
              </div>
            </div>
          </div>
          <div className="card-item">
            <img
              src="https://images.unsplash.com/photo-1542332213-31f87348057f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              alt="hinh-card"
              className="card-image"
            ></img>
            <div className="card-content">
              <div className="card-top">
                <h3 className="card-title">2020 World Champs Gaming Warzone</h3>
                <div className="card-user">
                  <img
                    src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    alt="hinh-avatar"
                    className="card-user-avatar"
                  />
                  <div className="card-user-info">
                    <div className="card-user-top">
                      <h4 className="card-user-name">Trung Đức</h4>
                      <CheckCircleRoundedIcon
                        style={{ color: 'green' }}
                      ></CheckCircleRoundedIcon>
                    </div>
                    <div className="card-user-game">Call of Duty</div>
                  </div>
                </div>
              </div>
              <div className="card-bottom">
                <div className="card-live">
                  <WifiIcon></WifiIcon>
                  <span>Live</span>
                </div>
                <div className="card-watching">4.2k watching</div>
              </div>
            </div>
          </div>
          <div className="card-item">
            <img
              src="https://images.unsplash.com/photo-1542332213-31f87348057f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              alt="hinh-card"
              className="card-image"
            ></img>
            <div className="card-content">
              <div className="card-top">
                <h3 className="card-title">2020 World Champs Gaming Warzone</h3>
                <div className="card-user">
                  <img
                    src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    alt="hinh-avatar"
                    className="card-user-avatar"
                  />
                  <div className="card-user-info">
                    <div className="card-user-top">
                      <h4 className="card-user-name">Trung Đức</h4>
                      <CheckCircleRoundedIcon
                        style={{ color: 'green' }}
                      ></CheckCircleRoundedIcon>
                    </div>
                    <div className="card-user-game">Call of Duty</div>
                  </div>
                </div>
              </div>
              <div className="card-bottom">
                <div className="card-live">
                  <WifiIcon></WifiIcon>
                  <span>Live</span>
                </div>
                <div className="card-watching">4.2k watching</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

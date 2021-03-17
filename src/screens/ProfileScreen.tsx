import React, { useState, useRef, useEffect, PureComponent } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StackNavigationProps, AppRoutes } from '../navigation/types'
import { Video, AVPlaybackStatus } from 'expo-av'
import firebase from '../firebase/firebaseConfig'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserLogout } from '../redux/user/actions'
import { RootState } from '../redux'

class VideoContainer extends PureComponent {
  private _video: Video | null | undefined;
  private _playbackInstance: Video | null | undefined;

  async _loadNewPlaybackInstance() {
    try {
      if (this._playbackInstance != null) {
        await this._playbackInstance.unloadAsync();
        // this._playbackInstance.setOnPlaybackStatusUpdate(null);
        this._playbackInstance = null;
      }

      const source = require('../../assets/exercises/18.mp4')
      const initialStatus = {
        shouldPlay: true,
        volume: 1,
        isLooping: true
      }

      await this._video?.loadAsync(source, initialStatus)
      this._playbackInstance = this._video
      const status = await this._video?.getStatusAsync()
    }
    catch (err) {

    }
  }

  _mountVideo = (component: Video) => {
    this._video = component
    this._loadNewPlaybackInstance()
  }

  _onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      this.setState({
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
        rate: status.rate,
        muted: status.isMuted,
        volume: status.volume,
        shouldCorrectPitch: status.shouldCorrectPitch
      })
    } else {
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Video
          ref={this._mountVideo}
          style={{ width: 300, height: 250, backgroundColor: 'lightblue' }}
          onPlaybackStatusUpdate={this._onPlaybackStatusUpdate}
        />
      </View>
    )
  }
}


const HomeScreen = ({ navigation }: StackNavigationProps<AppRoutes, 'Profile'>) => {
  // const videoRef = useRef(null)
  // const [status, setStatus] = useState({})

  // useEffect(() => {
  //   const prepareVideo = async () => {
  //     videoRef.current
  //   }

  //   prepareVideo()
  // })

  const selectorUser = (state: RootState) => state.user
  const user = useSelector(selectorUser)
  const dispatch = useDispatch()
  console.log(user)

  return (
    <View style={styles.container}>
      <VideoContainer />

      <Button
        title="Go to Workout"
        onPress={() => navigation.navigate('Workout')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="SIGN OUT"
        onPress={() => dispatch(fetchUserLogout())}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})

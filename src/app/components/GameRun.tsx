import React, { ReactNode, useState } from 'react'
import { Game } from '../page'
import Timer from './Timer'
import TeamScorer from './TeamScorer'



type Props = {
    gameSetup: Game;
    setCurrentInterval: React.Dispatch<React.SetStateAction<number>>;
    currentInterval: Number
}

const GameRun = ({gameSetup, setCurrentInterval, currentInterval}: Props) => {
    if(gameSetup){
      const lengthOfPeriod = gameSetup.length * 60;
      const time = new Date();
      const [secondsLeft, setSecondsLeft] = useState<number>(0)
      time.setSeconds(time.getSeconds() + lengthOfPeriod);    

    return (
    <div className='w-full pb-20'>
        <h1 className='text-center font-medium text-[40px]'>Q{currentInterval}</h1>
        <Timer className="bg-black" expiryTimestamp={time} setCurrentInterval={setCurrentInterval} currentInterval={currentInterval} gameSetup={gameSetup} setSecondsLeft={setSecondsLeft}/>
        <TeamScorer gameSetup={gameSetup} secondsLeft={secondsLeft} currentInterval={currentInterval}/>
    </div>
  )
    }
}

export default GameRun
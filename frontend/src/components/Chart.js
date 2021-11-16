import { VictoryLine, VictoryScatter, VictoryChart } from 'victory'
import MmrPoint from "./MmrPoint";
import { Flex } from '@chakra-ui/react'

const Chart = ({scores, tierAverage}) => {
    if(scores){
        const scoreData = scores.map(score => {
            const date = new Date(score.timestamp * 1000)
            return {mmr: score.avg, date: date}
        })

        return (
            <Flex direction='column' width='50%' backgroundColor='white'>
                {/*<ul>
                    {scores.map(score => {
                        const date = new Date(score.timestamp * 1000)
                        return <li key={score.timestamp}>{score.avg} Date: {date.getMonth() + 1}/{date.getDate()}</li>
                    })}
                </ul>
                */}
                    <VictoryChart>
                        <VictoryLine data={scoreData} x="date" y="mmr"/>
                        <VictoryScatter data={scoreData} dataComponent={<MmrPoint tierAverage={tierAverage}/>} x="date" y="mmr"/>
                    </VictoryChart>
            </Flex>
        )
    } else {
        return (
            <div>Loading</div>
        )
    }
}

export default Chart
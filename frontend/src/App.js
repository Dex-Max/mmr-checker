import {useState, useEffect} from 'react'
import mmrService from './services/mmr'
import Data from './components/Data'
import Search from './components/Search'
import Chart from './components/Chart'
import Header from './components/Header'
import { Flex } from '@chakra-ui/react'

const App = () => {
    const [searchName, setSearchName] = useState('');
    const [rankedData, setRankedData] = useState([]);

    const data = {"ranked":{"avg":1997,"err":24,"warn":false,"summary":"Significantly <b>above Platinum IV</b><br><br><span class=\"symbol--micro\"></span>MMR resembles the <b>top 18%</b> of summoners in Platinum IV","closestRank":"Platinum IV","percentile":82,"tierData":[{"name":"Gold I","avg":1832,"min":1793,"max":1961},{"name":"Platinum IV","avg":1945,"min":1870,"max":2001},{"name":"Platinum III","avg":2055,"min":2015,"max":2109}],"timestamp":1636744331,"historical":[{"avg":1995,"err":24,"warn":false,"timestamp":1636675200},{"avg":1999,"err":22,"warn":false,"timestamp":1636588800},{"avg":2021,"err":17,"warn":false,"timestamp":1636416000},{"avg":2025,"err":24,"warn":false,"timestamp":1636329600},{"avg":2063,"err":22,"warn":false,"timestamp":1636243200},{"avg":2098,"err":9,"warn":false,"timestamp":1636156800},{"avg":2063,"err":18,"warn":false,"timestamp":1636070400},{"avg":2015,"err":24,"warn":false,"timestamp":1635984000},{"avg":1943,"err":21,"warn":false,"timestamp":1635897600},{"avg":1952,"err":21,"warn":false,"timestamp":1635811200},{"avg":1996,"err":29,"warn":false,"timestamp":1635724800},{"avg":2060,"err":14,"warn":false,"timestamp":1635552000},{"avg":2003,"err":18,"warn":false,"timestamp":1635465600},{"avg":2005,"err":43,"warn":false,"timestamp":1635292800},{"avg":1996,"err":10,"warn":false,"timestamp":1635206400},{"avg":2009,"err":15,"warn":false,"timestamp":1635120000},{"avg":1993,"err":19,"warn":false,"timestamp":1635033600},{"avg":2004,"err":16,"warn":false,"timestamp":1634947200},{"avg":2031,"err":30,"warn":false,"timestamp":1634860800},{"avg":2037,"err":14,"warn":false,"timestamp":1634774400},{"avg":2015,"err":25,"warn":false,"timestamp":1634688000},{"avg":1945,"err":16,"warn":false,"timestamp":1634601600},{"avg":1960,"err":32,"warn":false,"timestamp":1634515200},{"avg":1989,"err":25,"warn":false,"timestamp":1634428800},{"avg":2000,"err":44,"warn":false,"timestamp":1634342400}],"historicalTierData":[{"name":"Gold I","avg":1832},{"name":"Platinum IV","avg":1945},{"name":"Platinum III","avg":2055},{"name":"Platinum II","avg":2154}]},"normal":{"avg":null,"err":99,"warn":true,"closestRank":null,"percentile":null,"timestamp":null,"historical":[]},"ARAM":{"avg":null,"err":99,"warn":true,"closestRank":null,"percentile":null,"timestamp":null,"historical":[]}}

    const getBackgroundColor = () => {
        const tier = rankedData.closestRank;

        if(!tier) {
            return 'white'
        } else if(tier.includes('Bronze')){
            return '#d6c4a3'
        } else if (tier.includes('Silver')){
            return '#e8e8e8'
        } else if (tier.includes('Gold')){
            return '#ffdea1'
        } else if(tier.includes('Platinum')){
            return '#9bcfc8'
        } else if(tier.includes('Diamond')){
            return '#87ceed'
        } else if(tier.includes('Master')){
            return '#d791e3'
        } else if(tier.includes('Grandmaster')){
            return '#f2a0ad'
        } else if(tier.includes('Challenger')){
            return '#f7dfb2'
        }
    }

    const changeSearch = (e) => {
        setSearchName(e.target.value)
    }

    const submitSearch = (e) => {
        e.preventDefault();
        mmrService.getMmr(searchName)
            .then(data => {
                setRankedData(data.ranked);
            })
    }

    /*
    useEffect(() =>{
        setRankedData(data.ranked)
    }, [])

     */

    return (
        <Flex direction='column' align='center' height='100vh' backgroundColor={getBackgroundColor()} transition='0.5s linear'>
            <Header />
            <Search searchName={searchName} changeSearch={changeSearch} submitSearch={submitSearch}/>
            <Data data={rankedData} />
            <Chart scores={rankedData.historical} tierAverage={rankedData.historicalTierData}/>
        </Flex>
    )
}

export default App;

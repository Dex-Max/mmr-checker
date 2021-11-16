const MmrPoint = ({x, y, datum, tierAverage}) => {
    const getColor = (mmr) => {
        const sortedTiers = tierAverage.sort((t1, t2) => {
            if(t1.avg > t2.avg){
                return 1;
            } else {
                return -1;
            }
        })

        const tier = sortedTiers.reduce(function(prev, curr) {
            return (Math.abs(curr.avg - mmr) < Math.abs(prev.avg - mmr) ? curr : prev);
        }).name

        if(tier.includes('Bronze')){
            return '#685a40'
        } else if (tier.includes('Silver')){
            return '#9fa3af'
        } else if (tier.includes('Gold')){
            return '#e2a83e'
        } else if(tier.includes('Platinum')){
            return '#35b1a2'
        } else if(tier.includes('Diamond')){
            return '#2f8bb3'
        } else if(tier.includes('Master')){
            return '#a13ab3'
        } else if(tier.includes('Grandmaster')){
            return '#e1324e'
        } else if(tier.includes('Challenger')){
            return '#efc679'
        }
    }
    return (
        <svg>
            <circle cx={x} cy={y} r='5' fill={getColor(datum.mmr)} />
        </svg>
    );
};

export default MmrPoint
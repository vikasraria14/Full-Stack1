import StatisticLine from "./StatisticLine";





const Statistic=({good ,neutral,bad,all,average,positive})=>
{

    


    return(
        <>
            <h1>statistics</h1>
            { all===0?'no feedback given':
                <table>
                    <tbody>
                        <StatisticLine text={'good'} value={good}/>
                        <StatisticLine text={'neutral'} value={neutral}/>
                        <StatisticLine text={'bad'} value={bad}/>
                        <StatisticLine text={'all'} value={all}/>
                        <StatisticLine text={'average'} value={average}/>
                        <StatisticLine text={'positive'} value={positive}/>
                    </tbody>
                </table>
            }
            
        </>
    )
}
export default Statistic;
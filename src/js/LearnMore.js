import React from "react";

function LearnMore() {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <>
      <hr></hr>

      <div class="head">
        <div class="left">
          <div class="photos">
            <img src="https://aximedia.s3.amazonaws.com/rebrand-prod/fkghm0fv/long-short-positions-forex-market.png" alt="" ></img>
            <br></br>
            <img src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/How-to-read-forex-charts-GBPUSD-chart_LRG.png" alt="" ></img>
          </div>
        </div>
        <div class="right">
          <h1>What is Forex ?</h1>
          <p>Forex trading is the process of speculating on currency prices to potentially make a profit. Currencies are traded in pairs, so by exchanging one currency for another, a trader is speculating on whether one currency will rise or fall in value against the other.</p>
          <br />
          <span>Often perceived as an easy moneymaking career, forex trading is actually quite difficult, though highly engaging. The foreign exchange market is the largest and most liquid market in the world, but trading currencies is very different from trading stocks or commodities.</span>
          {showMore ? <><p>There are several reasons forex can be an attractive market, even for beginners who have little experience. The forex market is accessible, requiring only a small deposit of funds for traders to get involved. </p></> : null}
          <br />
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Continue Reading"}
          </button>
        </div>
      </div>

    </>
  )
}

export default LearnMore;
import React from 'react';

const TempCard = () => {
  return (
    <div>
      <Card
        statsIcon="fa fa-history"
        onclick={this.handleSetCycle}
        title="차트 이름"
        category="상세 설명"
        stats="Updated 10 minutes ago"
        content={
          <div id="chartPreferences" className="ct-chart">
            <ChartistGraph
              data={dataPie}
              type="Pie"
              options={optionDonutPie}
              listener={drawListenerPie}
            />
          </div>
        }
        legend={<div className="legend">{this.createLegend(legendPie)}</div>}
      />
      <Card
        statsIcon="fa fa-history"
        id="chartHours"
        title="차트 이름"
        category="상세 설명"
        stats="Updated 3 minutes ago"
        content={
          <div className="ct-chart">
            <ChartistGraph
              data={dataLine}
              type="Line"
              options={optionsLine}
              responsiveOptions={responsiveLine}
              listener={drawListenerLine}
            />
          </div>
        }
        legend={<div className="legend">{this.createLegend(legendLine)}</div>}
      />
      <Card
        statsIcon="fa fa-history"
        id="chartHours"
        title="차트 이름"
        category="상세 설명"
        stats="Updated 3 minutes ago"
        content={
          <div className="ct-chart">
            <ChartistGraph
              data={dataLine}
              type="Bar"
              options={optionsLine}
              responsiveOptions={responsiveLine}
              listener={drawListenerBar}
            />
          </div>
        }
        legend={<div className="legend">{this.createLegend(legendLine)}</div>}
      />
      <Card
        statsIcon="fa fa-history"
        id="chartHours"
        title="차트 이름"
        category="상세 설명"
        stats="Updated 3 minutes ago"
        content={
          <div className="ct-chart">
            <ChartistGraph
              data={dataLine}
              type="Line"
              options={optionsArea}
              responsiveOptions={responsiveLine}
              listener={drawListenerLine}
            />
          </div>
        }
        legend={<div className="legend">{this.createLegend(legendLine)}</div>}
      />
      <Card
        statsIcon="fa fa-history"
        id="chartHours"
        title="차트 이름"
        category="상세 설명"
        stats="Updated 3 minutes ago"
        content={
          <div className="ct-chart">
            <ChartistGraph
              data={dataBar}
              type="Bar"
              options={optionsBar}
              responsiveOptions={responsiveBar}
              listener={drawListenerBar}
            />
          </div>
        }
        legend={<div className="legend">{this.createLegend(legendBar)}</div>}
      />
      <Card
        statsIcon="fa fa-history"
        title="차트 이름"
        category="상세 설명"
        stats="Updated 10 minutes ago"
        content={
          <div id="chartPreferences" className="ct-chart">
            <ChartistGraph
              data={dataPie}
              type="Pie"
              options={optionSimplePie}
              listener={drawListenerPie}
            />
          </div>
        }
        legend={<div className="legend">{this.createLegend(legendPie)}</div>}
      />
    </div>
  );
};

export default TempCard;

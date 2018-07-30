export const barUpdateFunction = (
  graphDataList,
  baseType,
  dataType,
  cycleTime
) => {
  console.log('funccc', graphDataList, baseType, dataType);
  let names = [['X: ' + baseType.title], ['Y: ' + dataType]];
  let types = ['info', 'danger', 'warning', 'grape', 'grass', 'sea'];

  let tempArr = [];

  const labels = graphDataList.map(info => {
    tempArr.push(info.y);
    return info.x.split(' ~ ')[1];
  });

  // 1. 각각 x 값마다 색상 다르게 그래프 그리기.
  const series = tempArr.map((arr, index) => {
    let newArr = [];
    for (let j = 0; j < tempArr.length; j++) {
      newArr.push(index === j ? arr : 0);
    }
    return newArr;
  });
  return {
    cycleTime,
    dataBar: {
      labels,
      series
    },
    legendBar: {
      names: names,
      types: types
    },
    minutes: 0
  };
};
